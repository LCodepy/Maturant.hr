import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import { db } from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60
  },
  pages: {
    signIn: "/sign-in",
    error: "/sign-in"
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@mail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        
        const existingUser = await db.user.findUnique({
          where: {email: credentials.email}
        });
        if (!existingUser) return null;
        
        if (existingUser.password) {
          const passwordMatch = await compare(credentials.password, existingUser.password);
          if (!passwordMatch) return null;
        }

        return {
          id: existingUser.id + "",
          username: existingUser.username,
          email: existingUser.email,
          isPaid: existingUser.isPaid
        }
      }
    })
  ],
  callbacks: {
    async jwt({token, user, account, trigger, session}) {
      if (user) {
        return {
          ...token,
          username: user.username
        };
      }
      return token;
    },
    async session({session, token}) {
      const user = await db.user.findUnique({
        where: {email: session.user.email as string},
        select: {isPaid: true}
      });

      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
          isPaid: user?.isPaid || false
        }
      };
    },
    async signIn({user, account, profile}) {
      if (account && account.provider === "google" && profile && "email_verified" in profile && !profile.email_verified) {
        return false;
      }
      return true;
    }
  }
}