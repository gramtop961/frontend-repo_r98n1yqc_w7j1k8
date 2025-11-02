import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="space-y-4">
          <span className="text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 dark:text-blue-200 dark:bg-blue-900/30 dark:border-blue-900/40">Get in touch</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Let’s build something great</h2>
          <p className="text-gray-600 md:text-lg dark:text-gray-300">
            I’m open to freelance work, full-time roles, and collaborations. Reach out and I’ll respond within a day.
          </p>

          <div className="mt-6 grid gap-3">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200 hover:border-gray-300 dark:bg-black/60 dark:border-white/10 dark:text-white">
              <Mail className="text-gray-700 dark:text-gray-200" size={18} /> hello@example.com
            </a>
            <a href="tel:+10000000000" className="inline-flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200 hover:border-gray-300 dark:bg-black/60 dark:border-white/10 dark:text-white">
              <Phone className="text-gray-700 dark:text-gray-200" size={18} /> +1 (000) 000-0000
            </a>
            <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200 dark:bg-black/60 dark:border-white/10 dark:text-white">
              <MapPin className="text-gray-700 dark:text-gray-200" size={18} /> Based in Remote / Worldwide
            </div>
            <div className="flex gap-2 pt-2">
              <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900"><Github size={18} /> GitHub</a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-gray-200 hover:border-gray-300 dark:bg-transparent dark:text-white dark:border-white/30 dark:hover:border-white/50"><Linkedin size={18} /> LinkedIn</a>
            </div>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-xl dark:bg-black/50 dark:border-white/10">
          <div className="grid gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
              <input id="name" type="text" placeholder="Your name" className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-black/60 dark:border-white/10 dark:text-white" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
              <input id="email" type="email" placeholder="you@email.com" className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-black/60 dark:border-white/10 dark:text-white" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
              <textarea id="message" rows={5} placeholder="Tell me about your project" className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-black/60 dark:border-white/10 dark:text-white" />
            </div>
            <button type="submit" className="inline-flex justify-center items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
              Send
            </button>
            <p className="text-xs text-gray-500 dark:text-gray-400">This demo form doesn’t submit anywhere yet. You can wire it to your favorite backend or just use the email link above.</p>
          </div>
        </form>
      </div>
    </section>
  );
}
