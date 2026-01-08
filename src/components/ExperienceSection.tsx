import { experiences } from "@/data/projects";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="text-center mb-12 animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A journey through product roles at companies of all sizes.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className={`relative flex gap-6 animate-slide-up stagger-${Math.min(index + 1, 4)}`}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex w-16 flex-shrink-0 items-start justify-center pt-1">
                <div className="w-4 h-4 rounded-full bg-accent border-4 border-background" />
              </div>

              {/* Content card */}
              <div className="flex-1 bg-card rounded-[2rem] p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium px-3 py-1 bg-muted rounded-full w-fit">
                    {exp.duration}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
