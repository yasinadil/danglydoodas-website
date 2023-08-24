"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import React from "react";

export default function VideoCard() {
  return (
    <div className="flex items-center">
      <Card className="flex justify-center items-center aspect-video">
        {/* <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
        <video
          className="h-full w-full rounded-lg aspect-video"
          src="/video-placeholder.mp4"
          controls
          autoPlay={true}
        />
      </Card>
    </div>
  );
}
