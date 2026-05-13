import { motion } from "framer-motion";
import { Section } from "./Section";

const TL = [
  {
    year: "2024 — Now",
    role: "Senior Rust & Blockchain Engineer",
    org: "Independent / VulcanX",
    desc: "Designing L1 infrastructure, settlement engines, and Solana programs. Cross-chain bridges on ICP.",
  },
  {
    year: "2022 — 2024",
    role: "Smart Contract Engineer",
    org: "DeFi Protocol",
    desc: "Solidity contracts for lending and AMMs across Ethereum and Polygon. Audited and deployed at $100M+ TVL.",
  },
  {
    year: "2020 — 2022",
    role: "Backend Engineer",
    org: "Fintech",
    desc: "Rust + Node.js microservices for real-time market data, ledgering, and risk engines.",
  },
  {
    year: "2018 — 2020",
    role: "Systems Developer",
    org: "Healthcare IoT",
    desc: "Hyperledger Fabric chaincode for medical device registry and attestation.",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      label="// 04 — experience"
      title={<>Mission <span className="text-gradient">timeline</span></>}
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--neon)]/40 to-transparent" />
        <div className="space-y-10">
          {TL.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className={`relative grid md:grid-cols-2 gap-4 ${
                i % 2 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-3 h-3 w-3 rounded-full bg-[var(--neon)] glow-primary" />
              <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                <div className="font-mono text-xs text-[var(--cyan)]">{t.year}</div>
                <div className="text-lg font-semibold mt-1">{t.role}</div>
                <div className="text-sm text-muted-foreground">{t.org}</div>
              </div>
              <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass rounded-xl p-4 text-sm text-muted-foreground inline-block text-left">
                  {t.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
