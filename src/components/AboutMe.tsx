import profilePhoto from "@/assets/profile-photo.png";

const AboutMe = () => {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Photo */}
          <div className="flex justify-center">
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 leading-tight">
              Sobre Mí
            </h2>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
