import Image from "next/image";
import type { SVGProps } from "react";

const QuoteDoubleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 26" fill="currentColor" {...props}>
    <g transform="translate(-3 -3)">
      <path d="M7,17.41,12.42,12,11.23,9.58,7.9,13.25a2,2,0,0,1-.58-.09,3.5,3.5,0,0,1-1.29-5.3A3.8,3.8,0,0,1,7.2,7.2a4,4,0,0,1,4.3,4.41L13,14,20,7V24H7Z" />
      <path d="M25,17.41,30.42,12,29.23,9.58,25.9,13.25a2,2,0,0,1-.58-.09,3.5,3.5,0,0,1-1.29-5.3A3.8,3.8,0,0,1,25.2,7.2a4,4,0,0,1,4.3,4.41L31,14,38,7V24H25Z" />
    </g>
  </svg>
);

const testimonials = [
  {
    name: "IDE BOOTCAMP PHASE 2",
    title: "Winner",
    company: "Organized by AICTE & MIC",
    companyLink: "https://bootcamp.mic.gov.in/",
    quote:
      "IDE Bootcamp (Innovation, Design and Entrepreneurship Bootcamp) is a national initiative mainly organized by AICTE (All India Council for Technical Education) and Ministry of Education’s Innovation Cell (MIC). The program aims to develop creativity, problem solving, design thinking and entrepreneurship skills among students and teachers. It provides a platform where participants learn how to identify real life problems, design innovative solutions, and present them as workable business or project ideas. In some editions, institutions like DoSEL, CBSE, NCERT, and foundations like Wadhwani Foundation also collaborate to expand the reach. Local universities and colleges host the camps, where participants go through hands-on training,mentoring, teamwork activities and pitching sessions. Overall, IDE Bootcamp builds the entrepreneurial mindset and prepares youth to become future innovators and leaders.",
    imageUrl: "saniya.jpeg",
    bgColor: "bg-primary",
  },
  {
    name: "Wilfried Hajek",
    title: "Agile Coach | Speaker | Trainer",
    company: "",
    companyLink: undefined,
    quote:
      "Tamal is AMAZING! If you have any doubt about hiring him, ask me – I am really impressed by this guy!",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ae5c08a-b87a-49db-90b7-a0309ad01b49-tamalsen-dev/assets/images/wilfried_hajek_portrait_circle-18.png",
    bgColor: "bg-[#0b63e1]",
  },
  {
    name: "Jonathan Castro",
    title: "CEO & Founder at",
    company: "The Cliff",
    companyLink: "https://the-cliff.com/",
    quote:
      "Tamal is one of the best professionals that we have known in web development skills. Between his skills you can find good communication and accuracy with the planning in complex projects.",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ae5c08a-b87a-49db-90b7-a0309ad01b49-tamalsen-dev/assets/images/jonathan_castro_gleam-19.png",
    bgColor: "bg-primary",
  },
];

const socialLinks = [
  { name: "Github", href: "https://github.com/Er-Saniya-Tabssum/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/saniya-tabssum/" },
  { name: "LeetCode", href: "https://leetcode.com/u/saniya_tabssum/" },
];

interface TestimonialCardProps {
  name: string;
  title: string;
  company: string;
  companyLink?: string;
  quote: string;
  imageUrl: string;
  bgColor: string;
}

const TestimonialCard = ({
  name,
  title,
  company,
  companyLink,
  quote,
  imageUrl,
  bgColor,
}: TestimonialCardProps) => (
  <div className={`p-8 rounded-lg relative ${bgColor}`}>
    <QuoteDoubleIcon className="h-10 w-16 text-white/30" />
    <Image
      src={imageUrl}
      alt={`Portrait of ${name}`}
      width={72}
      height={72}
      className="rounded-full absolute top-8 right-8 w-[72px] h-[72px] object-cover"
    />
    <blockquote className="mt-8 text-white/90 leading-relaxed font-body text-base">
      {quote}
    </blockquote>
    <div className="mt-8 font-display">
      <p className="font-semibold text-white">- {name}</p>
      <p className="text-white/80 text-sm mt-1 font-body">
        {title}{" "}
        {company && (
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            {company}
          </a>
        )}
      </p>
    </div>
  </div>
);

export default function ContactTestimonials() {
  return (
    <section id="contact" className="bg-[#1a191d] py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-bold font-display text-text-primary">
              Excited for Opportunities..
            </h2>
            <p className="mt-4 text-text-secondary font-body text-lg">
              Have an exciting project you need help with?
              <br />
              Send me an email!!
            </p>
            <a
              href="mailto:eng.saniyatabssum@gmail.com"
              className="block mt-8 text-xl md:text-2xl font-mono text-primary hover:text-accent-purple-dark transition-colors"
            >
              eng.saniyatabssum@gmail.com
            </a>
            <div className="mt-8 flex flex-col items-start space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-text-secondary hover:text-primary transition-colors font-body"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 flex justify-center items-center">
            <div className="w-full flex justify-center">
              <TestimonialCard {...testimonials[0]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
