import { ChevronRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Document Management & Network Analyst",
      company: "Maycauayan City Hall, PESO Office",
      location: "Brgy. Saluysoy, Maycauayan, Bulacan",
      period: "June 2018 - Present",
      responsibilities: [
        "Managed digital document systems and databases",
        "Analyzed network infrastructure and performance",
        "Provided technical support to office staff",
      ],
    },
    {
      title: "Hardware Repair & Helper",
      company: "Sunday Sudz Laundry etc.",
      location: "Brgy. Perez Blvd., Maycauayan, Bulacan",
      period: "July 2003 - May 2018",
      responsibilities: [
        "Diagnosed and repaired various electronic equipment",
        "Maintained laundry machinery and systems",
        "Provided customer service and technical support",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-[var(--portfolio-text-secondary)] text-lg">
            My professional journey and career progression
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--portfolio-accent)]"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 fade-in-up">
                <div className="absolute left-6 w-4 h-4 bg-[var(--portfolio-accent)] rounded-full border-4 border-[var(--portfolio-primary)]"></div>
                <div className="ml-20 bg-[var(--portfolio-secondary)] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-[var(--portfolio-accent)]">{exp.title}</h3>
                    <span className="text-[var(--portfolio-text-secondary)] text-sm">{exp.period}</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{exp.company}</h4>
                  <p className="text-[var(--portfolio-text-secondary)] mb-4">{exp.location}</p>
                  <ul className="text-[var(--portfolio-text-secondary)] space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2">
                        <ChevronRight className="text-[var(--portfolio-accent)] mt-1 flex-shrink-0" size={16} />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
