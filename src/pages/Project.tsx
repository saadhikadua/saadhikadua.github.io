import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Briefcase, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import { projects } from "@/data/projects";

const Project = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/" className="text-accent hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const otherProjects = projects.filter((p) => p.id !== id).slice(0, 2);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-8 animate-scale-in">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Project Header */}
        <div className="mb-12 animate-slide-up">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium">
              {project.company}
            </span>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Briefcase className="w-4 h-4" />
              {project.role}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar className="w-4 h-4" />
              {project.duration}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 animate-slide-up stagger-1">
          {project.impact.map((item, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 text-center">
              <div className="text-2xl font-bold text-accent">{item}</div>
            </div>
          ))}
        </div>

        {/* Skills Used */}
        <div className="mb-12 animate-slide-up stagger-2">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Skills & Methods
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-muted text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Case Study Content */}
        <article className="prose prose-lg max-w-none animate-slide-up stagger-3">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.content.challenge}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Approach</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.content.approach}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Outcome</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.content.outcome}
            </p>
          </section>
        </article>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section className="mt-20 pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  to={`/project/${p.id}`}
                  className="group relative rounded-2xl overflow-hidden bg-card hover:shadow-lg transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-muted-foreground">{p.company}</span>
                    <h3 className="text-lg font-bold mt-1 group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
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

export default Project;
