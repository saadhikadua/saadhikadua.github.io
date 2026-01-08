import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import { projects } from "@/data/projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Intro Section with Stats */}
        <IntroSection />

        {/* Projects Grid */}
        <section id="projects" className="py-12">
          <div className="flex items-center justify-between mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <a href="/projects" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors px-4 py-2 rounded-full hover:bg-muted/60">
              View all →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className={`animate-slide-up stagger-${Math.min(index + 1, 6)}`}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <div id="skills">
          <SkillsSection />
        </div>

        {/* Experience Section */}
        <div id="experience">
          <ExperienceSection />
        </div>

        {/* CTA Section */}
        <section className="my-20 rounded-[2.5rem] bg-card p-12 md:p-16 text-center animate-scale-in">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's build something great together.</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new product challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all"
              >
                Get in Touch
              </a>
              <a 
                href="/resume.pdf"
                className="px-10 py-4 rounded-full border-2 border-border font-medium hover:bg-muted hover:scale-105 transition-all"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#projects" className="hover:text-accent transition-colors">Projects</a></li>
                <li><a href="/#skills" className="hover:text-accent transition-colors">Skills</a></li>
                <li><a href="/#experience" className="hover:text-accent transition-colors">Experience</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-accent transition-colors">My Story</a></li>
                <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a></li>
                <li><a href="mailto:hello@alexchen.pm" className="hover:text-accent transition-colors">Email</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-accent transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Saadhika Dua. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
