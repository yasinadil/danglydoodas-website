"use client";
import React from "react";
import NavbarMobile from "./navbar-mobile";
import NavbarMain from "./navbar-main";
export default function Navbar() {
  return (
    <div>
      <div className="hidden md:block">
        <NavbarMain />
      </div>
      <div className="block md:hidden">
        <NavbarMobile />
      </div>
    </div>
  );
}
