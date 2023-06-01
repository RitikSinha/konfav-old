import React from "react";
import BottomNavigation from "./BottomNavigation";
import Navbar from "./Navbar";
const layoutScreen = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen flex flex-col py-5">{children}</div>
      <BottomNavigation />
    </main>
  );
};

export default layoutScreen;
