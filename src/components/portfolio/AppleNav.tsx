import { motion, useScroll, useTransform } from "framer-motion";
import rustLogo from "@/assets/rust-logo.svg";
import { ThemeToggle } from "./ThemeToggle";

function RustMark() {
  return (
    <span
      aria-hidden="true"
      className="grid size-10 shrink-0 place-items-center rounded-full bg-[#F97316]/10 ring-1 ring-[#F97316]/45 shadow-[0_0_24px_rgba(249,115,22,0.35)]"
    >
      <img src={rustLogo} alt="" className="size-8 object-contain" />
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
        <a href="#" className="inline-flex items-center gap-3.5 text-foreground/90">
          <RustMark />
          <span className="text-[14px] font-semibold">Ali</span>
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
