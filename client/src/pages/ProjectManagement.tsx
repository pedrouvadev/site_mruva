import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Layers, TrendingUp, Shield, Rocket, MessageCircle } from "lucide-react";

export default function ProjectManagement() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const whatsappLink = "https://wa.me/5511978768690?text=Olá%20Pedro!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20e%20a%20Garantia%20de%20Fluxo.";

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/hero-3d-neon-ETM4gefM3NZLJ3bB38yXCc.webp')" }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/90 to-[#0F172A]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <div className="mb-6 flex justify-center inline-block max-w-full">
            <div className="glass-card px-4 py-2 text-sm font-semibold text-orange-400 inline-flex items-center gap-2 border border-orange-500/30">
              <Shield className="w-4 h-4" /> A Garantia de Fluxo (Workflow Guarantee)
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Projetos à <span className="bg-gradient-to-r from-orange-400 to-indigo-500 bg-clip-text text-transparent">Prova de Caos.</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#94A3B8] mb-8 max-w-3xl mx-auto leading-relaxed">
            Desenvolvimento e Marketing não podem ser caixas pretas. Minha gestão Scrum certificada é a <strong className="text-white">garantia incontestável</strong> de que seu investimento será entregue no prazo e com qualidade técnica militar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in animation-delay-200">
            <Button 
              className="btn-gradient text-lg py-7 px-10 shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] transition-all duration-300"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Iniciar Seu Projeto (Sem Caos) <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Como Garanto o Retorno Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0B1120]">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Como a Gestão Protege o <span className="text-orange-400">Seu Capital</span></h2>
            <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
              Sistemas e Campanhas de alta performance exigem um processo técnico maduro. 
              É assim que garanto o máximo ROI para cada hora trabalhada:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 border-l-4 border-l-orange-500 hover:scale-[1.02] transition-transform">
              <div className="mb-4 bg-gradient-to-br from-indigo-500/20 to-orange-400/20 p-3 rounded-lg w-fit">
                <TrendingUp className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Previsibilidade de Entrega</h3>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                Cada Sprint é rigorosamente planejado (Planning) e medido (Burndown). Quando combinamos IA, Código e Marketing, o escopo não se perde no meio do caminho. Você sabe exatamente o que receberá a cada sexta-feira.
              </p>
            </div>

            <div className="glass-card p-8 border-l-4 border-l-cyan-500 hover:scale-[1.02] transition-transform">
              <div className="mb-4 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 p-3 rounded-lg w-fit">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Transparência Radical (Dailies & Reviews)</h3>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                Diga adeus à ansiedade de não saber em que pé está o projeto. Relatórios constantes, comunicação cristalina em português ou inglês, e alinhamento de expectativas através de ferramentas de classe mundial.
              </p>
            </div>

            <div className="glass-card p-8 border-l-4 border-l-indigo-500 hover:scale-[1.02] transition-transform">
              <div className="mb-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-3 rounded-lg w-fit">
                <Layers className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">A Ponte entre Negócio e Código</h3>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                Muitos desenvolvedores são ótimos tecnicamente, mas falham em entender o modelo de negócio (Product Owner). Eu garanto que cada linha de código ou campanha de marketing gere impacto real nas suas métricas.
              </p>
            </div>
            
            <div className="glass-card p-8 border-l-4 border-l-blue-400 hover:scale-[1.02] transition-transform">
              <div className="mb-4 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 p-3 rounded-lg w-fit">
                <Rocket className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Domínio Profissional do Stack Ágil</h3>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                Jira, Trello, Asana, Notion ou Github Projects. Seja qual for o ecossistema da sua empresa, estou pronto para gerenciar o fluxo técnico no mais alto padrão da indústria global de software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificação como Validação de Base */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-indigo-900/10 via-[#0F172A] to-orange-900/10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 glass-card p-4 hover:scale-105 transition-transform duration-500 bg-white/5 border border-orange-500/20">
              <div className="relative overflow-hidden rounded-xl bg-[#0F172A]">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/certificado-gestao_edd771b2.png" 
                  alt="Certificado Gestão de Projetos - Qualifica SP & Fundação FAT" 
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold mb-6">
                <CheckCircle2 className="w-4 h-4" /> Qualificação Oficial Comprovada
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                A Teoria Oficial.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-indigo-400 tracking-tight">
                  A Prática Agressiva.
                </span>
              </h2>
              <p className="text-[#94A3B8] text-xl leading-relaxed mb-6 font-medium">
                A teoria é sólida (120 horas oficiais em Gestão de Projetos de TI pela Qualifica SP / Fundação FAT), mas é o sangue frio na execução que separa as grandes entregas dos projetos abandonados.
              </p>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                A certificação formal atesta minha fundação nos ritos Scrum, Kanban e metodologias Lean. Na prática, utilizo esse arsenal para blindar o escopo e garantir o fluxo técnico para que os devs e a equipe de marketing foquem apenas em resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Papéis Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1120]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Atuação <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Dual-Threat</span></h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-10 border border-white/5 relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Layers className="w-48 h-48" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-indigo-400 flex items-center gap-3">
                <Layers className="w-8 h-8" /> Product Owner
              </h3>
              <p className="text-[#94A3B8] text-lg mb-8 leading-relaxed">
                Seu negócio precisa resolver uma dor no mercado, não apenas comprar tecnologia aleatória. Como PO, eu traduzo a sua visão estratégica em requisitos técnicos cristalinos.
              </p>
              <ul className="space-y-4 text-lg text-[#CBD5E1]">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0" /> Visão estratégica e mapeamento agressivo de MVP</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0" /> Priorização de Backlog orientada puramente a Retorno Financeiro (ROI)</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0" /> Negociação pragmática com stakeholders em ambientes complexos</li>
              </ul>
            </div>

            <div className="glass-card p-10 border border-white/5 relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Shield className="w-48 h-48" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-cyan-400 flex items-center gap-3">
                <Shield className="w-8 h-8" /> Scrum Master
              </h3>
              <p className="text-[#94A3B8] text-lg mb-8 leading-relaxed">
                Garantindo a velocidade e fluidez. Eu implemento, facilito e defendo o processo para manter o foco total do time na entrega de cada Sprint.
              </p>
              <ul className="space-y-4 text-lg text-[#CBD5E1]">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" /> Facilitação de cerimônias ágeis altamente estruturadas</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" /> Blindagem brutal contra "scope creep" (aumento infinito de escopo)</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" /> Remoção instantânea de bloqueadores técnicos e processos operacionais</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Aggressive CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0F172A] via-orange-900/10 to-[#0F172A]" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center glass-card p-12 md:p-16 border border-orange-500/20 shadow-[0_0_100px_rgba(249,115,22,0.1)]">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            Software e Marketing <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-indigo-500">Com Garantia de Execução.</span>
          </h2>
          <p className="text-xl text-[#94A3B8] mb-12 leading-relaxed">
            Profissionais amadores deixam o projeto fugir do controle. Aqui, a execução técnica é unida à governança ágil mais resistente do mercado. Controle total, entregas diárias.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => window.open(whatsappLink, '_blank')}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-orange-500 to-indigo-600 rounded-full hover:scale-105 shadow-[0_0_40px_rgba(249,115,22,0.4)]"
            >
              <MessageCircle className="w-6 h-6" />
              Contratar a Execução Blindada
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
