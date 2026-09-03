import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    name: "Blockchain",
    tag: "JavaScript",
    desc: "A JavaScript blockchain project focused on core chain mechanics and decentralized app foundations.",
    metric: "Updated May 2026",
    github: "https://github.com/lol90a/Blockchain",
  },
  {
    name: "Rust Multithreaded Web Server",
    tag: "Rust",
    desc: "A Rust web server that explores thread pools, request handling, and low-level backend fundamentals.",
    metric: "Updated Apr 2026",
    github: "https://github.com/lol90a/Rust-multithreaded-web-server",
  },
  {
    name: "RUST System Monitor CLI",
    tag: "Rust CLI",
    desc: "A command-line system monitor built in Rust for tracking machine stats from the terminal.",
    metric: "Updated Apr 2026",
    github: "https://github.com/lol90a/RUST-system-monitor-CLI",
  },
  {
    name: "Portfolio",
    tag: "TypeScript",
    desc: "A TypeScript portfolio project for presenting experience, projects, and contact channels.",
    metric: "Updated Apr 2026",
    github: "https://github.com/lol90a/Portfolio",
  },
  {
    name: "Solana Escrow Wallet",
    tag: "Rust",
    desc: "A Solana escrow wallet project built around Rust smart contract and wallet interaction patterns.",
    metric: "Updated Apr 2026",
    github: "https://github.com/lol90a/Solana-Escrow-Wallet",
  },
  {
    name: "Rust CLI Todo App",
    tag: "Rust CLI",
    desc: "A focused Rust command-line todo app for practicing state management, terminal input, and persistence.",
    metric: "Updated Apr 2026",
    github: "https://github.com/lol90a/Rust-CLI-Todo-App",
  },
  {
    name: "areo_ledger",
    tag: "TypeScript",
    desc: "A ledger-style TypeScript project for recording and presenting transaction-oriented data.",
    metric: "Updated Apr 2026",
    github: "https://github.com/lol90a/areo_ledger",
  },
  {
    name: "marketplace",
    tag: "JavaScript",
    desc: "A JavaScript marketplace project exploring product listing and web commerce flows.",
    metric: "Updated Dec 2024",
    github: "https://github.com/lol90a/marketplace",
  },

  {
    name: "MVP Blockchain",
    tag: "Rust",
    desc: "A Rust MVP blockchain implementation for experimenting with blockchain architecture basics.",
    metric: "Updated Sep 2024",
    github: "https://github.com/lol90a/mvp_blockchain",
  },
];

const experience = [
  {
    year: "june 2025 - Now",
    role: "Blockchain Developer",
    org: "Future Swords",
    desc: "",
  },
  
];

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function GithubButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="group/gh relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium overflow-hidden isolate"
    >
      <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] transition-transform duration-500 ease-out group-hover/gh:translate-y-0" />
      <Github className="h-4 w-4 transition-transform duration-500 group-hover/gh:rotate-[360deg] group-hover/gh:text-white" />
      <span className="transition-colors duration-500 group-hover/gh:text-white">GitHub</span>
      <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-500 group-hover/gh:translate-x-0 group-hover/gh:opacity-100 group-hover/gh:text-white" />
    </a>
  );
}

export function AppleSections() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <>
      <section id="about" className="relative px-6 py-40">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">
              About
            </p>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold tracking-tight leading-[1.05] text-gradient">
              Engineering quiet machines that move billions.
            </h2>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Two years across Rust, Solidity and distributed systems. I optimize for
              correctness first, throughput second - and developer joy throughout.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-16 glass-strong rounded-3xl p-10 grid grid-cols-3 gap-6 text-left">
              {[
                { k: "3+", v: "Years engineering" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-3xl md:text-4xl font-semibold text-white">{s.k}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="relative px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6 text-center">
              Projects
            </p>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold tracking-tight text-center text-gradient">
              Public work from GitHub.
            </h2>
          </Reveal>

          <div className="mt-20 grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.github} delay={i * 0.04}>
                <motion.div
                  onClick={() => setActive(active === i ? null : i)}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease }}
                  className="group glass-strong rounded-3xl p-8 cursor-pointer relative overflow-hidden h-full flex flex-col"
                >
                  <div className="absolute -top-20 -right-20 size-56 rounded-full bg-[#3B82F6]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="flex items-start justify-between gap-4 mb-6 relative">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        {p.tag}
                      </p>
                      <h3 className="text-3xl font-semibold mt-2">{p.name}</h3>
                    </div>
                    <span className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white/90 font-medium whitespace-nowrap">
                      {p.metric}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed relative flex-1">
                    {p.desc}
                  </p>
                  <div className="mt-6 flex items-center justify-between gap-4 relative">
                    <span className="text-xs text-muted-foreground">
                      {active === i ? "Featured" : "Tap to feature"}
                    </span>
                    <GithubButton href={p.github} />
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6 text-center">
              Experience
            </p>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold tracking-tight text-center text-gradient">
              A timeline of systems.
            </h2>
          </Reveal>

          <div className="mt-20 relative">
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <div className="space-y-10">
              {experience.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.05}>
                  <div
                    className={`relative grid md:grid-cols-2 gap-6 items-start ${
                      i % 2 ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="absolute left-3 md:left-1/2 -translate-x-1/2 top-2 size-3 rounded-full bg-[#3B82F6] shadow-[0_0_20px_#3B82F6]" />
                    <div
                      className={`pl-10 md:pl-0 ${
                        i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"
                      }`}
                    >
                      <div className="text-xs font-mono tracking-widest text-[#3B82F6]">
                        {t.year}
                      </div>
                      <div className="text-xl font-semibold mt-2">{t.role}</div>
                      <div className="text-sm text-muted-foreground">{t.org}</div>
                    </div>
                    <div
                      className={`pl-10 md:pl-0 ${
                        i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <div className="glass rounded-2xl p-5 text-sm text-muted-foreground inline-block text-left">
                        {t.desc}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative px-6 py-40">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6 text-center">
              Contact
            </p>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold tracking-tight text-center text-accent-gradient">
              Let's build something rare.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-16 grid md:grid-cols-2 gap-4">
              <a
                href="mailto:aliadel90906@gmail.com"
                className="glass-strong rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors group"
              >
                <div className="size-12 rounded-full bg-[#3B82F6]/20 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-[#3B82F6]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </div>
                  <div className="font-medium mt-1 group-hover:text-white">
                    aliadel90906@gmail.com
                  </div>
                </div>
              </a>
              <a
                href="https://wa.me/201042193800"
                target="_blank"
                rel="noreferrer"
                className="glass-strong rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors group"
              >
                <div className="size-12 rounded-full bg-[#3B82F6]/20 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-[#3B82F6]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    WhatsApp
                  </div>
                  <div className="font-medium mt-1 group-hover:text-white">
                    +20 1042193800
                  </div>
                </div>
              </a>
              <a
                href="https://github.com/lol90a"
                target="_blank"
                rel="noreferrer"
                className="glass-strong rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors group"
              >
                <div className="size-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    GitHub
                  </div>
                  <div className="font-medium mt-1 group-hover:text-white">@lol90a</div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/%F0%9F%A6%80ali-adel%F0%9F%A6%80-515688371"
                target="_blank"
                rel="noreferrer"
                className="glass-strong rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors group"
              >
                <div className="size-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    LinkedIn
                  </div>
                  <div className="font-medium mt-1 group-hover:text-white">Ali Adel</div>
                </div>
              </a>
              <a
                href="tel:+201042193800"
                className="glass-strong rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors group md:col-span-2"
              >
                <div className="size-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Phone
                  </div>
                  <div className="font-medium mt-1 group-hover:text-white">
                    +20 1042193800
                  </div>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 text-center">
              <a
                href="mailto:aliadel90906@gmail.com"
                className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#3B82F6] text-white font-medium overflow-hidden group/cta"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500" />
                <span className="relative">Start a conversation</span>
                <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="px-6 py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© 2026 Ali Adel - Crafted with Rust & reverence.</span>
          <div className="flex gap-6">
            <a
              href="https://github.com/lol90a"
              className="hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a
              href="mailto:aliadel90906@gmail.com"
              className="hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <Mail className="h-3.5 w-3.5" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/%F0%9F%A6%80ali-adel%F0%9F%A6%80-515688371"
              className="hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
