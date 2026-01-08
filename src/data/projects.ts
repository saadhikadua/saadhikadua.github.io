export interface Project {
  id: string;
  title: string;
  company: string;
  role: string;
  duration: string;
  image: string;
  summary: string;
  impact: string[];
  skills: string[];
  content: {
    challenge: string;
    approach: string;
    outcome: string;
  };
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
    title: "Redesigning the Checkout Experience",
    company: "E-Commerce Platform",
    role: "Lead Product Manager",
    duration: "2024",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80",
    summary: "Led a cross-functional team to redesign the checkout flow, reducing cart abandonment by 23% and increasing conversion rates.",
    impact: ["23% reduction in cart abandonment", "15% increase in conversion", "$2.4M additional annual revenue"],
    skills: ["User Research", "A/B Testing", "Cross-functional Leadership"],
    content: {
      challenge: "The existing checkout process had a 67% abandonment rate, significantly higher than industry benchmarks. Users cited complexity, unexpected costs, and lack of trust signals as primary pain points.",
      approach: "Conducted extensive user research including session recordings, surveys, and usability testing. Identified key drop-off points and prioritized improvements based on impact vs. effort. Implemented iterative A/B tests to validate each change before full rollout.",
      outcome: "Launched a streamlined 3-step checkout with transparent pricing, guest checkout option, and trust badges. The redesign resulted in a 23% reduction in cart abandonment and generated an additional $2.4M in annual revenue.",
    },
  },
  {
    id: "project-002",
    title: "Building a Mobile-First Dashboard",
    company: "FinTech Startup",
    role: "Senior Product Manager",
    duration: "2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
    summary: "Spearheaded the development of a mobile-first analytics dashboard that became the company's most-used feature.",
    impact: ["40% increase in daily active users", "4.8★ App Store rating", "Featured by Apple"],
    skills: ["Mobile Product Strategy", "Data Visualization", "Agile Development"],
    content: {
      challenge: "Desktop-first users were struggling to access critical business insights on mobile. With 60% of logins happening on mobile devices, there was a significant gap in the mobile experience.",
      approach: "Partnered with design and engineering to create a mobile-native experience from scratch. Prioritized the top 5 use cases based on user interviews and analytics. Used rapid prototyping to test concepts before development.",
      outcome: "Delivered an intuitive mobile dashboard that increased daily active users by 40%. The app was featured on the App Store and received a 4.8-star rating with users praising its simplicity and speed.",
    },
  },
  {
    id: "project-003",
    title: "Launching a B2B Self-Serve Platform",
    company: "SaaS Company",
    role: "Product Manager",
    duration: "2022-2023",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
    summary: "Designed and launched a self-serve onboarding platform that reduced customer acquisition cost by 40%.",
    impact: ["40% reduction in CAC", "60% of new signups via self-serve", "NPS improved from 32 to 58"],
    skills: ["Product-Led Growth", "Onboarding Optimization", "Metrics & Analytics"],
    content: {
      challenge: "Sales-led growth was becoming unsustainable. The average deal size didn't justify the high-touch sales process, and competitors were winning with self-serve options.",
      approach: "Mapped the entire customer journey and identified where human intervention was truly needed vs. where self-serve could work. Built interactive product tours, contextual help, and automated onboarding sequences.",
      outcome: "The self-serve platform now accounts for 60% of new signups. Customer acquisition cost dropped by 40%, and the improved onboarding experience boosted NPS from 32 to 58.",
    },
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-001",
    company: "Tech Company",
    role: "Lead Product Manager",
    duration: "2023 - Present",
    description: "Leading product strategy for the growth team, focusing on user acquisition, activation, and retention.",
    highlights: [
      "Grew monthly active users from 500K to 1.2M",
      "Led a team of 2 PMs and collaborated with 15+ engineers",
      "Established experimentation culture with 50+ A/B tests per quarter",
    ],
  },
  {
    id: "exp-002",
    company: "FinTech Startup",
    role: "Senior Product Manager",
    duration: "2021 - 2023",
    description: "Owned the mobile product experience and led the company's transition to mobile-first.",
    highlights: [
      "Launched award-winning mobile app",
      "Increased mobile engagement by 150%",
      "Mentored junior PMs and established PM best practices",
    ],
  },
  {
    id: "exp-003",
    company: "SaaS Company",
    role: "Product Manager",
    duration: "2019 - 2021",
    description: "Built and scaled the self-serve product experience from 0 to 60% of new customer acquisitions.",
    highlights: [
      "Led product-led growth initiative",
      "Reduced customer acquisition cost by 40%",
      "Collaborated with sales to define PLG/sales handoff",
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
  { name: "Amplitude", category: "tools" },
  { name: "Mixpanel", category: "tools" },
  { name: "SQL", category: "tools" },
  { name: "Notion", category: "tools" },
  
  // Soft Skills
  { name: "Cross-functional Leadership", category: "soft-skills" },
  { name: "Stakeholder Management", category: "soft-skills" },
  { name: "User Interviews", category: "soft-skills" },
  { name: "Presentation Skills", category: "soft-skills" },
  { name: "Team Mentoring", category: "soft-skills" },
];
