"use client";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { Particles } from "@/components/magicui/particles";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function Web3Innovation() {
  return (
    <div className="relative w-full">
      <div className="flex min-h-[6rem] sm:min-h-[7rem] md:min-h-[8rem] lg:min-h-[9rem] items-center justify-center">
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

      <div className="flex flex-col md:flex-row lg:flex-row p-4 sm:p-8 md:p-12 lg:p-20 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left mb-4 sm:mb-6 md:mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
        Using Open Source and <br /> Web3 Innovation
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-gray-400">
        Helping you navigate web3 complexities and turn your ideas into
        practical solutions.
          </p>
        </div>

        {/* Center Placeholder (Gray Square) */}
        <div className="flex-1 flex items-center justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-0">
          <div className="w-48 h-72 sm:w-56 sm:h-80 md:w-64 md:h-96 lg:w-80 lg:h-[28rem] xl:w-96 xl:h-[36rem] bg-gray-300 opacity-80 rounded-sm shadow-2xl"></div>
        </div>

        {/* Right Section */}
        <div className="flex-1 text-center md:text-left">
          <div className="pb-0 lg:pb-50 md:pb-50"></div>
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight lg:pt-20">
        To Empower <br /> The Future
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-gray-400">
        Helping you navigate web3 complexities and turn your ideas into
        practical solutions.
          </p>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Particles quantity={500} ease={80} color={"#ffffff"} refresh />
      </div>
    </div>
  );
}
