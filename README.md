# >_ dev.log

**dev.log** is a software engineering blog built with React and TypeScript to demonstrate dynamic routing, URL parameters, client-side authentication, and protected routes using React Router.

The application presents engineering articles through a clean, developer-focused editorial interface. Users can browse articles, navigate to dynamically generated post pages, simulate authentication, and access a protected publishing dashboard.

## ✨ Features

* Software engineering article index
* Dynamic blog post routes using URL-friendly slugs
* Individual article pages generated from mock data
* Custom "Post not found" handling
* Simulated client-side authentication
* Protected admin dashboard
* Automatic redirect for unauthorized users
* Authentication-aware navigation
* Login and logout functionality
* Animated page transitions
* Responsive layout
* Developer-focused visual design

## 🧭 Dynamic Routing

The blog uses React Router to generate individual article pages from a single dynamic route:

```tsx
<Route
  path="/blog/:slug"
  element={<PostPage />}
/>
```

Each article contains a unique slug:

```ts
{
  id: 1,
  slug: "why-i-design-the-data-model-first",
  title: "Why I Design the Data Model Before Writing Entities",
  // ...
}
```

Selecting an article navigates to a URL such as:

```text
/blog/why-i-design-the-data-model-first
```

The dynamic post page retrieves the slug with `useParams()` and uses it to locate the matching article:

```tsx
const { slug } = useParams<{
  slug: string;
}>();

const post = slug
  ? getPostBySlug(slug)
  : undefined;
```

This allows one reusable page component to render any article in the application's mock data.

## 🔐 Authentication

Authentication state is managed through `AuthContext`.

The context provides:

* `isAuthenticated`
* `login()`
* `logout()`

Authentication is intentionally simulated for this project and does not use real credentials or a backend authentication service.

The navigation responds to the current authentication state. Logged-out users receive a **Log In** option, while authenticated users receive access to the **Admin** page and a **Log Out** action.

## 🛡️ Protected Routes

The `/admin` route is wrapped in a reusable `ProtectedRoute` component.

```tsx
<Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminPage />
    </ProtectedRoute>
  }
/>
```

If an unauthenticated user attempts to visit `/admin`, React Router redirects them to `/login`.

Authenticated users are allowed to access the publishing dashboard.

## 📝 Mock Blog Data

Article data is stored locally in:

```text
src/lib/posts.ts
```

Each post contains:

* `id`
* `slug`
* `title`
* `excerpt`
* `content`
* `category`
* `date`
* `readTime`

The included articles focus on software engineering topics such as React Context, application architecture, AI engineering, and maintainable software design.

## 🎨 Design

dev.log uses a dark editorial interface inspired by software development tools and technical publications.

The visual system includes:

* Dark charcoal surfaces
* Cyan technical accents
* Subtle background grid
* Large editorial typography
* Monospaced technical metadata
* Route-inspired UI details
* Responsive article layouts
* Animated navigation transitions
* Minimal dashboard styling

Inter is used for primary interface and article typography, while JetBrains Mono provides the technical styling for routes, metadata, labels, and branding.

## 🛠️ Technologies

* React
* TypeScript
* Vite
* React Router
* React Context API
* Tailwind CSS
* Motion
* Tabler Icons
* Inter
* JetBrains Mono

## 📁 Project Structure

```text
src/
├── components/
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── PageTransition.tsx
│   ├── PostCard.tsx
│   └── ProtectedRoute.tsx
│
├── contexts/
│   └── AuthContext.tsx
│
├── lib/
│   └── posts.ts
│
├── pages/
│   ├── AdminPage.tsx
│   ├── BlogPage.tsx
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   ├── NotFoundPage.tsx
│   └── PostPage.tsx
│
├── providers/
│   └── AppProviders.tsx
│
├── types/
│   └── post.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

## 🗺️ Application Routes

| Route         | Description              | Access    |
| ------------- | ------------------------ | --------- |
| `/`           | Landing page             | Public    |
| `/blog`       | Article index            | Public    |
| `/blog/:slug` | Dynamic article page     | Public    |
| `/login`      | Simulated authentication | Public    |
| `/admin`      | Publishing dashboard     | Protected |
| `*`           | Custom 404 page          | Public    |

## 🚀 Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## 📚 Learning Objectives

This project demonstrates several common patterns used in modern React applications:

* Creating dynamic routes from application data
* Reading URL parameters with `useParams`
* Navigating with `Link`, `NavLink`, and `useNavigate`
* Managing shared authentication state with Context
* Conditionally rendering navigation based on authentication
* Protecting routes from unauthorized access
* Redirecting users with `Navigate`
* Structuring pages and reusable routing components
* Adding animated transitions between routes

## 💡 Purpose

dev.log was built as a hands-on exploration of React Router and client-side application architecture.

The project demonstrates how a single dynamic route can represent multiple pieces of content while authentication state can control access to restricted sections of an application.

Rather than treating routing as simple page navigation, dev.log uses routes as part of the application's structure and state flow.
