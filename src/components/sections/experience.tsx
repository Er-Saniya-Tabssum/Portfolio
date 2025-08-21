"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Link as LinkIcon } from "lucide-react";

type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  duration: string;
  location: string;
  website: string;
  websiteUrl: string;
  description: string;
  tags: string[];
  logo: string;
  logoWidth: number;
  logoHeight: number;
};

const experienceData: ExperienceItem[] = [
  {
    id: "item-1",
    title: "Co-Founder @ Life Coach Elevate",
    company: "Life Coach Elevate",
    duration: "2024 - Present",
    location: "Arizona, USA",
    website: "lifecoachelevate.com",
    websiteUrl: "https://www.lifecoachelevate.com/",
    description:
      "Co-founded Life Coach Elevate, managing end-to-end technical infrastructure, including server architecture, automation pipeline development, leadership of the web development and design team, and driving initiatives to optimize scalability and system performance.",
    tags: ["DevOps", "CI/CD", "Kubernetes", "JS/TS", "NextJS"],
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ae5c08a-b87a-49db-90b7-a0309ad01b49-tamalsen-dev/assets/images/LCE-Logo-Reverse-768x249-13.png",
    logoWidth: 150,
    logoHeight: 49,
  },
  {
    id: "item-2",
    title: "Senior Lead Software Engineer @ Saimon Global Ltd",
    company: "Saimon Global Ltd",
    duration: "2019 - 2024",
    location: "Dhaka, Bangladesh",
    website: "saimonglobal.com",
    websiteUrl: "https://saimonglobal.com/",
    description:
      "Led a frontend team to design and develop robust B2C and B2B Travel Tech solutions, utilizing React/Next.js for web applications and Flutter SDK for cross-platform mobile apps, with a focus on responsive design, scalability, and enhanced user experience.",
    tags: ["JS", "TS", "Dart", "React", "NextJS", "Flutter"],
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ae5c08a-b87a-49db-90b7-a0309ad01b49-tamalsen-dev/assets/images/SG-logo@2x-14.png",
    logoWidth: 80,
    logoHeight: 82,
  },
  {
    id: "item-3",
    title: "Web Developer @ influenceTHIS Canada",
    company: "influenceTHIS Canada",
    duration: "2018-2019",
    location: "Remote (Toronto, Canada)",
    website: "influencethis.ca",
    websiteUrl: "https://www.influencethis.ca/",
    description:
      "Developed the UI and UX eco-system for a conference event platform using modular component structures with JS, SCSS, Gulp on Node.",
    tags: ["JS", "GULP", "SCSS", "Nodejs"],
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ae5c08a-b87a-49db-90b7-a0309ad01b49-tamalsen-dev/assets/images/influencethis-logo-265px-15.png",
    logoWidth: 80,
    logoHeight: 80,
  },
  {
    id: "item-4",
    title: "Top Rated Web Developer @ Upwork Inc.",
    company: "Upwork Inc.",
    duration: "2017 - Present",
    location: "Remote",
    website: "upwork.com",
    websiteUrl: "https://tamalsen.dev/go/upwork",
    description:
      "Top-Rated developer on Upwork specializing in Front-end (React, WordPress) technologies with a 100% job success rate and client satisfaction rating (based on 150+ Jobs, 2500+ hours).",
    tags: ["Javascript", "PHP", "HTML", "CSS", "Figma"],
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ae5c08a-b87a-49db-90b7-a0309ad01b49-tamalsen-dev/assets/images/upwork-logo-300x225-16.png",
    logoWidth: 100,
    logoHeight: 75,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-[#1a191d] py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl font-bold tracking-tight text-text-primary mb-16">
          Professional Experience
        </h2>
        <div className="mx-auto max-w-4xl">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full space-y-4"
          >
            {experienceData.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-b-0"
              >
                <AccordionTrigger className="bg-primary hover:bg-accent-purple-dark text-left text-primary-foreground px-6 py-4 rounded-lg text-lg data-[state=open]:rounded-b-none transition-all duration-300 group">
                  <div className="flex justify-between w-full items-center">
                    <span className="font-semibold">{item.title}</span>
                    <span className="text-base font-normal text-primary-foreground/80 hidden sm:inline-block">
                      {item.duration}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-card text-card-foreground p-8 rounded-b-lg">
                  <div className="flex flex-col-reverse lg:flex-row justify-between gap-8">
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{item.location}</span>
                        </div>
                        <a
                          href={item.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 hover:text-cyan-accent transition-colors"
                        >
                          <LinkIcon className="h-4 w-4" />
                          <span>{item.website}</span>
                        </a>
                      </div>
                      <p className="text-text-secondary leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-tag bg-border text-primary-foreground px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0 self-center lg:self-start">
                      <Image
                        src={item.logo}
                        alt={`${item.company} logo`}
                        width={item.logoWidth}
                        height={item.logoHeight}
                        className="object-contain max-w-[150px] lg:max-w-none"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
