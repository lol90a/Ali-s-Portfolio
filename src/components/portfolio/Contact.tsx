import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { Section } from "./Section";

const CONTACT_LINKS = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@lol90a",
    href: "https://github.com/lol90a",
  },
  {
    icon: Mail,
    label: "Gmail",
    handle: "aliadel90906@gmail.com",
    href: "mailto:aliadel90906@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    handle: "+20 102 667 4029",
    href: "https://wa.me/201042193800",
  },
  {
    icon: Phone,
    label: "Phone",
    handle: "+20 1042193800",
    href: "tel:+201042193800",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Ali Adel",
    href: "https://www.linkedin.com/in/%F0%9F%A6%80ali-adel%F0%9F%A6%80-515688371",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section
      id="contact"
      label="// 05 - transmit"
      title={
        <>
          Open a <span className="text-gradient">channel</span>
        </>
      }
    >
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6">
        <div className="glass-strong rounded-2xl p-6 font-mono text-sm">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-glow" />
            ali@portfolio:~$ ./compose-message
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="space-y-3"
          >
            {[
              { l: "from", t: "your@email.com", type: "email" },
              { l: "subject", t: "let's build something", type: "text" },
            ].map((f) => (
              <div key={f.l} className="flex items-baseline gap-3">
                <span className="text-[var(--cyan)] w-20 shrink-0">{f.l} &gt;</span>
                <input
                  required
                  type={f.type}
                  placeholder={f.t}
                  className="flex-1 bg-transparent outline-none border-b border-border focus:border-[var(--neon)] py-1 text-foreground placeholder:text-muted-foreground/60 transition"
                />
              </div>
            ))}
            <div className="flex items-start gap-3">
              <span className="text-[var(--cyan)] w-20 shrink-0 pt-1">body &gt;</span>
              <textarea
                required
                rows={5}
                placeholder="// type your message..."
                className="flex-1 bg-transparent outline-none border border-border rounded-lg p-3 focus:border-[var(--neon)] placeholder:text-muted-foreground/60 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--cyan)] via-[var(--neon)] to-[var(--violet)] text-primary-foreground px-5 py-2.5 hover:scale-[1.02] glow-primary transition"
            >
              <Send className="h-4 w-4" />
              {sent ? "transmitted" : "send message"}
            </button>
          </form>
        </div>

        <div className="space-y-3">
          {CONTACT_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              className="glass rounded-xl p-4 flex items-center gap-4 hover:border-[var(--neon)]/40 hover:-translate-y-0.5 transition group"
            >
              <div className="h-10 w-10 rounded-lg bg-secondary/60 grid place-items-center group-hover:bg-[var(--neon)]/20 transition">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-sm">{s.label}</div>
                <div className="text-xs font-mono text-muted-foreground">{s.handle}</div>
              </div>
            </a>
          ))}
          <div className="glass rounded-xl p-4 font-mono text-xs text-muted-foreground">
            <div className="text-[var(--cyan)] mb-1">// status</div>
            Available for Rust, blockchain, and full-stack engagements.
            <br />
            Response time: &lt; 24h.
          </div>
        </div>
      </div>
    </Section>
  );
}
