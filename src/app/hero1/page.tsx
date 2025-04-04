import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { Meteors } from "@/components/magicui/meteors";
import { Particles } from "@/components/magicui/particles";

const features = [
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-1 lg:col-span-2 row-span-2", // Large section on the left, full height
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
    className: "col-span-1 lg:col-span-1 h-[166px]", // Top right section
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
    className: "col-span-1 lg:col-span-1 h-[166px]", // Bottom right section
    background: (
      <div className="absolute inset-0 bg-gradient-to-gray from-black-100 to-black-200 opacity-50" />
    ),
  },
];

export default function Page() {
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
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1 className="text-9xl font-bold">Build, Collaborate</h1>
          <h1 className="text-9xl font-bold">and Transform</h1>

          {/* <p className="gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in convallis mauris. Integer laoreet at nulla ut dictum. Quisque placerat sit amet quam in tempus.</p> */}

          <div className="pb-1"></div>

          <BentoGrid className="max-w-full mx-auto h-[500px] grid-cols-3 lg:grid-cols-3 lg:grid-rows-[166px_166px] gap-4">
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
        <div className="absolute inset-0 -z-10">
          <Particles quantity={500} ease={80} color={"#ffffff"} refresh />
        </div>
      </main>
    </div>
  );
}
