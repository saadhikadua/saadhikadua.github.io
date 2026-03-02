interface Subpara {
  title: string;
  body: string;
  bullets?: string[];
}


export interface Project {
  id: string;
  title: string;
  company: string;
  role: string;
  duration: string;
  image: string;
  summary: string;
  intro: string;
  impact: string[];
  skills: string[];
  content: {
    challenge: string;
    approach: string;
    outcome: string;
  };
  subparas: Subpara[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  logo?: string;
  description: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  category: "strategy" | "execution" | "tools" | "soft-skills";
}

export const projects: Project[] = [
  {
    id: "project-001",
    title: "From Empty Repo to Live Portfolio",
    company: "",
    role: "",
    duration: "2026",
    image: "",
    summary: "Building a simple, fast personal site by pairing modern web tooling with AI to get from idea to live, iterating along the way.",
    impact: [],
    intro: "For a long time, my “portfolio” was just my LinkedIn profile and a PDF resume. That worked, but it didn’t really reflect how I think about products or how I actually work: quickly iterating, experimenting with new tools, and using AI as leverage rather than a crutch. So I decided to build a personal website: saadhikadua.github.io. My goal wasn’t just to ship a site—it was to treat the site itself as a product: define the “job” it needed to do, choose a stack that matched that job, and deliberately use AI tools (Lovable, Claude Code, and Perplexity) as collaborators in the process.",
    skills: ["Experimentation with AI tools (Lovable, coding copilots, LLMs for content)", "Technical execution with modern web tooling (React, Vite, GitHub Pages)"],
    content: {
      challenge: "The existing checkout process had a 67% abandonment rate, significantly higher than industry benchmarks. Users cited complexity, unexpected costs, and lack of trust signals as primary pain points.",
      approach: "Conducted extensive user research including session recordings, surveys, and usability testing. Identified key drop-off points and prioritized improvements based on impact vs. effort. Implemented iterative A/B tests to validate each change before full rollout.",
      outcome: "Launched a streamlined 3-step checkout with transparent pricing, guest checkout option, and trust badges. The redesign resulted in a 23% reduction in cart abandonment and generated an additional $2.4M in annual revenue.",
    },
    subparas: [
      {
        title: "Starting From the Product, Not the Tech",
        body: "Before touching any tools, I wrote down what the website needed to accomplish:",
        bullets: [
          "Tell my story the way a resume can’t, my journey, values, and product philosophy",
          "Be something I can actually maintain and iterate on, not a static one-off",
          "Make it easy for potential collaborators to understand my impact quickly",
        ]
      },
      {
        title: "",
        body: "The user is a busy potential collaborator with limited attention. The job-to-be-done is, 'In under 2–3 minutes, decide whether Saadhika is someone I want to talk to.' That pushed me towards a fast, lightweight site (no heavy frameworks just for the sake of it)."
      },
      {
        title: "Why I Chose Lovable and GitHub Pages",
        body: "I had three constraints:" ,
        bullets: [
        "I wanted real code (not a locked-in no-code tool)",
        "Fast iteration, and ",
        "Almost-zero hosting friction"
        ]
      },
      {
        title:"",
        body: "Lovable gave me a head start by generating a React + Vite codebase from natural language prompts. Instead of spending time on boilerplate and project setup, I could jump straight into structure and UX. Vite + React gave me a modern, fast frontend with a great dev experience and simple static builds. GitHub Pages gave me free, simple hosting directly from my repo, which makes continuous deployment straightforward. This combination meant I could spend more time applying product thinking and less time wrestling with infra."
      },
      {
        title: "Using AI as a Collaborator, Not a Shortcut",
        body: "I  used multiple AI tools, but each had a distinct role: ",
        bullets: [
          "Lovable to generate and refactor the initial codebase and layout",
          "Claude Code inside the editor to help with targeted refactors, small component changes, and TypeScript ergonomics",
          "Perplexity (LLM) to help with content: my founder’s note, product philosophy section, and phrasing for my tagline—while I stayed in control of the narrative and edited heavily for my own voice."
        ]
      },
      {
        title: "",
        body: "This mirrors how I like to build products at work: AI accelerates exploration and implementation, but taste, judgment, and constraints still come from me."
      },
      // {
      //   title: "Designing the Content Like a Product",
      //   body: "I thought about each section of the site as a feature with a purpose: Hero + tagline: Quickly explain who I am and what I do (“I build thoughtful, high-leverage products people love—and that deliver measurable business impact.”). Founder’s note: A narrative version of my story—why I care about thoughtfully designed technology, my shift from “Can we build this?” to “Should we build this, and why now?”, and how I bridge engineering and business. Experience: Structured around outcomes, not responsibilities—mirroring how I’d talk about my work in an interview. My Product Philosophy: A clear articulation of how I think: user obsession, data-informed intuition, bias for action, collaborative leadership, and first-principles thinking. Every time I added or edited copy, I asked: What decision is this helping the reader make? Is this redundant with something they’ve already read? Could this be clearer or more concrete?"
      // },
      {
        title: "What This Project Says About How I Work",
        body: "For me, this site isn’t just a static portfolio, it’s a proof point of how I approach building:",
        bullets: [
          "Start with the outcome, not the tools - I anchored on what the site needed to achieve for its “users” before committing to a technology.",
          "Use AI as leverage - AI handled boilerplate, scaffolding, and draft content so I could focus on narrative, structure, and polish.",
          "Ship, then refine - I didn’t wait for perfection. I shipped a usable v1, then iterated on copy, structure, and deployment issues."
        ]
      },
      {
        title: "",
        body: ""
      },
    ]
  },
  // {
  //   id: "project-002",
  //   title: "Building a Mobile-First Dashboard",
  //   company: "FinTech Startup",
  //   role: "Senior Product Manager",
  //   duration: "2023",
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
  //   summary: "Spearheaded the development of a mobile-first analytics dashboard that became the company's most-used feature.",
  //   impact: ["40% increase in daily active users", "4.8★ App Store rating", "Featured by Apple"],
  //   skills: ["Mobile Product Strategy", "Data Visualization", "Agile Development"],
  //   content: {
  //     challenge: "Desktop-first users were struggling to access critical business insights on mobile. With 60% of logins happening on mobile devices, there was a significant gap in the mobile experience.",
  //     approach: "Partnered with design and engineering to create a mobile-native experience from scratch. Prioritized the top 5 use cases based on user interviews and analytics. Used rapid prototyping to test concepts before development.",
  //     outcome: "Delivered an intuitive mobile dashboard that increased daily active users by 40%. The app was featured on the App Store and received a 4.8-star rating with users praising its simplicity and speed.",
  //   },
  // },
  // {
  //   id: "project-003",
  //   title: "Launching a B2B Self-Serve Platform",
  //   company: "SaaS Company",
  //   role: "Product Manager",
  //   duration: "2022-2023",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
  //   summary: "Designed and launched a self-serve onboarding platform that reduced customer acquisition cost by 40%.",
  //   impact: ["40% reduction in CAC", "60% of new signups via self-serve", "NPS improved from 32 to 58"],
  //   skills: ["Product-Led Growth", "Onboarding Optimization", "Metrics & Analytics"],
  //   content: {
  //     challenge: "Sales-led growth was becoming unsustainable. The average deal size didn't justify the high-touch sales process, and competitors were winning with self-serve options.",
  //     approach: "Mapped the entire customer journey and identified where human intervention was truly needed vs. where self-serve could work. Built interactive product tours, contextual help, and automated onboarding sequences.",
  //     outcome: "The self-serve platform now accounts for 60% of new signups. Customer acquisition cost dropped by 40%, and the improved onboarding experience boosted NPS from 32 to 58.",
  //   },
  // },
];

export const experiences: Experience[] = [
  {
    id: "exp-001",
    company: "Intuit",
    role: "AI Product Manager",
    duration: "2025 - Present",
    description: "Building products that help leaders manage, coach, and scale a large expert workforce.",
    highlights: [
      "Launched an insights tool for managers of 9K experts, following a pilot that improved NPS by +4 and reduced detractors by 6%",
    ],
  },
  {
    id: "exp-002",
    company: "Salesforce",
    role: "MBA Consultant",
    duration: "2024",
    description: "Shaped go-to-market strategy for financial services campaigns through global research and insights.",
    highlights: [
      "Conducted market research for lead generation in financial services, accounting for global cultural and regulatory nuances",
    ],
  },
  {
    id: "exp-003",
    company: "Cisco",
    role: "Product Manager Intern",
    duration: "Summer 2024",
    description: "Led strategy and roadmap for infrastructure monitoring experiences on Cisco Intersight.",
    highlights: [
      "Drove product strategy by partnering with cross-functional teams to gather requirements and define product vision",
      "Streamlined user experience by prioritizing features for Cisco Intersight, an infrastructure monitoring platform supporting 650K+ devices, improving edge infrastructure monitoring and management",
      "Proposed a 2-year global visualization roadmap aligned with Product, Engineering, and UX stakeholders",
    ],
  },
  {
    id: "exp-004",
    company: "Microsoft",
    role: "MBA consultant",
    duration: "2024 - 2024",
    description: "Identified new strategic opportunities and improved customer outcomes for Azure AI in education.",
    highlights: [
      "Researched higher education segments to identify the next investment area for Azure AI for Education",
      "Led product enhancements based on user interviews, resolving key pain points and saving customers an estimated $18K annually",
    ],
  },
  {
    id: "exp-005",
    company: "SAP",
    role: "Product Development Lead",
    duration: "2018 - 2023",
    description: "Led cross-functional product initiatives to standardize UX, accelerate adoption, and improve delivery efficiency across SAP solutions.",
    highlights: [
      "Led a product-focused team of 3 to standardize and enhance user experience across SAP products, reducing time-to-adoption for SAP solutions built by 10K development teams and achieving 80% CSAT",
      "Tailored product solutions and executive presentations as part of SAP’s Nascent Leadership Program, open to the top 15% of candidates",
      "Won an innovation pitch and led development of an AI hiring solution that received 90% positive executive feedback",
    ],
  },
];

export const skills: Skill[] = [
  // Strategy
  { name: "Product Strategy", category: "strategy" },
  { name: "Roadmap Planning", category: "strategy" },
  { name: "Market Research", category: "strategy" },
  { name: "Competitive Analysis", category: "strategy" },
  { name: "Go-to-Market Strategy", category: "strategy" },
  
  // Execution
  { name: "Agile/Scrum", category: "execution" },
  { name: "User Story Writing", category: "execution" },
  { name: "A/B Testing", category: "execution" },
  { name: "Sprint Planning", category: "execution" },
  { name: "Backlog Prioritization", category: "execution" },
  
  // Tools
  { name: "Figma", category: "tools" },
  { name: "Jira", category: "tools" },
  // { name: "Amplitude", category: "tools" },
  // { name: "Mixpanel", category: "tools" },
  { name: "SQL", category: "tools" },
  // { name: "Notion", category: "tools" },
  
  // Soft Skills
  { name: "Cross-functional Leadership", category: "soft-skills" },
  { name: "Stakeholder Management", category: "soft-skills" },
  { name: "User Interviews", category: "soft-skills" },
  { name: "Presentation Skills", category: "soft-skills" },
  { name: "Team Mentoring", category: "soft-skills" },
];
