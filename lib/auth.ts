import { NextAuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";

import { db } from "@/db/connection";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { session } from "./session";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      version: "2.0", // opt-in to Twitter OAuth 2.0
    }),
  ],
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error("No profile");
      }
      await db
        .insert(users)
        .values({
          id: crypto.randomUUID(),
          email: profile.email,
          username: profile.name || crypto.randomUUID(),
          image: profile.image,
        })
        .onDuplicateKeyUpdate({ set: { username: profile.name, image: profile.image } });
      return true;
    },
    session,
    jwt: async ({ user, token, account, profile }) => {
      if (profile) {
        const userExist = await db
          .select()
          .from(users)
          .where(eq(users.email, profile.email as string));
        if (!userExist) {
          throw new Error("No user found");
        }
        token.id = userExist[0].id;
      }
      return token;
    },
  },
};
