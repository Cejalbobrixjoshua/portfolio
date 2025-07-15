import { useEffect, useState } from "react";

export default function Skills() {
  const [animateSkills, setAnimateSkills] = useState(false);

  const technicalSkills = [
    { name: "Hardware Repair", level: 90 },
    { name: "Document Management", level: 85 },
    { name: "Network Analysis", level: 80 },
  ];

  const professionalSkills = [
    { name: "Team Leadership", level: 85 },
    { name: "Graphic Design", level: 75 },
    { name: "Problem Solving", level: 90 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateSkills(true);
        }
      },
      { threshold: 0.5 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, animated }: { skill: { name: string; level: number }; animated: boolean }) => (
    <div className="skill-item">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold">{skill.name}</span>
        <span className="text-[var(--portfolio-accent)]">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-[var(--portfolio-accent)] h-2 rounded-full skill-progress"
          style={{
            width: animated ? `${skill.level}%` : "0%",
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Skills</h2>
          <p className="text-[var(--portfolio-text-secondary)] text-lg">
            Technical expertise and professional capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="fade-in-up">
            <h3 className="text-2xl font-bold mb-8 text-[var(--portfolio-accent)]">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} animated={animateSkills} />
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="fade-in-up">
            <h3 className="text-2xl font-bold mb-8 text-[var(--portfolio-accent)]">Professional Skills</h3>
            <div className="space-y-6">
              {professionalSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} animated={animateSkills} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
