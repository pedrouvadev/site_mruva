import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Database, Shield, Cloud, Zap } from "lucide-react";

export default function Development() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-white/5 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Mr. Uva
          </a>
          <a href="/" className="hover:text-cyan-400 transition-colors">
            ← Voltar
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/hero-3d-neon-ETM4gefM3NZLJ3bB38yXCc.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/50 to-[#0F172A]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 inline-block">
            <span className="glass-card px-4 py-2 text-sm font-semibold text-cyan-400">
              ⚡ Desenvolvimento de Sistemas • FAT (1.200 horas)
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Engenharia de <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Software</span> de Alta Performance
          </h1>

          <p className="text-lg md:text-xl text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            Formado pela Fundação FAT (criada por professores da Fatec-SP). 1.200 horas de formação intensiva em desenvolvimento full-stack, segurança, cloud e metodologias ágeis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="btn-gradient text-lg py-6">
              Solicitar Consultoria Técnica <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Formação Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Minha Formação: 1.200 Horas de Excelência</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Eixo Profissionalizante */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 rounded-lg w-fit">
                <Code2 className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Eixo Profissionalizante</h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>✓ Programação Web (HTML, CSS, JS)</li>
                <li>✓ Banco de Dados (SQL, MySQL)</li>
                <li>✓ Programação Avançada</li>
                <li>✓ Projetos Integradores</li>
              </ul>
            </div>

            {/* Eixo Técnico */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-cyan-400/20 to-orange-500/20 rounded-lg w-fit">
                <Cloud className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Eixo Técnico</h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>✓ Análise de Requisitos</li>
                <li>✓ Computação em Nuvem (AWS)</li>
                <li>✓ Segurança da Informação</li>
                <li>✓ Análise de Dados (Power BI)</li>
              </ul>
            </div>

            {/* Eixo Básico */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-orange-500/20 to-indigo-500/20 rounded-lg w-fit">
                <Database className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Eixo Básico</h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>✓ Produção de Textos Técnicos</li>
                <li>✓ Sistemas Operacionais</li>
                <li>✓ Redes e Administração</li>
                <li>✓ Empreendedorismo e Inovação</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certificado Section - Placeholder para PNG */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Certificação Oficial</h2>
          <p className="text-center text-[#94A3B8] mb-12 max-w-2xl mx-auto">
            Formação Tecnóloga em Desenvolvimento de Sistemas pela Fundação FAT (Fatec-SP)
          </p>
          
          <div className="glass-card p-8 border-cyan-500/30 text-center">
            <p className="text-[#94A3B8] text-sm italic">Certificado será adicionado em breve</p>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
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
          <h2 className="text-4xl font-bold mb-4 text-center">Serviços Técnicos</h2>
          <p className="text-center text-[#94A3B8] mb-16">Soluções de alta performance baseadas em 1.200 horas de formação</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Serviço 1 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 rounded-lg w-fit">
                <Shield className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Auditoria e Blindagem de Dados</h3>
              <p className="text-[#94A3B8] mb-6">
                Análise profunda de 360º em infraestrutura digital com conformidade LGPD.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8] mb-6">
                <li>✓ Mapeamento de brechas em bancos de dados</li>
                <li>✓ Implementação de protocolos de segurança</li>
                <li>✓ Proteção contra ransomware</li>
                <li>✓ Relatório de conformidade técnica</li>
              </ul>
              <Button className="btn-gradient w-full">Solicitar Auditoria</Button>
            </div>

            {/* Serviço 2 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-cyan-400/20 to-orange-500/20 rounded-lg w-fit">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ecossistema de Vendas Full-Stack</h3>
              <p className="text-[#94A3B8] mb-6">
                Máquina de vendas integrada com front-end rápido e back-end robusto.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8] mb-6">
                <li>✓ Site ultraveloz (LCP &lt; 2s)</li>
                <li>✓ SEO técnico enraizado</li>
                <li>✓ Integração com Google Ads</li>
                <li>✓ Banco de dados escalável</li>
              </ul>
              <Button className="btn-gradient w-full">Conhecer Solução</Button>
            </div>

            {/* Serviço 3 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-orange-500/20 to-indigo-500/20 rounded-lg w-fit">
                <Database className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Inteligência de Dados e Automação</h3>
              <p className="text-[#94A3B8] mb-6">
                Organização de dados caóticos em dashboards inteligentes.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8] mb-6">
                <li>✓ Estruturação de bancos de dados</li>
                <li>✓ Automações que eliminam trabalho manual</li>
                <li>✓ Dashboards Power BI</li>
                <li>✓ Redução de custos operacionais</li>
              </ul>
              <Button className="btn-gradient w-full">Transformar Dados</Button>
            </div>

            {/* Serviço 4 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 rounded-lg w-fit">
                <Cloud className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Consultoria Técnica & Mentoria</h3>
              <p className="text-[#94A3B8] mb-6">
                Orientação especializada em arquitetura de sistemas e transformação digital.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8] mb-6">
                <li>✓ Análise de tecnologia atual</li>
                <li>✓ Roadmap de transformação</li>
                <li>✓ Mentoria técnica contínua</li>
                <li>✓ Implementação de metodologias ágeis</li>
              </ul>
              <Button className="btn-gradient w-full">Agendar Consulta</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Stack Tecnológico Dominado</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-indigo-400">Front-End</h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• HTML5 & CSS3</li>
                <li>• JavaScript/TypeScript</li>
                <li>• React & Astro</li>
                <li>• Tailwind CSS</li>
                <li>• Responsive Design</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Back-End</h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• Node.js & Express</li>
                <li>• PHP & Laravel</li>
                <li>• APIs REST</li>
                <li>• Autenticação JWT</li>
                <li>• Testes Automatizados</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-orange-400">DevOps & Cloud</h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• Linux (Debian/Ubuntu)</li>
                <li>• Git & GitHub</li>
                <li>• Docker Básico</li>
                <li>• AWS & Cloud Computing</li>
                <li>• Vercel & Deployment</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-indigo-400">Banco de Dados</h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• MySQL & SQL Server</li>
                <li>• PostgreSQL</li>
                <li>• Modelagem de Dados</li>
                <li>• Otimização de Queries</li>
                <li>• Backup & Segurança</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Segurança</h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• Criptografia</li>
                <li>• LGPD Compliance</li>
                <li>• Proteção de Dados</li>
                <li>• Análise de Vulnerabilidades</li>
                <li>• Boas Práticas de Segurança</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-orange-400">Metodologias</h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• Scrum & Kanban</li>
                <li>• Agile Development</li>
                <li>• User Stories</li>
                <li>• Sprint Planning</li>
                <li>• Continuous Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
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

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Pronto para Elevar Sua Tecnologia?</h2>
          <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como engenharia de software de alta performance pode transformar seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gradient text-lg py-6 px-8">
              Solicitar Consultoria Técnica
            </Button>
            <a href="https://wa.me/5511978768690" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-lg py-6 px-8 border-cyan-500/50 hover:bg-cyan-500/10 w-full">
                WhatsApp: +55 11 97876-8690
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto text-center text-sm text-[#94A3B8]">
          <p>© 2026 Pedro Luiz Uva Junior. Especialista em Desenvolvimento de Sistemas.</p>
        </div>
      </footer>
    </div>
  );
}
