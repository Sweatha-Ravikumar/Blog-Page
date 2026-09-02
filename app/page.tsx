import Navbar from "@/components/Navbar"
import BlogCard from "@/components/BlogCard"
import Article from "@/components/Article"
import Footer from "@/components/Footer"
import { blogs } from "@/data/blogs"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Technology & Development
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Ideas, insights and stories
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Explore our latest articles covering modern web
            development, technology and software engineering.
          </p>

          <a
            href="#blogs"
            className="mt-8 inline-block rounded-full bg-gray-900 px-7 py-3 font-semibold text-white transition hover:bg-gray-700"
          >
            Explore Articles
          </a>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blogs"
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Our Blog
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Latest Articles
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>
      </section>

      {/* Article */}
      <Article />

      <Footer />
    </main>
  )
}