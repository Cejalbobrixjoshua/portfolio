import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/image_1752590474174.png";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  
  const titles = [
    "GoHighLevel Specialist",
    "Marketing Automation Expert",
    "Funnel Design Professional",
    "Digital Marketing Strategist"
  ];

  useEffect(() => {
    const currentTitle = titles[loopIndex];
    const typingSpeed = isDeleting ? 100 : 150;
    const pauseTime = isDeleting ? 1000 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && currentIndex < currentTitle.length) {
        setDisplayedText(currentTitle.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayedText(currentTitle.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setLoopIndex((loopIndex + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopIndex, titles]);

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
              I'm <span className="text-gradient">Brix Joshua Cejalbo</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-[var(--portfolio-text-secondary)] mb-8 min-h-[2.5rem] flex items-center">
              <span className="typing-cursor">{displayedText}</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("about")}
                className="accent-gradient hover:accent-gradient-hover text-[var(--portfolio-primary)] font-medium px-8 py-3 rounded-lg transition-all duration-300 magnetic-effect border-glow pulse-glow"
              >
                HIRE ME
              </Button>
              <Button
                onClick={() => scrollToSection("experience")}
                variant="outline"
                className="border-2 border-transparent bg-gradient-to-r from-green-600 to-green-400 bg-clip-border text-green-400 hover:accent-gradient hover:text-[var(--portfolio-primary)] font-medium px-8 py-3 rounded-lg transition-all duration-300 magnetic-effect border-glow"
                style={{
                  background: 'linear-gradient(var(--portfolio-primary), var(--portfolio-primary)) padding-box, linear-gradient(135deg, hsl(142, 76%, 36%) 0%, hsl(142, 60%, 55%) 100%) border-box',
                  border: '2px solid transparent'
                }}
              >
                MY WORKS
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center slide-in">
            <div className="relative float-animation">
              <div className="w-80 h-80 rounded-full border-4 border-transparent overflow-hidden shadow-2xl hover-scale pulse-glow" style={{
                background: 'linear-gradient(var(--portfolio-primary), var(--portfolio-primary)) padding-box, linear-gradient(135deg, hsl(142, 76%, 36%) 0%, hsl(142, 60%, 55%) 100%) border-box'
              }}>
                <img
                  src={profileImage}
                  alt="Brix Joshua A. Cejalbo"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 accent-gradient rounded-full opacity-20 float-animation" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 accent-gradient rounded-full opacity-30 float-animation" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
