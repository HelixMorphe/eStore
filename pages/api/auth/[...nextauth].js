import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { redirect } from "next/dist/server/api-utils";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "998928330941-g2loc87ng130rao3fpheebjtp4upc3p0.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
  secret: "this is a secrett",
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
});
