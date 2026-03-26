import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  showScheduleButton?: boolean;
}

export default function Header({ showScheduleButton = true }: HeaderProps) {
  const [, setLocation] = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const formacoes = [
    { name: "Marketing Digital", href: "/marketing" },
    { name: "Desenvolvimento", href: "/desenvolvimento" },
    { name: "Gestão de Projetos", href: "/gestao" },
    { name: "IA & Google Cloud", href: "/ia" },
    { name: "Fullstack Empower", href: "/fullstack" },
    { name: "Inglês Avançado", href: "/ingles" },
  ];

  const handleNavigation = (href: string) => {
    setLocation(href);
    setIsOpen(false);
  };

  const handleMobileFormacaoClick = (href: string) => {
    handleNavigation(href);
    setOpenSubmenu(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-white/5 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          Mr. Uva
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="/sobre" className="hover:text-cyan-400 transition-colors text-[#E2E8F0]">
            Sobre
          </a>

          {/* Submenu Formações */}
          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-cyan-400 transition-colors text-[#E2E8F0]">
              Formações
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 mt-0 w-56 bg-[#1E293B] border border-cyan-500/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
              {formacoes.map((formacao) => (
                <a
                  key={formacao.href}
                  href={formacao.href}
                  className="block px-4 py-2 hover:bg-indigo-500/20 hover:text-cyan-400 transition-colors text-[#E2E8F0] text-sm"
                >
                  {formacao.name}
                </a>
              ))}
            </div>
          </div>

          <a href="/servicos" className="hover:text-cyan-400 transition-colors text-[#E2E8F0]">
            Serviços
          </a>

          {showScheduleButton && (
            <button 
              onClick={() => window.location.href = 'https://wa.me/5511978768690'}
              className="btn-gradient"
            >
              Agendar uma Call
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Menu className="w-6 h-6 text-[#E2E8F0]" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-[#1E293B] border-l border-cyan-500/30">
              <div className="flex flex-col gap-4 mt-8">
                <a 
                  href="/" 
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 hover:bg-indigo-500/20 hover:text-cyan-400 transition-colors text-[#E2E8F0] rounded-lg"
                >
                  Home
                </a>
                <a 
                  href="/sobre" 
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 hover:bg-indigo-500/20 hover:text-cyan-400 transition-colors text-[#E2E8F0] rounded-lg"
                >
                  Sobre
                </a>

                {/* Mobile Formações Submenu */}
                <div className="border-t border-cyan-500/20 pt-4">
                  <button
                    onClick={() => setOpenSubmenu(!openSubmenu)}
                    className="w-full px-4 py-2 hover:bg-indigo-500/20 hover:text-cyan-400 transition-colors text-[#E2E8F0] rounded-lg flex items-center justify-between"
                  >
                    Formações
                    <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu ? 'rotate-180' : ''}`} />
                  </button>
                  {openSubmenu && (
                    <div className="mt-2 pl-4 flex flex-col gap-2 border-l border-cyan-500/20">
                      {formacoes.map((formacao) => (
                        <button
                          key={formacao.href}
                          onClick={() => handleMobileFormacaoClick(formacao.href)}
                          className="px-4 py-2 hover:bg-indigo-500/20 hover:text-cyan-400 transition-colors text-[#E2E8F0] text-sm rounded-lg text-left"
                        >
                          {formacao.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <a 
                  href="/servicos" 
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 hover:bg-indigo-500/20 hover:text-cyan-400 transition-colors text-[#E2E8F0] rounded-lg"
                >
                  Serviços
                </a>

                {showScheduleButton && (
                  <button 
                    onClick={() => {
                      window.location.href = 'https://wa.me/5511978768690';
                      setIsOpen(false);
                    }}
                    className="btn-gradient mt-4 w-full"
                  >
                    Agendar uma Call
                  </button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
