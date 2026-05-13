import { motion } from "framer-motion";
import { LiquidChrome3D } from "./LiquidChrome3D";

const stack = ["RUST", "SOLIDITY", "ANCHOR", "EVM", "SOLANA", "ICP", "ZK", "WASM", "TOKIO", "FOUNDRY"];

export function HeroChrome() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-32 pb-24 overflow-hidden">
      {/* 3D canvas */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-90">
          <LiquidChrome3D />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_85%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono tracking-widest mb-8"
          >
            <span className="size-2 rounded-full bg-iri animate-pulse" />
            AVAILABLE · Q2 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.9] tracking-tight"
          >
            <span className="block italic text-iri">Liquid</span>
            <span className="block">protocols,</span>
            <span className="block italic text-iri">forged</span>
            <span className="block">in Rust.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Senior engineer architecting high-throughput backends, smart contracts and decentralized
            infrastructure across <span className="text-foreground">EVM</span>,{" "}
            <span className="text-foreground">Solana</span> and{" "}
            <span className="text-foreground">ICP</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="ring-iri rounded-full px-7 py-3.5 bg-background/40 backdrop-blur-md font-medium hover:bg-background/60 transition-colors"
            >
              View Work →
            </a>
            <a
              href="#contact"
              className="rounded-full px-7 py-3.5 glass-strong font-medium hover:translate-y-[-2px] transition-transform"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        <div className="md:col-span-5 hidden md:block" />
      </div>

      {/* Marquee */}
      <div className="absolute bottom-6 left-0 right-0 overflow-hidden mask-fade">
        <div className="flex gap-12 marquee whitespace-nowrap font-mono text-sm tracking-[0.3em] text-muted-foreground/70">
          {[...stack, ...stack].map((s, i) => (
            <span key={i} className="flex items-center gap-12">
              {s}
              <span className="size-1.5 rounded-full bg-iri" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
