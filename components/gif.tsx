"use client";
import { Card } from "./ui/card";
import Image from "next/image";
import gif from "../public/assets/3.gif";

import React from "react";

export default function GIF() {
  return (
    <Card className="flex justify-center items-center">
      {/* <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader> */}

      <Image
        className="w-[300px] h-[300px] md:w-[360px] md:h-[360px]"
        src={gif}
        alt="gif"
        priority={true}
      />

      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}
