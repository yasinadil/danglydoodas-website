"use client";
import { Card } from "./ui/card";
import React from "react";

export default function VideoCard() {
  return (
    <div className="flex items-center">
      <div className="flex justify-center items-center aspect-video">
        <video
          className="h-auto w-full max-w-[500px] aspect-video border-none filter-none"
          src="/assets/DDDDFreeMint.mp4"
          controls
          autoPlay={true}
        />
      </div>
    </div>
  );
}
