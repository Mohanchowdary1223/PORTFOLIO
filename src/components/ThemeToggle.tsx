"use client"
import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg text-foreground hover:text-primary dark:text-foreground dark:hover:text-primary transition-colors"
      aria-label="Toggle theme"
    >
      {darkMode ? <FiMoon className="w-5 h-5" /> : <FiSun className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle; 