import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import SignOutButton from "./SignOutButton";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="w-full z-50 top-0">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <Image src="/logo_white.png" alt="Logo" width={200} height={200} />
          </Link>
          <div className="flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            <Link href="/">
              <div className="text-white font-medium cursor-pointer hover:text-gray-200 text-lg">
                Home
              </div>
            </Link>
            <Link href="/lessons">
              <div className="text-white font-medium cursor-pointer hover:text-gray-200 text-lg">
                Lessons
              </div>
            </Link>
            <Link href="/about">
              <div className="text-white font-medium cursor-pointer hover:text-gray-200 text-lg">
                About Us
              </div>
            </Link>
            <Link href="/contact">
              <div className="text-white font-medium cursor-pointer hover:text-gray-200 text-lg">
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
                  <div className="rounded-md px-4 py-2 text-white font-medium cursor-pointer text-lg hover:text-gray-200">
                    Sign in
                  </div>
                </Link>
                <Link href="/sign-up">
                  <div className="text-lg bg_white px-6 py-2 rounded-md mx-4 cursor-pointer font-semibold">
                    Get Started
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
