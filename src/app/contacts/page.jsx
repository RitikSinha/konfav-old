import React from "react";
import LayoutScreen from "../components/layoutScreen";
import ProfileCard from "../components/profileCard";
import ProfileSqCard from "../components/ProfileSqCard";
import Navbar from "../components/Navbar";
const page = () => {
  return (
    <LayoutScreen>
      <main className="px-3 py-5">
        <Navbar title={"Contacts"} />
        <div className="relative my-5">
          <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-2 bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:none focus:none"
            placeholder="Search"
          />
        </div>
        <h1 className="text-xl font-bold">Favlist</h1>
        <div className="carousel carousel-end rounded-box">
          <div className="carousel-item">
            <ProfileSqCard />
          </div>
          <div className="carousel-item">
            <ProfileSqCard />
          </div>
          <div className="carousel-item">
            <ProfileSqCard />
          </div>
          <div className="carousel-item">
            <ProfileSqCard />
          </div>
          <div className="carousel-item">
            <ProfileSqCard />
          </div>
        </div>
        <div className="collapse bg-[#121212] rounded-sm my-2">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium flex items-center justify-between">
            <p>Recent</p>
            <div>
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
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <div className="collapse-content bg-blend-color-burn">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
        </div>
        <div className="collapse bg-[#121212] rounded-sm my-2">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium flex items-center justify-between ">
            <p>Tag 1</p>
            <div>
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
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <div className="collapse-content bg-blend-color-burn">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
        </div>
        <h1 className="text-xl font-bold ">All Contacts</h1>

        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <div className="h-12"></div>
      </main>
    </LayoutScreen>
  );
};

export default page;
