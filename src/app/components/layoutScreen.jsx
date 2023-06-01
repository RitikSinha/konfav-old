"use client";
import React from "react";
import BottomNavigation from "./BottomNavigation";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
const LayoutScreen = ({ children }) => {
  let pathname = usePathname();
  pathname = pathname.slice(1);
  return (
    <main>
      <div className="min-h-screen flex flex-col  bg-gradient-to-t from-[#000000] via-[#121212] to-[#212121] ">
        {"" === pathname ? "" : <Navbar />}
        {children}
        <BottomNavigation />
      </div>
    </main>
  );
};

export default LayoutScreen;
