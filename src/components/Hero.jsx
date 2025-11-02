import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient and vignette overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.8)_100%)]" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 md:px-8 w-full grid md:grid-cols-2 gap-8">
          <div className="backdrop-blur-sm bg-white/60 border border-white/60 rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="inline-flex items-center gap-2 text-sm text-blue-700 font-medium bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-4">
              <Rocket size={16} />
              Interactive Portfolio
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Crafting clean code and delightful experiences
            </h1>
            <p className="mt-4 text-gray-700 md:text-lg">
              I’m a software developer focused on building modern web apps with performance, accessibility, and a friendly UX at the core.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-gray-300">
                <Mail size={18} /> Contact Me
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-gray-900 border border-gray-200 hover:border-gray-300 transition focus:outline-none focus:ring-2 focus:ring-gray-200">
                View Projects
              </a>
              <div className="flex items-center gap-2 ml-auto md:ml-4">
                <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50">
                  <Github size={20} />
                </a>
                <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-end">
            <nav className="ml-auto backdrop-blur-sm bg-white/60 border border-white/60 rounded-2xl p-4 shadow-xl">
              <ul className="grid gap-2 text-sm text-gray-700">
                <li><a className="hover:text-gray-900" href="#about">About Me</a></li>
                <li><a className="hover:text-gray-900" href="#skills">Skills</a></li>
                <li><a className="hover:text-gray-900" href="#projects">Projects</a></li>
                <li><a className="hover:text-gray-900" href="#notes">Notes</a></li>
                <li><a className="hover:text-gray-900" href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
