"use client"

import Link from "next/link"
import { useState } from "react"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <nav className="mx-auto max-w-6xl px-5 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            TechBlog
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 text-sm font-medium md:flex">
            <Link
              href="/"
              className="text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/#blogs"
              className="text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Blogs
            </Link>

            <Link
              href="/about"
              className="text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Contact
            </Link>

            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
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
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mt-4 flex flex-col gap-1 border-t border-gray-200 pt-4 dark:border-gray-800 md:hidden">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-900"
            >
              Home
            </Link>

            <Link
              href="/#blogs"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-900"
            >
              Blogs
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-white"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-900"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}