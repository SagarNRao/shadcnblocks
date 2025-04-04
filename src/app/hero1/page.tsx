"use client";
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { Particles } from "@/components/magicui/particles";

const features = [
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    // On mobile: full width (col-span-2), on md+: takes 2 columns and full height
    className: "col-span-2 md:col-span-2 md:row-span-2 h-40 md:h-full",
    background: (
      <div className="absolute inset-0 bg-gradient-to-gray from-black-100 to-black-200 opacity-50" />
    ),
  },
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    // On mobile: takes 1 column, on md+: takes 1 column
    className: "col-span-1 md:col-span-1 h-40 md:h-full",
    background: (
      <div className="absolute inset-0 bg-gradient-to-gray from-black-100 to-black-200 opacity-50" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "#",
    cta: "Learn more",
    // On mobile: takes 1 column, on md+: takes 1 column
    className: "col-span-1 md:col-span-1 h-40 md:h-full",
    background: (
      <div className="absolute inset-0 bg-gradient-to-gray from-black-100 to-black-200 opacity-50" />
    ),
  },
];

export default function Page() {
  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 md:px-8 lg:py-10 font-[family-name:var(--font-geist-sans)]">
      {/* Header Section */}
      <div className="z-10 flex items-center justify-center mb-12 sm:mb-16">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 transition ease-out py-1 hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Introducing New Shadcn Blocks</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex flex-col gap-8 items-center max-w-7xl mx-auto">
        <div className="w-full">
          <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-center md:text-left">
            Build, Collaborate
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-center md:text-left">
            and Transform
          </h1>

          <div className="pb-4"></div>

          {/* BentoGrid with responsive layout */}
          <BentoGrid className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[166px] md:auto-rows-[166px] ">
            {features.map((feature, idx) => (
              <BentoCard
                key={idx}
                Icon={feature.Icon}
                name={feature.name}
                description={feature.description}
                href={feature.href}
                cta={feature.cta}
                className={feature.className}
                background={feature.background}
              />
            ))}
          </BentoGrid>
        </div>

        {/* Particles Background */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <Particles
            quantity={500}
            ease={80}
            color={"#ffffff"}
            refresh
            className="h-full w-full"
          />
        </div>
      </main>
    </div>
  );
}