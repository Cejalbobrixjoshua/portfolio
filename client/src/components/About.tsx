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
              I am a highly motivated GoHighLevel specialist and marketing automation expert seeking professional opportunities where I can leverage my funnel design expertise and technical skills to drive business growth and client success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[var(--portfolio-primary)] p-6 rounded-lg">
                <h3 className="text-gradient font-semibold mb-2">Name:</h3>
                <p className="text-[var(--portfolio-text-secondary)]">Brix Joshua A. Cejalbo</p>
              </div>
              <div className="bg-[var(--portfolio-primary)] p-6 rounded-lg">
                <h3 className="text-gradient font-semibold mb-2">Email:</h3>
                <p className="text-[var(--portfolio-text-secondary)]">cejalbo.brixjoshua@gmail.com</p>
              </div>
              <div className="bg-[var(--portfolio-primary)] p-6 rounded-lg">
                <h3 className="text-gradient font-semibold mb-2">Phone:</h3>
                <p className="text-[var(--portfolio-text-secondary)]">+639392977798</p>
              </div>
              <div className="bg-[var(--portfolio-primary)] p-6 rounded-lg">
                <h3 className="text-gradient font-semibold mb-2">Address:</h3>
                <p className="text-[var(--portfolio-text-secondary)]">#05 Grace Mansion, Felix Chavas St. Bagbaguin, Meycauayan, Bulacan, Philippines</p>
              </div>
            </div>
            <div className="mt-8">
              <Button
                onClick={() => scrollToSection("contact")}
                className="accent-gradient hover:accent-gradient-hover text-[var(--portfolio-primary)] font-medium px-8 py-3 rounded-lg transition-all duration-300"
              >
                DOWNLOAD CV
              </Button>
            </div>
          </div>
          <div className="slide-in">
            <div className="bg-[var(--portfolio-primary)] p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Professional Summary</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} style={{color: 'hsl(142, 76%, 36%)'}} />
                  <p className="text-[var(--portfolio-text-secondary)]">GoHighLevel funnel design and automation specialist</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} style={{color: 'hsl(142, 76%, 36%)'}} />
                  <p className="text-[var(--portfolio-text-secondary)]">Marketing automation workflow development</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} style={{color: 'hsl(142, 76%, 36%)'}} />
                  <p className="text-[var(--portfolio-text-secondary)]">Customer acquisition system optimization</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} style={{color: 'hsl(142, 76%, 36%)'}} />
                  <p className="text-[var(--portfolio-text-secondary)]">Technical support and team training capabilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
