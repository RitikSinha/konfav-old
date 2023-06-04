import React from "react";
import LayoutScreen from "../components/layoutScreen";
import Navbar from "../components/Navbar";
const page = () => {
  return (
    <LayoutScreen>
      <main className="px-3 py-5">
        <Navbar title={"Messages"} />
        messages
      </main>
    </LayoutScreen>
  );
};

export default page;
