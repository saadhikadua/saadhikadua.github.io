import { Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section className="relative rounded-[2.5rem] overflow-hidden bg-muted my-12 animate-fade-in">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-6 md:p-12 lg:p-16">
        {/* Left side - Image (smaller) */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-full overflow-hidden animate-scale-in border-4 border-background shadow-lg">
          <img
            src={profilePhoto}
            alt="Professional headshot"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8 text-center md:text-left">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium animate-slide-down">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Open to opportunities
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight animate-slide-down">
              Hi, I'm <span className="text-accent">Saadhika Dua</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl animate-slide-up stagger-1">
              Product Manager passionate about building user-centric products that drive business growth. 
              I turn complex problems into simple, elegant solutions.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed max-w-xl animate-slide-up stagger-2">
              5+ years of experience shipping products at startups and scale-ups. 
              Specialized in growth, mobile, and product-led strategies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 pt-4 animate-slide-up stagger-3">
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 md:px-10 md:py-6 text-base font-medium transition-all hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>

            <div className="flex items-center gap-3">
              <a
                href="mailto:hello@alexchen.pm"
                className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="/resume.pdf"
                className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110"
                aria-label="Resume"
              >
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
