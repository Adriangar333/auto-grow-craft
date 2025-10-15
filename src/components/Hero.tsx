import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto animate-fade-in">
          {/* Left Column - Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl"></div>
              <img 
                src={profilePhoto} 
                alt="Adrián García - Marketing Automation Specialist" 
                className="relative rounded-2xl shadow-2xl w-full max-w-md"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">Marketing Automation Expert</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Transformo estrategias de{" "}
              <span className="text-accent">Marketing Digital</span> en resultados medibles
            </h1>

            {/* Professional summary */}
            <p className="text-base md:text-lg text-primary-foreground/90 mb-6 leading-relaxed">
              Experto en automatización de procesos de marketing y desarrollo web orientado a conversión. 
              Diseño sistemas inteligentes con <span className="font-semibold text-accent">n8n</span> que 
              nutren leads, optimizan campañas y{" "}
              <span className="font-semibold text-accent">maximizan el ROI</span> de tu inversión en marketing.
            </p>

            <p className="text-sm md:text-base text-primary-foreground/80 mb-8">
              Combino análisis de datos, desarrollo tecnológico y visión estratégica para crear 
              soluciones de marketing que escalan tu negocio.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-accent hover:bg-accent/90 text-foreground font-semibold px-8 py-6 text-lg group"
              >
                Hablemos de tu proyecto
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('casos-exito')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary-foreground/30 bg-transparent hover:bg-primary-foreground/10 text-primary-foreground font-semibold px-8 py-6 text-lg backdrop-blur-sm"
              >
                Ver casos de éxito
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-accent rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
