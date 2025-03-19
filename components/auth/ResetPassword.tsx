"use client";

import React from "react";
import { useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  // Get the token from search params
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsButtonLoading(true);
    setError(null);

    if (success) return; // Prevents from multiple resubmitions

    if (!token) {
      setIsButtonLoading(false);
      setError("Token nije pronađen!");
      return;
    }

    if (newPassword.length < 4 || newPassword.length > 30) {
      setIsButtonLoading(false);
      setError("Lozinka mora sadržavati više od 4 znaka");
      return;
    }

    // Calls Reset-Password api which set users password to newPassword
    const response = await fetch("/api/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, newPassword }), // Token is needed to check if it is valid and not expired
    });
    const data = await response.json();

    // Sets error or success
    if (response.ok) {
      setSuccess(data.message);
    } else {
      setError(data.message);
    }

    setIsButtonLoading(false);
  };

  // If the process is finished (there are errors or success), form doesn't render
  if (success) {
    return (
      <div className="text-center">
        {success && (
          <>
            <p className="text-black text-3xl">
              Uspješno ste promijenili lozinku 😀
            </p>
            <div className="mt-8">
              <Link
                className="py-2 px-12 bg-rose-500 rounded-md text-2xl text-white hover:bg-rose-400 active:bg-rose-500"
                href="/sign-in"
              >
                Log in
              </Link>
            </div>
          </>
        )}
      </div>
    );
  }

  // If the process didn't begin we render the form
  return (
    <div className="p-4">
      <h2 className="text-3xl text-gray-800 mb-4">Promijeni Lozinku</h2>
      <form className="flex flex-col justify-center" onSubmit={onSubmit}>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Password"
          required
          className="border p-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-200"
        />
        {error && (
          <div className="mb-2">
            <p className="text-sm mt-1 text-red-500 font-medium">{error}!</p>
          </div>
        )}
        {!error && <div className="my-2"></div>}
        <button
          type="submit"
          className="bg-black text-white font-semibold p-2 mt-2 rounded-md hover:bg-gray-800 active:bg-black disabled:bg-gray-700"
          disabled={isButtonLoading}
        >
          {isButtonLoading ? (
            <div className="flex flex-col items-center justify-center p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 animate-spin inline"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            </div>
          ) : (
            "Promjeni Lozinku"
          )}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
