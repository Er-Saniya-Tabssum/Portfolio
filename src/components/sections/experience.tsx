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
    title: "AI/ML Intern",
    company: " Edunet Foundation",
    duration: "July 2025 - August 2025",
    location: "Remote, India",
    website: "edunetfoundation",
    websiteUrl: "https://www.linkedin.com/company/edunetfoundation/",
    description:
      "Worked on EV Vehicle/Charging Demand Prediction project using Python, Scikit-learn, and TensorFlow. Applied data preprocessing, visualization, and machine learning techniques for time-series forecasting. Gained practical exposure to AI/ML applications in the sustainable energy domain.",
    tags: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "Data Visualization",
      "Data Preprocessing",
      "Time-Series Forecasting (to build accurate prediction model",
    ],
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQEA0V9yzn_dPg/company-logo_200_200/company-logo_200_200/0/1646199475973/edunetfoundation_logo?e=1758758400&v=beta&t=6AR1XyCvzdHLMVAmW_zZgtTfPFVq0ugC2DtiswI3Soo",
    logoWidth: 150,
    logoHeight: 49,
  },
  {
    id: "item-2",
    title: "Web Developer",
    company: "Jalte Diye Foundation",
    duration: "April 2025 - Present",
    location: "Rajasthan, India",
    website: "jalte-diye-foundation",
    websiteUrl: "https://www.linkedin.com/company/jalte-diye-foundation/",
    description:
      "Contributed as a Web Developer by designing and improving the foundation’s digital presence. Worked on front-end development, responsive UI, and maintaining website functionality to support social education initiatives. Helped the organization in spreading awareness globally through an impactful online platform.",
    tags: [
      "JS",
      "HTML",
      "CSS",
      "RESPONSIVE WEB DEV",
      "WEB MAINTENANCE",
      "UI/UX",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEpOgdjOtK4vA/company-logo_100_100/B4DZftjX2ZGYAU-/0/1752037163693/jalte_diye_foundation_logo?e=1758758400&v=beta&t=zXsG4QKbHacBydPMephOYBaKTUk04mahLnQbG4NKpKk",
    logoWidth: 80,
    logoHeight: 82,
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
