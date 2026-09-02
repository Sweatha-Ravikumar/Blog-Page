# TechBlog

A modern, responsive blog landing page built with **Next.js, TypeScript, React, and Tailwind CSS**.

## Overview

TechBlog is a single-page blog application created as a learning project to understand and practice **Next.js and Tailwind CSS**.

The application presents a typical landing-site blog section with reusable blog cards and a featured article.

## Features

- Responsive blog landing page
- Navigation bar
- Hero section
- Latest articles section
- Reusable blog card component
- Featured article section
- Responsive layout for different screen sizes
- Hover and transition effects
- TypeScript type safety
- Component-based React architecture

## Tech Stack

- **Next.js**
- **TypeScript**
- **React**
- **Tailwind CSS**

## Project Structure

```text
blog-app/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── BlogCard.tsx
│   ├── Article.tsx
│   └── Footer.tsx
│
├── data/
│   └── blogs.ts
│
├── public/
│   └── images/
│
├── package.json
└── tsconfig.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project

```bash
cd blog-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in your browser

Visit:

```text
http://localhost:3000
```

## Components

### Navbar

Provides navigation links for the blog application.

### BlogCard

A reusable component that displays:

- Blog category
- Title
- Excerpt
- Author
- Publication date
- Reading time
- Read More link

### Article

Displays the featured blog article with headings and formatted content.

### Footer

Contains basic site information and copyright details.

## Learning Objectives

This project was developed to practice:

- Next.js App Router
- TypeScript
- React components
- Props and TypeScript types
- Rendering lists using `.map()`
- Tailwind CSS utility classes
- Responsive web design
- Component-based architecture

## Future Improvements

- Add individual blog pages
- Add real blog images
- Add search functionality
- Add category filtering
- Connect the blog to a CMS or database
- Add dark mode

## License

This project is created for learning and demonstration purposes.

```

```
