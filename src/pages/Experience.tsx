import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import ExperienceSection from "@/components/ExperienceSection";

const Experience = () => {
 

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <ExperienceSection />
    </div>
  );
};

export default Experience;
