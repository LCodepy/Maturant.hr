"use client";

import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = () => {
  return (
    <button
      type="button"
      className="bg-white border border-black px-4 py-2 text-black-500 rounded-md hover:bg-gray-100 active:bg-black"
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/sign-in`,
        })
      }
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
