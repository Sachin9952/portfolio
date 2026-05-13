"use client";
import Image from "next/image";
import React from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTrigger,
  ResponsiveDialogTitle,
  ResponsiveDialogDescription,
} from "../ui/responsive-dialog";
import { FloatingDock } from "../ui/floating-dock";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto min-h-screen pb-20">
      <SectionHeader id="projects" title="Projects" />
      <div className="flex flex-col gap-10 w-full px-5 sm:px-6 md:px-8 lg:px-12 md:grid md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <div className="flex w-full">
      <ResponsiveDialog>
        <ResponsiveDialogTrigger 
          className="bg-transparent text-left w-full focus:outline-none"
          onClick={(e) => {
            // Blur the trigger to prevent aria-hidden focus warnings in Radix/Vaul
            (e.currentTarget as HTMLElement).blur();
          }}
        >
          <article className="relative rounded-[2rem] overflow-hidden bg-white/[0.03] backdrop-blur-[16px] border border-white/10 group flex flex-col hover:border-white/20 transition-all duration-300 w-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)]" />
            
            <div className="relative w-full aspect-[16/10] bg-black/40 overflow-hidden">
              <Image
                className="absolute w-full h-full top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src={project.src}
                alt={project.title}
                width={600}
                height={400}
                priority={index < 4}
                style={{ objectPosition: project.thumbnailPosition || "center" }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
            </div>

            <div className="p-8 flex flex-col gap-5 relative z-10">
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-3 text-white text-left">{project.title}</h2>
                <p className="text-[14px] text-white/70 leading-relaxed text-left">
                  {project.category}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {[...project.skills.frontend, ...project.skills.backend].slice(0, 5).map((skill, index) => (
                  <span key={index} className="bg-white/[0.08] border border-white/10 rounded-full px-3 py-1 text-[11px] font-medium text-white/80">
                    {skill.title}
                  </span>
                ))}
              </div>

              <div className="pt-2 text-left">
                <div className="text-white/40 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          </article>
        </ResponsiveDialogTrigger>

        <ResponsiveDialogContent className="flex flex-col h-[85vh] max-h-[85vh] overflow-hidden p-0 gap-0 md:max-w-4xl">
          {/* Sticky header */}
          <div className="shrink-0 border-b border-border bg-background/80 backdrop-blur-sm px-4 md:px-8 py-4 md:py-5">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-4">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 min-w-0 w-full md:w-auto">
                <ResponsiveDialogTitle className="font-display text-2xl font-bold text-foreground tracking-tight truncate w-full md:w-auto text-left">
                  {project.title}
                </ResponsiveDialogTitle>
                <ResponsiveDialogDescription className="sr-only">
                  Project details and technical stack for {project.title}
                </ResponsiveDialogDescription>
                <span className="shrink-0 text-[10px] md:text-[11px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-0.5">
                  {project.category}
                </span>
              </div>
              <div className="shrink-0 flex items-center justify-start md:justify-end gap-4 w-full md:w-auto pt-2 md:pt-0 border-t border-white/5 md:border-0 mt-2 md:mt-0">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
                  >
                    Source
                  </Link>
                )}
                <Link href={project.live} target="_blank">
                  <button className="group flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full hover:bg-primary/80 transition-colors">
                    Visit
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Scrollable content */}
          <ScrollArea className="flex-1" type="always" data-lenis-prevent>
            <div className="px-4 md:px-8 py-6 md:py-8 overflow-x-hidden">
              {/* Tech stack */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10"
              >
                {project.skills.frontend?.length > 0 && (
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                      Frontend
                    </span>
                    <FloatingDock items={project.skills.frontend} />
                  </div>
                )}
                {project.skills.backend?.length > 0 && (
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                      Backend
                    </span>
                    <FloatingDock items={project.skills.backend} />
                  </div>
                )}
              </motion.div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

              {/* Project content */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {project.content}
              </motion.div>
            </div>
          </ScrollArea>

        </ResponsiveDialogContent>
      </ResponsiveDialog>
    </div>
  );
};

export default ProjectsSection;
