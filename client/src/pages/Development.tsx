import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Code2,
  Database,
  Shield,
  Cloud,
  Zap,
  GraduationCap,
  Award,
} from "lucide-react";

export default function DevelopmentUnified() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] overflow-hidden relative font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <div className="relative z-10">
        <Header showStatus={true} />
        
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
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
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex justify-center animate-fade-in">
            <div className="glass-card px-4 py-2 text-sm md:text-base font-semibold text-cyan-400 inline-flex items-center gap-2 border border-cyan-500/30 uppercase tracking-widest">
              <Code2 className="w-4 h-4" /> Full-Stack & Arquitetura de Software
            </div>
          </div>

          <h1 className="title-standard animate-fade-in animation-delay-100 tracking-tighter">
            Engenharia de <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Software</span> com Propósito
          </h1>

          <p className="mb-12 max-w-4xl mx-auto animate-fade-in animation-delay-200 font-medium text-lg">
            Formação híbrida que une a tradição acadêmica da Fundação FAT (Fatec-SP) com a inovação digital. 1.200h de conhecimento técnico para construir soluções que transformam negócios.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in animation-delay-300">
            <Button 
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open('https://wa.me/5511978768690', '_blank')}
            >
              Solicitar Diagnóstico Técnico <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Certificações em andamento */}
      <section className="section-standard">
        <div className="max-w-6xl mx-auto">
          <h2 className="title-standard text-center text-4xl font-bold">
            Certificações em Desenvolvimento
          </h2>
          <p className="text-center text-[#94A3B8] mb-12 max-w-2xl mx-auto text-lg">
            Duas jornadas de excelência técnica, ambas com conclusão prevista
            para os próximos meses.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FAT Card */}
            <div className="glass-card p-8 border-cyan-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-cyan-500/20 px-4 py-1 rounded-bl-lg text-sm font-semibold text-cyan-300">
                Conclusão: Dez/2026
              </div>
              <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 rounded-lg w-fit">
                <GraduationCap className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Fundação FAT (Fatec-SP)</h3>
              <p className="text-[#94A3B8] text-sm mb-4">
                Tecnólogo em Desenvolvimento de Sistemas • 1.200 horas
              </p>
              <p className="text-[#94A3B8] mb-6">
                Currículo completo com ênfase em engenharia de software, banco
                de dados, segurança da informação e cloud computing. Formação
                criada por professores da Fatec-SP, referência em tecnologia.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-cyan-400">
                <span className="px-2 py-1 bg-cyan-500/10 rounded">LGPD</span>
                <span className="px-2 py-1 bg-cyan-500/10 rounded">AWS</span>
                <span className="px-2 py-1 bg-cyan-500/10 rounded">Power BI</span>
              </div>
            </div>

            {/* Vai na Web Card */}
            <div className="glass-card p-8 border-orange-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-500/20 px-4 py-1 rounded-bl-lg text-sm font-semibold text-orange-300">
                Conclusão: Jun/2026
              </div>
              <div className="mb-4 p-3 bg-gradient-to-br from-cyan-400/20 to-orange-500/20 rounded-lg w-fit">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Vai na Web</h3>
              <p className="text-[#94A3B8] text-sm mb-4">
                Fullstack Empower 5.0 • 6 meses intensivos
              </p>
              <p className="text-[#94A3B8] mb-6">
                Programa de alta performance focado em React, Node.js,
                TypeScript e boas práticas de mercado. Metodologia prática que
                prepara para desafios reais da indústria.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-orange-400">
                <span className="px-2 py-1 bg-orange-500/10 rounded">
                  React 19
                </span>
                <span className="px-2 py-1 bg-orange-500/10 rounded">
                  Node.js
                </span>
                <span className="px-2 py-1 bg-orange-500/10 rounded">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formações Integradas */}
      <section className="section-standard bg-gradient-to-b from-transparent to-[#0F172A]">
        <div className="max-w-6xl mx-auto">
          <h2 className="title-standard text-center text-4xl font-bold">
            O Melhor dos Dois Mundos
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                Estrutura Acadêmica FAT
              </h3>
              <ul className="space-y-2 text-[#94A3B8]">
                <li>✓ 1.200 horas de formação técnica completa</li>
                <li>✓ Projetos integradores com metodologias ágeis</li>
                <li>✓ Fundamentos de redes, sistemas operacionais e segurança</li>
                <li>✓ Análise de dados e business intelligence</li>
                <li>✓ Empreendedorismo e inovação</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">
                Prática Fullstack Vai na Web
              </h3>
              <ul className="space-y-2 text-[#94A3B8]">
                <li>✓ React 19, TypeScript e Tailwind CSS avançado</li>
                <li>✓ APIs REST e GraphQL com Node.js</li>
                <li>✓ Docker, CI/CD e deploy automatizado</li>
                <li>✓ Otimização de performance (Core Web Vitals)</li>
                <li>✓ Desenvolvimento orientado a resultados de negócio</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Técnicos */}
      <section className="section-standard relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/services-grid-bg-37RfWbP5XKmep3Fcdnw4qM.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="title-standard text-center text-4xl font-bold">
            Soluções Técnicas de Alta Performance
          </h2>
          <p className="text-center text-[#94A3B8] mb-16 text-lg">
            Combine a profundidade acadêmica com a agilidade do mercado para
            resultados extraordinários.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Serviço 1 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 rounded-lg w-fit">
                <Shield className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Auditoria e Blindagem de Dados
              </h3>
              <p className="text-[#94A3B8] mb-6">
                Análise profunda de 360º em infraestrutura digital com
                conformidade LGPD.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8] mb-6">
                <li>✓ Mapeamento de brechas em bancos de dados</li>
                <li>✓ Implementação de protocolos de segurança</li>
                <li>✓ Proteção contra ransomware</li>
                <li>✓ Relatório de conformidade técnica</li>
              </ul>
              <Button className="btn-gradient w-full" onClick={() => window.open('https://wa.me/5511978768690', '_blank')}>
                Solicitar Auditoria
              </Button>
            </div>

            {/* Serviço 2 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-cyan-400/20 to-orange-500/20 rounded-lg w-fit">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Ecossistema de Vendas Full-Stack
              </h3>
              <p className="text-[#94A3B8] mb-6">
                Máquina de vendas integrada com front-end rápido e back-end
                robusto.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8] mb-6">
                <li>✓ Site ultraveloz (LCP &lt; 2s)</li>
                <li>✓ SEO técnico enraizado</li>
                <li>✓ Integração com Google Ads</li>
                <li>✓ Banco de dados escalável</li>
              </ul>
              <Button className="btn-gradient w-full" onClick={() => window.open('https://wa.me/5511978768690', '_blank')}>
                Conhecer Solução
              </Button>
            </div>

            {/* Serviço 3 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-orange-500/20 to-indigo-500/20 rounded-lg w-fit">
                <Database className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Inteligência de Dados e Automação
              </h3>
              <p className="text-[#94A3B8] mb-6">
                Organização de dados caóticos em dashboards inteligentes.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8] mb-6">
                <li>✓ Estruturação de bancos de dados</li>
                <li>✓ Automações que eliminam trabalho manual</li>
                <li>✓ Dashboards Power BI</li>
                <li>✓ Redução de custos operacionais</li>
              </ul>
              <Button className="btn-gradient w-full" onClick={() => window.open('https://wa.me/5511978768690', '_blank')}>
                Transformar Dados
              </Button>
            </div>

            {/* Serviço 4 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 rounded-lg w-fit">
                <Cloud className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Consultoria Técnica & Mentoria
              </h3>
              <p className="text-[#94A3B8] mb-6">
                Orientação especializada em arquitetura de sistemas e
                transformação digital.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8] mb-6">
                <li>✓ Análise de tecnologia atual</li>
                <li>✓ Roadmap de transformação</li>
                <li>✓ Mentoria técnica contínua</li>
                <li>✓ Implementação de metodologias ágeis</li>
              </ul>
              <Button className="btn-gradient w-full" onClick={() => window.open('https://wa.me/5511978768690', '_blank')}>
                Agendar Consulta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Consolidado */}
      <section className="section-standard">
        <div className="max-w-6xl mx-auto">
          <h2 className="title-standard text-center text-4xl font-bold">
            Stack Tecnológico Unificado
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">
                Front-End
              </h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• React 19 / Next.js</li>
                <li>• Astro</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Performance (Core Web Vitals)</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-indigo-400">
                Back-End
              </h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• Node.js / Express / NestJS</li>
                <li>• PHP / Laravel</li>
                <li>• APIs REST / GraphQL</li>
                <li>• Autenticação JWT</li>
                <li>• Testes automatizados</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-orange-400">
                Banco de Dados
              </h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• PostgreSQL / MySQL</li>
                <li>• MongoDB / Redis</li>
                <li>• Prisma ORM / SQL</li>
                <li>• Modelagem e otimização</li>
                <li>• Backup e segurança</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">
                DevOps & Cloud
              </h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• Docker / CI/CD</li>
                <li>• AWS / Vercel</li>
                <li>• Linux (Debian/Ubuntu)</li>
                <li>• Monitoramento</li>
                <li>• Git / GitHub Actions</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-indigo-400">
                Segurança
              </h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• LGPD Compliance</li>
                <li>• Criptografia</li>
                <li>• Análise de vulnerabilidades</li>
                <li>• Proteção de dados</li>
                <li>• Boas práticas OWASP</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-orange-400">
                Metodologias
              </h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• Scrum / Kanban</li>
                <li>• Desenvolvimento Ágil</li>
                <li>• User Stories</li>
                <li>• Integração contínua</li>
                <li>• Design thinking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-standard relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/cta-gradient-neon-YtJRpgzzvfKyE97pDtJczf.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#0F172A] via-transparent to-[#0F172A]" />

        <div className="max-w-4xl mx-auto text-center relative z-10 glass-card p-12 md:p-20 border border-cyan-500/20">
          <h2 className="title-standard text-center text-4xl font-bold">
            Pronto para Elevar Sua Tecnologia?
          </h2>
          <p className="mb-12 max-w-2xl mx-auto text-lg font-medium text-[#E2E8F0]">
            Com duas formações de ponta e uma abordagem que une teoria e
            prática, entrego soluções que transformam negócios e geram
            resultados reais.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open('https://wa.me/5511978768690', '_blank')}
            >
              Solicitar Consultoria <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}