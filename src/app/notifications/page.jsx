import Link from "next/link";
import React from "react";
const Navbar = () => (
  <div className="navbar  ">
    <div className="navbar-start px-2">
      <Link className="mr-3" href="/">
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
      </Link>
      <a className=" font-semibold text-xl">notification</a>
    </div>
  </div>
);
const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-t from-[#000000] via-[#121212] to-[#212121] ">
      <Navbar />
    </div>
  );
};

export default page;
