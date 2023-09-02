import Image from "next/image";
import React from "react";
import logo from "../public/assets/logo.png";
import Link from "next/link";

export default function NavbarMain() {
  return (
    <div className="py-[12px]">
      <div className="flex justify-between items-center px-2 text-white">
        <Link href={"https://danglydoodads.wtf"}>
          <Image
            className="w-[90px]  h-[90px]"
            src={logo}
            alt="logo"
            priority={true}
          />
        </Link>
        <div
          className="flex flex-row gap-x-[60px]"
          style={{ fontFamily: "Noto 400" }}
        >
          <a
            className="hover:underline hover:underline-offset-8 hover:font-semibold text-right text-[19px] leading-[1.8rem]"
            href="https://danglydoodads.wtf"
          >
            dandlydoodads
          </a>
          <a
            className="underline underline-offset-8 hover:font-semibold text-right text-[19px] leading-[1.8rem]"
            href="/"
          >
            mint.danglydoodads
          </a>
          <a
            className="hover:underline hover:underline-offset-8 hover:font-semibold text-right text-[19px] leading-[1.8rem]"
            href="https://danglydoodads.wtf/other-schtuff"
          >
            other schtuff
          </a>
        </div>
      </div>
    </div>
  );
}
