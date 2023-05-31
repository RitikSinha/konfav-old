import React from "react";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold">Create an account</h2>
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
        <div className="divider"> OR</div>
        <p className=" mt-5 font-semibold">Sign up with email</p>
        <input
          type="text"
          placeholder="full name"
          className="input input-bordered w-full max-w-xs mt-3"
        />
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
          Already have an account?{" "}
          <span className=" text-primary">
            <Link href="/login">Sign in</Link>
          </span>{" "}
        </p>
        <div className="form-control mt-5">
          <label className="cursor-pointer label">
            <input
              type="checkbox"
              className="checkbox-xs checkbox-secondary text-xs"
            />
            <span className="label-text text-xs ml-2">
              Agree to the terms and conditions
            </span>
          </label>
        </div>
        <p className="text-xs">Read privacy pollicy</p>
      </div>
    </div>
  );
};

export default page;
