"use client";
import { Card } from "./ui/card";
import React from "react";

export default function VideoCard() {
  return (
    <div className="flex items-center">
      <div className="flex justify-center items-center aspect-video w-[400px]">
        <video
          className="h-full w-full aspect-video border-none filter-none"
          src="/assets/DDDD.FREE.MINT.mp4"
          controls
          autoPlay={true}
        />
      </div>
    </div>
  );
}
