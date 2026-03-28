import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Layers, TrendingUp, Shield, Rocket, MessageCircle } from "lucide-react";

export default function ProjectManagement() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const whatsappLink = "https://wa.me/5511978768690?text=Olá%20Pedro!%20Quero%20meu%20projeto%20com%20essa%20gestão.";

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
          <div className="mb-6 flex justify-center">
            <div className="glass-card px-4 py-2 text-sm font-semibold text-orange-400 inline-flex items-center gap-2 border border-orange-500/30">
              <Shield className="w-4 h-4" /> Diferencial Competitivo e Garantia de Fluxo
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Seu Projeto com <span className="bg-gradient-to-r from-orange-400 to-indigo-500 bg-clip-text text-transparent">Entrega Blindada.</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#94A3B8] mb-8 max-w-3xl mx-auto leading-relaxed">
            Eu não apenas desenvolvo; eu gerencio a complexidade para que você não precise. Minha gestão Scrum é a ferramenta que utilizo para garantir o sucesso dos projetos de <strong className="text-white">Desenvolvimento e Marketing</strong> que você contrata.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in animation-delay-200">
            <Button 
              className="btn-gradient text-lg py-7 px-10 shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] transition-all duration-300"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Quero meu projeto com essa gestão <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Narrativa de Valor Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0B1120]">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Gestão Ágil como <span className="text-orange-400">Pilar de Sucesso</span></h2>
            <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
              Quando você me contrata para Full-Stack ou IA, você leva um Certified Scrum Professional para configurar seu projeto, garantindo transparência e entregas no prazo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 border-l-4 border-l-orange-500 hover:scale-[1.02] transition-transform">
              <div className="mb-4 bg-gradient-to-br from-indigo-500/20 to-orange-400/20 p-3 rounded-lg w-fit">
                <TrendingUp className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Previsibilidade e Sprints</h3>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                Utilizo o framework Scrum para garantir que o desenvolvimento avance em ciclos claros. Sem surpresas, sem atrasos. Você acompanha a evolução real do seu produto a cada entrega.
              </p>
            </div>

            <div className="glass-card p-8 border-l-4 border-l-cyan-500 hover:scale-[1.02] transition-transform">
              <div className="mb-4 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 p-3 rounded-lg w-fit">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Transparência e On-time Delivery</h3>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                Minha metodologia foca em eliminar bugs antes que eles cheguem à produção. Comunicação cristalina e alinhamento constante garantem que o projeto final seja exatamente o que seu negócio precisa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificação Section */}
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
                A Base Técnica da<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-indigo-400 tracking-tight">
                  Sua Tranquilidade.
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
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0F172A] via-orange-900/10 to-[#0F172A]" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center glass-card p-12 md:p-16 border border-orange-500/20 shadow-[0_0_100px_rgba(249,115,22,0.1)]">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            Pronto para um projeto <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-indigo-500">Sem Caos e Com Resultados?</span>
          </h2>
          <p className="text-xl text-[#94A3B8] mb-12 leading-relaxed">
            Pare de sofrer com atrasos e falta de transparência. Vamos unir tecnologia de ponta com uma gestão profissional focada na sua entrega.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => window.open(whatsappLink, '_blank')}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-orange-500 to-indigo-600 rounded-full hover:scale-105 shadow-[0_0_40px_rgba(249,115,22,0.4)]"
            >
              <MessageCircle className="w-6 h-6" />
              Quero meu projeto com essa gestão
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
