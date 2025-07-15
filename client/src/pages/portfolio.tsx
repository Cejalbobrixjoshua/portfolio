import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Brix Joshua A. Cejalbo - Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-[var(--portfolio-primary)] text-[var(--portfolio-text-primary)]">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 bg-[var(--portfolio-primary)] border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--portfolio-text-secondary)]">
            &copy; 2024 Brix Joshua A. Cejalbo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
