import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import { db } from "./db";
import { compare } from "bcrypt";
import { getUserById } from "./userUtils";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 // Sets JWT token duration to 30 days
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
        /* This function handles wether user with these credentials can sign in */

        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        
        // Tries to find a user with the given email address
        const existingUser = await db.user.findUnique({
          where: {email: credentials.email}
        });
        if (!existingUser) return null;
        
        if (existingUser.password) {
          const passwordMatch = await compare(credentials.password, existingUser.password); // Checks if password is correct
          if (!passwordMatch) return null;
        }
        
        // These are the main variables we need in a user
        return {
          id: existingUser.id as string,
          username: existingUser.username,
          email: existingUser.email,
          isPaid: existingUser.isPaid
        }
      }
    })
  ],
  callbacks: {
    async jwt({token, user, account, trigger, session}) {
      /* This function is responsible for creating the JWT token */

      if (user) {
        // Add the username field because it is not in there by default
        return {
          ...token,
          username: user.username
        };
      }
      return token;
    },
    async session({session, token}) {
      /* This function is responsible for creating the session based on the JWT */

      // Fetches only isPaid property from the user with given email
      const user = await db.user.findUnique({
        where: {email: session.user.email as string},
        select: {isPaid: true}
      });
      
      // Add the user field with username and isPaid fields because they are not there by default
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
      /* This function decides if the user is allowed to sign in or not */

      if (account?.provider === "google" && profile && "email_verified" in profile && !profile.email_verified) {
        return false; // if provider is google and gmail is not verified it blocks the user from signing in
      } else {
        // Else if the users sign in with credentials check if the user verified his email
        const existingUser = await getUserById(user.id);

        if (!existingUser?.emailVerified) {
          return false;
        }
      }
      return true;
    }
  }
}