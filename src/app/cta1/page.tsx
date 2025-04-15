import React from "react";
import { Cover } from "@/components/ui/cover";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Button } from "@/components/ui/button";

export default function CoverDemo() {
  return (
    <div className="w-full items-center">
      <h1
        className="text-4xl lg:text-8xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
      >
        Launching apps with <br />
        <div className="lg:p-4 md:p-2 sm:p-2 p-2"></div>
        <Cover className="pt-2 pb-2 my-2 w"> warp speed </Cover>
      </h1>

      <div className="w-full items-center">
        <div
          className="flex justify-center space-x-2 max-w-7xl mx-auto sm:w-full"
        >
          <InteractiveHoverButton className="bg-[#151515]">
            Sign up
          </InteractiveHoverButton>
          <Button variant="outline" className="rounded-full">
            Meet the Team
          </Button>
          <Button variant="outline" className="rounded-full">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}