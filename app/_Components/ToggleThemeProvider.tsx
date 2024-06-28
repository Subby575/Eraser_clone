// _Components/ToggleThemeProvider.tsx
"use client";

import { useState, useEffect } from 'react';

const ToggleThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <label className="switch fixed bottom-4 right-4 p-2 bg-gray-800 text-white rounded-full focus:outline-none z-50">
        <input type="checkbox" onClick={toggleDarkMode} checked={darkMode} />
        <span className="slider"></span>
      </label>
      {children}
    </>
  );
};

export default ToggleThemeProvider;
