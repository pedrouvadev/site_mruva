import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, Globe } from "lucide-react";
import { useLocation, Link } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  showScheduleButton?: boolean;
  lang?: "pt" | "en";
  showStatus?: boolean;
}

export default function Header({
  showScheduleButton = true,
  lang = "pt",
  showStatus = false,
}: HeaderProps) {
  const [, setLocation] = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [tabletMenuOpen, setTabletMenuOpen] = useState(false);

  const translations = {
    pt: {
      training: "Formações",
      services: "Serviços",
      servicesHref: "/servicos",
      schedule: "Agendar uma Call",
      home: "Home",
      homeHref: "/",
      switchLabel: "English Version",
      switchLabelMobile: "Switch to English",
      switchHref: "/en",
      switchIcon: "🇺🇸",
      available: "Disponível para projetos",
    },
    en: {
      training: "Training",
      services: "Services",
      servicesHref: "/en/services",
      schedule: "Book a Call",
      home: "Home",
      homeHref: "/en",
      switchLabel: "Versão Português",
      switchLabelMobile: "Mudar para Português",
      switchHref: "/",
      switchIcon: "🇧🇷",
      available: "Available for projects",
    },
  };

  const t = translations[lang];

  const formacoes =
    lang === "pt"
      ? [
          { name: "Marketing Digital", href: "/marketing" },
          { name: "Desenvolvimento", href: "/desenvolvimento" },
          { name: "Gestão de Projetos", href: "/gestao" },
          { name: "IA & Google Cloud", href: "/ia" },
        ]
      : [
          { name: "Digital Marketing", href: "/en/marketing" },
          { name: "Development", href: "/en/development" },
          { name: "Project Management", href: "/en/management" },
          { name: "AI & Google Cloud", href: "/en/ai" },
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
        <div className="flex items-center gap-4">
          <Link
            href={t.homeHref}
            className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Mr. Uva
          </Link>

          {showStatus && (
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-400/90 whitespace-nowrap">
                {t.available}
              </span>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {/* Submenu Formações - Pure CSS hover para desktop */}
          <div className="relative group">
            <button
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors text-[#E2E8F0]"
              onClick={() => setTabletMenuOpen(!tabletMenuOpen)}
              aria-expanded={tabletMenuOpen}
              aria-haspopup="true"
            >
              {t.training}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${tabletMenuOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div className="absolute left-0 top-full mt-1 w-56 bg-[#1E293B] border border-cyan-500/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
              {formacoes.map(formacao => (
                <Link
                  key={formacao.href}
                  href={formacao.href}
                  className="block px-4 py-2 hover:bg-indigo-500/20 hover:text-cyan-400 transition-colors text-[#E2E8F0] text-sm"
                >
                  {formacao.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href={t.servicesHref}
            className="hover:text-cyan-400 transition-colors text-[#E2E8F0]"
          >
            {t.services}
          </Link>

          <div className="flex items-center gap-4 border-l border-white/10 pl-6 ml-2">
            <Link
              href={t.switchHref}
              className="text-[#E2E8F0] text-sm font-semibold hover:text-cyan-400 transition-all flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-1.5 hover:bg-white/10"
            >
              {t.switchIcon}{" "}
              <span className="hidden lg:inline">{t.switchLabel}</span>
              <span className="lg:hidden">{lang === "pt" ? "EN" : "PT"}</span>
            </Link>

            {showScheduleButton && (
              <button
                onClick={() =>
                  (window.location.href = "https://wa.me/5511978768690")
                }
                className="btn-gradient"
              >
                {t.schedule}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Abrir menu de navegação"
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <Menu className="w-6 h-6 text-[#E2E8F0]" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64 bg-[#1E293B] border-l border-cyan-500/30"
            >
              <div className="flex flex-col gap-4 mt-8">
                <Link
                  href={t.homeHref}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 hover:bg-indigo-500/20 hover:text-cyan-400 transition-colors text-[#E2E8F0] rounded-lg flex items-center justify-between"
                >
                  <span>{t.home}</span>
                  {showStatus && (
                    <div className="flex items-center gap-2 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      </span>
                      <span className="text-[8px] uppercase tracking-wider font-bold text-emerald-400/80">
                        Live
                      </span>
                    </div>
                  )}
                </Link>

                {/* Mobile Formações Submenu */}
                <div className="border-t border-cyan-500/20 pt-4">
                  <button
                    onClick={() => setOpenSubmenu(!openSubmenu)}
                    className="w-full px-4 py-2 hover:bg-indigo-500/20 hover:text-cyan-400 transition-colors text-[#E2E8F0] rounded-lg flex items-center justify-between"
                  >
                    {t.training}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${openSubmenu ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openSubmenu && (
                    <div className="mt-2 pl-4 flex flex-col gap-2 border-l border-cyan-500/20">
                      {formacoes.map(formacao => (
                        <button
                          key={formacao.href}
                          onClick={() =>
                            handleMobileFormacaoClick(formacao.href)
                          }
                          className="px-4 py-2 hover:bg-indigo-500/20 hover:text-cyan-400 transition-colors text-[#E2E8F0] text-sm rounded-lg text-left"
                        >
                          {formacao.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href={t.servicesHref}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 hover:bg-indigo-500/20 hover:text-cyan-400 transition-colors text-[#E2E8F0] rounded-lg"
                >
                  {t.services}
                </Link>

                <div className="border-t border-cyan-500/20 pt-6 mt-2 pb-4 flex flex-col gap-4">
                  <Link
                    href={t.switchHref}
                    onClick={() => setIsOpen(false)}
                    className="flex justify-center items-center gap-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-[#E2E8F0] font-semibold hover:bg-white/10 hover:text-cyan-400 transition-colors"
                  >
                    {t.switchIcon} {t.switchLabelMobile}
                  </Link>

                  {showScheduleButton && (
                    <button
                      onClick={() => {
                        window.location.href = "https://wa.me/5511978768690";
                        setIsOpen(false);
                      }}
                      className="btn-gradient w-full"
                    >
                      {t.schedule}
                    </button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
