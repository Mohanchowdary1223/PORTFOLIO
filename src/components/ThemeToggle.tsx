"use client"
import { useTheme } from "next-themes"
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg text-foreground hover:text-primary transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <FiMoon className="w-5 h-5" /> : <FiSun className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle; 