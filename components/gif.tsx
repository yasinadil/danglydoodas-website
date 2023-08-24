"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import gif from "../public/assets/gif.gif";

import React from "react";

export default function GIF() {
  return (
    <Card className="flex justify-center items-center">
      {/* <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader> */}

      <img
        className="w-full h-full rounded-2xl"
        src={"/assets/gif.gif"}
        alt="gif"
      />

      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}
