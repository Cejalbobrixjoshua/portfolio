import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-[var(--portfolio-secondary)]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">About Me</h2>
            <p className="text-[var(--portfolio-text-secondary)] text-lg mb-8 leading-relaxed">
              I am a highly motivated and dedicated individual seeking a professional position in a reputable organization where I can leverage my technical expertise and develop a strong and rewarding career.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[var(--portfolio-primary)] p-6 rounded-lg">
                <h3 className="text-[var(--portfolio-accent)] font-semibold mb-2">Name:</h3>
                <p className="text-[var(--portfolio-text-secondary)]">Brix Joshua A. Cejalbo</p>
              </div>
              <div className="bg-[var(--portfolio-primary)] p-6 rounded-lg">
                <h3 className="text-[var(--portfolio-accent)] font-semibold mb-2">Email:</h3>
                <p className="text-[var(--portfolio-text-secondary)]">cejalbo.brixjoshua@gmail.com</p>
              </div>
              <div className="bg-[var(--portfolio-primary)] p-6 rounded-lg">
                <h3 className="text-[var(--portfolio-accent)] font-semibold mb-2">Phone:</h3>
                <p className="text-[var(--portfolio-text-secondary)]">+63 123 456 7890</p>
              </div>
              <div className="bg-[var(--portfolio-primary)] p-6 rounded-lg">
                <h3 className="text-[var(--portfolio-accent)] font-semibold mb-2">Address:</h3>
                <p className="text-[var(--portfolio-text-secondary)]">Maycauayan City, Bulacan</p>
              </div>
            </div>
            <div className="mt-8">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent)]/90 text-[var(--portfolio-primary)] font-medium px-8 py-3 rounded-lg transition-colors duration-300"
              >
                DOWNLOAD CV
              </Button>
            </div>
          </div>
          <div className="slide-in">
            <div className="bg-[var(--portfolio-primary)] p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-[var(--portfolio-accent)]">Professional Summary</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-[var(--portfolio-accent)] mt-1 flex-shrink-0" size={20} />
                  <p className="text-[var(--portfolio-text-secondary)]">Hardware repair and maintenance specialist</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-[var(--portfolio-accent)] mt-1 flex-shrink-0" size={20} />
                  <p className="text-[var(--portfolio-text-secondary)]">Document management and analysis expert</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-[var(--portfolio-accent)] mt-1 flex-shrink-0" size={20} />
                  <p className="text-[var(--portfolio-text-secondary)]">Network analyst with strong problem-solving skills</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-[var(--portfolio-accent)] mt-1 flex-shrink-0" size={20} />
                  <p className="text-[var(--portfolio-text-secondary)]">Team leadership and graphic design capabilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
