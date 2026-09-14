import { IconArrowUpRight, IconClock } from "@tabler/icons-react";

import { motion } from "motion/react";
import { Link } from "react-router-dom";

import type { Post } from "../types/post";

interface PostCardProps {
  post: Post;
  index: number;
}

export default function PostCard({ post, index }: PostCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 14,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.06,
      }}
      className="
        group border-b
        border-white/[0.07]
        py-8
      "
    >
      <Link
        to={`/blog/${post.slug}`}
        className="
          grid gap-4
          md:grid-cols-[70px_1fr_auto]
          md:items-start
        "
      >
        <span
          className="
            font-mono text-xs
            text-slate-600
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          <div
            className="
              mb-3 flex flex-wrap
              items-center gap-3
              font-mono text-[10px]
              uppercase tracking-[0.15em]
              text-cyan-400
            "
          >
            <span>{post.category}</span>

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

          <h2
            className="
              max-w-2xl text-xl
              font-semibold leading-snug
              tracking-tight text-white
              transition
              group-hover:text-cyan-300
              sm:text-2xl
            "
          >
            {post.title}
          </h2>

          <p
            className="
              mt-3 max-w-2xl
              leading-7 text-slate-400
            "
          >
            {post.excerpt}
          </p>
        </div>

        <IconArrowUpRight
          size={20}
          className="
            hidden text-slate-600
            transition
            group-hover:-translate-y-1
            group-hover:translate-x-1
            group-hover:text-cyan-400
            md:block
          "
        />
      </Link>
    </motion.article>
  );
}
