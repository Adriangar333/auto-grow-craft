const Videos = () => {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Videos de Aplicativos
          </h2>
          <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
            Aquí puedes ver algunos de mis trabajos en acción.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">Aplicativo Optimización Rutas</h3>
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://drive.google.com/file/d/12gnUUPVpG2GXQHa6OYQTOuZ9SYYyYyc9/preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Aplicativo Optimización Rutas"
              ></iframe>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">Aplicativo Historial Visitas Fallidas</h3>
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://drive.google.com/file/d/1kxU7qs50hjqQOMYiVWIVXHT695nrQDLe/preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Aplicativo Historial Visitas Fallidas"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
