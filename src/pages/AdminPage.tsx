import {
  IconArticle,
  IconCheck,
  IconLayoutDashboard,
} from "@tabler/icons-react";

import PageTransition from "../components/PageTransition";

import { posts } from "../lib/posts";

export default function AdminPage() {
  return (
    <PageTransition>
      <section
        className="
          mx-auto max-w-5xl
          px-5 py-20
          sm:px-8 sm:py-24
        "
      >
        <div
          className="
            flex items-start
            justify-between gap-5
          "
        >
          <div>
            <div
              className="
                mb-4 flex items-center
                gap-2 font-mono
                text-xs text-cyan-400
              "
            >
              <IconLayoutDashboard size={16} />
              ~/admin
            </div>

            <h1
              className="
                text-4xl font-semibold
                tracking-[-0.035em]
                text-white
              "
            >
              Publishing Dashboard
            </h1>

            <p
              className="
                mt-3 text-slate-400
              "
            >
              Welcome to the Admin Dashboard.
            </p>
          </div>
        </div>

        <div
          className="
            mt-10 grid gap-4
            sm:grid-cols-2
          "
        >
          <div
            className="
              rounded-xl border
              border-white/[0.07]
              bg-white/[0.025]
              p-5
            "
          >
            <IconArticle size={19} className="text-cyan-400" />

            <p
              className="
                mt-5 text-3xl
                font-semibold text-white
              "
            >
              {posts.length}
            </p>

            <p
              className="
                mt-1 font-mono
                text-[10px] uppercase
                tracking-widest
                text-slate-500
              "
            >
              Articles
            </p>
          </div>

          <div
            className="
              rounded-xl border
              border-white/[0.07]
              bg-white/[0.025]
              p-5
            "
          >
            <IconCheck size={19} className="text-emerald-400" />

            <p
              className="
                mt-5 text-3xl
                font-semibold text-white
              "
            >
              {posts.length}
            </p>

            <p
              className="
                mt-1 font-mono
                text-[10px] uppercase
                tracking-widest
                text-slate-500
              "
            >
              Published
            </p>
          </div>
        </div>

        <div
          className="
            mt-10 overflow-hidden
            rounded-xl border
            border-white/[0.07]
          "
        >
          <div
            className="
              border-b
              border-white/[0.07]
              bg-white/[0.025]
              px-5 py-4
            "
          >
            <h2
              className="
                font-mono text-xs
                font-semibold
                text-white
              "
            >
              Recent Articles
            </h2>
          </div>

          {posts.map((post) => (
            <div
              key={post.id}
              className="
                flex items-center
                justify-between gap-4
                border-b
                border-white/[0.05]
                px-5 py-4
                last:border-b-0
              "
            >
              <div>
                <p
                  className="
                    text-sm font-medium
                    text-slate-200
                  "
                >
                  {post.title}
                </p>

                <p
                  className="
                    mt-1 font-mono
                    text-[10px]
                    text-slate-600
                  "
                >
                  /{post.slug}
                </p>
              </div>

              <span
                className="
                  shrink-0 rounded-full
                  border
                  border-emerald-400/15
                  bg-emerald-400/[0.07]
                  px-2.5 py-1
                  font-mono text-[9px]
                  uppercase
                  tracking-wider
                  text-emerald-400
                "
              >
                Published
              </span>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
