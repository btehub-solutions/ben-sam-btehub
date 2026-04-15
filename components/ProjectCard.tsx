"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { RiGithubFill } from "react-icons/ri";
import { Project } from "@/data/projects";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const domainColorMap: Record<string, string> = {
  "Generative AI": "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
  "AI Application": "bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/20",
  "Web Application": "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const domainStyle =
    domainColorMap[project.category] ||
    "bg-accent-violet/10 text-accent-violet/70 border-accent-violet/20";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px -5% 0px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 1, 0.5, 1] 
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-accent-violet/10 glow-card transform-gpu backface-hidden"
      style={{
        transitionProperty: "border-color, box-shadow",
        transitionDuration: "300ms",
        transitionTimingFunction: "ease-out"
      }}
    >
      {/* Project Image / Gradient Header */}
      <div className="relative h-48 overflow-hidden bg-dark-bg/50 transform-gpu">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out transform-gpu"
              loading="lazy"
            />
            {/* Overlay Gradient for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-card/90 via-dark-card/20 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/20 via-accent-cyan/10 to-accent-violet/5 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-accent-violet/20 border border-accent-violet/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-display font-bold gradient-text">
                {project.title
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </span>
            </div>
          </div>
        )}

        {/* Category Badge - Always visible on top of image/gradient */}
        <div className="absolute bottom-4 left-4 z-10">
          <span
            className={`text-[10px] uppercase tracking-wider font-mono px-2.5 py-1 rounded-md border backdrop-blur-md ${domainStyle} ${
              project.image
                ? "bg-dark-card/60"
                : "bg-accent-violet/5"
            }`}
          >
            {project.category}
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-lg bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan text-[10px] font-mono backdrop-blur-md">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-text-primary-light dark:text-text-primary-dark mb-2 group-hover:text-accent-violet transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-text-muted-light dark:text-text-muted-dark font-body leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md bg-light-bg dark:bg-dark-bg text-xs font-mono text-text-muted-light dark:text-text-muted-dark border border-light-border dark:border-dark-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-light-border dark:border-dark-border">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-body text-text-muted-light dark:text-text-muted-dark hover:text-accent-violet transition-colors duration-300"
            >
              <RiGithubFill className="w-5 h-5" />
              Source Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-body text-text-muted-light dark:text-text-muted-dark hover:text-accent-cyan transition-colors duration-300"
            >
              <FiExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          <div className="ml-auto">
            <FiArrowUpRight className="w-5 h-5 text-text-muted-light dark:text-text-muted-dark group-hover:text-accent-violet group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

