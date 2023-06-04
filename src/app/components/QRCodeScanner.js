"use client";
import { BrowserMultiFormatReader } from "@zxing/library";
import { useEffect, useRef } from "react";

export default function QRCodeScanner({ onScan }) {
  const videoRef = useRef(null);
  const codeReader = new BrowserMultiFormatReader();

  useEffect(() => {
    const videoElement = videoRef.current;
    codeReader.decodeFromVideoDevice(undefined, videoElement, (result) => {
      onScan(result);
    });
    return () => {
      codeReader.reset();
    };
  }, [onScan]);

  return (
    <div className="">
      <video ref={videoRef} className=""></video>
    </div>
  );
}
