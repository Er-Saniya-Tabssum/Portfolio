import React from "react";
import Image from "next/image";

const WorkIntro = () => {
  return (
    <section
      id="work"
      className="bg-[#1a191d] text-foreground relative py-[120px]"
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
              My
              <br />
              Work
            </h2>
            <div className="mt-8 space-y-4 max-w-lg">
              <p className="text-text-secondary leading-relaxed">
                Deployed scalable travel, event and telemedicine web and hybrid
                mobile apps using React SPA and PWA.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Collaborated in 140+ projects with 50+ clients all around the
                world. I am also interested in data analytics and visualization.
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
