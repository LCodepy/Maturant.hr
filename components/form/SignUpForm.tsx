"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const errorMessages = {
    passwordMatch: "Passwords do not match!",
    passwordLength: "Password must be between 4 and 30 characters long.",
    signIn: "Failed to sign in after registration!",
    failed: "Registration failed!",
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsButtonLoading(true);
    setError(null);

    if (password !== confirmedPassword) {
      setError(errorMessages.passwordMatch);
      setIsButtonLoading(false);
      return;
    }
    if (password.length < 4 || password.length > 30) {
      setError(errorMessages.passwordLength);
      setIsButtonLoading(false);
      return;
    }

    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();

    if (response.ok) {
      setIsButtonLoading(false);
      router.push("/check-email");
    } else {
      setError(data.message);
      setIsButtonLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto">
      <h1 className="text-3xl font-bold mb-12 text-left text-gray-800">
        Create your account
      </h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-1">
        <label htmlFor="username">Username</label>
        <input
          type="username"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
          className="border p-2 rounded-md mb-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-200"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          className="border p-2 rounded-md mb-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-200"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (confirmedPassword !== e.target.value) {
              setError(errorMessages.passwordMatch);
            } else if (error === errorMessages.passwordMatch) {
              setError(null);
            }
          }}
          required
          className="border p-2 rounded-md mb-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-200"
        />

        <label htmlFor="password-re-enter">Re-Enter your password</label>
        <input
          type="password"
          id="password-re-enter"
          value={confirmedPassword}
          onChange={(e) => {
            setConfirmedPassword(e.target.value);
            if (password !== e.target.value) {
              setError(errorMessages.passwordMatch);
            } else if (error === errorMessages.passwordMatch) {
              setError(null);
            }
          }}
          required
          className="border p-2 rounded-md mb-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-200"
        />

        {error && <p className="text-red-500 text-md">{error}</p>}

        <button
          type="submit"
          disabled={isButtonLoading}
          className="bg-black text-white font-semibold p-2 mt-6 rounded-md hover:bg-gray-800 active:bg-black disabled:bg-gray-700"
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
            "Sign Up"
          )}
        </button>

        <p className="text-center text-md text-gray-600 mt-4">
          If you already have an account, please{" "}
          <Link
            href="/sign-in"
            className="text-center text-md text-rose-500 hover:text-rose-900"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
