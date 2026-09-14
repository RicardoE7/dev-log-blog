import { IconArrowRight, IconBraces, IconTerminal2 } from "@tabler/icons-react";

import { Link } from "react-router-dom";

import PageTransition from "../components/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <section
        className="
          mx-auto max-w-6xl
          px-5 pb-20 pt-24
          sm:px-8 sm:pt-32
        "
      >
        <div className="max-w-4xl">
          <div
            className="
              mb-8 flex items-center
              gap-2 font-mono
              text-xs text-cyan-400
            "
          >
            <IconTerminal2 size={16} />
            ~/dev.log
          </div>

          <h1
            className="
              text-5xl font-semibold
              leading-[1.05]
              tracking-[-0.045em]
              text-white
              sm:text-6xl
              lg:text-7xl
            "
          >
            Thoughts from
            <br />
            behind the <span className="text-cyan-400">build.</span>
          </h1>

          <p
            className="
              mt-8 max-w-2xl
              text-lg leading-8
              text-slate-400
            "
          >
            Notes on software architecture, React, engineering decisions, and
            lessons learned while turning ideas into working software.
          </p>

          <div
            className="
              mt-10 flex flex-wrap
              items-center gap-5
            "
          >
            <Link
              to="/blog"
              className="
                group inline-flex
                items-center gap-2
                rounded-lg
                bg-cyan-400
                px-5 py-3
                font-mono text-xs
                font-bold text-[#071018]
                transition
                hover:bg-cyan-300
              "
            >
              Read Articles
              <IconArrowRight
                size={16}
                className="
                  transition
                  group-hover:translate-x-1
                "
              />
            </Link>

            <span
              className="
                flex items-center gap-2
                font-mono text-xs
                text-slate-600
              "
            >
              <IconBraces size={16} />
              React / Java / Architecture
            </span>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
