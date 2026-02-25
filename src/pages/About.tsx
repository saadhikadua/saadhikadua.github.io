import Header from "@/components/Header";
import { Mail, Linkedin, FileText, Code, Users, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 animate-scale-in">
            <img
              src={profilePhoto}
              alt="Saadhika Dua"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-slide-up stagger-1">
            Business technologist passionate about building user-centric products that drive real business impact.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16 space-y-6 text-muted-foreground animate-slide-up stagger-2">
          <h2 className="text-3xl font-bold text-foreground mb-6">My Story</h2>
          <p>
           I’ve always believed that when technology is thoughtfully designed, it can fundamentally change how people work and solve problems.
            That belief is what led me to study computer science, not just to write code, but to build tools that remove friction from everyday workflows and unlock better decisions.
          </p>
          <p>
            Over the past five years, I’ve focused on one core question: Where is the friction, and how can we remove it intelligently? 
            That’s taken shape in many forms, from chrome extensions that automate UX compliance checks to UI frameworks that make development faster and more reliable. Each project has been an exercise in first principles thinking: understand the problem deeply, challenge assumptions, and design solutions that feel almost obvious in retrospect.
          </p>
          <p>
            Today, I’m building my career around that bridge between engineering and business, grounded in the belief that the most impactful products don’t start with “Can we build this?” but with “Should we build this, and why now?”. 
            I love working on problems where the stakes are real, the systems are complex, and the outcome is a smoother, smarter way of working for teams and customers. 
          </p>
        </section>

        {/* Philosophy Section */}
        <section className="mb-16 rounded-2xl bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">My Product Philosophy</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
             I believe the best products live at the intersection of real user problems, sustainable business value, and pragmatic technical execution. 
             For me, product is not just about shipping features, but about deliberately choosing what not to build so teams can focus on what truly moves the needle.
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span><strong className="text-foreground">User obsession:</strong> Start with an honest understanding of the user’s job-to-be-done, not just their feature requests, and stay close to them through discovery, testing, and feedback loops.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span><strong className="text-foreground">Data-informed intuition:</strong> Use data to sharpen judgment, size opportunities, and de-risk bets—while still making room for qualitative insight and strategic conviction when the numbers are noisy or incomplete.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span><strong className="text-foreground">Bias for action:</strong> Test small, learn quickly, and iterate in public; momentum and tight feedback cycles beat over-engineered roadmaps every time.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span><strong className="text-foreground">Collaborative leadership:</strong> Bring engineering, design, ops, and business to the same table early so tradeoffs are explicit, ownership is shared, and solutions are stronger than any single function could create alone.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span><strong className="text-foreground"> First-principles thinking:</strong> When the problem is ambiguous or the system is complex, strip it down to fundamentals, challenge assumptions, and rebuild the solution from the ground up.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">What I Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-muted">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Product Strategy</h3>
              <p className="text-muted-foreground">
                Define vision, roadmaps, and success metrics that align teams and drive business outcomes.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">User Research</h3>
              <p className="text-muted-foreground">
                Uncover insights through interviews, surveys, and data analysis to inform product decisions.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cross-functional Leadership</h3>
              <p className="text-muted-foreground">
                Partner with engineering, design, and stakeholders to ship impactful products.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth & Experimentation</h3>
              <p className="text-muted-foreground">
                Design and run experiments to optimize conversion, retention, and user engagement.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 rounded-2xl bg-card">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing product challenges, new opportunities, or just chatting about the craft.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" asChild>
              <a href="/#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </a>
            </Button>
            {/* <Button variant="outline" className="rounded-full px-8" asChild>
              <a href="https://linkedin.com/in/saadhikadua" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button> */}
            {/* <Button variant="outline" className="rounded-full px-8" asChild>
              <a href="/resume.pdf">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button> */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Saadhika Dua. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
