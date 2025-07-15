import { GraduationCap, School, BookOpen } from "lucide-react";

export default function Education() {
  const education = [
    {
      level: "Tertiary Education",
      institution: "Bestlink College Of The Philippines (BCP)",
      location: "#1071 Barangay Kaligayahan, Quirino Hi-way, Novaliches, Quezon City",
      period: "2021 - 2025",
      icon: GraduationCap,
    },
    {
      level: "Secondary Education",
      institution: "Maycauayan National Highschool",
      location: "Barangay Camalig, El Camino St. Maycauayan City, Bulacan",
      period: "2014 - 2021",
      icon: School,
    },
    {
      level: "Primary Education",
      institution: "Pantoc Elementary School",
      location: "Barangay Pantoc, Centro, Maycauayan City, Bulacan",
      period: "2008 - 2014",
      icon: BookOpen,
    },
  ];

  return (
    <section id="education" className="py-20 bg-[var(--portfolio-secondary)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Academic History</h2>
          <p className="text-[var(--portfolio-text-secondary)] text-lg">
            My educational journey and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-[var(--portfolio-primary)] p-8 rounded-xl shadow-lg hover-lift hover:shadow-xl transition-all duration-300 fade-in-up hover-scale"
            >
              <div className="mb-4" style={{color: 'hsl(142, 76%, 36%)'}}>
                <edu.icon size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">{edu.level}</h3>
              <h4 className="text-gradient font-semibold mb-2">{edu.institution}</h4>
              <p className="text-[var(--portfolio-text-secondary)] mb-2">{edu.location}</p>
              <p className="text-[var(--portfolio-text-secondary)] text-sm">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
