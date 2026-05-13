import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "> initializing rust core...",
  "> loading wasm runtime [ok]",
  "> connecting to evm rpc nodes [ok]",
  "> syncing solana validators [ok]",
  "> mounting portfolio modules...",
  "> system online.",
];

export function BootSequence({ onDone }: { onDone: () => void }) {
  const [shown, setShown] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setShown((s) => [...s, LINES[i]]);
      i++;
      if (i >= LINES.length) {
        clearInterval(id);
        setTimeout(() => {
          setDone(true);
          setTimeout(onDone, 500);
        }, 400);
      }
    }, 220);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center font-mono text-sm"
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="relative w-full max-w-lg p-8">
            <div className="flex items-center gap-2 mb-6 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-[var(--neon)] animate-pulse-glow" />
              <span>RUST_CORE v1.84 — bootstrapping</span>
            </div>
            <div className="space-y-1.5">
              {shown.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-foreground/90"
                >
                  {l}
                </motion.div>
              ))}
              <div className="h-4 cursor-blink" />
            </div>
            <div className="mt-6 h-[2px] bg-secondary overflow-hidden rounded">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(shown.length / LINES.length) * 100}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-gradient-to-r from-[var(--cyan)] via-[var(--neon)] to-[var(--violet)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
