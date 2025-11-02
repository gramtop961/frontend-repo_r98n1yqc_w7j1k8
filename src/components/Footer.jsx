export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a className="hover:text-gray-900" href="#home">Home</a>
          <a className="hover:text-gray-900" href="#about">About</a>
          <a className="hover:text-gray-900" href="#projects">Projects</a>
          <a className="hover:text-gray-900" href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
