import Link from "next/link"

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          TechBlog
        </Link>

        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="transition hover:text-gray-900">
            Home
          </Link>

          <a
            href="#blogs"
            className="transition hover:text-gray-900"
          >
            Blogs
          </a>

          <a
            href="#article"
            className="transition hover:text-gray-900"
          >
            Featured Article
          </a>
        </div>
      </nav>
    </header>
  )
}