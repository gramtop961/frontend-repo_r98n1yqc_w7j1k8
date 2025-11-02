import { Code, FileText, ExternalLink, User } from 'lucide-react';

function Card({ title, subtitle, children, bg, span = 'col-span-1 row-span-1' }) {
  return (
    <div className={`${span} group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg dark:bg-black/40 dark:border-white/10`}> 
      {bg && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'saturate(1.05)',
          }}
          aria-hidden
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent pointer-events-none" />
      <div className="relative p-5 md:p-6 h-full flex flex-col">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white text-lg md:text-xl font-bold drop-shadow-sm">{title}</h3>
            {subtitle && (
              <p className="text-white/80 text-sm md:text-base">{subtitle}</p>
            )}
          </div>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 text-gray-900 border border-white/70">
            <ExternalLink size={16} />
          </span>
        </div>
        <div className="mt-4 text-white/95 text-sm md:text-base leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function BentoGrid() {
  // Replace the bg URLs with your own images to personalize the bento cards
  const images = {
    about: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1600&auto=format&fit=crop',
    skills: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    project1: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop',
    project2: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
    project3: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
    notes: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
  };

  return (
    <section className="relative py-12 md:py-20" aria-label="Bento Portfolio">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="mb-8 md:mb-12">
          <span className="text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 dark:text-blue-200 dark:bg-blue-900/30 dark:border-blue-900/40">Bento Overview</span>
          <h2 id="about" className="mt-3 text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white">About, Skills, Projects, Notes</h2>
          <p className="mt-3 text-gray-600 md:text-lg dark:text-gray-300">A clean, responsive bento layout that lets your work shine. Swap in your own photos for a personal touch.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[160px] md:auto-rows-[220px] gap-4 md:gap-6">
          {/* About */}
          <Card
            title="About Me"
            subtitle="Who I am"
            bg={images.about}
            span="md:col-span-3 md:row-span-2"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/90 text-gray-900 border border-white/70">
                <User size={18} />
              </span>
              <p>
                I’m a full-stack developer who loves building performant, accessible products. Outside of code, I enjoy design systems and coffee.
              </p>
            </div>
          </Card>

          {/* Skills */}
          <Card
            title="Skills"
            subtitle="Toolbox"
            bg={images.skills}
            span="md:col-span-3 md:row-span-1"
          >
            <ul id="skills" className="grid grid-cols-2 gap-2 text-sm">
              <li className="inline-flex items-center gap-2"><Code size={16} /> React, TypeScript</li>
              <li className="inline-flex items-center gap-2"><Code size={16} /> Node, FastAPI</li>
              <li className="inline-flex items-center gap-2"><Code size={16} /> Tailwind CSS</li>
              <li className="inline-flex items-center gap-2"><Code size={16} /> MongoDB, SQL</li>
              <li className="inline-flex items-center gap-2"><Code size={16} /> Testing & QA</li>
              <li className="inline-flex items-center gap-2"><Code size={16} /> CI/CD, Cloud</li>
            </ul>
          </Card>

          {/* Project 1 */}
          <Card
            title="Project: Pulse"
            subtitle="Analytics Dashboard"
            bg={images.project1}
            span="md:col-span-2 md:row-span-2"
          >
            <div id="projects" className="space-y-3">
              <p>Realtime dashboards with role-based access and theme switching.</p>
              <div className="flex gap-2 text-sm">
                <a className="px-3 py-1.5 rounded-full bg-white/90 text-gray-900 border border-white/70 hover:bg-white" href="#" target="_blank" rel="noreferrer">Live</a>
                <a className="px-3 py-1.5 rounded-full bg-white/90 text-gray-900 border border-white/70 hover:bg-white" href="#" target="_blank" rel="noreferrer">Code</a>
              </div>
              <ul className="grid gap-1 text-sm list-disc list-inside">
                <li>Realtime charts</li>
                <li>Access controls</li>
              </ul>
            </div>
          </Card>

          {/* Project 2 */}
          <Card
            title="Project: Canvas"
            subtitle="Design System Kit"
            bg={images.project2}
            span="md:col-span-2 md:row-span-2"
          >
            <div className="space-y-3">
              <p>Composable UI primitives with tokens, theming, and docs site.</p>
              <div className="flex gap-2 text-sm">
                <a className="px-3 py-1.5 rounded-full bg-white/90 text-gray-900 border border-white/70 hover:bg-white" href="#" target="_blank" rel="noreferrer">Live</a>
                <a className="px-3 py-1.5 rounded-full bg-white/90 text-gray-900 border border-white/70 hover:bg-white" href="#" target="_blank" rel="noreferrer">Code</a>
              </div>
              <ul className="grid gap-1 text-sm list-disc list-inside">
                <li>Dark/light themes</li>
                <li>Accessible components</li>
              </ul>
            </div>
          </Card>

          {/* Project 3 */}
          <Card
            title="Project: Orbit"
            subtitle="3D Product Showcase"
            bg={images.project3}
            span="md:col-span-2 md:row-span-2"
          >
            <div className="space-y-3">
              <p>Interactive 3D scenes with smooth camera controls and hotspots.</p>
              <div className="flex gap-2 text-sm">
                <a className="px-3 py-1.5 rounded-full bg-white/90 text-gray-900 border border-white/70 hover:bg-white" href="#" target="_blank" rel="noreferrer">Live</a>
                <a className="px-3 py-1.5 rounded-full bg-white/90 text-gray-900 border border-white/70 hover:bg-white" href="#" target="_blank" rel="noreferrer">Code</a>
              </div>
              <ul className="grid gap-1 text-sm list-disc list-inside">
                <li>Spline integration</li>
                <li>Responsive motion</li>
              </ul>
            </div>
          </Card>

          {/* Notes */}
          <Card
            title="Notes"
            subtitle="Thoughts & Learnings"
            bg={images.notes}
            span="md:col-span-2 md:row-span-2"
          >
            <div id="notes" className="space-y-2">
              <article className="p-3 rounded-lg bg-white/10 border border-white/20">
                <h4 className="font-semibold">Design tokens and scale</h4>
                <p className="text-sm text-white/90">How I map product semantics to adaptable design primitives.</p>
              </article>
              <article className="p-3 rounded-lg bg-white/10 border border-white/20">
                <h4 className="font-semibold">Fast API patterns</h4>
                <p className="text-sm text-white/90">Faster endpoints with caching, pagination, and Pydantic.</p>
              </article>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm underline decoration-white/50 hover:decoration-white">
                <FileText size={16} /> See more
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
