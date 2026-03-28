import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Layers, TrendingUp, Shield } from "lucide-react";

export default function ProjectManagement() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/5511978768690';
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-cyan-500/5" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />

      {/* Navigation */}
      <Header />

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
          <div className="mb-8 inline-block mt-8">
            <span className="glass-card px-4 py-2 text-sm font-semibold text-orange-400 whitespace-nowrap">
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
            <Button className="btn-gradient text-lg py-6" onClick={handleWhatsApp}>
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

          <div className="flex justify-center">
            <Button className="btn-gradient text-lg py-6 px-12" onClick={handleWhatsApp}>
              Solicitar Orçamento de Gestão <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
