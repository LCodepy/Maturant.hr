import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    username: string | null;
    paidLectures: string[];
  }
  interface Session {
    user: User & {
      username: string;
      paidLectures: string[];
    };
    token: {
      username: string;
    };
  }
}
