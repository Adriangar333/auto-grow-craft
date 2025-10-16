import { Mail, Linkedin, Phone, Calendar, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CallToAction = () => {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 gradient-primary text-primary-foreground animate-slide-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para automatizar tu marketing?
              </h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Hablemos sobre cómo puedo automatizar los procesos de tu equipo de marketing 
                y crear herramientas que impulsen tu crecimiento.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <Button 
                variant="secondary"
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold h-auto py-4 group"
                asChild
              >
                <a href="mailto:adriangar713@gmail.com" className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Email</span>
                </a>
              </Button>

              <Button 
                variant="secondary"
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold h-auto py-4 group"
                asChild
              >
                <a href="https://www.linkedin.com/in/adriangar333/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </Button>

              <Button 
                variant="secondary"
                size="lg"
                className="bg-accent text-foreground hover:bg-accent/90 font-semibold h-auto py-4 group"
                asChild
              >
                <a 
                  href="/cv-adrian-garzon.pdf" 
                  download="cv-adrian-garzon.pdf"
                  className="flex items-center justify-center gap-3"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Descargar CV</span>
                </a>
              </Button>
            </div>

            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-primary-foreground/90">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+57 314 584 9576</span>
              </div>
              
              <div className="pt-4 border-t border-primary-foreground/20">
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Prefiero una reunión virtual para discutir tu proyecto en detalle
                </p>
                <Button 
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold group"
                  asChild
                >
                  <a href="https://calendly.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Agendar una reunión
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* Additional info */}
          <div className="mt-12 text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-4">¿Qué puedo hacer por ti?</h3>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl mb-2">🌐</div>
                <h4 className="font-semibold mb-1">Sitios Web</h4>
                <p className="text-sm text-muted-foreground">
                  Que convierten visitantes en clientes
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-semibold mb-1">Automatización</h4>
                <p className="text-sm text-muted-foreground">
                  Workflows inteligentes con n8n
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📊</div>
                <h4 className="font-semibold mb-1">Análisis de Datos</h4>
                <p className="text-sm text-muted-foreground">
                  Dashboards que impulsan decisiones
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
