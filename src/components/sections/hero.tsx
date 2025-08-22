"use client";

import * as React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Header from "./header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { ChevronDown } from "lucide-react";

const logos = [
  {
    src: "/HTML5_logo_and_wordmark.svg.png",
    alt: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    src: "/images.png",
    alt: "C",
    href: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  {
    src: "/ISO_C++_Logo.svg.png",
    alt: "C++",
    href: "https://isocpp.org/",
  },
  {
    src: "/MongoDB_Logo.svg.png",
    alt: "MongoDB",
    href: "https://www.mongodb.com/",
  },
  {
    src: "/light-js.svg",
    alt: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    src: "/Nextjs-logo.svg.png",
    alt: "Next.js",
    href: "https://nextjs.org/",
  },
  {
    src: "/Node.js_logo.svg.png",
    alt: "Node.js",
    href: "https://nodejs.org/",
  },
  {
    src: "/Python_logo_and_wordmark.svg.png",
    alt: "Python",
    href: "https://www.python.org/",
  },
  {
    src: "/React-icon.svg.png",
    alt: "React",
    href: "https://react.dev/",
  },
  {
    src: "/sql-database-generic.svg",
    alt: "SQL",
    href: "https://www.mysql.com/",
  },
  {
    src: "/tailwind.svg",
    alt: "Tailwind CSS",
    href: "https://tailwindcss.com/",
  },
  {
    src: "/Typescript_logo_2020.svg",
    alt: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
];

const AIBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
    {/* AI Neural Network Background */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
      style={{
        backgroundImage: `url('/tamalsen-home-cover.jpg')`,
      }}
    />

    {/* Overlay gradient for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />

    {/* Animated floating elements */}
    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-80" />
    <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-60" />
    <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-70" />
    <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-ping opacity-50" />
  </div>
);

export default function HeroSection() {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    // Auto-slide every 2 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section
      id="hero-section"
      className="relative flex flex-col items-center justify-center min-h-screen bg-[#1a191d] text-foreground overflow-hidden"
    >
      <AIBackground />
      <Header />
      <div className="container relative z-20 flex flex-1 flex-col justify-center text-center pt-32 pb-16">
        <h1 className="font-display text-[72px] leading-none font-black tracking-tighter text-text-primary uppercase ">
          Saniya Tabssum
        </h1>
        <h5 className="font-hero-subtitle mt-6 text-lg tracking-wider uppercase text-text-secondary">
          Software Engineer · AI/ML Engineer · Full-Stack Developer
        </h5>
      </div>
      {/* Gradient overlay at bottom for smooth transition */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-30"
        style={{
          background: "linear-gradient(to bottom, transparent, #1a191d 90%)",
        }}
      />

      <div className="container relative z-20 w-full pb-16">
        <div className="flex flex-col items-center">
          <p className="text-2xl uppercase tracking-wider text-text-secondary mb-8">
            Skills
          </p>
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl"
          >
            <CarouselContent className="">
              {logos.map((logo, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 md:basis-1/4 lg:basis-1/5"
                >
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center h-full p-4"
                  >
                    <div
                      style={{
                        height: 48,
                        width: 130,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={130}
                        height={48}
                        style={{
                          objectFit: "contain",
                          height: "100%",
                          width: "100%",
                        }}
                        className="transition-opacity duration-300 opacity-60 hover:opacity-100"
                      />
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-transparent border-gray-600 hover:bg-card hover:border-primary" />
            <CarouselNext className="hidden md:flex -right-12 bg-transparent border-gray-600 hover:bg-card hover:border-primary" />
          </Carousel>
        </div>
      </div>
      <a
        href="#expertise"
        aria-label="Scroll to next section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce"
      >
        <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-primary transition-colors">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </a>
    </section>
  );
}
