"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const PayButton = () => {
  const router = useRouter();

  const upgradeUserPaid = async () => {
    const response = await fetch("/api/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ upgrade: true }),
    });

    if (response.ok) {
      console.log("User upgraded successfully.");
      router.refresh();
    } else {
      console.log("Failed to upgrade!");
    }
  };

  return (
    <button
      type="button"
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 active:bg-blue-700"
      onClick={upgradeUserPaid}
    >
      Upgrade to watch videos
    </button>
  );
};

export default PayButton;
