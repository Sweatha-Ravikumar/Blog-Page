import Link from "next/link"
import { notFound } from "next/navigation"
import { blogs } from "@/data/blogs"

type BlogPageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function BlogPage({
  params,
}: BlogPageProps) {
  const { id } = await params

  const blog = blogs.find(
    (item) => item.id === Number(id)
  )

  if (!blog) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-6 sm:py-16">
        <Link
          href="/"
          className="text-sm font-semibold text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          ← Back to Blogs
        </Link>

        <article className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:rounded-3xl sm:p-10 md:p-14">
          <div>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              {blog.category}
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
              {blog.title}
            </h1>

            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
              <span>{blog.author}</span>
              <span>·</span>
              <span>{blog.date}</span>
              <span>·</span>
              <span>{blog.readTime}</span>
            </div>
          </div>

          <div className="mt-10 space-y-7 text-base leading-8 text-gray-700 dark:text-gray-300 sm:text-lg">
            {blog.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 border-t border-gray-100 pt-8 dark:border-gray-800">
            <Link
              href="/"
              className="inline-block rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              ← Back to all articles
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}