export default function Article() {
  return (
    <article
      id="article"
      className="mx-auto max-w-4xl px-5 py-14 sm:px-6 sm:py-20"
    >
      <div className="mb-8 text-center">
        <span className="rounded-full bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700 sm:px-4 sm:text-sm">
          Featured Article
        </span>

        <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Getting Started with Modern Web Development
        </h2>

        <p className="mt-4 text-sm text-gray-500">
          By Tech Team · September 2, 2026 · 7 min read
        </p>
      </div>

      <div className="rounded-2xl bg-gray-900 p-6 text-white sm:rounded-3xl sm:p-8 md:p-12">
        <p className="text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
          Modern web development has changed significantly over
          the last few years. Developers now have access to
          powerful frameworks and styling tools that make it
          easier to create fast and engaging websites.
        </p>
      </div>

      <div className="mt-10 space-y-8 text-base leading-7 text-gray-700 sm:mt-12 sm:text-lg sm:leading-8">
        <section>
          <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
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
          <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
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
          <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
            Combining the technologies
          </h3>

          <p>
            Combining Next.js, TypeScript and Tailwind CSS creates
            a development workflow that is both productive and
            maintainable.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
            Conclusion
          </h3>

          <p>
            Learning these technologies together provides a strong
            foundation for building modern web applications.
          </p>
        </section>
      </div>
    </article>
  )
}