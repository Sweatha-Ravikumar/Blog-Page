import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="text-sm font-semibold text-gray-600 hover:text-gray-900"
        >
          ← Home
        </Link>

        <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Get in touch
          </h1>

          <p className="mt-4 text-gray-600">
            Have a question or want to share an idea? Send us
            a message.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-black"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-gray-400 text-black"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-black"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-gray-400 text-black"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-black"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={5}
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-gray-400 text-black"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700 sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}