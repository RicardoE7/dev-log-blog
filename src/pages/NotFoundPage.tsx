import { IconArrowLeft } from "@tabler/icons-react";

import { Link } from "react-router-dom";

import PageTransition from "../components/PageTransition";

export default function NotFoundPage() {
  return (
    <PageTransition>
      <section
        className="
          mx-auto max-w-3xl
          px-5 py-32
          text-center
          sm:px-8
        "
      >
        <p
          className="
            font-mono text-xs
            text-cyan-400
          "
        >
          ERROR 404
        </p>

        <h1
          className="
            mt-4 text-5xl
            font-semibold
            tracking-tight
            text-white
          "
        >
          Route not found.
        </h1>

        <p
          className="
            mt-5 text-slate-400
          "
        >
          The requested path does not exist.
        </p>

        <Link
          to="/"
          className="
            mt-8 inline-flex
            items-center gap-2
            font-mono text-xs
            text-cyan-400
            hover:text-cyan-300
          "
        >
          <IconArrowLeft size={15} />
          Return home
        </Link>
      </section>
    </PageTransition>
  );
}
