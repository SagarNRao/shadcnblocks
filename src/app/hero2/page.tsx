"use client";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { Particles } from "@/components/magicui/particles";

export default function Web3Innovation() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="z-10 flex min-h-64 items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Introducing New Shadcn Blocks</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>
      <div className="flex flex gap-8 row-start-2 items-center sm:items-start">
        {/* Left Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Using Open Source <br /> Web3 Innovation
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-400">
            Helping you navigate web3 complexities and turn your ideas into
            practical solutions.
          </p>
        </div>

        {/* Center Placeholder (Gray Square) */}
        {/* TODO add glow here */}
        <div className="flex-1 flex items-center justify-center mt-25">
            <div className="w-96 h-[600px] md:w-96 md:h-[600px] bg-gray-300 opacity-80 rounded-sm shadow-2xl"></div>
        </div>

        {/* Right Section */}
        <div className="flex-1 text-center lg:text-left flex-col">
          {/* <div className="p-25">re</div> */}

          <div className="flex-1 text-center lg:text-left mt-75">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              To Empower <br /> The Future
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-400">
              Helping you navigate web3 complexities and turn your ideas into
              practical solutions.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <Particles quantity={500} ease={80} color={"#ffffff"} refresh />
        </div>
      </div>
    </div>
  );
}
