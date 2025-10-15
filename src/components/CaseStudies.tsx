import { TrendingDown, Target, Users, CheckCircle2, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    title: "Sistema de Optimización y Comunicación para Mexicargo",
    challenge: "Mexicargo necesitaba reducir los altos costos operativos en sus rutas de entrega y mejorar la comunicación con los clientes sobre el estado de sus envíos, un punto clave para la confianza y la retención.",
    solution: "Desarrollé una aplicación de optimización de rutas que calcula los trayectos más eficientes. Integré esta herramienta con un flujo de trabajo en n8n que se activa automáticamente para enviar notificaciones por correo electrónico a los clientes en cada etapa del proceso de entrega.",
    technologies: ["n8n", "APIs", "Lógica de Optimización", "Email Automation"],
    impacts: [
      {
        icon: Users,
        title: "Mejora de la Experiencia del Cliente (CX)",
        description: "Se aumentó la satisfacción y confianza del cliente a través de notificaciones proactivas y transparentes."
      },
      {
        icon: TrendingDown,
        title: "Eficiencia Operativa",
        description: "La optimización de rutas permitió una reducción de costos operativos de hasta un 30%, lo que se traduce en un marketing más rentable."
      },
      {
        icon: CheckCircle2,
        title: "Fidelización",
        description: "Un cliente informado es un cliente leal. La automatización de la comunicación reforzó la imagen de marca de Mexicargo como una empresa confiable y moderna."
      }
    ],
    metric: "30%",
    metricLabel: "Reducción de costos"
  },
  {
    title: "Aplicativo 'Artemisa' para la Reducción de Visitas Fallidas",
    challenge: "Las visitas de servicio fallidas representaban un costo significativo y generaban una mala experiencia para el cliente final. El proceso de registro y seguimiento era manual e ineficiente.",
    solution: "Creé el aplicativo 'Artemisa', que digitaliza el pre-registro de visitas y permite la trazabilidad de los técnicos en tiempo real. Esto asegura que el cliente esté preparado y reduce las posibilidades de una visita fallida.",
    technologies: ["Desarrollo de Aplicativos", "Gestión de Bases de Datos", "Trazabilidad GPS", "Notificaciones Push"],
    impacts: [
      {
        icon: Target,
        title: "Reducción de Fricción",
        description: "Se eliminó un punto de dolor importante en el customer journey, mejorando drásticamente la percepción del servicio."
      },
      {
        icon: Zap,
        title: "Optimización de Recursos",
        description: "La reducción significativa de visitas no exitosas permitió al equipo de marketing y ventas enfocarse en la adquisición de nuevos clientes en lugar de en la resolución de problemas."
      },
      {
        icon: CheckCircle2,
        title: "Reputación de Marca",
        description: "Posicionó a la empresa como una organización eficiente y centrada en el cliente."
      }
    ],
    metric: "85%",
    metricLabel: "Éxito en visitas"
  }
];

const CaseStudies = () => {
  return (
    <section id="casos-exito" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Casos de Éxito
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Resultados medibles que transforman negocios
            </p>
          </div>

          {/* Case studies */}
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card 
                key={index}
                className="overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Left column - Metric highlight */}
                  <div className="gradient-primary p-8 flex flex-col justify-center items-center text-center">
                    <div className="text-6xl font-bold text-primary-foreground mb-2">
                      {study.metric}
                    </div>
                    <div className="text-primary-foreground/90 font-medium text-lg">
                      {study.metricLabel}
                    </div>
                  </div>

                  {/* Right column - Content */}
                  <div className="md:col-span-2 p-8">
                    <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-destructive mb-2">El Reto:</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-accent mb-2">Mi Solución:</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Tecnologías Clave:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="px-3 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">Impacto de Marketing:</h4>
                      <div className="space-y-4">
                        {study.impacts.map((impact, impactIndex) => {
                          const Icon = impact.icon;
                          return (
                            <div key={impactIndex} className="flex gap-3">
                              <div className="flex-shrink-0">
                                <div className="bg-primary/10 p-2 rounded-lg">
                                  <Icon className="w-5 h-5 text-primary" />
                                </div>
                              </div>
                              <div>
                                <h5 className="font-semibold mb-1">{impact.title}</h5>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {impact.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
