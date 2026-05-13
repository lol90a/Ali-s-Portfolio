import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Moon, Sun, Terminal } from "lucide-react";

const links = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "contact", label: "contact" },
];

export function Nav() {
  const [dark, setDark] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50 bg-gradient-to-r from-[var(--cyan)] via-[var(--neon)] to-[var(--violet)]"
      />
      <header className="fixed top-3 left-1/2 -translate-x-1/2 z-40 w-[min(960px,calc(100%-1.5rem))]">
        <div className="glass-strong rounded-2xl px-4 py-2.5 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm">
            <Terminal className="h-4 w-4 text-[var(--neon)]" />
            <span className="text-gradient font-semibold">ali.adel</span>
            <span className="text-muted-foreground">::rust</span>
          </a>
          <nav className="hidden md:flex items-center gap-1 text-xs font-mono">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg hover:bg-secondary/60 transition"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </header>
    </>
  );
}
