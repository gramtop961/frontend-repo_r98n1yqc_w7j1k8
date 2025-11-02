import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, Rocket, Sun, Moon } from 'lucide-react';

export default function Hero() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('theme', next);
  };

  return (
    <section id="home" className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient and vignette overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80 dark:from-black/60 dark:via-black/20 dark:to-black/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.8)_100%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_40%,rgba(0,0,0,0.7)_100%)]" />

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 text-gray-900 backdrop-blur-sm px-3 py-2 shadow-md hover:bg-white dark:bg-black/60 dark:text-white dark:border-white/20"
      >
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        <span className="hidden sm:inline text-sm font-medium">{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
      </button>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 md:px-8 w-full grid md:grid-cols-2 gap-8">
          <div className="backdrop-blur-sm bg-white/60 border border-white/60 rounded-2xl p-6 md:p-8 shadow-xl dark:bg-black/50 dark:border-white/20">
            <div className="inline-flex items-center gap-2 text-sm text-blue-700 font-medium bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-4 dark:text-blue-200 dark:bg-blue-900/30 dark:border-blue-900/40">
              <Rocket size={16} />
              Interactive Portfolio
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Crafting clean code and delightful experiences
            </h1>
            <p className="mt-4 text-gray-700 md:text-lg dark:text-gray-200">
              I’m a software developer focused on building modern web apps with performance, accessibility, and a friendly UX at the core.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
                <Mail size={18} /> Contact Me
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-gray-900 border border-gray-200 hover:border-gray-300 transition focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-transparent dark:text-white dark:border-white/30 dark:hover:border-white/50">
                View Projects
              </a>
              <div className="flex items-center gap-2 ml-auto md:ml-4">
                <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 dark:bg-black/60 dark:border-white/20 dark:text-white">
                  <Github size={20} />
                </a>
                <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 dark:bg-black/60 dark:border-white/20 dark:text-white">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-end">
            <nav className="ml-auto backdrop-blur-sm bg-white/60 border border-white/60 rounded-2xl p-4 shadow-xl dark:bg-black/50 dark:border-white/20">
              <ul className="grid gap-2 text-sm text-gray-700 dark:text-gray-200">
                <li><a className="hover:text-gray-900 dark:hover:text-white" href="#about">About Me</a></li>
                <li><a className="hover:text-gray-900 dark:hover:text-white" href="#skills">Skills</a></li>
                <li><a className="hover:text-gray-900 dark:hover:text-white" href="#projects">Projects</a></li>
                <li><a className="hover:text-gray-900 dark:hover:text-white" href="#notes">Notes</a></li>
                <li><a className="hover:text-gray-900 dark:hover:text-white" href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
