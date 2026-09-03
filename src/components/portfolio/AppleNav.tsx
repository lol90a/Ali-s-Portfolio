import { motion, useScroll, useTransform } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

function RustMark() {
  return (
    <span
      aria-hidden="true"
      className="relative grid size-8 place-items-center rounded-full text-[#F97316]"
    >
      <span className="absolute inset-0 rounded-full bg-[#F97316]/10 ring-1 ring-[#F97316]/35 shadow-[0_0_18px_rgba(249,115,22,0.22)]" />
      <svg
        viewBox="0 0 24 24"
        className="relative size-7 drop-shadow-[0_0_8px_rgba(249,115,22,0.35)]"
        fill="currentColor"
      >
        <path d="M12 1.6 13.1 4l2.6-1 .5 2.7 2.8.5-1 2.6 2.4 1.2-2.4 1.2 1 2.6-2.8.5-.5 2.7-2.6-1-1.1 2.4-1.1-2.4-2.6 1-.5-2.7-2.8-.5 1-2.6-2.4-1.2 2.4-1.2-1-2.6 2.8-.5.5-2.7 2.6 1L12 1.6Zm0 4.8a5.6 5.6 0 1 0 0 11.2 5.6 5.6 0 0 0 0-11.2Z" />
        <path
          fill="var(--background)"
          d="M9 8.4h4c1.5 0 2.5.8 2.5 2.2 0 .9-.5 1.6-1.4 1.9l1.6 2.9h-2.1l-1.4-2.5h-1.3v2.5H9V8.4Zm1.9 1.5v1.4h1.8c.6 0 .9-.3.9-.7s-.3-.7-.9-.7h-1.8Z"
        />
      </svg>
    </span>
  );
}

export function AppleNav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], [
    "rgba(0,0,0,0)",
    "var(--nav-bg-scrolled)" as unknown as string,
  ]);
  const border = useTransform(scrollY, [0, 80], [
    "rgba(0,0,0,0)",
    "var(--nav-border-scrolled)" as unknown as string,
  ]);

  return (
    <motion.nav
      style={{
        backgroundColor: bg as unknown as string,
        borderBottomColor: border as unknown as string,
      }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b"
    >
      <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between text-[13px] font-medium">
        <a href="#" className="inline-flex items-center gap-3 text-foreground/90">
          <RustMark />
          <span>Ali</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-foreground/70">
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#experience" className="hover:text-foreground transition-colors">
            Experience
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#contact" className="text-[#3B82F6] hover:text-foreground transition-colors">
            Hire me 
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
