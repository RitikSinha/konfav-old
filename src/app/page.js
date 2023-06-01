import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import BottomNavigation from "./components/BottomNavigation";
import LayoutScreen from "./components/layoutScreen";
export default function Home() {
  return (
    <LayoutScreen>
      <main className="px-5 py-5">
        <h1 className="text-3xl font-bold">Search</h1>
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
        <h1 className="text-xl font-semibold my-4">Browse connections</h1>
        <div className="grid grid-cols-2 gap-3 pb-16">
          <div className="grid w-40 h-28 rounded bg-primary text-primary-content place-content-center font-bold text-xl">
            All
          </div>
          <div className="grid w-40 h-28 rounded bg-[#F19A3E] text-primary-content place-content-center font-bold text-xl">
            Office
          </div>
          <div className="grid w-40 h-28 rounded bg-[#F3722C] text-primary-content place-content-center font-bold text-xl">
            programmers
          </div>
          <div className="grid w-40 h-28 rounded bg-[#D81159] text-primary-content place-content-center font-bold text-xl">
            programmers
          </div>
          <div className="grid w-40 h-28 rounded bg-[#8A4D76] text-primary-content place-content-center font-bold text-xl">
            programmers
          </div>
          <div className="grid w-40 h-28 rounded bg-[#9E2A2B] text-primary-content place-content-center font-bold text-xl">
            programmers
          </div>
          <div className="grid w-40 h-28 rounded bg-[#A05D56]  text-primary-content place-content-center font-bold text-xl">
            programmers
          </div>
          <div className="grid w-40 h-28 rounded bg-[#BD4F6C] text-primary-content place-content-center font-bold text-xl">
            programmers
          </div>
        </div>
      </main>
    </LayoutScreen>
  );
}
