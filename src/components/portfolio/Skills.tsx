import { motion } from "framer-motion";
import { Section } from "./Section";
import { useState } from "react";

const CATS = [
  {
    key: "rust",
    icon: "🦀",
    name: "Rust Ecosystem",
    color: "var(--neon)",
    skills: [
      { n: "Actix-web", l: 95 },
      { n: "Axum", l: 92 },
      { n: "Tokio", l: 94 },
      { n: "Solana Anchor", l: 90 },
      { n: "WASM", l: 85 },
    ],
  },
  {
    key: "chain",
    icon: "⛓",
    name: "Blockchain",
    color: "var(--violet)",
    skills: [
      { n: "Solidity", l: 92 },
      { n: "EVM (ETH/Polygon/BSC)", l: 95 },
      { n: "Smart Contracts", l: 93 },
      { n: "DeFi Architecture", l: 88 },
      { n: "Cross-chain Systems", l: 84 },
    ],
  },
  {
    key: "sys",
    icon: "⚙",
    name: "Backend / Systems",
    color: "var(--cyan)",
    skills: [
      { n: "Microservices", l: 92 },
      { n: "PostgreSQL", l: 90 },
      { n: "Redis", l: 88 },
      { n: "Distributed Systems", l: 89 },
      { n: "Node.js (support)", l: 82 },
    ],
  },
  {
    key: "ai",
    icon: "🤖",
    name: "Tools & AI",
    color: "var(--neon)",
    skills: [
      { n: "RAG Systems", l: 87 },
      { n: "Vector Databases", l: 85 },
      { n: "AI in Web3", l: 84 },
      { n: "LLM Integration", l: 86 },
    ],
  },
];

export function Skills() {
  const [active, setActive] = useState(0);
  return (
    <Section
      id="skills"
      label="// 02 — skills matrix"
      title={<>Stack <span className="text-gradient">across the stack</span></>}
    >
      <div className="grid md:grid-cols-4 gap-3 mb-6">
        {CATS.map((c, i) => (
          <button
            key={c.key}
            onClick={() => setActive(i)}
            className={`glass rounded-xl p-4 text-left transition hover:-translate-y-1 ${
              active === i ? "border-[color:var(--neon)]/60 glow-primary" : ""
            }`}
          >
            <div className="text-2xl mb-2">{c.icon}</div>
            <div className="font-semibold text-sm">{c.name}</div>
            <div className="text-xs font-mono text-muted-foreground mt-1">
              {c.skills.length} modules
            </div>
          </button>
        ))}
      </div>
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-strong rounded-2xl p-6 md:p-8"
      >
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
          {CATS[active].skills.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="flex justify-between font-mono text-sm mb-1.5">
                <span>{s.n}</span>
                <span className="text-muted-foreground">{s.l}%</span>
              </div>
              <div className="h-1.5 bg-secondary/60 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${s.l}%` }}
                  transition={{ duration: 1, delay: 0.1 + i * 0.06, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[var(--cyan)] via-[var(--neon)] to-[var(--violet)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
