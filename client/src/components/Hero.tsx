import { Button } from "@/components/ui/button";
import profileImage from "@assets/image_1752587392426.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0 fade-in-up">
            <div className="text-[var(--portfolio-text-secondary)] mb-4 text-lg">HELLO!</div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              I'm <span className="text-[var(--portfolio-accent)]">Brix Joshua</span><br />
              <span className="text-[var(--portfolio-accent)]">Cejalbo</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-[var(--portfolio-text-secondary)] mb-8">
              IT Professional & Hardware Specialist
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("about")}
                className="bg-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent)]/90 text-[var(--portfolio-primary)] font-medium px-8 py-3 rounded-lg transition-colors duration-300"
              >
                HIRE ME
              </Button>
              <Button
                onClick={() => scrollToSection("experience")}
                variant="outline"
                className="border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-primary)] font-medium px-8 py-3 rounded-lg transition-all duration-300"
              >
                MY WORKS
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end slide-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-4 border-[var(--portfolio-accent)] overflow-hidden shadow-2xl">
                <img
                  src={profileImage}
                  alt="Brix Joshua A. Cejalbo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[var(--portfolio-accent)] rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[var(--portfolio-accent)] rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
