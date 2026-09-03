export type Blog = {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  author: string
  readTime: string
  content: string[]
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
    content: [
      "Next.js is a React framework designed for building modern web applications. It provides developers with useful features such as routing, layouts and optimized rendering.",
      "The App Router makes it easy to organize an application into pages and reusable components. Each route can have its own page while shared elements can be placed in layouts or components.",
      "Next.js also provides a strong foundation for building applications that are fast, scalable and maintainable.",
    ],
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
    content: [
      "Tailwind CSS is a utility-first CSS framework that allows developers to build interfaces directly using utility classes.",
      "Instead of creating large custom stylesheets, developers can combine classes for spacing, typography, colors, grids and responsive behavior.",
      "Tailwind's responsive utilities make it particularly useful for creating interfaces that work across desktop, tablet and mobile devices.",
    ],
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
    content: [
      "TypeScript adds static typing to JavaScript. This helps developers identify many errors while writing code rather than discovering them later at runtime.",
      "Types also make code easier to understand because the expected structure of data is clearly defined.",
      "For larger applications, TypeScript can improve maintainability and make collaboration between developers easier.",
    ],
  },
  {
    id: 4,
    title: "Cyber Security",
    excerpt: "Learn about the importance of cyber security in modern web development.",
    date: "August 29, 2026",
    category: "Cyber Security",
    author: "Tech Team",
    readTime: "5 min read",
    content: [
      "Cyber security is a critical aspect of modern web development. As applications become more complex and interconnected, the risk of security breaches increases.",
      "Developers must implement robust security measures to protect user data and ensure the integrity of their applications.",
      "Staying informed about the latest security threats and best practices is essential for maintaining a secure development environment."
    ]
  }
  {
    id: 5,
    title: "The Future of Web Development",
    excerpt: "Explore emerging trends and technologies that are shaping the future of web development.",
    date: "August 28, 2026",
    category: "Web Development",
    author: "Tech Team",
    readTime: "6 min read",
    content: [
      "The landscape of web development is constantly evolving. New frameworks, tools and methodologies are emerging that promise to make development faster, more efficient and more enjoyable.",
      "In this article, we'll explore some of the most exciting trends and technologies that are shaping the future of web development.",
      "From AI-powered development tools to progressive web apps, the possibilities are endless."
    ]
  }
]