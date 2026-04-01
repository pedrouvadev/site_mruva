import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap, TrendingUp, Brain, Layers } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

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

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-white/5 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Mr. Uva
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#formacoes" className="hover:text-cyan-400 transition-colors">
              Formações
            </a>
            <a href="#servicos" className="hover:text-cyan-400 transition-colors">
              Serviços
            </a>
            <a href="#contato" className="hover:text-cyan-400 transition-colors">
              Contato
            </a>
            <Button className="btn-gradient" onClick={() => window.location.href = 'https://wa.me/5511978768690'}>Agendar Call</Button>
          </div>
        </div>
      </nav>

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
          <div className="mb-6 inline-block">
            <span className="glass-card px-4 py-2 text-sm font-semibold">
              🚀 Desenvolvedor Full-Stack • Estrategista Digital
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transformo <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">Código</span> em{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">Resultados</span>
          </h1>

          <p className="text-lg md:text-xl text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            Especialista em transformação digital com formação pela FAT, Goobec (Google Partner) e Google Cloud. Uno código de alta performance com estratégia de marketing baseada em dados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="btn-gradient text-lg py-6" onClick={() => setLocation('/marketing')}>
              Solicitar Auditoria Estratégica <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" className="text-lg py-6 border-cyan-500/50 hover:bg-cyan-500/10" onClick={() => setLocation('/fullstack')}>
              Ver Portfólio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16">
            <div className="glass-card p-4">
              <div className="text-3xl font-bold text-cyan-400">7+</div>
              <div className="text-sm text-[#94A3B8]">Projetos Live</div>
            </div>
            <div className="glass-card p-4">
              <div className="text-3xl font-bold text-indigo-400">220%</div>
              <div className="text-sm text-[#94A3B8]">ROI Comprovado</div>
            </div>
            <div className="glass-card p-4">
              <div className="text-3xl font-bold text-orange-400">5</div>
              <div className="text-sm text-[#94A3B8]">Formações Elite</div>
            </div>
          </div>
        </div>
      </section>

      {/* Formações Section */}
      <section id="formacoes" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Formações de Elite</h2>
          <p className="text-center text-[#94A3B8] mb-16 max-w-2xl mx-auto">
            Certificações que comprovam expertise em tecnologia de ponta e estratégia de negócios
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Marketing Digital */}
            <div className="glass-card p-8 hover:scale-105 transition-transform duration-300 group cursor-pointer">
              <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 rounded-lg w-fit">
                <TrendingUp className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Marketing Digital de Performance</h3>
              <p className="text-[#94A3B8] mb-4">Goobec (Google Partner)</p>
              <p className="text-sm text-[#94A3B8] mb-6">
                Google Ads, GA4, Meta Ads e estratégia omnichannel com ROI explosivo.
              </p>
              <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300" onClick={() => setLocation('/marketing')}>
                Ver Detalhes <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Card 2: Desenvolvimento */}
            <div className="glass-card p-8 hover:scale-105 transition-transform duration-300 group cursor-pointer">
              <div className="mb-4 p-3 bg-gradient-to-br from-cyan-400/20 to-orange-500/20 rounded-lg w-fit">
                <Code2 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Desenvolvimento de Sistemas</h3>
              <p className="text-[#94A3B8] mb-4">FAT (Fundação FAT - Fatec-SP)</p>
              <p className="text-sm text-[#94A3B8] mb-6">
                1.200 horas de formação técnica em full-stack, segurança e cloud.
              </p>
              <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300" onClick={() => setLocation('/desenvolvimento')}>
                Ver Detalhes <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Card 3: Gestão de Projetos */}
            <div className="glass-card p-8 hover:scale-105 transition-transform duration-300 group cursor-pointer">
              <div className="mb-4 p-3 bg-gradient-to-br from-orange-500/20 to-indigo-500/20 rounded-lg w-fit">
                <Layers className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Gestão de Projetos de TI</h3>
              <p className="text-[#94A3B8] mb-4">Qualifica SP & Fundação FAT</p>
              <p className="text-sm text-[#94A3B8] mb-6">
                120 horas em Scrum, Kanban, metodologias ágeis e liderança.
              </p>
              <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300" onClick={() => setLocation('/gestao')}>
                Ver Detalhes <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Card 4: IA */}
            <div className="glass-card p-8 hover:scale-105 transition-transform duration-300 group cursor-pointer">
              <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 rounded-lg w-fit">
                <Brain className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Inteligência Artificial</h3>
              <p className="text-[#94A3B8] mb-4">Google Cloud (25 Skill Badges)</p>
              <p className="text-sm text-[#94A3B8] mb-6">
                50 horas em IA Generativa, Vertex AI, Gemini e MLOps.
              </p>
              <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300" onClick={() => setLocation('/ia')}>
                Ver Detalhes <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Card 5: Fullstack */}
            <div className="glass-card p-8 hover:scale-105 transition-transform duration-300 group cursor-pointer">
              <div className="mb-4 p-3 bg-gradient-to-br from-cyan-400/20 to-orange-500/20 rounded-lg w-fit">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fullstack Empower</h3>
              <p className="text-[#94A3B8] mb-4">Vai na Web</p>
              <p className="text-sm text-[#94A3B8] mb-6">
                React, Node.js, TypeScript, PostgreSQL e arquitetura de sistemas.
              </p>
              <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300" onClick={() => setLocation('/fullstack')}>
                Ver Detalhes <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/services-grid-bg-37RfWbP5XKmep3Fcdnw4qM.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Serviços Oferecidos</h2>
          <p className="text-center text-[#94A3B8] mb-16 max-w-2xl mx-auto">
            Soluções completas que transformam sua empresa através de tecnologia e estratégia
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Auditoria e Blindagem de Dados</h3>
              <p className="text-[#94A3B8] mb-6">
                Análise profunda de 360º em infraestrutura digital com conformidade LGPD e proteção contra ransomware.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8] mb-6">
                <li>✓ Mapeamento de brechas em bancos de dados</li>
                <li>✓ Implementação de protocolos de segurança</li>
                <li>✓ Relatório de conformidade técnica</li>
              </ul>
              <Button className="btn-gradient w-full" onClick={() => window.location.href = 'https://wa.me/5511978768690'}>Solicitar Auditoria</Button>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Ecossistema de Vendas Full-Stack</h3>
              <p className="text-[#94A3B8] mb-6">
                Máquina de vendas integrada com front-end de alta performance e back-end robusto.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8] mb-6">
                <li>✓ Site ultraveloz com SEO técnico</li>
                <li>✓ Integração com Google Ads</li>
                <li>✓ Banco de dados otimizado</li>
              </ul>
              <Button className="btn-gradient w-full" onClick={() => setLocation('/fullstack')}>Conhecer Solução</Button>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Inteligência de Dados e Automação</h3>
              <p className="text-[#94A3B8] mb-6">
                Organização de dados caóticos em dashboards inteligentes que geram clareza estratégica.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8] mb-6">
                <li>✓ Estruturação de bancos de dados</li>
                <li>✓ Automações que eliminam trabalho manual</li>
                <li>✓ Dashboards Power BI</li>
              </ul>
              <Button className="btn-gradient w-full" onClick={() => setLocation('/ia')}>Transformar Dados</Button>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Consultoria Estratégica & Mentoria</h3>
              <p className="text-[#94A3B8] mb-6">
                Orientação especializada em transformação digital, arquitetura de sistemas e estratégia de crescimento.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8] mb-6">
                <li>✓ Análise de tecnologia atual</li>
                <li>✓ Roadmap de transformação</li>
                <li>✓ Mentoria técnica contínua</li>
              </ul>
              <Button className="btn-gradient w-full" onClick={() => window.location.href = 'https://wa.me/5511978768690'}>Agendar Consulta</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/cta-gradient-neon-YtJRpgzzvfKyE97pDtJczf.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#0F172A] via-transparent to-[#0F172A]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para Transformar seu Negócio?</h2>
          <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            Aceito apenas 4 novos projetos por mês. Vamos conversar sobre como tecnologia e estratégia podem impulsionar seus resultados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gradient text-lg py-6 px-8" onClick={() => window.location.href = 'https://wa.me/5511978768690'}>
              Agendar Call Estratégica
            </Button>
            <a href="https://wa.me/5511978768690" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-lg py-6 px-8 border-cyan-500/50 hover:bg-cyan-500/10 w-full">
                WhatsApp: +55 11 97876-8690
              </Button>
            </a>
          </div>

          <div className="mt-12 pt-12 border-t border-cyan-500/20">
            <p className="text-sm text-[#94A3B8]">
              📧 contato@mruva.com.br • 🔗 linkedin.com/in/mruva • 📍 São Paulo, Brasil
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto text-center text-sm text-[#94A3B8]">
          <p>© 2026 Pedro Luiz Uva Junior. Todos os direitos reservados.</p>
          <p className="mt-2">
            "A tecnologia constrói a ponte; o marketing traz as pessoas; a inteligência garante que a direção está correta."
          </p>
        </div>
      </footer>
    </div>
  );
}
