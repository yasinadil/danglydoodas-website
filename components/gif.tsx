"use client";
import { Card } from "./ui/card";
import Image from "next/image";
import gif from "../public/assets/preview.gif";

import React from "react";

export default function GIF() {
  return (
    <Card className="flex justify-center items-center">
      {/* <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader> */}

      <Image
        className="w-[100%] h-auto max-w-[500px]"
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
