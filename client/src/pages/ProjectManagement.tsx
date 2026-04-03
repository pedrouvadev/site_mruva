import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Layers, TrendingUp, Shield, Rocket, MessageCircle } from "lucide-react";

export default function ProjectManagement() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Gestão de Projetos Ágeis e Scrum em São Paulo | Pedro Uva";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Garanta o fluxo e a entrega do seu projeto com metodologia Scrum. Gestão de projetos técnicos com foco em transparência e resultados.");
    }
  }, []);
  
  const whatsappLink = "https://wa.me/5511978768690?text=Olá%20Pedro!%20Quero%20meu%20projeto%20com%20essa%20gestão.";

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] overflow-hidden relative font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <Header showStatus={true} />

      <div className="relative z-10">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663505203277/LnGGjmblNnmwbkoY.webp')" }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex justify-center animate-fade-in">
            <div className="glass-card px-4 py-2 text-sm md:text-base font-semibold text-orange-400 inline-flex items-center gap-2 border border-orange-500/30 uppercase tracking-widest">
              <Shield className="w-4 h-4" /> Garantia de Fluxo & Entrega Blindada
            </div>
          </div>

          <h1 className="title-standard animate-fade-in animation-delay-100 tracking-tighter">
            Seu Projeto com <span className="bg-gradient-to-r from-orange-400 to-indigo-500 bg-clip-text text-transparent">Entrega Blindada</span>
          </h1>

          <p className="mb-12 max-w-4xl mx-auto animate-fade-in animation-delay-200 font-medium">
            Eu não apenas desenvolvo; eu gerencio a complexidade. Minha gestão usa metodologias ágeis para garantir o sucesso dos projetos de <strong className="text-white">Desenvolvimento e Marketing Digital</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in animation-delay-300">
            <Button 
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Garantir Sucesso do Meu Projeto <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Narrativa de Valor Section */}
      <section className="section-standard bg-[#0B1120]">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="title-standard text-center text-4xl md:text-5xl font-bold">Gestão Ágil como <span className="text-orange-400">Pilar de Sucesso</span></h2>
            <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto font-medium">
              Quando você me contrata para Full-Stack, Marketing Digital ou IA, você leva um Certified Scrum Professional para configurar seu projeto, garantindo transparência e entregas no prazo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 border-l-4 border-l-orange-500 hover:scale-[1.02] transition-transform">
              <div className="mb-4 bg-gradient-to-br from-indigo-500/20 to-orange-400/20 p-3 rounded-lg w-fit">
                <TrendingUp className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Entrega Previsível</h3>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                Sprints organizadas com marcos claros e atualizações frequentes. Utilizo o framework Scrum para garantir que o desenvolvimento avance em ciclos claros. Sem surpresas, sem atrasos.
              </p>
            </div>

            <div className="glass-card p-8 border-l-4 border-l-cyan-500 hover:scale-[1.02] transition-transform">
              <div className="mb-4 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 p-3 rounded-lg w-fit">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Transparência Total</h3>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                Acompanhamento rigoroso de cronograma e alinhamento constante com os stakeholders. Minha metodologia foca em eliminar bugs antes que eles cheguem à produção.
              </p>
            </div>

            <div className="glass-card p-8 border-l-4 border-l-indigo-500 hover:scale-[1.02] transition-transform">
              <div className="mb-4 bg-gradient-to-br from-indigo-500/20 to-purple-400/20 p-3 rounded-lg w-fit">
                <Rocket className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Zero Caos</h3>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                Metodologia certificada Scrum para eliminar o aumento descontrolado de escopo e atrasos. Comunicação cristalina e alinhamento constante garantem o sucesso do projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificação Section */}
      <section className="section-standard relative">
        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-indigo-900/10 via-[#0F172A] to-orange-900/10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 glass-card p-4 hover:scale-105 transition-transform duration-500 bg-white/5 border border-orange-500/20">
              <div className="relative overflow-hidden rounded-xl bg-[#0F172A]">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/certificado-gestao_edd771b2.png" 
                  alt="Certificado Gestão de Projetos - Qualifica SP & Fundação FAT" 
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                  width="1080"
                  height="764"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold mb-6">
                <CheckCircle2 className="w-4 h-4" /> Qualificação Oficial Comprovada
              </div>
              <h2 className="title-standard text-4xl md:text-5xl font-bold leading-tight">
                A Base Técnica da<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-indigo-400 tracking-tight">
                  Sua Tranquilidade
                </span>
              </h2>
              <p className="text-[#94A3B8] text-xl leading-relaxed mb-6 font-medium">
                Com 120 horas oficiais em Gestão de Projetos de TI pela Qualifica SP / Fundação FAT, aplico ritos de Scrum e Kanban para blindar seu investimento.
              </p>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                Essa base teórica me permite gerenciar fluxos complexos, removendo bloqueadores e garantindo que a equipe técnica (ou eu mesmo no desenvolvimento) foque 100% em gerar valor para o seu negócio.
              </p>
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
          <h2 className="title-standard text-center text-4xl font-bold">Vamos desenvolver o seu projeto sem caos e com resultados?</h2>
          <p className="mb-12 max-w-2xl mx-auto text-lg font-medium text-[#E2E8F0]">
            Pare de sofrer com atrasos e falta de transparência. Vamos juntos unir tecnologia de ponta com uma gestão profissional focada na sua entrega com Framework Scrum.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Quero essa gestão <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
