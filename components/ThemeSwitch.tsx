"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

const ThemeSwitch = () => {
  const [hasMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!hasMounted) {
    return <div className="hidden w-10 h-10" />;
  }

  return (
    <>
      <button type="button" aria-label="Toggle Dark Mode" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="bg-background">
        <div>{theme === "dark" ? <Moon /> : <Sun />}</div>
      </button>
    </>
  );
};

export default ThemeSwitch;
