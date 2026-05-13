import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";

const ROLES = [
  "Rust & Blockchain Engineer",
  "Smart Contract Architect",
  "Web3 Infrastructure Builder",
  "Distributed Systems Engineer",
];

const CODE = `#[program]
pub mod vulcan {
  use anchor_lang::prelude::*;
  pub fn execute(ctx: Context<Tx>, amt: u64) -> Result<()> {
    require!(amt > 0, Err::ZeroAmount);
    ctx.accounts.vault.balance += amt;
    emit!(Settled { amt, slot: Clock::get()?.slot });
    Ok(())
  }
}`;

function Typewriter() {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const role = ROLES[i % ROLES.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del && txt === role) {
        setTimeout(() => setDel(true), 1500);
        return;
      }
      if (del && txt === "") {
        setDel(false);
        setI((v) => v + 1);
        return;
      }
      setTxt(del ? role.slice(0, txt.length - 1) : role.slice(0, txt.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [txt, del, i]);

  return <span className="cursor-blink">{txt}</span>;
}

const METRICS = [
  { l: "TPS peak", v: "65k" },
  { l: "Gas saved", v: "42%" },
  { l: "Latency p99", v: "8ms" },
  { l: "Uptime", v: "99.99%" },
];

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-mono mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)] animate-pulse-glow" />
            <span className="text-muted-foreground">SYSTEM_ONLINE</span>
            <span className="text-[var(--cyan)]">// available for senior roles</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Ali Adel
            <br />
            <span className="text-gradient glow-text">{" "}<Typewriter /></span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            Building high-performance decentralized systems & Web3 infrastructure.
            Rust at the core. EVM, Solana, and ICP at the edges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--cyan)] via-[var(--neon)] to-[var(--violet)] text-primary-foreground font-medium px-5 py-3 glow-primary hover:scale-[1.02] transition"
            >
              View Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl glass-strong px-5 py-3 hover:border-[var(--neon)]/40 transition"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl glass-strong px-5 py-3 hover:border-[var(--violet)]/40 transition"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.l}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="glass rounded-xl px-4 py-3"
              >
                <div className="text-xs font-mono text-muted-foreground">{m.l}</div>
                <div className="text-xl font-semibold text-gradient">{m.v}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: code panel + node graph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative"
        >
          <NodeGlobe />
          <div className="relative glass-strong rounded-2xl p-4 mt-6 shadow-[var(--shadow-elevated)] overflow-hidden">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-2 text-xs font-mono text-muted-foreground">
                vulcan/programs/lib.rs
              </span>
            </div>
            <pre className="text-xs font-mono leading-relaxed text-foreground/90 overflow-hidden">
              <code>{CODE}</code>
            </pre>
            <div className="absolute inset-0 shimmer pointer-events-none opacity-40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function NodeGlobe() {
  const nodes = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2;
    return { x: Math.cos(a) * 110, y: Math.sin(a) * 110, i };
  });
  return (
    <div className="relative h-64 flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="relative h-64 w-64"
      >
        <div className="absolute inset-0 rounded-full border border-[var(--neon)]/20" />
        <div className="absolute inset-4 rounded-full border border-[var(--violet)]/15" />
        <div className="absolute inset-10 rounded-full border border-[var(--cyan)]/15" />
        <svg className="absolute inset-0 h-full w-full" viewBox="-128 -128 256 256">
          {nodes.map((n, idx) =>
            nodes.slice(idx + 1).map((m, j) => (
              <line
                key={`${idx}-${j}`}
                x1={n.x}
                y1={n.y}
                x2={m.x}
                y2={m.y}
                stroke="oklch(0.78 0.2 230 / 0.15)"
                strokeWidth="0.5"
              />
            ))
          )}
          {nodes.map((n) => (
            <circle key={n.i} cx={n.x} cy={n.y} r="3" fill="oklch(0.85 0.16 200)" />
          ))}
          <circle cx="0" cy="0" r="6" fill="oklch(0.78 0.2 230)" />
        </svg>
      </motion.div>
      <div className="absolute inset-0 rounded-full bg-[var(--neon)]/10 blur-3xl -z-10" />
    </div>
  );
}
