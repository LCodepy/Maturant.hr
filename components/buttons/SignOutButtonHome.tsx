"use client";

import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = () => {
  return (
    <button
      type="button"
      className="bg-white text-lg text-black-500 px-4 py-2 rounded-md hover:bg-gray-100 active:bg-white"
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
