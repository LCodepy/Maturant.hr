import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    username: string | null;
    isPaid: boolean;
  }
  interface Session {
    user: User & {
      username: string
    }
    token: {
      username: string
    }
  }
}