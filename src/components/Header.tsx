import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import nexaliaLogo from "@/assets/nexalia-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={nexaliaLogo} 
              alt="Nexalia Business Center" 
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#competencias" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Competencias
            </a>
            <a 
              href="#casos-exito" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Casos de Éxito
            </a>
            <a 
              href="#contacto" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </a>
          </nav>

          {/* Download CV Button */}
          <Button 
            variant="default"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
            asChild
          >
            <a 
              href="/CV_Marketing_Automation_Specialist.pdf" 
              download="CV_Marketing_Automation_Specialist.pdf"
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              <span className="hidden sm:inline">Descargar CV</span>
              <span className="sm:hidden">CV</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
