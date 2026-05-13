export function Footer() {
  return (
    <footer className="relative px-6 py-10 border-t border-border/40 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
        <div>© {new Date().getFullYear()} Ali Adel — built with Rust-grade discipline.</div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-glow" />
          all systems operational
        </div>
      </div>
    </footer>
  );
}
