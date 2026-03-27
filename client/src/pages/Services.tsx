import { ArrowRight, Code2, TrendingUp, Brain, Zap } from "lucide-react";
import { useLocation } from "wouter";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Services() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/5511978768690';
  };

  const services = [
    {
      icon: Code2,
      title: "Desenvolvimento Full Stack",
      description: "Aplicações web modernas com React, Node.js e banco de dados. Pronto para escala.",
      features: ["React 19 + TypeScript", "Node.js + Express", "PostgreSQL/MySQL", "APIs REST", "Deployment"],
      cta: "Solicitar Orçamento",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital & Growth",
      description: "Estratégia de crescimento baseada em dados. Google Ads, Meta Ads, GA4 e SEO.",
      features: ["Google Ads", "Meta Ads", "Google Analytics 4", "SEO On-page", "ROI Comprovado"],
      cta: "Solicitar Auditoria",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Brain,
      title: "IA & Automação",
      description: "Integre IA generativa e automação de processos. Aumente produtividade em 10x.",
      features: ["ChatGPT Integration", "Automação de Processos", "Google Cloud AI", "Chatbots", "Prompt Engineering"],
      cta: "Explorar Possibilidades",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Transformação Digital",
      description: "Modernize seu negócio. Website, automação, IA e estratégia digital integrada.",
      features: ["Diagnóstico Completo", "Roadmap Digital", "Implementação", "Treinamento", "Suporte Contínuo"],
      cta: "Agendar Consultoria",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-cyan-500/5" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
      
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
          <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/50 to-[#0F172A]" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 inline-block animate-fade-in">
              <span className="glass-card px-4 py-2 text-sm font-semibold text-cyan-400">
                🚀 Serviços Profissionais
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in animation-delay-100">
              Soluções Digitais <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">Sob Medida</span>
            </h1>

            <p className="text-lg md:text-xl text-[#94A3B8] mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
              Desenvolvimento full stack, marketing digital, IA e transformação digital. Tudo que sua empresa precisa para crescer no mundo digital.
            </p>

            <Button 
              onClick={handleWhatsApp}
              className="btn-gradient text-lg py-6 inline-flex items-center gap-2 animate-fade-in animation-delay-300"
            >
              Conversar no WhatsApp <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Serviços Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-center">Nossos Serviços</h2>
            <p className="text-center text-[#94A3B8] mb-16 max-w-2xl mx-auto">
              Cada serviço é customizado para suas necessidades específicas
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index}
                    className="glass-card p-8 hover:scale-105 transition-transform duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`bg-gradient-to-br ${service.color} p-4 rounded-lg w-fit mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-[#94A3B8] mb-6">{service.description}</p>

                    <div className="mb-8">
                      <p className="text-sm font-semibold text-cyan-400 mb-3">Inclui:</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-[#CBD5E1]">
                            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      onClick={handleWhatsApp}
                      className="btn-gradient w-full py-6 flex items-center justify-center gap-2"
                    >
                      {service.cta} <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-cyan-500/10" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-6">Pronto para Transformar seu Negócio?</h2>
            <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto">
              Vamos conversar sobre suas necessidades e encontrar a solução perfeita.
            </p>

            <div className="flex justify-center">
              <Button 
                onClick={handleWhatsApp}
                className="btn-gradient text-lg py-6 px-12 inline-flex items-center gap-2"
              >
                Agendar Call <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
