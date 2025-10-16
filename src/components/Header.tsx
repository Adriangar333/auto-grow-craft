import { Button } from "@/components/ui/button";
import nexaliaLogo from "@/assets/nexalia-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#E5E9EF] border-b border-border/30 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={nexaliaLogo} 
              alt="Nexalia Business Center" 
              className="h-16 md:h-20 w-auto"
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

          {/* WhatsApp Button */}
          <Button 
            variant="default"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold group"
            asChild
          >
            <a 
              href="https://wa.me/573145849576?text=Hola,%20estoy%20interesado%20en%20tus%20servicios%20de%20Marketing%20Automation%20y%20Growth.%20%C2%BFPodemos%20hablar?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              <span className="hidden sm:inline">Contactar por WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
