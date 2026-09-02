export type Blog = {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  author: string
  readTime: string
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt:
      "Discover how Next.js helps developers build fast, modern and scalable web applications.",
    date: "September 2, 2026",
    category: "Next.js",
    author: "Tech Team",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Building Beautiful Interfaces with Tailwind CSS",
    excerpt:
      "Learn how utility-first CSS makes it easier to create responsive and modern user interfaces.",
    date: "September 1, 2026",
    category: "Tailwind CSS",
    author: "Tech Team",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Why TypeScript Matters",
    excerpt:
      "Understand how TypeScript improves reliability, readability and maintainability in web projects.",
    date: "August 30, 2026",
    category: "TypeScript",
    author: "Tech Team",
    readTime: "6 min read",
  },
]