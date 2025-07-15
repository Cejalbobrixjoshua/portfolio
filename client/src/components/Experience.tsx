import { ChevronRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "GoHighLevel Specialist",
      company: "WealthSpring Company",
      location: "Remote",
      period: "June 9, 2025 - Present",
      responsibilities: [
        "Developed and optimized sales funnels using GoHighLevel platform",
        "Implemented marketing automation workflows",
        "Designed custom funnel systems for client acquisition",
        "Provided technical support and training to team members",
      ],
    },
    {
      title: "SPES (Encoder)",
      company: "Maycauayan City Hall, PESO Office",
      location: "Brgy. Saluysoy, Maycauayan, Bulacan",
      period: "July - September 2023, April - June 2024",
      responsibilities: [
        "Encoded and managed SPES program data",
        "Maintained digital document systems",
        "Processed student employment applications",
        "Provided administrative support to PESO Office",
      ],
    },
    {
      title: "Machine Operator & Helper (Part Time)",
      company: "Sunway Steam Laundry Inc.",
      location: "Brgy. Perez, Bato, Maycauayan, Bulacan",
      period: "June - July 2018",
      responsibilities: [
        "Operated industrial laundry equipment",
        "Maintained and cleaned machinery systems",
        "Assisted with daily operations and quality control",
        "Provided customer service and support",
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
            <div className="absolute left-8 top-0 bottom-0 w-0.5 accent-gradient"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 fade-in-up">
                <div className="absolute left-6 w-4 h-4 accent-gradient rounded-full border-4 border-[var(--portfolio-primary)]"></div>
                <div className="ml-20 bg-[var(--portfolio-secondary)] p-8 rounded-lg shadow-lg hover-lift hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gradient">{exp.title}</h3>
                    <span className="text-[var(--portfolio-text-secondary)] text-sm">{exp.period}</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{exp.company}</h4>
                  <p className="text-[var(--portfolio-text-secondary)] mb-4">{exp.location}</p>
                  <ul className="text-[var(--portfolio-text-secondary)] space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2">
                        <ChevronRight className="mt-1 flex-shrink-0" size={16} style={{color: 'hsl(142, 76%, 36%)'}} />
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
