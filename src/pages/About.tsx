import Header from "@/components/Header";
import { Mail, Linkedin, FileText, Code, Users, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 animate-scale-in">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
              alt="Saadhika Dua"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-slide-up stagger-1">
            Product Manager passionate about building user-centric products that drive real business impact.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16 space-y-6 text-muted-foreground animate-slide-up stagger-2">
          <h2 className="text-3xl font-bold text-foreground mb-6">My Story</h2>
          <p>
            I fell in love with product management when I realized it sits at the intersection of my three 
            passions: understanding people, solving problems, and building things that matter. There's nothing 
            quite like watching users interact with something you helped create.
          </p>
          <p>
            My journey started in engineering, where I learned to appreciate the art of building software. 
            But I kept finding myself more interested in the "why" behind features than just the "how." 
            That curiosity led me to product management, where I've spent the last 5+ years shipping 
            products at startups and scale-ups.
          </p>
          <p>
            I've led teams through zero-to-one launches, scaled features to millions of users, and 
            helped organizations embrace product-led growth. Along the way, I've learned that great 
            products come from deep user empathy, data-informed decisions, and teams that trust each other.
          </p>
        </section>

        {/* Philosophy Section */}
        <section className="mb-16 rounded-2xl bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">My Product Philosophy</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I believe great products are built at the intersection of user needs, business goals, and 
              technical feasibility. My approach to product management centers on:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span><strong className="text-foreground">User obsession:</strong> Every decision starts with understanding the user</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span><strong className="text-foreground">Data-informed intuition:</strong> Use data to validate, not to replace, good judgment</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span><strong className="text-foreground">Bias for action:</strong> Ship fast, learn faster, iterate relentlessly</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span><strong className="text-foreground">Collaborative leadership:</strong> The best ideas come from diverse perspectives</span>
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
              <a href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </a>
            </Button>
            <Button variant="outline" className="rounded-full px-8" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="rounded-full px-8" asChild>
              <a href="/resume.pdf">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
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
