export interface SlideData {
  id: number;
  slug: string;
  image: string[];
  title: string;
  description: string;
  skills: string[];
  longDescription: string;
}

export const slides: SlideData[] = [
  {
    id: 1,
    slug: "stuk-automation",
    image: ["/STUK/STUK_1.webp", "/STUK/STUK_2.webp", "/STUK/STUK_3.webp"],
    title: "STUK Automation Enhancements",
    description: "Streamlined repetitive builder output with Vanilla JS and Python automations.",
    skills: ["Vanilla JavaScript", "Python", "CSS", "Automation", "CLI"],
    longDescription: "In this project, I worked with a unique constraint: I only had access to the generated website output—HTML, CSS, and JavaScript—produced by a proprietary builder developed by a third-party company. The goal was to support teachers in creating online exams, but the builder's output was inflexible, repetitive, and often required manual fixes.\n\nTo address this, I developed a custom automation workflow using Python and Vanilla JavaScript. The core of my solution was a set of Python scripts that automatically identified and resolved common issues in the generated code. These included accessibility bugs, layout inconsistencies, and missing assets—things that previously had to be handled manually for every single exam.\n\nI deliberately chose to work entirely from the terminal using Neovim to challenge myself and improve my fluency in low-overhead environments. Most of my workflow revolved around quickly iterating on scripts and doing targeted manual edits directly in the raw output when needed.\n\nThe project had a strong human component as well. Teachers had the freedom to request custom features or layouts. I acted as the bridge between their needs and the rigid system, modifying the output code to match their vision—often with very little standardization or consistency in the inputs.\n\nAlthough I attempted to automate testing, the nature of the system made this difficult. Each output could differ significantly in structure and content, and there was minimal standardization. This made manual QA an essential part of the process to ensure that the final product was reliable and production-ready."
  },
  {
    id: 2,
    slug: "landbrugslotteriet-remixjs",
    image: ["/LL/LL_desktop_1.webp", "/LL/LL_desktop_2.webp", "/LL/LL_desktop_3.webp", "/LL/LL_desktop_4.webp", "/LL/LL_desktop_5.webp", "/LL/LL_mobile_1.webp", "/LL/LL_mobile_2.webp", "/LL/LL_mobile_3.webp", "/LL/LL_mobile_4.webp", "/LL/LL_mobile_5.webp"],
    title: "Landbrugslotteriet – RemixJS Modernization",
    description: "Ported legacy .NET site to high-performance RemixJS (React) with a headless Umbraco backend.",
    skills: ["RemixJS", "React", "React Router 7", "Umbraco Delivery API", "SSR"],
    longDescription: "I recently worked on rebuilding the Landbrugslotteriet website — a complete frontend port from an older .NET Razor Pages and vanilla JavaScript setup to a modern stack powered by [RemixJS](https://remix.run/), React, Tailwind CSS, and Vite. The backend remained on Umbraco, but we used the new **Umbraco 13 Delivery API**, which provided a much cleaner and more efficient way to fetch content compared to the legacy rendering logic.\n\nThis wasn't a straightforward migration — most components had to be rewritten from scratch. I made architectural decisions around routing, state management using [Zustand](https://zustand-demo.pmnd.rs/), and performance optimizations. I implemented data streaming with RemixJs’ defer() and loader APIs to get critical content on the screen faster. Skeleton loaders were added for perceived performance, and SEO was treated as a first-class concern throughout the project. Remix’s server rendering model made it easier to implement solid metadata and semantic HTML structure.\n\nOne of the bigger challenges was achieving parity with the legacy frontend while modernizing UX patterns. This meant translating imperative jQuery behaviors into declarative, maintainable React components. At the same time, we had to ensure mobile responsiveness and accessibility. Tailwind CSS proved invaluable here for speeding up layout decisions and enforcing consistency. I also tweaked the build pipeline with Vite to support fast local iteration and production-grade asset optimization.\n\nThe end result was a much faster, more maintainable frontend codebase with improved SEO scores and reduced time-to-interactive. This project gave me the opportunity to apply performance tuning, SSR best practices, and UX design patterns in a real production context. It’s a great example of taking legacy systems into modern territory without throwing away what still works on the backend."
  },
  {
    id: 3,
    slug: "pos-interface",
    image: ["/POS/POS_1.webp", "/POS/POS_2.webp", "/POS/POS_3.webp", "/POS/POS_4.webp", "/POS/POS_5.webp", "/POS/POS_6.webp", "/POS/POS_7.webp"],
    title: "Landbrugslotteriet POS Interface",
    description: "Built a tablet-ready React/Redux POS front end embedded in Android.",
    skills: ["React", "Redux", "Android", "Cypress", "Webhooks"],
    longDescription: "I contributed to the development of a new web-based Point of Sale (POS) interface for **Landbrugslotteriet**, designed specifically for tablets and embedded within a custom Android application. The goal was to modernize the retail experience by delivering a reliable, touchscreen-optimized web app that could communicate seamlessly with the host Android OS and a customer-facing display.\n\nThe frontend was built using **React** and **Redux**, allowing for tight control over app state and user interaction. I worked on integrating the web layer with native Android APIs exposed to us by the host app. These APIs allowed us to trigger actions like printing receipts and receive real-time updates on hardware status—such as printer health or connectivity issues—directly from the tablet.\n\nOne of the more challenging parts was ensuring tight, bidirectional communication between the main POS interface and a secondary customer-facing display. These were separate browser contexts but shared state through a backend service and **webhooks**. This required setting up event-driven architecture that stayed in sync even under flaky network conditions.\n\nThe codebase was tested thoroughly using **Cypress**, covering both user flows and hardware interaction edge cases. We simulated hardware failures and verified how the UI responded in degraded modes. This project deepened my experience working with hybrid mobile-web setups, real-time state management, and integrating third-party native APIs in a controlled environment."
  },
  {
    id: 4,
    slug: "insekt",
    image: ["/Insekt/Insekt_desktop_1.webp", "/Insekt/Insekt_desktop_2.webp", "/Insekt/Insekt_desktop_3.webp", "/Insekt/Insekt_desktop_4.webp", "/Insekt/Insekt_mobile_1.webp", "/Insekt/Insekt_mobile_2.webp", "/Insekt/Insekt_mobile_3.webp", "/Insekt/Insekt_mobile_4.webp"],
    title: "Landbrugslotteriet – Interactive Map Section",
    description: "Extended legacy .NET site with a reusable Razor/JS map component for insect-hotel submissions.",
    skills: ["C#", ".NET Razor Pages", "Vanilla JavaScript", "Sass", "Umbraco Forms"],
    longDescription: "As part of a modernization initiative for Landbrugslotteriet's website, I built a reusable interactive map section that displays insect hotel locations across Denmark. This feature was designed to be modular and CMS-configurable, allowing editors to insert it anywhere on the site without needing developer involvement. The project involved full-stack development using C#, .NET with Razor Pages on the backend, and modern JavaScript (ES6), Sass, and Bootstrap on the frontend.\n\nOne of the key challenges was handling the dynamic rendering of a large number of map points while maintaining performance and UX quality. I implemented a system where hotels are grouped by city, and only relevant clusters are shown as the user navigates. When a map point is clicked, a side panel opens showing detailed information, including address and description, pulled directly from Umbraco's CMS. The UI updates responsively to match the user's interactions, and the panel stays in sync with the map state.\n\nAnother critical aspect was the submission flow. Users could submit their own insect hotel via a built-in form in the side panel. I configured this form using Umbraco Forms, triggering a custom workflow that creates new content nodes inside the CMS. Submissions are then routed for approval through Umbraco's built-in moderation system. This gave the client a self-service, structured way to expand their map organically.\n\nThis project demonstrates my ability to deliver production-level features in a legacy tech stack, while still introducing modern, modular frontend patterns. It also highlights experience with CMS integrations, reusable component design, and performance-sensitive UI work — all crucial for real-world, user-facing web applications."
  },
  {
    id: 5,
    slug: "dpa-microphones",
    image: [
      "/DPA/DPA_desktop_1.webp",
      "/DPA/DPA_desktop_2.webp",
      "/DPA/DPA_desktop_3.webp",
      "/DPA/DPA_desktop_4.webp",
      "/DPA/DPA_desktop_5.webp",
      "/DPA/DPA_desktop_6.webp",
      "/DPA/DPA_desktop_7.webp",
      "/DPA/DPA_desktop_8.webp",
      "/DPA/DPA_desktop_9.webp",
      "/DPA/DPA_desktop_10.webp",
      "/DPA/DPA_mobile_1.webp",
      "/DPA/DPA_mobile_2.webp",
      "/DPA/DPA_mobile_3.webp",
      "/DPA/DPA_mobile_4.webp",
      "/DPA/DPA_mobile_5.webp",
      "/DPA/DPA_mobile_6.webp",
      "/DPA/DPA_mobile_7.webp",
      "/DPA/DPA_mobile_8.webp",
      "/DPA/DPA_mobile_9.webp",
      "/DPA/DPA_mobile_10.webp"
    ],
    title: "DPA Microphones Revamp",
    description: "Overhauled a complex marketing site, balancing SEO and interactivity with server-first rendering.",
    skills: ["Razor Pages", "JavaScript", "Sass", "Bootstrap"],
    longDescription: "For this project, I worked on building a new website for DPA Microphones using C#, .NET with Razor Pages, Umbraco 13 as the CMS, Bootstrap, and Sass. The website had a large number of pages and features, some of which were complex both in functionality and structure. The primary goal of the project was to improve search engine visibility and performance, which heavily influenced how we approached both the frontend and backend.\n\nBecause of the SEO requirements, we made sure that most interactive views were rendered server-side on the first load using Razor Pages, and then progressively enhanced with JavaScript for client-side interactivity. This hybrid approach allowed us to strike a good balance between fast initial loads and a rich user experience. I found myself in the middle of the stack, often bridging communication between frontend and backend, designing data structures and APIs that would be easy to consume on the client side.\n\nIn hindsight, this was a major learning experience for me. I had the freedom to influence how we structured the frontend, but I defaulted to the \"old ways\" I'd seen in previous projects — building individual pages or sections one at a time and reusing code manually. This resulted in tightly coupled components and a lot of duplicated logic that was hard to maintain or scale. Refactoring was painful, and I realized too late that I should’ve prioritized modularity and reusability from the start.\n\nThis project taught me several key lessons: to challenge existing processes when I know there's a better way, to not blindly accept other people's time estimates, and to collaborate more with the team instead of trying to solve everything on my own. These insights have already shaped how I work today — I now design components with reusability in mind and push for a more maintainable and scalable architecture early in the project lifecycle."
  },
  {
    id: 6,
    slug: "have-data-sync",
    image: ["/Have/Have_desktop.webp", "/Have/Have_mobile.webp"],
    title: "Haveselskabet Data Sync",
    description: "Fixed high-stakes Umbraco←→client platform data sync with robust concurrency controls.",
    skills: ["C#", "Webhooks", "Concurrency", "Logging"],
    longDescription: "In this project for Haveselskabet, I was tasked with investigating and fixing data synchronisation issues between an Umbraco CMS and a customer-controlled external platform. The two systems were integrated through webhooks, with the external platform acting as the source of truth. While the CMS only attempted to update user data, the actual validated data was always pushed back from the customer platform. However, this led to recurring issues in the user profile sync, where data would unexpectedly overwrite or fail to update correctly.\n\nAfter auditing the backend codebase (built with C# and Razor Pages), I discovered multiple concurrency issues and race conditions in the webhook processing pipeline. Because both systems operated on a near real-time stream of updates, minor delays or overlapping requests resulted in state mismatches. In particular, simultaneous webhook triggers would interfere with each other due to the lack of proper locking or deduplication logic, causing cascading desyncs.\n\nI refactored the webhook handlers to be more robust and idempotent. This included introducing correlation tokens, rejecting duplicate updates, and enforcing sequential execution of webhook calls where necessary. On top of that, I implemented detailed logging and versioned update tracking, which allowed us to trace the exact flow of every profile change across systems. These improvements significantly increased sync reliability and eliminated the recurring data corruption issues.\n\nThe project sharpened my understanding of distributed systems, real-time syncing challenges, and concurrency control. It also demonstrated the importance of treating external systems as unstable by default and designing for resilience rather than assuming perfect communication. This experience has made me more confident in handling cross-system integrations and debugging hard-to-trace data bugs in production environments."
  },
  {
    id: 7,
    slug: "frontend-baseline-upgrade",
    image: ["/Frontend.webp"],
    title: "Frontend Baseline Upgrade",
    description: "Migrated the standard Webpack starter to Vite, slashing bundle size without disrupting workflows.",
    skills: ["Vite", "ES Modules", "Rollup", "TypeScript", "Sass"],
    longDescription: "As part of an internal effort to modernize our frontend development workflow, I was tasked with improving the company’s baseline project — a starter template used for spinning up all new marketing and product websites. The challenge: enhance performance and developer experience without disrupting established workflows or requiring the team to relearn tools.\n\nThe original setup used Webpack, a powerful but increasingly bloated bundler. I proposed migrating to [Vite](https://vitejs.dev/), a more modern build tool that offers instant development startup, fast hot module replacement (HMR), and better defaults out of the box. The catch was that the transition had to be seamless: no rewrites, no breaking changes, just a drop-in improvement.\n\nThe migration to Vite led to a noticeable reduction in bundle size and build time, while preserving the existing file structure, scripts, and workflow conventions. All the code remained fully compatible, so no one had to relearn anything — which was a hard requirement from the team. Developers were able to continue creating new websites exactly as before, with less friction and faster feedback.\n\nBeyond performance, Vite also removed the need for several third-party plugins. Its native support for TypeScript, CSS preprocessors, ES Modules, and static asset imports cleaned up the config and simplified maintenance. Overall, this upgrade delivered better performance, faster iteration cycles, and a smoother dev experience — without changing how we work."
  },
  {
    id: 8,
    slug: "aeroguest",
    image: [
      "/Aeroguest/Aeroguest_desktop_1.webp",
      "/Aeroguest/Aeroguest_desktop_2.webp",
      "/Aeroguest/Aeroguest_desktop_3.webp",
      "/Aeroguest/Aeroguest_desktop_4.webp",
      "/Aeroguest/Aeroguest_desktop_5.webp",
      "/Aeroguest/Aeroguest_mobile_1.webp",
      "/Aeroguest/Aeroguest_mobile_2.webp",
      "/Aeroguest/Aeroguest_mobile_3.webp",
      "/Aeroguest/Aeroguest_mobile_4.webp",
      "/Aeroguest/Aeroguest_mobile_5.webp"
    ],
    title: "Aeroguest Redesign Implementation",
    description: "Translated new UX designs into a modern Umbraco-powered site using Sass and vanilla JS.",
    skills: ["Umbraco 10", "Sass", "JavaScript", "CMS", "Figma"],
    longDescription: "The Aeroguest project was a front-end focused redesign of an outdated website. The company needed a visual overhaul based on a fresh UI design, along with the implementation of several new content sections. I was responsible for integrating these designs and updating older components to fit the new structure.\n\nI worked with **Sass**, **Vanilla JavaScript**, **Bootstrap**, **.NET**, and **Umbraco 10**. The stack required hands-on implementation in both front-end and Razor view layers. I rewrote existing layout components, updated SCSS structure, and ensured mobile responsiveness. New content blocks had to be built cleanly while maintaining consistency with the CMS’s dynamic content models.\n\nThe most significant technical challenge was understanding and working with the newer capabilities of **Umbraco 10**. I had to learn how to use features like the `Block List Editor`, partial views, and strongly typed models in Razor. This meant digging into both the C# codebase and the CMS interface to fully integrate front-end work with Umbraco's backend logic.\n\nOutside of development, I also managed reporting and time tracking. After work hours, I would summarize progress, note time used versus estimated, and communicate blockers or updates to my manager. This not only helped with accountability but also kept the project moving efficiently. Overall, it was a valuable experience blending coding, CMS integration, and project communication."
  },
  {
    id: 9,
    slug: "legaldesk",
    image: ["/Legaldesk/Legaldesk_desktop_1.webp", "/Legaldesk/Legaldesk_desktop_2.webp", "/Legaldesk/Legaldesk_desktop_3.webp", "/Legaldesk/Legaldesk_desktop_4.webp", "/Legaldesk/Legaldesk_desktop_5.webp", "/Legaldesk/Legaldesk_mobile_1.webp", "/Legaldesk/Legaldesk_mobile_2.webp", "/Legaldesk/Legaldesk_mobile_3.webp", "/Legaldesk/Legaldesk_mobile_4.webp", "/Legaldesk/Legaldesk_mobile_5.webp"],
    title: "Legaldesk Frontend Evolution",
    description: "Enhanced Legaldesk's frontend with modular components, automated testing, and customer service automation.",
    skills: ["C#", "Selenium", "Umbraco", "CMS", "Automation", "JavaScript", "TypeScript"],
    longDescription: "### 🧠 Overview\n\nAt **Legaldesk**, I’ve been responsible for evolving and maintaining the frontend codebase while promoting code simplicity, reusability, and adherence to architectural best practices. Below are several key projects that highlight my contribution to the platform.\n\n---\n\n### 📄 Partner Landing Pages\n\n**Problem:** Partners needed a branded landing page to direct their customers to Legaldesk offers, with flexibility for marketing teams to adjust content independently.\n\n**Solution:**  \nI designed a dynamic system where each section of a landing page is modular and styled to work in any order or combination. I built reusable section components based on design patterns and integrated them into a CMS-driven layout editor.\n\n**Impact:**  \n- Non-developers can now create and manage landing pages without dev input.  \n- New pages can be launched faster with minimal overhead.\n\n---\n\n### 📚 Product Resources Modal\n\n**Problem:** Product pages required contextual legal info with an updated design and shared content across products.\n\n**Solution:**  \nI created a floating modal component with consistent styling that pulls product-specific data dynamically. The backend structure allows the same content block to be reused on multiple product pages.\n\n**Challenge & Solution:**  \nTo avoid breaking changes, I layered the new resource modal on top of the legacy Umbraco content system, allowing gradual migration.\n\n**Impact:**  \n- Content updates became faster and easier.  \n- Reduced duplication and maintenance time for marketing.\n\n---\n\n### ✅ End-to-End Testing with Selenium\n\n**Problem:** We lacked automated testing to validate user flows before deployment.\n\n**Solution:**  \nI introduced Selenium WebDriver into our .NET solution after evaluating testing tools. I prioritized automating key customer journeys like document purchase flows and then expanded to cover secondary flows.\n\n**Impact:**  \n- Reduced deployment risk.  \n- Caught critical bugs before they reached production.  \n- Increased team confidence in CI/CD.\n\n---\n\n### ⚙️ Customer Service Automation\n\n**Problem:** Our support team handled repetitive tasks manually.\n\n**Solution:**  \nBuilding on the Selenium testing setup, I proposed and implemented automation via **Remote WebDriver** and a virtual machine. I exposed an internal API endpoint to trigger these flows, and results were stored in the DB and surfaced to support agents.\n\n**Impact:**  \n- Saved significant time on manual tasks.  \n- Reduced errors in data entry.  \n- Freed up customer service for higher-value tasks.\n\n---\n\n### 🌱 Final Thoughts\n\nThis set of projects demonstrates how I approach frontend work: not just building interfaces, but designing systems that scale, empower non-developers, and reduce maintenance overhead. Whether it’s through code reuse, automation, or thoughtful UX tooling, my goal is always to make the product more maintainable and efficient."
  }
]
