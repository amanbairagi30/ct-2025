"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Trophy } from "@/components/trophy";
import { Confetti } from "@/components/magicui/confetti";
import { useRef } from "react";
import { ConfettiRef } from "@/components/magicui/confetti";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  const confettiRef = useRef<ConfettiRef>(null);
  return (
    <div className="w-full max-w-screen relative overflow-x-hidden h-screen max-h-screen">
      <div className="font-green-400 tracking-wider text-4xl text-white/70 font-extrabold absolute top-12 left-1/2 -translate-y-1/2 md:top-[30%] md:left-40 -translate-x-1/2">
        CT&apos;25
      </div>

      <div className="absolute right-4 top-8 z-[101]">
        <Link
          className="text-green-400 text-lg md:text-2xl underline"
          target="_blank"
          href="https://x.com/amanbairagi30"
        >
          Twitter
        </Link>
      </div>
      <Marquee className="absolute top-1/2 left-1/2 z-[-1] -translate-x-1/2 -translate-y-1/2">
        {["CHAMPIONS", "INDIA", "CHAMPIONS", "INDIA"].map((item, index) => {
          return (
            <div
              key={index}
              className={cn(
                `font-extrabold mr-14 text-green-400 text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[20rem] tracking-wider`,
                item === "INDIA" && "text-green-400",
                item === "CHAMPIONS" && "text-white"
              )}
            >
              {item}
            </div>
          );
        })}
      </Marquee>
      <Button
        className="absolute h-12 drop-shadow-xl ring-0 text-xl bg-green-400 text-black hover:bg-green-500 border-white shadow-xl border-2 cursor-pointer bottom-10 z-[10001] w-[90%] md:w-fit md:left-[80%] lg:left-[85%] md:translate-x-0 left-1/2 -translate-x-1/2"
        onClick={() => confettiRef.current?.fire({})}
      >
        Cheers for INDIA
      </Button>
      <Confetti
        ref={confettiRef}
        options={{
          particleCount: 100,
          spread: 270,
        }}
        className="absolute left-0 top-0 z-[0] size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
      <div className="z-[20] size-full">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 3, 10]} />
          <OrbitControls enableZoom={false} enablePan={false} />
          <Stage environment="sunset" intensity={1}>
            <Trophy />
          </Stage>
        </Canvas>
      </div>
    </div>
  );
}
