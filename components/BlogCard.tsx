import type { Blog } from "@/data/blogs"

type BlogCardProps = {
  blog: Blog
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex items-center justify-between">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
          {blog.category}
        </span>

        <span className="text-xs text-gray-500">
          {blog.readTime}
        </span>
      </div>

      <h2 className="text-2xl font-bold leading-tight text-gray-900">
        {blog.title}
      </h2>

      <p className="mt-4 leading-7 text-gray-600">
        {blog.excerpt}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
        <div>
          <p className="text-sm font-medium text-gray-900">
            {blog.author}
          </p>

          <p className="mt-1 text-xs text-gray-500">
            {blog.date}
          </p>
        </div>

        <a
          href="#article"
          className="font-semibold text-gray-900 transition group-hover:translate-x-1"
        >
          Read More →
        </a>
      </div>
    </article>
  )
}