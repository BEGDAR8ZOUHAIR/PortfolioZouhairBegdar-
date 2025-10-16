"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const storageKey = "prefers-theme";

type Theme = "light" | "dark";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  // Read persisted theme or system preference
  useEffect(() => {
    const stored = (localStorage.getItem(storageKey) as Theme | null);
    if (stored) {
      applyTheme(stored);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(prefersDark ? "dark" : "light");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const applyTheme = (t: Theme) => {
    setTheme(t);
    const root = document.documentElement;
    if (t === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem(storageKey, t);
  };

  const toggle = () => applyTheme(theme === "dark" ? "light" : "dark");

  return (
    <motion.button
      onClick={toggle}
      className="relative inline-flex h-10 w-16 items-center rounded-full border border-[color:var(--border)] bg-[color:var(--muted)] px-1 text-xs text-[color:var(--foreground)] shadow-sm"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <motion.span
        className="absolute left-1 top-1 h-8 w-8 rounded-full bg-white dark:bg-zinc-900 border border-[color:var(--border)] flex items-center justify-center"
        layout
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        style={{ x: theme === "dark" ? 0 : 24 }}
      >
        {theme === "dark" ? (
          // Moon
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        ) : (
          // Sun
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        )}
      </motion.span>
    </motion.button>
  );
};

export default ThemeToggle;
