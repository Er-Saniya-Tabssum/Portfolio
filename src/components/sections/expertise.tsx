import React from "react";
import { Monitor, Atom } from "lucide-react";
import { SiFlutter } from "react-icons/si";

const CodeSnippet = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono text-base text-text-secondary/90 leading-relaxed">
    <div className="text-text-muted">&lt;h3&gt;</div>
    <div className="pl-4">{children}</div>
    <div className="text-text-muted">&lt;/h3&gt;</div>
  </div>
);

export default function Expertise() {
  return (
    <section id="expertise" className="bg-[#1a191d] py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-bold tracking-tight text-text-primary">
            My Expertise
          </h2>
        </div>

        <div className="mt-16 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 border border-border rounded-lg overflow-hidden">
          {/* Card 1: Software Development */}
          <div className="p-8 lg:border-r border-border">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Monitor
                  className="w-10 h-10 text-pink-500 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <h3 className="text-2xl font-semibold text-text-primary">
                  <span className="inline-block border-b-2 border-pink-500 pb-1">
                    Software
                    <br />
                    Development
                  </span>
                </h3>
              </div>
              <div className="mt-2">
                <CodeSnippet>
                  Experienced in both
                  <br />
                  functional and OOP: Dart,
                  <br />
                  Python, Java, JavaScript,
                  <br />
                  TypeScript.
                </CodeSnippet>
              </div>
            </div>
          </div>

          {/* Card 2: Frontend Dev */}
          <div className="p-8 border-t lg:border-t-0 lg:border-r border-border">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Atom
                  className="w-10 h-10 text-cyan-400 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <h3 className="text-2xl font-semibold text-text-primary">
                  <span className="inline-block border-b-2 border-cyan-400 pb-1">
                    Frontend Dev
                    <br />
                    React, NextJS
                  </span>
                </h3>
              </div>
              <div className="mt-2">
                <CodeSnippet>
                  Passionate about UI/UX. Over
                  <br />
                  5 years of development
                  <br />
                  experience in HTML, CSS, JS,
                  <br />
                  React and NextJS frameworks.
                </CodeSnippet>
              </div>
            </div>
          </div>

          {/* Card 3: Flutter Dev */}
          <div className="p-8 border-t lg:border-t-0">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <SiFlutter className="w-9 h-9 text-orange-500 flex-shrink-0" />
                <h3 className="text-2xl font-semibold text-text-primary">
                  <span className="inline-block border-b-2 border-orange-500 pb-1">
                    Flutter Dev
                    <br />
                    Android, iOS
                  </span>
                </h3>
              </div>
              <div className="mt-2">
                <CodeSnippet>
                  Skilled in developing
                  <br />
                  hybrid mobile apps and
                  <br />
                  cross-platform solutions
                  <br />
                  using the Flutter
                  <br />
                  framework.
                </CodeSnippet>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-primary pl-6">
            <p className="italic text-text-secondary text-lg">
              "Sometimes the best way to solve a problem is to help others."
            </p>
            <cite className="mt-4 block text-base text-text-muted not-italic">
              - Uncle Iroh, 'Avatar: The Last Airbender'
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
