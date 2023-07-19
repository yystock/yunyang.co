import { getServerSession, User } from "next-auth";

export const session = async ({ session, token }: any) => {
  console.log("seesion route:");
  session.user.id = token.id;
  session.user.username = token.username as string;

  return session;
};

export async function getCurrentUser() {
  const authUserSession = await getServerSession({
    callbacks: {
      session,
    },
  });

  if (!authUserSession) return null;
  return authUserSession.user;
}
