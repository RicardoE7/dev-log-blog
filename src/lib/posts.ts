import type { Post } from "../types/post";

export const posts: Post[] = [
  {
    id: 1,
    slug: "why-i-design-the-data-model-first",
    title: "Why I Design the Data Model Before Writing Entities",
    excerpt:
      "A strong data model can prevent entire categories of problems before the first feature is built.",
    category: "Architecture",
    date: "September 2026",
    readTime: "6 min read",
    content: [
      "It is tempting to begin a new application by immediately creating components, entities, and endpoints. Seeing features appear on the screen feels like progress. But some of the most expensive problems in a project begin much earlier, with decisions about how the application's data should actually be represented.",

      "Designing the data model first forces me to answer important questions before implementation makes those answers expensive to change. What information belongs permanently in the application? Which relationships exist between different pieces of data? What should happen when something is deleted? Which values must be unique? These questions influence nearly every layer that comes afterward.",

      "This does not mean trying to predict every feature the application could ever have. The goal is to understand the requirements that already exist well enough to create a stable foundation. Normal migrations and changes will still happen as the product evolves.",

      "I have learned to think of architecture as reducing uncertainty. A little more reasoning before implementation can prevent a lot of unnecessary rewriting later.",
    ],
  },

  {
    id: 2,
    slug: "what-react-context-actually-solves",
    title: "What React Context Actually Solves",
    excerpt:
      "Context becomes much easier to understand when you stop thinking about it as simply another place to store state.",
    category: "React",
    date: "September 2026",
    readTime: "5 min read",
    content: [
      "When a React application is small, passing information through props feels straightforward. A parent owns some state and gives the pieces its children need directly to them. Problems begin when information is needed by components scattered throughout different parts of the application.",

      "Without another approach, that information may need to travel through components that do not actually care about it. Those components become middlemen whose only responsibility is forwarding props farther down the tree.",

      "Context provides a way to make shared information available to the part of the application that needs it. Authentication state, themes, filters, and other application-wide concerns are common examples.",

      "Context is not automatically the correct solution for every piece of state. Local state should remain local when possible. The useful question is not whether something can be placed in Context, but whether multiple parts of the application genuinely need shared access to it.",
    ],
  },

  {
    id: 3,
    slug: "code-handles-facts-ai-handles-judgment",
    title: "Code Handles Facts. AI Handles Judgment.",
    excerpt:
      "A useful boundary for designing software that combines deterministic systems with AI reasoning.",
    category: "AI Engineering",
    date: "September 2026",
    readTime: "7 min read",
    content: [
      "Adding AI to an application does not mean every decision should be delegated to a model. Traditional code and language models are good at fundamentally different kinds of work, and useful systems can take advantage of that difference.",

      "Deterministic code is excellent when the rules are known. Filtering records, enforcing permissions, validating data, checking relationships, and applying business constraints should behave predictably. The same input should produce the same result.",

      "AI becomes useful when the problem requires interpretation. Comparing nuanced preferences, explaining why something may appeal to a particular user, summarizing complex information, or reasoning about subjective qualities are problems where rigid rules can become limiting.",

      "The architecture becomes easier to reason about when those responsibilities are deliberately separated. Code establishes what is possible and valid. AI reasons within those boundaries rather than replacing them.",
    ],
  },

  {
    id: 4,
    slug: "good-software-isnt-just-working-software",
    title: "Good Software Isn't Just Working Software",
    excerpt:
      "A feature can work perfectly today and still create problems for every developer who touches it tomorrow.",
    category: "Engineering",
    date: "September 2026",
    readTime: "4 min read",
    content: [
      "Getting a feature to work is important, but working code is only the beginning of software quality. Applications change. Requirements evolve, bugs appear, new developers enter the codebase, and assumptions that once seemed obvious eventually need to be understood again.",

      "That makes readability, boundaries, naming, and structure practical concerns rather than cosmetic ones. Code that clearly communicates its responsibility is easier to test, debug, replace, and extend.",

      "There is also a balance to maintain. Overengineering a small problem can make software just as difficult to understand as careless implementation. Complexity should earn its place by solving a real problem.",

      "The goal is software that works today without making tomorrow unnecessarily difficult.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
