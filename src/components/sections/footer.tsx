import { Linkedin, Github, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-[#1a191d]">
      <div className="container py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="font-logo text-cyan-accent">Saniya Tabssum </span>
          </div>

          {/* Copyright */}
          <div className="flex-1 text-center md:text-center">
            <p className="text-sm text-text-secondary">
              © 2025 Saniya Tabssum. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 md:justify-end">
            <a
              href="https://www.linkedin.com/in/saniya-tabssum"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-card hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-text-secondary group-hover:text-accent-foreground transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/Er-Saniya-Tabssum"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-card hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-text-secondary group-hover:text-accent-foreground transition-colors duration-300" />
            </a>
            <a
              href="https://x.com/Saniya_tabssum_"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-card hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 text-text-secondary group-hover:text-accent-foreground transition-colors duration-300" />
            </a>
            <a
              href="mailto:eng.saniyatabssum@gmail.com"
              className="group flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-card hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-text-secondary group-hover:text-accent-foreground transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
