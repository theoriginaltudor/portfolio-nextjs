This is a next.js project, and. also my portfolio website.

It is built using TypeScript, React, and Tailwind CSS.

Try to always use tailwind classes for styling.

New components should always be a const lambda function, not a class. Provide types as well. (RFC<Props>)

Use interfaces for props, not types.

General components should be placed in the `components` folder, while feature-specific components should be placed in the `features` folder.

Pages should be placed in the `pages` directory following Next.js conventions.

Keep components small and focused.

Try to write as little comments as possible. The code should be self-documenting.

Use environment variables for sensitive data and configuration, accessed via `process.env`.

Prefer using Next.js `Image` and `Link` components for optimized images and navigation.

Follow semantic HTML practices for accessibility.

Always check responsiveness and mobile compatibility using Tailwind's responsive utilities.

Use Git for version control and keep commit messages descriptive.
Use ESLint and Prettier for code formatting and linting.

# Supabase Usage

Use Supabase as the database and authentication provider.
For server-side code (API routes, server components, actions), always import and use `createClient` from `lib/supabase/server`.
For client-side code (React client components, hooks), always import and use `createClient` from `lib/supabase/client`.
Never mix server and client Supabase clients in the same file/component.
Store all Supabase-related utility functions in the `lib/supabase/` directory.

Try to always use the types from types/database.types.ts

Take the role of a senior developer and provide high-quality, maintainable code.
