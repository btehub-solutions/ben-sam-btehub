"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-[36px] h-[36px] rounded-full border border-light-border dark:border-dark-border" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-[36px] h-[36px] rounded-full border border-light-border dark:border-dark-border bg-transparent focus:outline-none"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute flex items-center justify-center"
          >
            <RiMoonLine className="w-5 h-5 text-text-primary-dark" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute flex items-center justify-center"
          >
            <RiSunLine className="w-5 h-5 text-text-primary-light" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
