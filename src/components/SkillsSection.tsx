import { skills } from "@/data/projects";

const categoryLabels = {
  strategy: "Strategy",
  execution: "Execution",
  tools: "Tools",
  "soft-skills": "Soft Skills",
};

const categoryColors = {
  strategy: "tag-financing",
  execution: "tag-lifestyle",
  tools: "tag-travel",
  "soft-skills": "tag-growth",
};

const SkillsSection = () => {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section className="py-16 md:py-20">
      <div className="text-center mb-12 animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Skills & Expertise</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A toolkit built through years of shipping products and leading teams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map((category, categoryIndex) => (
          <div 
            key={category}
            className={`bg-card rounded-[2rem] p-6 animate-slide-up stagger-${Math.min(categoryIndex + 1, 4)}`}
          >
            <h3 className="text-lg font-semibold mb-4">{categoryLabels[category]}</h3>
            <div className="flex flex-wrap gap-2">
              {groupedSkills[category]?.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium ${categoryColors[category]}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
