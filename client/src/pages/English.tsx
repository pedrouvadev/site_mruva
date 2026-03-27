import { ArrowRight, Globe, Users, Zap, Award } from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function English() {
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
      
      <div className="relative z-10">
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
            <div className="mb-6 inline-block animate-fade-in">
              <span className="glass-card px-4 py-2 text-sm font-semibold text-cyan-400">
                🌍 Inglês Avançado • 2 Anos de Estudo
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in animation-delay-100">
              Inglês Avançado com <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Falantes Nativos</span>
            </h1>

            <p className="text-lg md:text-xl text-[#94A3B8] mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
              Mais de 2 anos estudando conversação em inglês com tutores nativos na plataforma Cambly. 69 horas de prática conversacional para desenvolver fluência e confiança.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in animation-delay-300">
              <Button className="btn-gradient text-lg py-6" onClick={handleWhatsApp}>
                Agendar Call <ArrowRight className="ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-16 animate-fade-in animation-delay-400">
              <div className="glass-card p-4 hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-cyan-400">69+</div>
                <div className="text-sm text-[#94A3B8]">Horas de Prática</div>
              </div>
              <div className="glass-card p-4 hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-blue-400">2+</div>
                <div className="text-sm text-[#94A3B8]">Anos de Estudo</div>
              </div>
              <div className="glass-card p-4 hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-indigo-400">100%</div>
                <div className="text-sm text-[#94A3B8]">Nativos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Cambly */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-center animate-fade-in">Por que Cambly?</h2>
            <p className="text-center text-[#94A3B8] mb-16 max-w-2xl mx-auto animate-fade-in animation-delay-100">
              Plataforma de aprendizado de inglês com tutores nativos de todo o mundo
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-8 hover:scale-105 transition-all duration-300 animate-fade-in">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-4 rounded-lg w-fit mb-6">
                  <Globe className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Plataforma Global</h3>
                <p className="text-[#94A3B8] mb-4">
                  Cambly conecta alunos de mais de 130 países com tutores nativos de inglês. Fundada em San Francisco, California, oferece aulas ao vivo por vídeo com flexibilidade total de horários.
                </p>
                <ul className="space-y-2 text-[#CBD5E1]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    Tutores 100% nativos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    Disponível 24/7
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    Sem necessidade de agendamento prévio
                  </li>
                </ul>
              </div>

              <div className="glass-card p-8 hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-100">
                <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-4 rounded-lg w-fit mb-6">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Conversação em Tempo Real</h3>
                <p className="text-[#94A3B8] mb-4">
                  Diferente de cursos tradicionais, Cambly foca em conversação prática com tutores nativos. Perfeito para desenvolver fluência, pronúncia e confiança ao falar.
                </p>
                <ul className="space-y-2 text-[#CBD5E1]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    Aulas personalizadas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    Feedback em tempo real
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    Certificados de conclusão
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Minha Experiência */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-cyan-500/10" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-center animate-fade-in">Minha Jornada no Cambly</h2>
            <p className="text-center text-[#94A3B8] mb-16 max-w-2xl mx-auto animate-fade-in animation-delay-100">
              2 anos de dedicação ao aprendizado contínuo de inglês conversacional
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-8 hover:scale-105 transition-all duration-300 animate-fade-in">
                <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 p-4 rounded-lg w-fit mb-6">
                  <Zap className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Consistência</h3>
                <p className="text-[#94A3B8]">
                  Mais de 2 anos de estudo contínuo com tutores nativos, acumulando 69 horas de prática conversacional intensiva.
                </p>
              </div>

              <div className="glass-card p-8 hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-100">
                <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 p-4 rounded-lg w-fit mb-6">
                  <Globe className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fluência</h3>
                <p className="text-[#94A3B8]">
                  Desenvolvimento de fluência conversacional, pronúncia autêntica e compreensão de diferentes sotaques e contextos culturais.
                </p>
              </div>

              <div className="glass-card p-8 hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-200">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-4 rounded-lg w-fit mb-6">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Certificação</h3>
                <p className="text-[#94A3B8]">
                  Certificado oficial de conclusão de 69 horas de prática conversacional com tutores nativos certificados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certificado */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-center animate-fade-in">Certificado Oficial</h2>
            <p className="text-center text-[#94A3B8] mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-100">
              Certificado de conclusão de 69 horas de conversação em inglês com tutores nativos
            </p>

            <div className="glass-card p-8 hover:scale-105 transition-transform duration-300 animate-fade-in animation-delay-200">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Pedro-Uva-Cambly-Certificate_6135a3a1.png" 
                alt="Certificado Cambly" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>

            <div className="mt-8 glass-card p-8 border-cyan-500/50">
              <p className="text-[#94A3B8] mb-4">
                <strong className="text-cyan-400">Verificação:</strong> Você pode verificar este certificado em{" "}
                <a 
                  href="https://cambly.com/en/certificate/verify/0e67533e" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  cambly.com/en/certificate/verify/0e67533e
                </a>
              </p>
              <p className="text-[#94A3B8]">
                Cambly é uma plataforma confiável e reconhecida globalmente para aprendizado de inglês conversacional com tutores nativos certificados.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-cyan-500/10" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in">Quer Melhorar seu Inglês?</h2>
            <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-100">
              Posso ajudar você a encontrar a melhor estratégia para aprender inglês ou integrar isso em seus projetos de transformação digital.
            </p>

            <div className="flex justify-center">
              <Button className="btn-gradient text-lg py-6 px-12" onClick={handleWhatsApp}>
                Agendar Call <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
