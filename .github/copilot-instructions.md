This is a next.js project, and also my portfolio website.

It is built using Next.js, Supabase, TypeScript, React, and Tailwind CSS.

Try to always use tailwind classes for styling. And make use of cn from `lib/utils/utils` for conditional class names.

Here is an example of a component, which you should always follow (this doesn't apply to pages):

```typescript
interface ComponentNameProps {
  // Define your props here
}

export const ComponentName: React.FC<ComponentNameProps> = ({}) => {
  return <div />;
};
```

Shared components should be placed in the `components` folder, while feature-specific components should be placed in the `feature-components` folder.

Pages should be placed in the `app` directory following Next.js conventions.

Keep components small and focused. And create multiple components if necessary.

Try to write as little comments as possible. The code should be self-documenting.

Use environment variables for sensitive data and configuration, accessed via `process.env`.

Prefer using Next.js `Image` and `Link` components for optimized images and navigation.

Follow semantic HTML practices for accessibility.

# Supabase Usage

Use Supabase as the database and authentication provider.
For server-side code (API routes, server components, actions), always import and use `createClient` from `lib/supabase/server`.
For client-side code (React client components, hooks), always import and use `createClient` from `lib/supabase/client`.
Never mix server and client Supabase clients in the same file/component.
Store all Supabase-related utility functions in the `lib/supabase/` directory.

Try to always use the types from types/database.types.ts and Pick or Omit for more specific types.

Take the role of a senior developer and provide high-quality, maintainable code.
