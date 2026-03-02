How I Built My Personal Website With AI, Vite, and GitHub Pages
For a long time, my “portfolio” was just my LinkedIn profile and a PDF resume. That worked, but it didn’t really reflect how I think about products or how I actually work: quickly iterating, experimenting with new tools, and using AI as leverage rather than a crutch.

So I decided to build a personal website: saadhikadua.github.io. My goal wasn’t just to ship a site—it was to treat the site itself as a product: define the “job” it needed to do, choose a stack that matched that job, and deliberately use AI tools (Lovable, Claude Code, and Perplexity) as collaborators in the process.

Starting From the Product, Not the Tech
Before touching any tools, I wrote down what the website needed to accomplish:

Tell my story the way a resume can’t: my journey, values, and product philosophy.

Make it easy for hiring managers and collaborators to understand my impact quickly.

Be something I can actually maintain and iterate on, not a static one-off.

In product terms, the user is a busy hiring manager or collaborator with limited attention. The job-to-be-done is: “In under 2–3 minutes, decide whether Saadhika is someone I want to talk to.” That pushed me toward:

A fast, lightweight site (no heavy frameworks just for the sake of it).

Clear information architecture: hero, founder’s note, experience, product philosophy, and eventually writing.

A tech stack that doesn’t slow me down when I want to tweak copy or add a new section.

Only after I was clear on this did I choose the tools.

Why I Chose Lovable, Vite, and GitHub Pages
I had three constraints: I wanted real code (not a locked-in no-code tool), fast iteration, and almost-zero hosting friction.

Lovable gave me a head start by generating a React + Tailwind + Vite codebase from natural language prompts. Instead of spending time on boilerplate and project setup, I could jump straight into structure and UX.

Vite + React gave me a modern, fast frontend with a great dev experience and simple static builds. Many developers use this combo for personal portfolios because it’s lightweight and highly customizable.

GitHub Pages gave me free, simple hosting directly from my repo, which makes continuous deployment via docs or gh-pages straightforward.

This combination meant I could spend more time applying product thinking and less time wrestling with infra.

Using AI as a Collaborator, Not a Shortcut
I deliberately used multiple AI tools, but each had a distinct role:

Lovable to generate and refactor the initial codebase and layout.

Claude Code inside the editor to help with targeted refactors, small component changes, and TypeScript ergonomics.

Perplexity (LLM) to help with content: my founder’s note, product philosophy section, and phrasing for my tagline—while I stayed in control of the narrative and edited heavily for my own voice.

This mirrors how I like to build products at work:
AI accelerates exploration and implementation, but taste, judgment, and constraints still come from me.

Designing the Content Like a Product
I thought about each section of the site as a feature with a purpose:

Hero + tagline: Quickly explain who I am and what I do (“I build thoughtful, high-leverage products people love—and that deliver measurable business impact.”).

Founder’s note: A narrative version of my story—why I care about thoughtfully designed technology, my shift from “Can we build this?” to “Should we build this, and why now?”, and how I bridge engineering and business.

Experience: Structured around outcomes, not responsibilities—mirroring how I’d talk about my work in an interview.

My Product Philosophy: A clear articulation of how I think: user obsession, data-informed intuition, bias for action, collaborative leadership, and first-principles thinking.

Every time I added or edited copy, I asked:

What decision is this helping the reader make?

Is this redundant with something they’ve already read?

Could this be clearer or more concrete?

That’s product thinking applied to words.



What This Project Says About How I Work
For me, this site isn’t just a static portfolio—it’s a proof point of how I approach building:

Start with the outcome, not the tools. I anchored on what the site needed to achieve for its “users” before committing to a stack.

Use AI as leverage. AI handled boilerplate, scaffolding, and draft content so I could focus on narrative, structure, and polish.

Ship, then refine. I didn’t wait for perfection. I shipped a usable v1, then iterated on copy, structure, and deployment issues.

Bridge product and engineering. The same thought process I use for scoping features, aligning stakeholders, and debugging production issues showed up here in deciding content, stack, and architecture.

What’s Next
This site is just the foundation. Next, I plan to:

Add a blog section where I write about product experiments, AI workflows, and marketplace/fulfillment thinking.

Share more “behind-the-scenes” build logs like this one, including experiments with agents, automation, and developer tooling.

Keep treating the site like a living product: measuring what people actually use, and evolving it accordingly.

If you’re a builder, hiring manager, or founder who cares about thoughtful products and practical experimentation with AI, I’d love to connect—or even pair on your next idea.

Would you like a shorter, LinkedIn-article–length version of this, or are you targeting more of a long-form blog on your site