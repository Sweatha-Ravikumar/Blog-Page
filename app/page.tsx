import Navbar from "@/components/Navbar"
import BlogCard from "@/components/BlogCard"
import Article from "@/components/Article"
import Footer from "@/components/Footer"
import { blogs } from "@/data/blogs"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="px-5 py-16 text-center sm:px-6 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 sm:text-sm">
            Technology & Development
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Ideas, insights and stories
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Explore our latest articles covering modern web
            development, technology and software engineering.
          </p>

          <a
            href="#blogs"
            className="mt-7 inline-block rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 sm:px-7 sm:text-base"
          >
            Explore Articles
          </a>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blogs"
        className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16"
      >
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 sm:text-sm">
            Our Blog
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
            Latest Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>

      <Article />

      <Footer />
    </main>
  )
}