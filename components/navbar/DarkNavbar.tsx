import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import SignOutButton from "../buttons/SignOutButton";

const DarkNavbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="w-full z-50 top-0">
      <div className="flex items-center justify-between h-20">
        <Link href="/">
          <Image
            src="/logo_dark.png"
            alt="Logo"
            width={180}
            height={180}
            className="mb-1"
          />
        </Link>
        <div className="flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
          <Link href="/">
            <div className="text-black font-medium cursor-pointer hover:text-gray-600 text-lg">
              Home
            </div>
          </Link>
          <Link href="/lessons">
            <div className="text-black font-medium cursor-pointer hover:text-gray-600 text-lg">
              Lessons
            </div>
          </Link>
          <Link href="/about">
            <div className="text-black font-medium cursor-pointer hover:text-gray-600 text-lg">
              About Us
            </div>
          </Link>
          <Link href="/contact">
            <div className="text-black font-medium cursor-pointer hover:text-gray-600 text-lg">
              Contact
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          {session?.user ? (
            <SignOutButton />
          ) : (
            <>
              <Link href="/sign-in">
                <div className="rounded-md px-4 py-2 bg-gray-100 text-black font-medium cursor-pointer text-lg hover:bg-gray-50">
                  Sign in
                </div>
              </Link>
              <Link href="/sign-up">
                <div className="bg-indigo-500 px-6 py-2 text-lg text-white rounded-md mx-4 cursor-pointer hover:bg-indigo-400 active:bg-indigo-500">
                  Get Started
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DarkNavbar;
