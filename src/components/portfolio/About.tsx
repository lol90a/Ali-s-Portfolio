import { motion } from "framer-motion";
import { Section } from "./Section";
import { Cpu, Layers, Network, Shield } from "lucide-react";

const PILLARS = [
  { icon: Cpu, title: "Rust-first", desc: "Zero-cost abstractions, async Tokio runtimes, WASM-ready services." },
  { icon: Network, title: "Web3 native", desc: "EVM, Solana Anchor, ICP. Smart contracts to indexers." },
  { icon: Layers, title: "Distributed", desc: "Microservices, event streams, sharded state across regions." },
  { icon: Shield, title: "Production-grade", desc: "Audited contracts, observability, hardened deployment." },
];

export function About() {
  return (
    <Section
      id="about"
      label="// 01 — about"
      title={<>Engineer behind <span className="text-gradient">production Web3</span></>}
    >
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10">
        <p className="text-lg text-muted-foreground leading-relaxed">
          I design and ship high-performance backends for blockchain and DeFi
          systems. My work spans Rust microservices handling real-time market
          data, smart contracts deployed across EVM and Solana, and the
          distributed infrastructure that keeps them honest at scale.
          <br />
          <br />
          I care about correctness, latency, and clean systems thinking —
          building the kind of crypto infrastructure that survives a bull
          market, not just a demo.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl p-5 hover:border-[var(--neon)]/40 hover:-translate-y-1 transition"
            >
              <p.icon className="h-5 w-5 text-[var(--neon)] mb-3" />
              <div className="font-semibold mb-1">{p.title}</div>
              <div className="text-sm text-muted-foreground">{p.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
