"use client";
import React, { useState } from "react";
import logo from "../public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function NavbarMobile() {
  const [click, onClicked] = useState(false);
  return (
    <div className="fixed w-[95vw] bg-[#75AFE9]">
      <div className="text-white py-4 md:py-4 ">
        <div className="flex justify-between items-center">
          <Link href={"https://danglydoodads.wtf"}>
            <Image className="w-[100px] h-[100px]" src={logo} alt="logo" />
          </Link>

          <div className="flex items-center">
            {/* <svg
              className={` ${click ? "animate-cross hidden" : ""}`}
              onClick={() => onClicked(!click)}
              width="27"
              height="27"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg> */}
            <svg
              onClick={() => onClicked(!click)}
              className={` ${click ? "animate-cross" : ""} w-8 h-8`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="hamburgerPath"
                className={`transition-transform transform-gpu ${
                  click ? "hidden" : ""
                }`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
              <path
                id="crossPath"
                className={`${
                  click ? "" : "hidden"
                } transition-transform transform-gpu`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </div>
        <div
          className={`absolute top-32 -left-2 h-[200px] bg-[#75AFE9] w-screen z-50 transition delay-500 duration-500 ${
            click ? "block" : "hidden"
          }`}
        >
          <div className="px-4 ">
            {/* <div className="flex justify-between pt-4">
              <h1 className="text-2xl">danglydoodads</h1>
              <svg
                onClick={() => onClicked(false)}
                width="27"
                height="27"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div> */}
            <div className="flex flex-col gap-y-4 mt-10">
              <a
                className="text-[16px] text-right hover:underline hover:underline-offset-8"
                href="https://danglydoodads.wtf"
              >
                danglydoodads
              </a>
              <a
                className="text-[16px] text-right underline underline-offset-8"
                href="/"
              >
                mint.danglydoodads
              </a>
              <a
                className="text-[16px] text-right hover:underline hover:underline-offset-8"
                href="https://danglydoodads.wtf/other-schtuff"
              >
                other schtuff
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
