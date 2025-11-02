export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 bg-white dark:bg-black dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-600 dark:text-gray-300">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a className="hover:text-gray-900 dark:hover:text-white" href="#home">Home</a>
          <a className="hover:text-gray-900 dark:hover:text-white" href="#about">About</a>
          <a className="hover:text-gray-900 dark:hover:text-white" href="#projects">Projects</a>
          <a className="hover:text-gray-900 dark:hover:text-white" href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
