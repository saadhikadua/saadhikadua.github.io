const IntroSection = () => {
  const stats = [
    { value: "5+", label: "Years in Product" },
    { value: "12", label: "Products Shipped" },
    { value: "$10M+", label: "Revenue Impact" },
    { value: "50+", label: "A/B Tests Run" },
  ];

  return (
    <section className="max-w-5xl mx-auto py-12 md:py-16 px-4 animate-fade-in">
      <div className="text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-slide-up">
          I help companies build products people love while driving measurable business outcomes.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
          From zero-to-one product launches to scaling existing features, I bring a data-informed, 
          user-first approach to every challenge. My superpower? Translating ambiguity into clarity 
          and strategy into shipped products.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 animate-slide-up stagger-2">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
