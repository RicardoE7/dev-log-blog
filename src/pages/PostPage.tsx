import { IconArrowLeft, IconClock } from "@tabler/icons-react";

import { Link, useParams } from "react-router-dom";

import PageTransition from "../components/PageTransition";

import { getPostBySlug } from "../lib/posts";

export default function PostPage() {
  const { slug } = useParams<{
    slug: string;
  }>();

  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
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
              mt-4 text-4xl
              font-semibold text-white
            "
          >
            Post not found.
          </h1>

          <p
            className="
              mt-4 text-slate-400
            "
          >
            The requested article doesn't exist.
          </p>

          <Link
            to="/blog"
            className="
              mt-8 inline-flex
              items-center gap-2
              font-mono text-xs
              text-cyan-400
              hover:text-cyan-300
            "
          >
            <IconArrowLeft size={15} />
            Back to articles
          </Link>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <article
        className="
          mx-auto max-w-3xl
          px-5 py-20
          sm:px-8 sm:py-24
        "
      >
        <Link
          to="/blog"
          className="
            mb-12 inline-flex
            items-center gap-2
            font-mono text-xs
            text-slate-500
            transition
            hover:text-cyan-400
          "
        >
          <IconArrowLeft size={15} />
          Back to articles
        </Link>

        <div
          className="
            font-mono text-[11px]
            text-cyan-400
          "
        >
          ~/dev.log/blog/{post.slug}
        </div>

        <div
          className="
            mt-6 flex flex-wrap
            items-center gap-3
            font-mono text-[10px]
            uppercase
            tracking-[0.15em]
          "
        >
          <span className="text-cyan-400">{post.category}</span>

          <span className="text-slate-700">/</span>

          <span className="text-slate-500">{post.date}</span>

          <span className="text-slate-700">/</span>

          <span
            className="
              flex items-center gap-1
              text-slate-500
            "
          >
            <IconClock size={12} />
            {post.readTime}
          </span>
        </div>

        <h1
          className="
            mt-7 text-4xl
            font-semibold
            leading-tight
            tracking-[-0.04em]
            text-white
            sm:text-5xl
          "
        >
          {post.title}
        </h1>

        <div
          className="
            my-10 h-px
            bg-gradient-to-r
            from-cyan-400/50
            via-white/10
            to-transparent
          "
        />

        <div
          className="
            space-y-7
            text-[17px]
            leading-8
            text-slate-300
          "
        >
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div
          className="
            mt-14 border-t
            border-white/[0.07]
            pt-7 text-center
            font-mono text-[10px]
            uppercase
            tracking-[0.2em]
            text-slate-600
          "
        >
          // EOF
        </div>
      </article>
    </PageTransition>
  );
}
