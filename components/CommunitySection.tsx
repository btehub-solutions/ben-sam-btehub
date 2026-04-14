"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { communityItems } from "@/data/community";
import {
  FiMic,
  FiBookOpen,
  FiCode,
  FiUsers,
  FiHeart,
  FiExternalLink,
} from "react-icons/fi";

const typeIcons: Record<string, React.ElementType> = {
  talk: FiMic,
  article: FiBookOpen,
  workshop: FiCode,
  "open-source": FiCode,
  mentorship: FiUsers,
};

const typeLabels: Record<string, string> = {
  talk: "Conference Talk",
  article: "Article / Newsletter",
  workshop: "Workshop",
  "open-source": "Open Source",
  mentorship: "Mentorship",
};

const typeColors: Record<string, string> = {
  talk: "text-accent-violet bg-accent-violet/10 border-accent-violet/20",
  article: "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20",
  workshop: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "open-source": "text-orange-400 bg-orange-400/10 border-orange-400/20",
  mentorship: "text-pink-400 bg-pink-400/10 border-pink-400/20",
};

export default function CommunitySection() {
  return (
    <SectionWrapper id="community">
      <SectionHeading
        title="Community & Impact"
        subtitle="Giving back through teaching, speaking, and open source"
      />

      <div className="max-w-4xl mx-auto space-y-5">
        {communityItems.map((item, index) => {
          const Icon = typeIcons[item.type] || FiHeart;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex gap-4 p-6 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-accent-violet/30 transition-all duration-300 glow-card"
            >
              {/* Icon */}
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5 text-accent-violet" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-base font-display font-bold text-text-primary-light dark:text-text-primary-dark group-hover:text-accent-violet transition-colors">
                    {item.title}
                  </h3>
                  <span
                    className={`px-2 py-0.5 rounded-md text-xs font-mono border ${typeColors[item.type]}`}
                  >
                    {typeLabels[item.type]}
                  </span>
                </div>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark font-body leading-relaxed mb-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-text-muted-light dark:text-text-muted-dark">
                    {item.date}
                  </span>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-accent-violet hover:text-accent-cyan transition-colors"
                    >
                      View
                      <FiExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
