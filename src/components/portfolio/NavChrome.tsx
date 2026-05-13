import { motion, useScroll, useTransform } from "framer-motion";

export function NavChrome() {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 100], [0, 20]);
  const bg = useTransform(scrollY, [0, 100], ["oklch(0.13 0.015 280 / 0)", "oklch(0.13 0.015 280 / 0.6)"]);

  return (
    <motion.nav
      style={{ backdropFilter: blur.get() ? `blur(${blur.get()}px)` : undefined, backgroundColor: bg }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="font-display italic text-2xl text-iri">A.</a>
        <div className="hidden md:flex items-center gap-10 font-mono text-xs tracking-[0.2em] uppercase">
          <a href="#about" className="hover:text-foreground/100 text-muted-foreground transition-colors">About</a>
          <a href="#skills" className="hover:text-foreground/100 text-muted-foreground transition-colors">Stack</a>
          <a href="#projects" className="hover:text-foreground/100 text-muted-foreground transition-colors">Work</a>
          <a href="#experience" className="hover:text-foreground/100 text-muted-foreground transition-colors">Path</a>
        </div>
        <a href="#contact" className="ring-iri rounded-full px-5 py-2 text-xs font-mono tracking-widest uppercase">
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
