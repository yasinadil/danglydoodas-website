"use client";
import React from "react";

export default function NavbarMain() {
  return (
    <div className="py-4 md:py-4">
      <div className="flex justify-between items-center px-2 text-white">
        <h1 className="text-2xl">danglydoodads</h1>
        <div className="flex flex-row gap-x-8 text-xl">
          <a href="/">Links</a>
          <a href="/">Links</a>
          <a href="/">Links</a>
          <a href="/">Links</a>
        </div>
      </div>
    </div>
  );
}
