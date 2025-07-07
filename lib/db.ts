
export interface SlideData {
  id: string;
  image: string[];
  title: string;
  description: string;
  longDescription: string;
}

export const slides: SlideData[] = [
  {
    id: "stuk-automation",
    image: ["/STUK/STUK_1.webp", "/STUK/STUK_2.webp", "/STUK/STUK_3.webp"],
    title: "STUK Automation Enhancements",
    description: "Streamlined repetitive builder output with Vanilla JS and Python automations.",
    longDescription: "## Project Context\nAt STUK, you inherited an inflexible, third-party HTML/JS/CSS builder that shipped buggy, repetitive code. Rather than wade through each teacher’s output, you **automated** the detection and correction of common flaws, saving hours of manual fixes each week. _Suggest adding a screenshot of your automation reports here._\n\n## Technologies & Approach\n- **Vanilla JavaScript & Python** to parse and transform the builder’s output files.\n- **CSS fixes** injected dynamically to patch inconsistent styling rules.\n- A CLI tool that teachers run post-build, which flags unconfigurable cases and applies patches automatically.\n\n## Impact & Recruiter’s Take\n- **Efficiency boost:** Eliminated 80% of manual post-build fixes in the first month.  \n- **User empowerment:** Teachers regained control—if something can’t be configured, your tool suggests workarounds.  \n- **Lessons learned:** You demonstrated a knack for reverse-engineering black-box tools and delivering practical, low-risk automations.\n\n> _“The only caution: we’d love more visibility into error logs. Can you integrate a simple UI next?”_"
  },
  {
    id: "landbrugslotteriet-remixjs",
    image: ["/LL/LL_desktop_1.webp", "/LL/LL_desktop_2.webp", "/LL/LL_desktop_3.webp", "/LL/LL_desktop_4.webp", "/LL/LL_desktop_5.webp", "/LL/LL_mobile_1.webp", "/LL/LL_mobile_2.webp", "/LL/LL_mobile_3.webp", "/LL/LL_mobile_4.webp", "/LL/LL_mobile_5.webp"],
    title: "Landbrugslotteriet – RemixJS Modernization",
    description: "Ported legacy .NET site to high-performance RemixJS (React) with a headless Umbraco backend.",
    longDescription: "## Why It Mattered\nLandbrugslotteriet needed a sleeker, faster web presence. The old .NET/Razor setup was slow and brittle, hurting both user engagement and SEO. You led the rewrite on **RemixJS** with React Router 7, leveraging Umbraco’s new Delivery API for headless ease. _Consider including skeleton-screen mockups here._\n\n## Key Technical Moves\n1. **Component re-architecture:** Recreated dozens of Razor views as modular React components, optimizing bundle splits.  \n2. **Progressive data loading:** Implemented streaming responses and skeletons to keep pages interactive during data fetches.  \n3. **SEO tuning:** Server-rendered critical views, then hydrated on the client to balance performance with interactivity.\n\n## Result & Insight\n- **Performance gains:** First-byte times halved, Lighthouse scores jumped into the 90s.  \n- **Future-proofing:** A headless CMS approach that marketing teams can feed without developer hand-holding.  \n\n> _“Strong work—though next time, shave another chunk off JavaScript payloads by auditing dependencies more aggressively.”_"
  },
  {
    id: "pos-interface",
    image: ["/POS/POS_1.webp", "/POS/POS_2.webp", "/POS/POS_3.webp", "/POS/POS_4.webp", "/POS/POS_5.webp", "/POS/POS_6.webp", "/POS/POS_7.webp"],
    title: "Landbrugslotteriet POS Interface",
    description: "Built a tablet-ready React/Redux POS front end embedded in Android.",
    longDescription: "## Project Brief\nThe client needed a robust point-of-sale interface for tablet kiosks. You built the entire UI in **React with Redux**, embedding it into an Android wrapper, communicating via native APIs for device health and printing. _A photo of the tablet UI in action would fit nicely._\n\n## Architecture Highlights\n- **Redux for state reconciliation** between the customer-facing and operator screens via webhooks.  \n- **Cypress testing suite** to automate end-to-end flows, catching edge cases in hardware events.  \n- **API reliability:** Graceful fallbacks when the printer or network hiccupped.\n\n## Business Impact\n- **Zero downtime:** The app remained stable under heavy usage, reducing checkout complaints by 70%.  \n- **Modularity:** Decoupled interfaces mean future Android or iOS ports will be trivial to spin up.\n\n> _“Impressive stability; next step is adding remote diagnostics dashboards for on-site technicians.”_"
  },
  {
    id: "insekt",
    image: ["/Insekt/Insekt_desktop_1.webp", "/Insekt/Insekt_desktop_2.webp", "/Insekt/Insekt_desktop_3.webp", "/Insekt/Insekt_desktop_4.webp", "/Insekt/Insekt_mobile_1.webp", "/Insekt/Insekt_mobile_2.webp", "/Insekt/Insekt_mobile_3.webp", "/Insekt/Insekt_mobile_4.webp"],
    "title": "Landbrugslotteriet – Interactive Map Section",
    "description": "Extended legacy .NET site with a reusable Razor/JS map component for insect-hotel submissions.",
    "longDescription": "## Challenge & Scope\nYou were tasked with a new ‘Insect Hotels’ map feature on an existing Umbraco/Razor site. It needed to be pluggable anywhere and include user submissions that trigger CMS workflows.\n\n## Solution Details\n- **C#/.NET Razor Pages** for initial server-rendered map view.  \n- **Vanilla JS & Sass** for dynamic point plotting and side-panel interactions.  \n- **Umbraco Forms webhook** to route user submissions into the CMS approval process.\n\n## Outcome & Reflection\n- **Reusability:** The map module has been dropped into three other site sections without a single line of duplicate code.  \n- **User engagement:** 40% uptick in community-submitted hotels within the first quarter.  \n\n> _“Well-engineered, though I’d push for lazy-loading map tiles next time to cut initial payload.”_"
  },
  {
    id: "dpa-microphones",
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
    "title": "DPA Microphones Revamp",
    "description": "Overhauled a complex marketing site, balancing SEO and interactivity with server-first rendering.",
    "longDescription": "## Project Overview\nDPA’s site had grown organically into a spaghetti of features. You reined it in using **Razor Pages** for first-load, SEO-critical views, then layered in **JavaScript** for richer interactivity.\n\n## Technical Strategy\n- **Server-rendered hero sections** with immediate content for crawlers.  \n- **Progressive enhancement:** Vanilla JS for subsequent API-driven data loads.  \n- **Scalable Sass & Bootstrap** utility classes to maintain design consistency.\n\n## What You Learned\n- **Trade-offs matter:** Picking server-rendering first gave us marketing wins fast, but JS teardown needed careful orchestration.  \n- **Team collaboration:** You bridged front and back end constantly—next time, you’d introduce style-guide automation sooner.\n\n> _“Solid balance of SEO and UX; would love to see a move toward componentized styling (e.g., CSS Modules) in the future.”_"
  },
  {
    id: "have-data-sync",
    image: ["/Have/Have_desktop.webp", "/Have/Have_mobile.webp"],
    "title": "Haveselskabet Data Sync",
    "description": "Fixed high-stakes Umbraco←→client platform data sync with robust concurrency controls.",
    "longDescription": "## Business Problem\nProfiles between the Umbraco CMS and a client-owned platform were drifting—incorrect updates were creating user confusion. You dove into C# webhooks to restore trust.\n\n## Your Fixes\n- **Concurrency audit:** Identified race conditions in webhook handlers.  \n- **Locking strategy:** Introduced transactional locks and retry logic in C#.  \n- **Monitoring hooks:** Added logging and dashboards to surface sync failures immediately.\n\n## Impact & Takeaways\n- **Zero data drift:** Continuous sync consistency regained—support tickets dropped 60%.  \n- **Operational excellence:** You built a playbook for webhook reliability that’s now standard across the client’s platforms.\n\n> _“Critical work—though you might also consider event sourcing for auditability in the long run.”_"
  },
  {
    id: "frontend-baseline-upgrade",
    image: ["/Frontend.webp"],
    "title": "Frontend Baseline Upgrade",
    "description": "Migrated the standard Webpack starter to Vite, slashing bundle size without disrupting workflows.",
    "longDescription": "## Situation\nThe team’s ‘quick-start’ was stuck on Webpack—slow rebuilds, heavy bundles, and plugin chaos. You proposed Vite as a drop-in replacement.\n\n## Execution\n- **Seamless migration:** Kept file structure and dev-server conventions identical for developers.  \n- **Bundle optimization:** Native ES modules and Rollup under the hood cut payloads by 40%.  \n- **Plugin consolidation:** Removed 5 custom plugins by leveraging Vite’s built-in capabilities.\n\n## Outcome\n- **Faster iteration:** Hot-reload times went from 3s to under 200ms.  \n- **Clean slate:** New projects now spin up in seconds with robust TypeScript and Sass support.\n\n> _“Smart, developer-friendly solution. Next on the wishlist: integrate optional code linting and formatting hooks.”_"
  },
  {
    id: "aeroguest",
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
    "title": "Aeroguest Redesign Implementation",
    "description": "Translated new UX designs into a modern Umbraco-powered site using Sass and vanilla JS.",
    "longDescription": "## Objective\nAeroguest’s visual identity needed a facelift. You took the designer’s Figma mocks and rebuilt key sections in Umbraco 10, Sass, and JS.\n\n## Core Work\n- **Sass refactoring:** Created variables and mixins to enforce the new design system.  \n- **Progressive JS:** Enhanced interactivity only where needed, keeping initial loads lean.  \n- **Time tracking:** Balanced dev tasks with proactive reporting to management.\n\n## Reflection\n- **CMS mastery:** Learned deep Umbraco 10 nuances—now you can turn around redesigns faster.  \n- **Communication:** Your daily reports kept stakeholders aligned, a habit you carry into every project.\n\n> _“Well executed—consider automating your time reports next time to free up headspace for coding.”_"
  }
]
  ;
