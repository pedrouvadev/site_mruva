import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Layers, TrendingUp, Shield } from "lucide-react";

export default function ProjectManagement() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-white/5 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Mr. Uva
          </a>
          <a href="/" className="hover:text-cyan-400 transition-colors">
            Voltar
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
            <span className="glass-card px-4 py-2 text-sm font-semibold text-orange-400">
              📊 Gestão de Projetos • Qualifica SP & FAT (120 horas)
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Projetos à <span className="bg-gradient-to-r from-orange-500 to-indigo-500 bg-clip-text text-transparent">Prova de Caos</span>
          </h1>

          <p className="text-lg md:text-xl text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            Metodologia Scrum que garante entrega previsível, transparência radical e ciclos de feedback contínuos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="btn-gradient text-lg py-6">
              Conhecer Metodologia <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Formação Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Formação: 120 Horas em Gestão Ágil</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-orange-400">Módulos de Formação</h3>
              <ul className="space-y-3 text-[#94A3B8]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <span>Fundamentos Ágeis e Manifesto</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <span>Scrum: Papéis, Eventos e Artefatos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <span>Kanban e Lean</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <span>User Stories e Estimativas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <span>Métricas Ágeis e Burndown</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Ferramentas Dominadas</h3>
              <ul className="space-y-3 text-[#94A3B8]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>Jira - Planejamento de Sprints</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>Trello - Kanban Visual</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>Asana - Projetos Complexos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>Miro - Workshops Colaborativos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>Confluence - Documentação</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certificado Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Certificação Oficial</h2>
          <p className="text-center text-[#94A3B8] mb-12 max-w-2xl mx-auto">
            Formação em Gestão de Projetos de TI pela Qualifica SP e Fundação FAT
          </p>
          
          <div className="glass-card p-8 hover:scale-105 transition-transform cursor-pointer">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/certificado-gestao_edd771b2.png" alt="Certificado Gestão de Projetos" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </section>

      {/* Metodologia Section */}
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
          <h2 className="text-4xl font-bold mb-4 text-center">Minha Ferramenta: Scrum</h2>
          <p className="text-center text-[#94A3B8] mb-16">Como garanto entrega previsível</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 rounded-lg w-fit">
                <TrendingUp className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Entrega por Valor</h3>
              <p className="text-[#94A3B8]">
                Cada sprint entrega funcionalidades que geram valor imediato em ciclos curtos e previsíveis.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-cyan-400/20 to-orange-500/20 rounded-lg w-fit">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Transparência Radical</h3>
              <p className="text-[#94A3B8]">
                Relatórios diários, dailies abertas e retrospectivas honestas. Sem surpresas desagradáveis.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-orange-500/20 to-indigo-500/20 rounded-lg w-fit">
                <Layers className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ciclos de Feedback</h3>
              <p className="text-[#94A3B8]">
                Retrospectivas semanais para melhorar continuamente o processo e adaptar estratégias.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 rounded-lg w-fit">
                <CheckCircle2 className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ponte de Valor</h3>
              <p className="text-[#94A3B8]">
                Sou tradutor entre negócio e tecnologia. Garanto que o desenvolvido resolve problemas reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Papéis Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Papéis que Posso Exercer</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">Product Owner</h3>
              <p className="text-[#94A3B8] mb-6">
                Defino visão do produto, priorizo backlog e garanto que cada feature gera valor real.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>✓ Visão estratégica</li>
                <li>✓ Priorização baseada em ROI</li>
                <li>✓ Comunicação com stakeholders</li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Scrum Master</h3>
              <p className="text-[#94A3B8] mb-6">
                Removo impedimentos, facilito cerimônias e garanto que o time segue princípios ágeis.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>✓ Facilitação de sprints</li>
                <li>✓ Remoção de bloqueadores</li>
                <li>✓ Coaching do time</li>
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
          <h2 className="text-4xl font-bold mb-6">Cansado de Projetos que Atrasam?</h2>
          <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            Minha metodologia Scrum garante previsibilidade, qualidade e entrega de valor contínuo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gradient text-lg py-6 px-8">
              Agendar Consultoria
            </Button>
            <a href="https://wa.me/5511978768690" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-lg py-6 px-8 border-cyan-500/50 hover:bg-cyan-500/10 w-full">
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto text-center text-sm text-[#94A3B8]">
          <p>© 2026 Pedro Luiz Uva Junior. Especialista em Gestão de Projetos de TI.</p>
        </div>
      </footer>
    </div>
  );
}
