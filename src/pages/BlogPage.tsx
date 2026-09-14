import { IconArticle } from "@tabler/icons-react";

import PageTransition from "../components/PageTransition";
import PostCard from "../components/PostCard";

import { posts } from "../lib/posts";

export default function BlogPage() {
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
            mb-12 border-b
            border-white/[0.07]
            pb-10
          "
        >
          <div
            className="
              mb-5 flex items-center
              gap-2 font-mono
              text-xs text-cyan-400
            "
          >
            <IconArticle size={16} />
            ~/dev.log/blog
          </div>

          <h1
            className="
              text-4xl font-semibold
              tracking-[-0.035em]
              text-white
              sm:text-5xl
            "
          >
            Articles
          </h1>

          <p
            className="
              mt-4 max-w-xl
              leading-7 text-slate-400
            "
          >
            Architecture, React, AI engineering, and lessons learned while
            building software.
          </p>
        </div>

        <div>
          {posts.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
