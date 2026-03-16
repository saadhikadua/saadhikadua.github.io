import { BookDashed } from "lucide-react";

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
  demo?:string 
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
  {
    id: "project-002",
    title: "Buidling Guardrails and not just Dashboards",
    company: "",
    role: "",
    duration: "2026",
    image: "",
    summary: "",
    impact: [],
    intro: "In one of my recent projects, multiple teams were working in a tightly serialized sequence, if Team A slipped, Teams B and C felt it immediately. We tracked everything in a shared spreadsheet, but the tool behaved like most spreadsheets do—silent. Dates moved, statuses changed, and downstream teams often learned about it only when things were already on fire.",
    skills: ["Lightweight internal tooling", "Change governance", "Scripting & Automation"],
    content: {
      challenge: "",
      approach: "",
      outcome: "",
    },
    demo: "/assets/demoTracker.mp4",
    subparas: [
      {
        title: "",
        body: "As a product manager, I saw two problems:",
        bullets: [
          "Changes to critical fields (dates, statuses) had no enforced explanation. ",
          "There was no automatic communication when upstream plans changed.",
        ]
      },
      {
        title: "",
        body: "I didn’t want to introduce a heavyweight new tool just to fix this. Instead, I designed a light governance layer on top of Google Sheets."
      },
       {
        title: "The Problem - Silent Changes in a Shared Plan",
        body: "Our existing tracker captured the basics:",
        bullets: [
          "Team / Function",
          "Deliverable",
          "Start and End dates"
        ]
      },
      {
        title: "",
        body: "It worked well for visibility, but not for accountability. Anyone could change dates or status with a single keystroke. People rarely documented *why* they changed something. Downstream teams had to constantly poll the sheet or rely on manual updates in meetings and Slack. When dependencies are serialized, “I moved my end date by a week” is not a harmless action; it’s effectively a product decision that impacts lead time, launch sequencing, and sometimes customer commitments. I wanted the tool to reflect that."
      },
      {
        title: "Design Goals - Light Governance, Maximum Adoption",
        body: "Before touching any implementation, I set three constraints:",
        bullets: [
          "Stay where users already work - No new tools or logins. The solution had to live inside Google Sheets.",
          "Add guardrails, not friction for the sake of it  - If a change truly matters (e.g., dates or status), the system should enforce explanation and communication. For everything else, the sheet should feel normal.",
          "Create an audit trail with minimal ceremony -  I wanted a history of “who changed, what and why” without forcing people into a complex workflow."
        ]
      },
      {
        title:"Solution - An 'on-edit' layer over Google Sheets",
        body: "From those constraints, the solution boiled down to three user‑facing rules:",
        bullets: [
          "You can only change certain columns (dates/status) if you add or update a note on that cell.",
          "Every accepted change must update the note, not just reuse an old one.",
          "Every accepted change should send an email with context to the right person."
        ]
      },
      {
        title: "How it works for users",
        body: "I implemented this as a small automation attached to the sheet. For team members, the experience looks like this:",
        bullets: [
          "They open the familiar tracker sheet. ",
          "If they want to change a critical field (e.g., End Date or Status). They right‑click the cell → “Insert note” (or edit an existing note).  In that note, they describe the change in plain language - 'Blocked on security review; pushing out by one sprint.' ",
          "Only after updating the note do they change the cell’s value."
        ]
      },
      {
        title: "",
        body: "The automation enforces the behavior by reverting any change made to a governed cell if there is no note and showing a message asking the user to add one before editing again. If a user tries to reuse the exact same note as last time, the value is reverted once more and they are prompted to update the note text for the new edit. Once the note has been updated and the value is edited, the change is accepted and an email is sent to a configured address summarizing the team and deliverable, the field that changed, the old and new values, and the note explaining why. This turns a previously silent spreadsheet into something closer to a governed workflow: users can still move fast, but meaningful changes cannot happen without context. You can see a recording of the automation in action."
      },
      {
        title: "Impact - Fewer Surprises",
        body: "This lightweight layer changed the dynamic of how teams interacted with the plan:",
        bullets: [
          "Fewer surprises for downstream teams - Instead of discovering slippages days later, they get an immediate email with context whenever an upstream dependency changes.",
          "Better quality updates - The note requirement nudges people to think: “What changed and why?” That thought process alone improves communication.",
          "Less manual policing for the PM  - I no longer had to chase people for “what changed here?” updates; the system makes context a prerequisite for editing.",
          "Stronger audit trail  -   For any deliverable, we can scroll through notes and email threads to reconstruct the decision history."
        ]
      },
      {
        title: "",
        body: "Most importantly, this was achieved without moving teams into a new tool or forcing a heavy ticketing workflow. The tracker stayed familiar; the behavior around it evolved."
      },

    ]
  },
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
