"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);

  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsButtonLoading(true);

    if (password !== confirmedPassword) {
      setError("Passwords do not match!");
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

    if (response.ok) {
      const signInResponse = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });
      if (signInResponse?.error) {
        setError("Failed to sign in after registration!");
        return;
      }
      router.push("/");
      router.refresh();
    } else {
      console.error("Registration failed!");
      setIsButtonLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-10 text-left text-gray-800">
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
          }}
          required
          className="border p-2 rounded-md mb-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-200"
        />

        <label htmlFor="password">Re-Enter your password</label>
        <input
          type="password"
          id="password-re-enter"
          value={confirmedPassword}
          onChange={(e) => {
            setConfirmedPassword(e.target.value);
          }}
          required
          className="border p-2 rounded-md mb-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-200"
        />

        {error && <p className="text-red-500 text-md">{error}</p>}

        <button
          type="submit"
          disabled={isButtonLoading}
          className="bg-black text-white font-semibold p-2 mt-6 rounded-md hover:bg-gray-800 active:bg-black"
        >
          Sign Up
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
    </>
  );
};

export default SignUpForm;
