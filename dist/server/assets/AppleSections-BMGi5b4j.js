import { r as reactExports, j as jsxRuntimeExports, m as motion } from "./motion-CItmpJlh.js";
import { a as Mail, b as MessageCircle, G as Github, L as Linkedin, P as Phone, A as ArrowUpRight } from "./icons-BaiXR8I7.js";
const ease = [0.22, 1, 0.36, 1];
const projects = [
  {
    name: "Blockchain",
    tag: "JavaScript",
    desc: "A JavaScript blockchain project focused on core chain mechanics and decentralized app foundations.",
    metric: "Updated May 2026",
    github: "https://github.com/lol90a/Blockchain"
  },
  {
    name: "Rust Multithreaded Web Server",
    tag: "Rust",
    desc: "A Rust web server that explores thread pools, request handling, and low-level backend fundamentals.",
    metric: "Updated Apr 2026",
    github: "https://github.com/lol90a/Rust-multithreaded-web-server"
  },
  {
    name: "RUST System Monitor CLI",
    tag: "Rust CLI",
    desc: "A command-line system monitor built in Rust for tracking machine stats from the terminal.",
    metric: "Updated Apr 2026",
    github: "https://github.com/lol90a/RUST-system-monitor-CLI"
  },
  {
    name: "Portfolio",
    tag: "TypeScript",
    desc: "A TypeScript portfolio project for presenting experience, projects, and contact channels.",
    metric: "Updated Apr 2026",
    github: "https://github.com/lol90a/Portfolio"
  },
  {
    name: "Solana Escrow Wallet",
    tag: "Rust",
    desc: "A Solana escrow wallet project built around Rust smart contract and wallet interaction patterns.",
    metric: "Updated Apr 2026",
    github: "https://github.com/lol90a/Solana-Escrow-Wallet"
  },
  {
    name: "Rust CLI Todo App",
    tag: "Rust CLI",
    desc: "A focused Rust command-line todo app for practicing state management, terminal input, and persistence.",
    metric: "Updated Apr 2026",
    github: "https://github.com/lol90a/Rust-CLI-Todo-App"
  },
  {
    name: "areo_ledger",
    tag: "TypeScript",
    desc: "A ledger-style TypeScript project for recording and presenting transaction-oriented data.",
    metric: "Updated Apr 2026",
    github: "https://github.com/lol90a/areo_ledger"
  },
  {
    name: "marketplace",
    tag: "JavaScript",
    desc: "A JavaScript marketplace project exploring product listing and web commerce flows.",
    metric: "Updated Dec 2024",
    github: "https://github.com/lol90a/marketplace"
  },
  {
    name: "icp",
    tag: "JavaScript",
    desc: "An Internet Computer themed project with JavaScript-based application code.",
    metric: "Updated Dec 2024",
    github: "https://github.com/lol90a/icp"
  },
  {
    name: "malut",
    tag: "TypeScript",
    desc: "A TypeScript project from your GitHub workspace, linked for visitors to inspect the source.",
    metric: "Updated Dec 2024",
    github: "https://github.com/lol90a/malut"
  },
  {
    name: "NFT PROJECT",
    tag: "JavaScript",
    desc: "A JavaScript NFT project focused on web3 asset and collection workflows.",
    metric: "Updated Oct 2024",
    github: "https://github.com/lol90a/NFT-PROJECT"
  },
  {
    name: "MVP Blockchain",
    tag: "Rust",
    desc: "A Rust MVP blockchain implementation for experimenting with blockchain architecture basics.",
    metric: "Updated Sep 2024",
    github: "https://github.com/lol90a/mvp_blockchain"
  }
];
const experience = [
  {
    year: "2024 - Now",
    role: "Senior Rust & Blockchain Engineer",
    org: "Independent - VulcanX",
    desc: "L1 infra, settlement engines, Solana programs, ICP cross-chain bridges."
  },
  {
    year: "2022 - 2024",
    role: "Smart Contract Engineer",
    org: "DeFi Protocol",
    desc: "Solidity lending and AMMs across Ethereum and Polygon. Audited at $100M+ TVL."
  },
  {
    year: "2020 - 2022",
    role: "Backend Engineer",
    org: "Fintech",
    desc: "Rust + Node.js services for real-time market data, ledgering, and risk engines."
  },
  {
    year: "2018 - 2020",
    role: "Systems Developer",
    org: "Healthcare IoT",
    desc: "Hyperledger Fabric chaincode for device registry and attestation."
  }
];
function Reveal({ children, delay = 0 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 32 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.8, delay, ease },
      children
    }
  );
}
function GithubButton({ href }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href,
      target: "_blank",
      rel: "noreferrer",
      onClick: (e) => e.stopPropagation(),
      className: "group/gh relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium overflow-hidden isolate",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 -z-10 translate-y-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] transition-transform duration-500 ease-out group-hover/gh:translate-y-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4 transition-transform duration-500 group-hover/gh:rotate-[360deg] group-hover/gh:text-white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-colors duration-500 group-hover/gh:text-white", children: "GitHub" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-500 group-hover/gh:translate-x-0 group-hover/gh:opacity-100 group-hover/gh:text-white" })
      ]
    }
  );
}
function AppleSections() {
  const [active, setActive] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative px-6 py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6", children: "About" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[clamp(2rem,5vw,4rem)] font-semibold tracking-tight leading-[1.05] text-gradient", children: "Engineering quiet machines that move billions." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto", children: "Eight years across Rust, Solidity and distributed systems. I optimize for correctness first, throughput second - and developer joy throughout." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 glass-strong rounded-3xl p-10 grid grid-cols-3 gap-6 text-left", children: [
        { k: "8+", v: "Years engineering" },
        { k: "$120M", v: "Value secured" },
        { k: "30+", v: "Protocols shipped" }
      ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl md:text-4xl font-semibold text-white", children: s.k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mt-2", children: s.v })
      ] }, s.v)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "relative px-6 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6 text-center", children: "Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[clamp(2rem,5vw,4rem)] font-semibold tracking-tight text-center text-gradient", children: "Public work from GitHub." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid md:grid-cols-2 gap-6", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.04, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          onClick: () => setActive(active === i ? null : i),
          whileHover: { y: -6 },
          transition: { duration: 0.4, ease },
          className: "group glass-strong rounded-3xl p-8 cursor-pointer relative overflow-hidden h-full flex flex-col",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 size-56 rounded-full bg-[#3B82F6]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 mb-6 relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: p.tag }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-semibold mt-2", children: p.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-3 py-1.5 rounded-full bg-white/10 text-white/90 font-medium whitespace-nowrap", children: p.metric })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed relative flex-1", children: p.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between gap-4 relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: active === i ? "Featured" : "Tap to feature" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(GithubButton, { href: p.github })
            ] })
          ]
        }
      ) }, p.github)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experience", className: "relative px-6 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6 text-center", children: "Experience" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[clamp(2rem,5vw,4rem)] font-semibold tracking-tight text-center text-gradient", children: "A timeline of systems." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: experience.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `relative grid md:grid-cols-2 gap-6 items-start ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-3 md:left-1/2 -translate-x-1/2 top-2 size-3 rounded-full bg-[#3B82F6] shadow-[0_0_20px_#3B82F6]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `pl-10 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono tracking-widest text-[#3B82F6]", children: t.year }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-semibold mt-2", children: t.role }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: t.org })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `pl-10 md:pl-0 ${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-2xl p-5 text-sm text-muted-foreground inline-block text-left", children: t.desc })
                }
              )
            ]
          }
        ) }, t.year)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative px-6 py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6 text-center", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[clamp(2rem,5vw,4rem)] font-semibold tracking-tight text-center text-accent-gradient", children: "Let's build something rare." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "mailto:aliadel90906@gmail.com",
            className: "glass-strong rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full bg-[#3B82F6]/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-[#3B82F6]" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium mt-1 group-hover:text-white", children: "aliadel90906@gmail.com" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://wa.me/201026674029",
            target: "_blank",
            rel: "noreferrer",
            className: "glass-strong rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full bg-[#3B82F6]/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5 text-[#3B82F6]" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "WhatsApp" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium mt-1 group-hover:text-white", children: "+20 102 667 4029" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://github.com/lol90a",
            target: "_blank",
            rel: "noreferrer",
            className: "glass-strong rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full bg-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "GitHub" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium mt-1 group-hover:text-white", children: "@lol90a" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://www.linkedin.com/in/%F0%9F%A6%80ali-adel%F0%9F%A6%80-515688371",
            target: "_blank",
            rel: "noreferrer",
            className: "glass-strong rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full bg-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "LinkedIn" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium mt-1 group-hover:text-white", children: "Ali Adel" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "tel:+201026674029",
            className: "glass-strong rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors group md:col-span-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full bg-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Phone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium mt-1 group-hover:text-white", children: "+20 102 667 4029" })
              ] })
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "mailto:aliadel90906@gmail.com",
          className: "relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#3B82F6] text-white font-medium overflow-hidden group/cta",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: "Start a conversation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "relative h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" })
          ]
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "px-6 py-12 border-t border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© 2026 Ali Adel - Crafted with Rust & reverence." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://github.com/lol90a",
            className: "hover:text-white transition-colors inline-flex items-center gap-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-3.5 w-3.5" }),
              "GitHub"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "mailto:aliadel90906@gmail.com",
            className: "hover:text-white transition-colors inline-flex items-center gap-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }),
              "Email"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://www.linkedin.com/in/%F0%9F%A6%80ali-adel%F0%9F%A6%80-515688371",
            className: "hover:text-white transition-colors inline-flex items-center gap-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-3.5 w-3.5" }),
              "LinkedIn"
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  AppleSections
};
