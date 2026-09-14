export default function Footer() {
  return (
    <footer
      className="
        mt-auto border-t
        border-white/[0.06]
      "
    >
      <div
        className="
          mx-auto flex max-w-6xl
          items-center justify-between
          px-5 py-6
          font-mono text-[11px]
          text-slate-600
          sm:px-8
        "
      >
        <span>&gt;_ dev.log</span>

        <span>built with React + TypeScript</span>
      </div>
    </footer>
  );
}
