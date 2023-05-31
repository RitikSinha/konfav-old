import React from "react";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center ">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold">Sign in</h2>
        <div className="flex min-w-full justify-around mt-5">
          <button className="bg-white rounded-full p-2">
            <Image
              src="/icons/google.png"
              height={25}
              width={25}
              alt="google"
            />
          </button>
          <button className="">
            <Image
              src="/icons/twitter.png"
              height={40}
              width={40}
              alt="google"
            />
          </button>
          <button className="">
            <Image
              src="/icons/linkedin.png"
              height={40}
              width={40}
              alt="google"
            />
          </button>
        </div>
        <div className="divider mt-5"> OR</div>
        <p className=" mt-3 font-semibold">Sign In with email</p>

        <input
          type="email"
          placeholder="email"
          className="input input-bordered w-full max-w-xs mt-3"
        />
        <input
          type="password"
          placeholder="password"
          className="input input-bordered w-full max-w-xs mt-3"
        />
        <button className="btn btn-primary w-full mt-3">Continue</button>
        <p className=" text-sm mt-5">
          Don&apos;t already have an account?{" "}
          <span className=" text-primary">
            <Link href="/signup">Sign Up</Link>
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default page;
