import { motion } from "framer-motion";

const skills = [
  { group: "Rust", items: ["tokio", "axum", "actix", "wasm-bindgen", "serde", "sqlx"] },
  { group: "Blockchain", items: ["Solidity", "Anchor", "Foundry", "Hardhat", "Viem", "Ethers"] },
  { group: "Chains", items: ["Ethereum", "Solana", "ICP", "Polygon", "Arbitrum", "Base"] },
  { group: "Infra", items: ["PostgreSQL", "Redis", "Kafka", "Docker", "K8s", "AWS"] },
];

const projects = [
  { name: "Helios DEX", tag: "Solana · Anchor", desc: "Sub-second AMM with concentrated liquidity. 12k TPS observed.", metric: "$48M TVL" },
  { name: "Aether Bridge", tag: "EVM ↔ Solana", desc: "Trust-minimized cross-chain messaging via light clients.", metric: "210k tx" },
  { name: "Forge Engine", tag: "Rust · WASM", desc: "Embedded smart-contract VM with deterministic gas metering.", metric: "0.4ms exec" },
  { name: "Nimbus Index", tag: "ICP · Rust", desc: "On-chain indexer streaming reorg-safe events to subscribers.", metric: "99.99% up" },
];

const experience = [
  { year: "2024", role: "Lead Protocol Engineer", co: "Stealth DeFi" },
  { year: "2022", role: "Senior Rust Engineer", co: "Layer-1 Foundation" },
  { year: "2020", role: "Smart Contract Engineer", co: "DeFi Collective" },
  { year: "2018", role: "Backend Engineer", co: "Fintech Scale-up" },
];

export function ContentSections() {
  return (
    <>
      {/* About */}
      <section id="about" className="relative px-6 md:px-12 py-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">/ ABOUT</p>
            <h2 className="font-display italic text-4xl md:text-5xl text-iri">Engineer / Architect</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 text-lg leading-relaxed text-foreground/90">
            <p>
              I build the invisible machinery behind decentralized systems — protocol cores,
              consensus glue, smart contracts and the backend rails that make them feel instant.
            </p>
            <p className="mt-6 text-muted-foreground">
              Two years across Rust, Solidity and distributed systems. I optimize for
              correctness first, throughput second, and developer joy throughout.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">/ STACK</p>
          <h2 className="font-display italic text-4xl md:text-5xl mb-14">A polished toolkit.</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {skills.map((s, i) => (
              <motion.div
                key={s.group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="ring-iri rounded-2xl p-6 glass relative overflow-hidden"
              >
                <h3 className="font-display text-2xl italic mb-4">{s.group}</h3>
                <ul className="space-y-1.5 font-mono text-sm text-muted-foreground">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-iri" /> {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative px-6 md:px-12 py-32">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">/ WORK</p>
          <h2 className="font-display italic text-4xl md:text-5xl mb-14">Selected protocols.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.a
                key={p.name}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group ring-iri rounded-3xl p-8 glass-strong relative overflow-hidden block hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div>
                    <p className="font-mono text-xs text-muted-foreground tracking-widest">{p.tag}</p>
                    <h3 className="font-display italic text-3xl mt-1">{p.name}</h3>
                  </div>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-iri text-background font-bold">{p.metric}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="absolute -bottom-20 -right-20 size-48 rounded-full bg-iri opacity-20 blur-3xl group-hover:opacity-40 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">/ TIMELINE</p>
          <h2 className="font-display italic text-4xl md:text-5xl mb-14">Two years, four chapters.</h2>
          <div className="space-y-2">
            {experience.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="grid grid-cols-12 gap-4 py-6 border-t border-border group hover:border-foreground/30 transition-colors"
              >
                <div className="col-span-2 font-mono text-sm text-muted-foreground">{e.year}</div>
                <div className="col-span-7 font-display italic text-2xl md:text-3xl">{e.role}</div>
                <div className="col-span-3 text-right text-muted-foreground self-end">{e.co}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative px-6 md:px-12 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">/ CONTACT</p>
          <h2 className="font-display italic text-5xl md:text-7xl text-iri leading-[0.95]">
            Let's build<br />something rare.
          </h2>
          <p className="mt-8 text-muted-foreground max-w-xl mx-auto">
            Open to protocol leads, deep technical advisory and architecture consulting.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-block mt-10 ring-iri rounded-full px-10 py-4 bg-background/40 backdrop-blur-md font-medium text-lg"
          >
            hello@example.com →
          </a>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-10 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <span>© 2026 — Crafted in Rust & Reverie</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">GitHub</a>
            <a href="#" className="hover:text-foreground">X</a>
            <a href="#" className="hover:text-foreground">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}
