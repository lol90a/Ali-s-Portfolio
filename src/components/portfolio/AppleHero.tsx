import { motion, useScroll, useTransform } from "framer-motion";
import { lazy, Suspense, useRef, useEffect } from "react";

const Scene3D = lazy(() =>
  import("./Scene3D").then((module) => ({ default: module.Scene3D })),
);

export function AppleHero() {
  const mouse = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex items-center justify-center px-6 overflow-hidden">
      <motion.div style={{ opacity, scale }} className="absolute inset-0">
        <Suspense fallback={null}>
          <Scene3D mouse={mouse} />
        </Suspense>
      </motion.div>
      <div className="absolute inset-0 bg-vignette pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[40rem] rounded-full bg-[#3B82F6]/15 blur-[120px] apple-glow pointer-events-none" />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-8"
        >
          Portfolio · 2026
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.95] tracking-tight text-accent-gradient"
        >
          Rust Blockchain<br />Developer.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light"
        >
          Building high-performance decentralized systems.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex items-center justify-center gap-3"
        >
          <a href="#projects" className="px-7 py-3 rounded-full bg-[#3B82F6] text-white font-medium text-base hover:bg-[#3B82F6]/90 transition-colors">
            Explore Work
          </a>
          <a href="#contact" className="px-7 py-3 rounded-full glass font-medium text-base hover:bg-white/10 transition-colors">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase text-muted-foreground"
      >
        Scroll
      </motion.div>
    </section>
  );
}
