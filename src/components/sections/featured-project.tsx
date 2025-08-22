"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const filterItems = [
  { id: "all", name: "All", count: 9 },

  { id: "web-dev", name: "Web Development", count: 9 },
  { id: "ai-ml", name: "AI & Machine Learning", count: 6 },
];

const FeaturedProject = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filterItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Update active filter based on current slide
  useEffect(() => {
    setActiveFilter(filterItems[currentIndex].id);
  }, [currentIndex]);

  const handleFilterClick = (filterId: string, index: number) => {
    setActiveFilter(filterId);
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-start gap-y-16 lg:gap-y-24">
      {/* Featured Project Card */}
      <div className="flex flex-col items-start">
        <p className="font-medium text-text-secondary tracking-wider text-xs uppercase mb-4">
          Featured Project
        </p>
        <h3 className="font-semibold text-text-primary text-4xl lg:text-5xl mb-6 leading-tight">
          AI Podcast Clipper
        </h3>
        <p className="text-text-secondary text-lg mb-8 max-w-2xl leading-relaxed">
          AI Podcast Clipper SaaS automatically transforms full-length podcasts
          into viral short-form clips for TikTok and YouTube Shorts. Using
          Gemini AI for moment detection, WhisperX for transcription, and active
          speaker recognition, it creates engaging vertical videos with smart
          cropping and automatic subtitles.
        </p>
        <Link
          href="https://github.com/Er-Saniya-Tabssum/Podcast-Clipper"
          className="inline-block rounded-md bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-accent-purple-dark hover:shadow-lg"
        >
          View Project →
        </Link>
      </div>

      {/* Auto-Sliding Filter Navigation */}
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <span className="text-sm font-medium text-text-secondary">
          Filter by
        </span>
        <nav>
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            {filterItems.map((item, index) => (
              <li key={item.id} className="flex items-center gap-x-2">
                {index > 0 && <span className="text-text-muted">/</span>}
                <button
                  onClick={() => handleFilterClick(item.id, index)}
                  className={`font-medium transition-all duration-500 transform ${
                    activeFilter === item.id
                      ? "text-cyan-accent scale-110 font-semibold"
                      : "text-text-secondary hover:text-white scale-100"
                  }`}
                >
                  <span
                    className={`relative ${
                      activeFilter === item.id
                        ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-accent after:animate-pulse"
                        : ""
                    }`}
                  >
                    {item.name}
                  </span>
                  <sup className="ml-px -top-[0.2em] relative text-xs font-normal">
                    {item.id === "all"
                      ? item.count
                      : String(item.count).padStart(2, "0")}
                  </sup>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Progress indicator */}
        <div className="flex items-center gap-1 ml-4">
          {filterItems.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-cyan-accent w-6"
                  : "bg-text-muted hover:bg-text-secondary cursor-pointer"
              }`}
              onClick={() => handleFilterClick(filterItems[index].id, index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
