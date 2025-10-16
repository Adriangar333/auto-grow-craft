import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Competencies from "@/components/Competencies";
import CaseStudies from "@/components/CaseStudies";
import CallToAction from "@/components/CallToAction";
import Videos from "@/components/Videos";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Competencies />
      <CaseStudies />
      <Videos />
      <CallToAction />
      
      {/* Footer */}
      <footer className="py-8 bg-primary text-primary-foreground text-center">
        <p className="text-sm">
          © 2025 Marketing Automation & Growth Specialist. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
};

export default Index;
