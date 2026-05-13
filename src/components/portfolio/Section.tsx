import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12"
        >
          <div className="font-mono text-xs text-[var(--cyan)] mb-2 flex items-center gap-2">
            <span className="h-px w-8 bg-[var(--cyan)]" /> {label}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
