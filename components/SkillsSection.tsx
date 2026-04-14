"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import SkillBadge from "./SkillBadge";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <SectionWrapper id="skills">
      <SectionHeading
        title="Skills & Technologies"
        subtitle="The tools and technologies I use to bring ideas to life"
      />

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {skillCategories.map((category, index) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(index)}
            className={`px-4 py-2 rounded-xl text-sm font-body transition-all duration-300 ${
              activeCategory === index
                ? "bg-accent-violet text-white shadow-lg shadow-accent-violet/25"
                : "bg-light-card dark:bg-dark-card text-text-muted-light dark:text-text-muted-dark border border-light-border dark:border-dark-border hover:border-accent-violet/30"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-5 p-6 md:p-8 rounded-2xl bg-light-card/50 dark:bg-dark-card/50 border border-light-border dark:border-dark-border">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              level={skill.level}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      {/* All Skills Cloud */}
      <div className="mt-16 text-center">
        <p className="text-sm text-text-muted-light dark:text-text-muted-dark font-body mb-6">
          All Technologies
        </p>
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {skillCategories
            .flatMap((cat) => cat.skills)
            .map((skill, i) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-xs font-mono text-text-muted-light dark:text-text-muted-dark hover:text-accent-violet hover:border-accent-violet/30 transition-colors cursor-default"
              >
                {skill.name}
              </motion.span>
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
