"use client";
import LayoutScreen from "./components/layoutScreen";
import QRCodeScanner from "./components/QRCodeScanner";
import QRCodeView from "./components/QRCodeView";
import { useState } from "react";
export default function Home() {
  const [data, setData] = useState("");
  const [isQr, setIsQr] = useState(true);
  const handleScan = (data) => {
    if (data) {
      setData(data.text);
    }
    console.log(data);
  };
  return (
    <LayoutScreen>
      <main className="flex flex-col items-center ">
        <div className="h-[480px]">
          {isQr ? <QRCodeView /> : <QRCodeScanner onScan={handleScan} />}
        </div>
        <button
          className="px-5 py-2 rounded-full my-5 bg-white text-base-300 font-bold"
          onClick={() => setIsQr(!isQr)}
        >
          {isQr ? "Scan QR" : "Show QR"}
        </button>
      </main>
    </LayoutScreen>
  );
}
