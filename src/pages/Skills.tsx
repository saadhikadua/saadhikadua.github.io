import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";

const Skills = () => {
 

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <SkillsSection />
    </div>
  );
};

export default Skills;
