"use client";

import { useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

// Define the card data structure
interface CardItem {
  id: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
}

// Sample data array
const cardItems: CardItem[] = [
  {
    id: "1",
    title: "Getting Started",
    description: "Learn the basics of our platform",
    content:
      "Our platform provides a comprehensive set of tools to help you build amazing applications. This guide will walk you through the essential features and how to use them effectively.",
    imageUrl: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "2",
    title: "Advanced Features",
    description: "Take your skills to the next level",
    content:
      "Once you've mastered the basics, explore our advanced features to create more sophisticated applications. This section covers complex workflows, optimization techniques, and best practices.",
    imageUrl: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "3",
    title: "API Documentation",
    description: "Integrate with our powerful API",
    content:
      "Our API allows you to programmatically access all platform features. This comprehensive documentation covers authentication, endpoints, request formats, and response handling.",
    imageUrl: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "4",
    title: "Case Studies",
    description: "Real-world success stories",
    content:
      "Discover how other developers and companies have used our platform to solve complex problems and build innovative solutions. These case studies provide valuable insights and inspiration.",
    imageUrl: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "5",
    title: "Community",
    description: "Connect with other developers",
    content:
      "Join our thriving community of developers to share knowledge, get help, and collaborate on projects. Access forums, chat channels, meetups, and other community resources.",
    imageUrl: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "6",
    title: "Performance Tips",
    description: "Optimize your applications",
    content:
      "Learn essential techniques for improving application performance, including caching strategies, code optimization, and best practices for scalability.",
    imageUrl: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "7",
    title: "Security Guidelines",
    description: "Keep your applications secure",
    content:
      "Understand crucial security practices, authentication methods, and protection against common vulnerabilities to build robust and secure applications.",
    imageUrl: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "8",
    title: "Shipping Strategies",
    description: "Launch with confidence",
    content:
      "Master various deployment approaches, from continuous integration to containerization, ensuring smooth and reliable application releases.",
    imageUrl: "/placeholder.svg?height=100&width=200",
  },
];

export default function CardListWithPreview() {
  // State to track the currently hovered/clicked card (desktop only)
  const [hoveredCard, setHoveredCard] = useState<CardItem | null>(null);

  return (
    <div className="container mx-auto p-4 min-h-full">
      <h1 className="text-4xl font-bold">List Component</h1>

      <div className="pb-5"></div>

      <Separator />

      <div className="pb-5"></div>

      <div className="grid grid-cols-1 md:grid-cols-13 gap-6">
      <div className="md:col-span-6">
        <div className="md:hidden overflow-y-auto max-h-[80vh] space-y-4">
        {cardItems.map((item) => (
          <div key={item.id} className="p-4 rounded-lg border">
          <h3 className="text-2xl font-bold">{item.title}</h3>
          <p className="text-xs text-muted-foreground mt-1">
            {item.description}
          </p>
          <p className="mt-2 text-sm">{item.content}</p>
          <div className="mt-4 relative w-full h-[200px]">
            <Image
            src={item.imageUrl || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover rounded-lg"
            />
          </div>
          </div>
        ))}
        </div>

        {/* Desktop list */}
        <div className="hidden md:block space-y-2">
        {cardItems.map((item, index) => (
          <div key={item.id}>
          <div
            className="cursor-pointer transition-all hover:text-primary py-2"
            onMouseEnter={() => setHoveredCard(item)}
            onClick={() => setHoveredCard(item)}
          >
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-xs text-muted-foreground">
            {item.description}
            </p>
          </div>
          {index < cardItems.length - 1 && (
            <Separator className="my-2" />
          )}
          </div>
        ))}
        </div>
      </div>

      <div className="hidden md:col-span-7 md:flex rounded-lg border p-6 items-center justify-center max-w-[750px] min-w-[661px]">
        {hoveredCard ? (
        <div className="flex flex-col gap-6 w-full">
          <div className="space-y-4">
          <h2 className="text-6xl font-bold">{hoveredCard.title}</h2>
          <p className="text-muted-foreground text-2xl">
            {hoveredCard.description}
          </p>
          <p>{hoveredCard.content}</p>
          <div className="flex items-center justify-center">
            <div className="relative w-[750px] h-[430px]">
            <Image
              src={hoveredCard.imageUrl || "/placeholder.svg"}
              alt={hoveredCard.title}
              fill
              className="object-cover rounded-lg"
            />
            </div>
          </div>
          </div>
        </div>
        ) : (
        <p className="text-muted-foreground text-center">
          Hover over an item to see details
        </p>
        )}
      </div>
      </div>

      <div className="pb-10"></div>
      <div className="pb-10"></div>
    </div>
  );
}