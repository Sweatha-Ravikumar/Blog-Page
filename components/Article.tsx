export default function Article() {
  return (
    <article
      id="article"
      className="mx-auto max-w-4xl px-6 py-20"
    >
      <div className="mb-8 text-center">
        <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
          Featured Article
        </span>

        <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Getting Started with Modern Web Development
        </h2>

        <p className="mt-5 text-gray-500">
          By Tech Team · September 2, 2026 · 7 min read
        </p>
      </div>

      <div className="rounded-3xl bg-gray-900 p-8 text-white md:p-12">
        <p className="text-lg leading-8 text-gray-300">
          Modern web development has changed significantly over
          the last few years. Developers now have access to
          powerful frameworks and styling tools that make it
          easier to create fast and engaging websites.
        </p>
      </div>

      <div className="mt-12 space-y-8 text-lg leading-8 text-gray-700">
        <section>
          <h3 className="mb-3 text-2xl font-bold text-gray-900">
            Why modern frameworks matter
          </h3>

          <p>
            Frameworks provide developers with reusable structures
            and tools that simplify the development process.
            Next.js builds on React and provides features that
            help developers create production-ready applications.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-2xl font-bold text-gray-900">
            The role of Tailwind CSS
          </h3>

          <p>
            Tailwind CSS uses a utility-first approach to styling.
            Instead of writing large amounts of custom CSS,
            developers can combine utility classes to create
            responsive and consistent interfaces.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-2xl font-bold text-gray-900">
            Combining the technologies
          </h3>

          <p>
            Combining Next.js, TypeScript and Tailwind CSS creates
            a development workflow that is both productive and
            maintainable. Components can be reused while
            TypeScript provides type safety and Tailwind handles
            the visual design.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-2xl font-bold text-gray-900">
            Conclusion
          </h3>

          <p>
            Learning these technologies together provides a strong
            foundation for building modern web applications.
            Starting with a small project such as a blog page is
            an effective way to understand how these technologies
            work together.
          </p>
        </section>
      </div>
    </article>
  )
}