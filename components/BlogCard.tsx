import Link from "next/link"
import type { Blog } from "@/data/blogs"

type BlogCardProps = {
  blog: Blog
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
          {blog.category}
        </span>

        <span className="text-xs text-gray-500">
          {blog.readTime}
        </span>
      </div>

      <h2 className="text-xl font-bold leading-tight text-gray-900 sm:text-2xl">
        {blog.title}
      </h2>

      <p className="mt-4 flex-1 text-sm leading-7 text-gray-600 sm:text-base">
        {blog.excerpt}
      </p>

      <div className="mt-6 flex items-end justify-between gap-4 border-t border-gray-100 pt-5">
        <div>
          <p className="text-sm font-medium text-gray-900">
            {blog.author}
          </p>

          <p className="mt-1 text-xs text-gray-500">
            {blog.date}
          </p>
        </div>

        <Link
          href={`/blog/${blog.id}`}
          className="whitespace-nowrap font-semibold text-gray-900 transition group-hover:translate-x-1"
        >
          Read More →
        </Link>
      </div>
    </article>
  )
}