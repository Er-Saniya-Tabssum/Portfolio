import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  category: string | null;
  imageUrl: string | null;
  link: string;
}

const projects: Project[] = [
  {
    title: "Flight Local (B2B Travel Solution)",
    category: "Web Development",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ae5c08a-b87a-49db-90b7-a0309ad01b49-tamalsen-dev/assets/images/flighlocal-cover-image-5.jpg",
    link: "#",
  },
  {
    title: "AI Lab Granada",
    category: "Web Development",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6ae5c08a-b87a-49db-90b7-a0309ad01b49/generated_images/modern-web-application-interface-screens-31a5bf8c-20250821192457.jpg",
    link: "#",
  },
  {
    title: "Tryotel – Cross-Platform Travel App",
    category: "Mobile Development",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ae5c08a-b87a-49db-90b7-a0309ad01b49-tamalsen-dev/assets/images/tryotel-b2c-cover-11.jpg",
    link: "#",
  },
  {
    title: "Khora – Urban Thinkers Consulting Firm",
    category: "Web Development",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6ae5c08a-b87a-49db-90b7-a0309ad01b49/generated_images/modern-consulting-firm-website-interface-a56b544e-20250821192509.jpg",
    link: "#",
  },
  {
    title: "Tapy – Download. Connect. Unlock.",
    category: "Web Development",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ae5c08a-b87a-49db-90b7-a0309ad01b49-tamalsen-dev/assets/images/tapy-co-poster-9.jpg",
    link: "#",
  },
  {
    title: "Walker IP Pty Ltd",
    category: "Web Development",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ae5c08a-b87a-49db-90b7-a0309ad01b49-tamalsen-dev/assets/images/walkerip-com-poster-10.jpg",
    link: "#",
  },
  {
    title: "Kananaskis Nordic Spa Website",
    category: "Web Development",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6ae5c08a-b87a-49db-90b7-a0309ad01b49/generated_images/luxury-spa-website-interface-showing-nor-e83045e8-20250821192523.jpg",
    link: "#",
  },
  {
    title: "A Higher Thought",
    category: "Web Development",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6ae5c08a-b87a-49db-90b7-a0309ad01b49/generated_images/modern-coaching-and-personal-development-8487a965-20250821192535.jpg",
    link: "#",
  },
  {
    title: "All the roads of Chittagong",
    category: "Data Visualization",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ae5c08a-b87a-49db-90b7-a0309ad01b49-tamalsen-dev/assets/images/all-the-roads-of-chittagong-cover-12.jpg",
    link: "#",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const cardContent = (
    <div className="flex flex-col h-full">
      <h3 className="font-display text-xl font-semibold text-text-primary mb-2 transition-colors duration-300 group-hover:text-cyan-accent leading-tight">
        {project.title}
      </h3>
      {project.category && (
        <p className="text-sm text-text-secondary mb-4">
          {project.category}
        </p>
      )}
      <div className="mt-auto pt-4">
        <div className="text-cyan-accent font-semibold text-sm inline-flex items-center gap-2">
          Show project
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="break-inside-avoid mb-8">
      <a href={project.link} className="block group">
        {project.imageUrl ? (
          <div className="relative rounded-lg overflow-hidden shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/20">
            <div
              className="w-full h-80 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              {cardContent}
            </div>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20 hover:shadow-primary/20">
            {cardContent}
          </div>
        )}
      </a>
    </div>
  );
};

const PortfolioGrid = () => {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default PortfolioGrid;