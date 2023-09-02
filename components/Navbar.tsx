"use client";
import React from "react";
import NavbarMobile from "./navbar-mobile";
import NavbarMain from "./navbar-main";
export default function Navbar() {
  return (
    <div>
      <div className="hidden lg:block">
        <NavbarMain />
      </div>
      <div className="block lg:hidden">
        <NavbarMobile />
      </div>
    </div>
  );
}
