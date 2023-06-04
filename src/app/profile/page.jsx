"use client";
import React from "react";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();

  return (
    <div className="navbar  ">
      <div className="navbar-start px-2">
        <div className="mr-3" onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </div>
        <a className=" font-semibold text-xl">My Profile</a>
      </div>
    </div>
  );
};
const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-t from-[#000000] via-[#121212] to-[#212121] ">
      <Navbar />
      <h1>my profile</h1>
    </div>
  );
};

export default page;
