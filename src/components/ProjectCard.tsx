import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  company: string;
  role: string;
  duration: string;
  image: string;
  summary: string;
  impact: string[];
}

const ProjectCard = ({ id, title, company, role, duration, image, summary, impact }: ProjectCardProps) => {
  return (
    <a
      href={`/project/${id}`}
      className="group relative block rounded-[2.5rem] overflow-hidden card-hover"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted rounded-[2.5rem]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Content overlay */}
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
          {/* Top section - Company and Duration */}
          <div className="flex items-start justify-between">
            <span className="px-4 py-1.5 rounded-full bg-accent/90 backdrop-blur-md text-xs font-medium text-accent-foreground">
              {company}
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium text-white border border-white/30">
              {duration}
            </span>
          </div>

          {/* Bottom section - Title and Summary */}
          <div className="space-y-3">
            <div>
              <span className="text-white/60 text-xs font-medium tracking-wider block mb-2">{role}</span>
              <h3 className="text-white text-xl md:text-2xl font-bold leading-tight tracking-tight">
                {title}
              </h3>
            </div>
            <p className="text-white/80 text-sm line-clamp-2">{summary}</p>
            
            {/* Impact highlights */}
            <div className="flex flex-wrap gap-2 pt-2">
              {impact.slice(0, 2).map((item, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-white border border-white/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Floating circular arrow button */}
        <div className="absolute bottom-6 right-6 floating-button">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
