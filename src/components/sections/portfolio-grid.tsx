import React from "react";
import { ArrowRight } from "lucide-react";

interface Project {
  title: string;
  category: string | null;
  imageUrl: string | null;
  link: string;
  description?: string;
}

const projects: Project[] = [
  {
    title: "PrepGenie",
    category: "ai-ml",
    imageUrl: "/prepgenie.png",
    link: "https://github.com/devopsdeepaks/prepgenie",
    description:
      "AI-based platform for mock interviews, resume generation, and analytics. Tech: React.js, Node.js, MongoDB, OpenAI API.",
  },
  {
    title: "AI Podcast Clipper",
    category: "ai-ml",
    imageUrl: "/podcastclipper.png",
    link: "https://github.com/Er-Saniya-Tabssum/Podcast-Clipper",
    description:
      "Transforms full-length podcasts into viral short-form clips using advanced AI models for transcription, speaker detection, and video cropping. Tech: Next.js, TypeScript, FastAPI, Modal, Stripe, AWS S3.",
  },
  {
    title: "Vibe",
    category: "ai-ml",
    imageUrl: "/vibe.png",
    link: "https://github.com/Er-Saniya-Tabssum/vibe",
    description:
      "Modern Next.js template with advanced UI components, sidebar, charting, and responsive design. Tech: Next.js, TailwindCSS, Radix UI.",
  },
  {
    title: "EV Vehicle Charging Demand Prediction",
    category: "ai-ml",
    imageUrl: "ev.jpeg",
    link: "https://github.com/Er-Saniya-Tabssum/EV-Vehicle-charging-demand-prediction",
    description:
      "Predicts electric vehicle charging demand using machine learning models. Tech: Python, scikit-learn, pandas.",
  },
  {
    title: "Ai Pdf Chat With Rag",
    category: "ai-ml",
    imageUrl: "chatwithrag.jpg",
    link: "https://github.com/Er-Saniya-Tabssum/AiPdfChatWithRag",
    description:
      "Chatbot for PDF documents using Retrieval-Augmented Generation (RAG). Tech: Python, LangChain, OpenAI API.",
  },
  {
    title: "Radar System Using Arduino",
    category: "ai-ml",
    imageUrl: "arduino.jpeg",
    link: "https://github.com/Er-Saniya-Tabssum/Radar-System-Using-Arduino",
    description:
      "Object detection radar using ultrasonic sensor and Arduino, visualized in Processing IDE. Tech: Arduino, Processing.",
  },
  {
    title: "Voice-Based Virtual Assistant",
    category: "ai-ml",
    imageUrl: "/voice.png",
    link: "https://github.com/Er-Saniya-Tabssum/-Voice-Based-Virtual-Assistant",
    description:
      "Python-based assistant that converts voice commands to text and automates web tasks. Tech: Python, speech_recognition, pywhatkit.",
  },
  {
    title: "DeepTruth",
    category: "ai-ml",
    imageUrl: "deeptruth.jpeg",
    link: "https://github.com/Er-Saniya-Tabssum/DeepTruth",
    description:
      "AI-powered tool for deepfake and face swap detection, image tracking, and removal assistance. Tech: Python, TensorFlow, OpenCV, Flask.",
  },
  // ...existing projects...
  {
    title: "Sangam Frontend",
    category: "Web-Dev",
    imageUrl: "/sangam.png",
    link: "https://github.com/devopsdeepaks/Sangam-frontend",
    description:
      "Frontend for Sangam, a collaborative platform. Tech: React.js, TypeScript, Chakra UI.",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const cardContent = (
    <div className="flex flex-col h-full">
      <h3 className="font-display text-xl font-semibold text-text-primary mb-2 transition-colors duration-300 group-hover:text-cyan-accent leading-tight">
        {project.title}
      </h3>
      {project.category && (
        <p className="text-sm text-text-secondary mb-2">{project.category}</p>
      )}
      {project.description && (
        <p className="text-sm text-text-secondary mb-4">
          {project.description}
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
        <div className="bg-gradient-to-br from-background via-card to-background border border-border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-cyan-500/30 flex flex-col items-center">
          {project.imageUrl && (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="mb-6 w-80 h-40 object-cover rounded-lg shadow-md border border-border bg-white"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
            />
          )}
          <div className="w-full text-center">
            <h3 className="font-display text-2xl font-bold text-cyan-400 mb-2 leading-tight group-hover:text-cyan-300 transition-colors duration-300">
              {project.title}
            </h3>
            {/* {project.category && (
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200 mb-3">
                {project.category}
              </p>
            )} */}
            {project.description && (
              <p className="text-base text-text-secondary mb-5">
                {project.description}
              </p>
            )}
            <div className="mt-auto pt-2">
              <div className="text-cyan-400 font-semibold text-base inline-flex items-center gap-2 hover:underline">
                Show project
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
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
