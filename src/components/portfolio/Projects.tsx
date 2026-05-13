import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Github, Zap } from "lucide-react";
import { Section } from "./Section";

const PROJECTS = [
  {
    name: "Blockchain",
    tag: "JavaScript",
    short: "A JavaScript blockchain project focused on core chain mechanics.",
    long: "A JavaScript blockchain project focused on core chain mechanics and decentralized app foundations.",
    stack: ["JavaScript", "Blockchain"],
    metric: "May 2026",
    github: "https://github.com/lol90a/Blockchain",
  },
  {
    name: "Rust Multithreaded Web Server",
    tag: "Rust",
    short: "A Rust web server exploring threads and request handling.",
    long: "A Rust web server that explores thread pools, request handling, and low-level backend fundamentals.",
    stack: ["Rust", "Networking", "Concurrency"],
    metric: "Apr 2026",
    github: "https://github.com/lol90a/Rust-multithreaded-web-server",
  },
  {
    name: "RUST System Monitor CLI",
    tag: "Rust CLI",
    short: "A terminal system monitor built in Rust.",
    long: "A command-line system monitor built in Rust for tracking machine stats from the terminal.",
    stack: ["Rust", "CLI", "System Tools"],
    metric: "Apr 2026",
    github: "https://github.com/lol90a/RUST-system-monitor-CLI",
  },
  {
    name: "Solana Escrow Wallet",
    tag: "Solana",
    short: "A Rust-based escrow wallet project for Solana.",
    long: "A Solana escrow wallet project built around Rust smart contract and wallet interaction patterns.",
    stack: ["Rust", "Solana", "Wallets"],
    metric: "Apr 2026",
    github: "https://github.com/lol90a/Solana-Escrow-Wallet",
  },
  {
    name: "Rust CLI Todo App",
    tag: "Rust CLI",
    short: "A focused todo app for the terminal.",
    long: "A focused Rust command-line todo app for practicing state management, terminal input, and persistence.",
    stack: ["Rust", "CLI"],
    metric: "Apr 2026",
    github: "https://github.com/lol90a/Rust-CLI-Todo-App",
  },
  {
    name: "MVP Blockchain",
    tag: "Rust",
    short: "A Rust MVP blockchain implementation.",
    long: "A Rust MVP blockchain implementation for experimenting with blockchain architecture basics.",
    stack: ["Rust", "Blockchain"],
    metric: "Sep 2024",
    github: "https://github.com/lol90a/mvp_blockchain",
  },
];

export function Projects() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section
      id="projects"
      label="// 03 - projects"
      title={
        <>
          Public <span className="text-gradient">GitHub projects</span>
        </>
      }
    >
      <div className="grid md:grid-cols-2 gap-4">
        {PROJECTS.map((p, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={p.github}
              layout
              onClick={() => setOpen(isOpen ? null : i)}
              whileHover={{ y: -4 }}
              className={`relative glass-strong rounded-2xl p-6 cursor-pointer overflow-hidden group transition-shadow ${
                isOpen ? "glow-primary md:col-span-2" : ""
              }`}
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[var(--neon)]/10 blur-3xl group-hover:bg-[var(--violet)]/15 transition" />
              <motion.div layout="position" className="relative">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="text-xs font-mono text-[var(--cyan)] mb-1">
                      {p.tag}
                    </div>
                    <h3 className="text-2xl font-bold">{p.name}</h3>
                  </div>
                  <div className="glass rounded-lg px-3 py-1.5 text-xs font-mono flex items-center gap-1.5">
                    <Zap className="h-3 w-3 text-[var(--neon)]" /> {p.metric}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {isOpen ? p.long : p.short}
                </p>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 grid sm:grid-cols-3 gap-3">
                        {["source", "visibility", "updated"].map((k, idx) => (
                          <div key={k} className="glass rounded-lg p-3">
                            <div className="text-[10px] font-mono text-muted-foreground uppercase">
                              {k}
                            </div>
                            <div className="text-sm font-semibold text-gradient mt-1">
                              {["GitHub", "Public", p.metric][idx]}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex gap-2">
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 rounded-lg glass px-4 py-2 text-sm"
                        >
                          <Github className="h-3.5 w-3.5" /> GitHub
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-secondary/60 border border-border text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
