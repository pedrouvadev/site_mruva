import { ArrowRight, Code2, Zap, TrendingUp, Brain, Layers, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setScrollProgress((scrolled / windowHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] overflow-hidden">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/hero-3d-neon-ETM4gefM3NZLJ3bB38yXCc.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/50 to-[#0F172A]" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 inline-block animate-fade-in">
            <span className="glass-card px-4 py-2 text-sm font-semibold">
              🚀 Desenvolvedor Full-Stack • Estrategista Digital
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in animation-delay-100">
            Transformo <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">Código</span> em{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">Resultados</span>
          </h1>

          <p className="text-lg md:text-xl text-[#94A3B8] mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Especialista em transformação digital com formação pela FAT, Goobec (Google Partner) e Google Cloud. Uno código de alta performance com estratégia de marketing baseada em dados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in animation-delay-300">
            <Button className="btn-gradient text-lg py-6" onClick={() => window.location.href = 'https://wa.me/5511978768690'}>
              Solicitar Auditoria Estratégica <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" className="text-lg py-6 border-cyan-500/50 hover:bg-cyan-500/10" onClick={() => setLocation('/servicos')}>
              Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 animate-fade-in animation-delay-400">
            <div className="glass-card p-4 hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-cyan-400">7+</div>
              <div className="text-sm text-[#94A3B8]">Projetos Live</div>
            </div>
            <div className="glass-card p-4 hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-indigo-400">33</div>
              <div className="text-sm text-[#94A3B8]">Certificações</div>
            </div>
            <div className="glass-card p-4 hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-orange-400">25+</div>
              <div className="text-sm text-[#94A3B8]">Anos de Tech</div>
            </div>
          </div>
        </div>
      </section>

      {/* Formações Section */}
      <section id="formações" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center animate-fade-in">Minhas Formações</h2>
          <p className="text-center text-[#94A3B8] mb-16 max-w-2xl mx-auto animate-fade-in animation-delay-100">
            Especialização contínua em tecnologia, marketing e gestão
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Marketing Digital", icon: TrendingUp, href: "/marketing", color: "from-cyan-500 to-cyan-600" },
              { title: "Desenvolvimento", icon: Code2, href: "/desenvolvimento", color: "from-indigo-500 to-indigo-600" },
              { title: "Gestão de Projetos", icon: Layers, href: "/gestao", color: "from-purple-500 to-purple-600" },
              { title: "IA & Google Cloud", icon: Brain, href: "/ia", color: "from-orange-500 to-orange-600" },
              { title: "Fullstack Empower", icon: Zap, href: "/fullstack", color: "from-pink-500 to-pink-600" },
              { title: "Inglês Avançado", icon: Globe, href: "/ingles", color: "from-blue-500 to-blue-600" },
            ].map((formacao, index) => {
              const Icon = formacao.icon;
              return (
                <div
                  key={index}
                  onClick={() => setLocation(formacao.href)}
                  className="glass-card p-6 hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`bg-gradient-to-br ${formacao.color} p-4 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{formacao.title}</h3>
                  <p className="text-[#94A3B8] text-sm group-hover:text-cyan-400 transition-colors">
                    Ver detalhes →
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-cyan-500/10" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">Vamos Trabalhar Juntos?</h2>
          <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-100">
            Tenho soluções personalizadas para transformar seu negócio. Vamos conversar sobre suas necessidades.
          </p>

          <button 
            onClick={() => window.location.href = 'https://wa.me/5511978768690'}
            className="btn-gradient text-lg py-6 inline-flex items-center gap-2 animate-fade-in animation-delay-200"
          >
            Agendar Call <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
