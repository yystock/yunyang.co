import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "yunyangco",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        environment: {
          DATABASE_URL: process.env.DATABASE_URL!,
          DATABASE_HOST: process.env.DATABASE_HOST!,
          DATABASE_USERNAME: process.env.DATABASE_USERNAME!,
          DATABASE_PASSWORD: process.env.DATABASE_PASSWORD!,
          GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID!,
          GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET!,
          NEXTAUTH_URL: process.env.NEXTAUTH_URL!,
          NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET!,
          UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL!,
          UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN!,
          RESEND_API_KEY: process.env.RESEND_API_KEY!,
          MY_EMAIL: process.env.MY_EMAIL!,
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
