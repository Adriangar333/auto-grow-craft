import { Globe, Workflow, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const competencies = [
  {
    icon: Globe,
    title: "Desarrollo Web y Experiencia Digital",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    skills: [
      {
        name: "Creación de Sitios Web",
        description: "Desarrollo en WordPress, HTML/CSS y constructores web modernos, enfocado en la experiencia de usuario (UX) y la optimización para la conversión (CRO)."
      },
      {
        name: "Estrategia SEO",
        description: "Implementación de estrategias de posicionamiento en buscadores para aumentar la visibilidad y el tráfico orgánico."
      },
      {
        name: "Gestión de Contenido",
        description: "Creación y edición de contenido digital (Adobe Photoshop, Capcut) para fortalecer la presencia de marca."
      }
    ]
  },
  {
    icon: Workflow,
    title: "Automatización de Marketing y Flujos de Trabajo (n8n)",
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: [
      {
        name: "Diseño de Workflows",
        description: "Experto en n8n para automatizar tareas repetitivas de marketing, como la nutrición de leads, segmentación de audiencias y campañas de email marketing."
      },
      {
        name: "Integración de Sistemas (APIs)",
        description: "Conexión de LLMs (Gemini, GPT) y otras plataformas (CRMs, email) para crear un ecosistema de marketing unificado y sin fricciones."
      },
      {
        name: "Automatización de Reportes",
        description: "Creación de sistemas que recopilan datos y generan informes de rendimiento de manera automática, liberando tiempo para el análisis estratégico."
      }
    ]
  },
  {
    icon: BarChart3,
    title: "Business Intelligence y Análisis de Datos",
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: [
      {
        name: "Visualización de Datos",
        description: "Dominio de Power BI y Excel Avanzado para transformar datos de campañas en insights accionables y tableros de control interactivos."
      },
      {
        name: "Análisis Predictivo",
        description: "Uso de datos para identificar tendencias y predecir resultados de campañas futuras."
      },
      {
        name: "Gestión de KPIs",
        description: "Diseño e implementación de indicadores clave de gestión (KPIs) para medir el éxito de las estrategias de marketing."
      }
    ]
  }
];

const Competencies = () => {
  return (
    <section id="competencias" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Competencias Clave
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tres pilares fundamentales para transformar tu marketing digital
            </p>
          </div>

          {/* Competencies grid */}
          <div className="grid md:grid-cols-1 gap-8">
            {competencies.map((competency, index) => {
              const Icon = competency.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`${competency.bgColor} p-4 rounded-2xl`}>
                      <Icon className={`w-8 h-8 ${competency.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{competency.title}</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-6 ml-0 md:ml-20">
                    {competency.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="border-l-2 border-primary/20 pl-6">
                        <h4 className="font-semibold text-lg mb-2">{skill.name}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competencies;
