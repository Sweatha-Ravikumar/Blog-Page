"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            TechBlog
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
            <Link
              href="/"
              className="transition hover:text-gray-900"
            >
              Home
            </Link>

            <Link
              href="/#blogs"
              className="transition hover:text-gray-900"
            >
              Blogs
            </Link>

            <Link
              href="/about"
              className="transition hover:text-gray-900"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-gray-900"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <span className="text-2xl">×</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mt-4 flex flex-col gap-2 border-t border-gray-100 pt-4 md:hidden">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
            >
              Home
            </Link>

            <Link
              href="/#blogs"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
            >
              Blogs
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}