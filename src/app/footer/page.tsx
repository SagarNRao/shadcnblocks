import React from "react";
import AnimatedFooter from "@/components/footer";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Footer() {
  return (
    <div>
      <div className="w-screen h-40 relative">
        <div className="absolute inset-0 w-screen h-full bg-black [mask-image:radial-gradient(at_bottom,transparent_20%,white)]"></div>
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          speed={0.2}
          particleDensity={800}
          className="w-screen h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-screen blur-sm" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-screen" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-screen blur-sm" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-screen" />
        {/* Radial Gradient to prevent sharp edges */}
      </div>

      <AnimatedFooter />
    </div>
  );
}
