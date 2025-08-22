import React from "react";
import Image from "next/image";

const WorkIntro = () => {
  return (
    <section
      id="work"
      className="bg-[#1a191d] text-foreground relative py-[10px]"
    >
      {/* Code Background Image */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-20 mt-30 bg-no-repeat bg-right-top"
        style={{
          backgroundImage: `url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ae5c08a-b87a-49db-90b7-a0309ad01b49-tamalsen-dev/assets/images/hello-world-html-code-768x384-3.png)`,
          backgroundSize: "contain",
        }}
      />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-x-[70px]">
          <div className="lg:w-1/2">
            <h2 className="font-display font-black text-white text-7xl leading-none tracking-tighter">
              My Work
            </h2>
            <div className="mt-8 space-y-4 max-w-lg">
              <p className="text-text-secondary leading-relaxed">
                I worked as an AI/ML Intern at Edunet Foundation, where I
                developed an EV Vehicle and Charging Demand Prediction model
                using Python, Scikit-learn, and TensorFlow (LSTM). My role
                involved data preprocessing, visualization, and time-series
                forecasting, which gave me practical exposure to applying AI/ML
                in the sustainable energy domain.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Alongside this, I have created impactful projects like
                DeepTruth, an AI-powered platform to detect AI-generated content
                and face swaps that won 1st position at IDE Bootcamp 2025, and
                AI Podcast Clipper SaaS, a production-ready platform for
                generating viral short-form clips with transcription, speaker
                recognition, and automated rendering.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Additionally, I hold strong skills in full-stack web development
                with React, Node.js, Express, and MySQL, enabling me to design
                secure, scalable, and intelligent solutions.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative flex items-center justify-center min-h-[400px]"></div>
        </div>
      </div>
    </section>
  );
};

export default WorkIntro;
