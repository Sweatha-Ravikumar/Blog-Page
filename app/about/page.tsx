import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="text-sm font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          ← Home
        </Link>

        <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-10 md:p-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            About Us
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            We write about technology.
          </h1>

          <div className="mt-8 space-y-6 text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg">
            <p>
              TechBlog is a simple technology blog focused on
              modern web development and software engineering.
            </p>

            <p>
              Our goal is to share useful ideas and practical
              knowledge about technologies such as Next.js,
              TypeScript and Tailwind CSS.
            </p>

            <p>
              This project demonstrates how a modern landing page
              can be structured using reusable React components
              and responsive design.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}