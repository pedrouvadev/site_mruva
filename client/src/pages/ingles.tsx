import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, Award, Globe, Users, CheckCircle2 } from "lucide-react";

// Schema para SEO
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Estudo de Inglês com Professor Nativo | Pedro Uva - Evolução B1",
  "description": "Acompanhe minha jornada de aprendizado de inglês na Cambly. Foco em negociações simples, diálogos cotidianos e evolução constante.",
  "provider": {
    "@type": "Organization",
    "name": "Pedro Uva",
    "url": "https://mruva.com.br"
  },
  "educationalLevel": "Intermediate",
  "inLanguage": "en",
  "about": "English Language Learning",
  "timeRequired": "PT69H",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "instructor": {
      "@type": "Person",
      "name": "Native English Teachers"
    }
  }
};

export default function EnglishStudies() {
  useEffect(() => {
    document.title = "Estudo de Inglês com Professor Nativo | Pedro Uva - Evolução B1";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      "Acompanhe minha jornada de aprendizado de inglês na Cambly. Foco em negociações simples, diálogos cotidianos e evolução constante."
    );
    
    // Inserir Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(courseSchema);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] overflow-hidden relative font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <Header showStatus={true} lang="pt" />

      <div className="relative z-10">
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
              "url('https://res.cloudinary.com/dtfsdkdu6/image/upload/v1775241145/pedrouva-sala-de-aula-ingles_rq7upf.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex justify-center animate-fade-in">
            <div className="glass-card px-4 py-2 text-sm md:text-base font-semibold text-orange-400 inline-flex items-center gap-2 border border-orange-500/30 uppercase tracking-widest">
              <Globe className="w-4 h-4" /> Formação Internacional
            </div>
          </div>

          <h1 className="title-standard animate-fade-in animation-delay-100 tracking-tighter">
            Comunicação Global em{" "}
            <span className="bg-gradient-to-r from-orange-400 to-indigo-500 bg-clip-text text-transparent">
              Construção
            </span>
          </h1>

          <p className="mb-12 max-w-4xl mx-auto animate-fade-in animation-delay-200 font-medium">
            Inglês para Negócios Reais com <strong className="text-white">professores nativos</strong> na{" "}
            <strong className="text-white">Escola Internacional Cambly</strong>. Mais de 69 horas de prática verificada com evolução constante para contexto profissional internacional.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in animation-delay-300">
            <Button 
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open('https://wa.me/5511978768690', '_blank')}
            >
              Conectar no LinkedIn <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>

          <p className="text-sm text-[#94A3B8] italic animate-fade-in animation-delay-400">
            ⚠️ Aviso: Foco em evolução realista, sem promessas de fluência instantânea.
          </p>
        </div>
      </section>

        {/* Progress Section */}
        <section className="section-standard bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="title-standard text-center mb-16">
              Status de <span className="text-orange-400">Evolução</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-8">
                <div className="glass-card p-8 text-center border-l-4 border-l-orange-500 hover:scale-[1.02] transition-transform">
                  <div className="mb-4 bg-gradient-to-br from-orange-400/20 to-indigo-500/20 p-3 rounded-lg w-fit mx-auto">
                    <TrendingUp className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Nível Atual</h3>
                  <p className="text-4xl font-black text-orange-400 mb-2">B1</p>
                  <p className="text-[#94A3B8] text-lg">Intermediário</p>
                </div>

                <div className="glass-card p-8 text-center border-l-4 border-l-cyan-500 hover:scale-[1.02] transition-transform">
                  <div className="mb-4 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 p-3 rounded-lg w-fit mx-auto">
                    <Clock className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Carga Horária</h3>
                  <p className="text-4xl font-black text-cyan-400 mb-2">69h</p>
                  <p className="text-[#94A3B8] text-lg">Prática Verificada</p>
                </div>

                <div className="glass-card p-8 text-center border-l-4 border-l-indigo-500 hover:scale-[1.02] transition-transform">
                  <div className="mb-4 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 p-3 rounded-lg w-fit mx-auto">
                    <Award className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Tempo de Estudo</h3>
                  <p className="text-4xl font-black text-indigo-400 mb-2">1.5 anos</p>
                  <p className="text-[#94A3B8] text-lg">Consistência</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-indigo-500 rounded-2xl blur opacity-20" />
                <div className="relative glass-card p-4">
                  <img
                    src="https://res.cloudinary.com/dtfsdkdu6/image/upload/v1775241145/pedrouva-sala-de-aula-ingles_rq7upf.webp"
                    alt="Sala de aula de inglês com professor nativo - Pedro Uva"
                    className="w-full h-auto rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                    width="1123"
                    height="793"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>

            <div className="glass-card p-8 border border-orange-500/20">
              <h3 className="text-2xl font-bold mb-6 text-center text-orange-400">Rotina de Aprendizado</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Frequência</h4>
                    <p className="text-[#94A3B8] text-lg">1 hora por semana</p>
                    <p className="text-sm text-cyan-400">2 aulas de 30 minutos</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Método</h4>
                    <p className="text-[#94A3B8] text-lg">Conversação com nativos</p>
                    <p className="text-sm text-cyan-400">Prática real e contextual</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="section-standard">
          <div className="max-w-6xl mx-auto">
            <h2 className="title-standard text-center mb-16">
              Capacidades <span className="text-orange-400">Reais</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="glass-card p-8 border-l-4 border-l-green-500">
                  <h3 className="text-2xl font-bold mb-4 text-white">🗣️ Conversas Cotidianas</h3>
                  <p className="text-[#94A3B8] text-lg leading-relaxed">
                    Capacidade de manter diálogos naturais sobre temas do dia a dia, 
                    entender gírias e expressões idiomáticas com nativos.
                  </p>
                </div>
                
                <div className="glass-card p-8 border-l-4 border-l-blue-500">
                  <h3 className="text-2xl font-bold mb-4 text-white">💼 Negociações Simples</h3>
                  <p className="text-[#94A3B8] text-lg leading-relaxed">
                    Habilidade para negociar termos comerciais básicos, 
                    discutir preços e fechar acordos em inglês.
                  </p>
                </div>
                
                <div className="glass-card p-8 border-l-4 border-l-purple-500">
                  <h3 className="text-2xl font-bold mb-4 text-white">👥 Entendimento de Nativos</h3>
                  <p className="text-[#94A3B8] text-lg leading-relaxed">
                    Compreensão clara quando nativos falam em velocidade normal 
                    sobre assuntos técnicos e profissionais.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-indigo-500 rounded-2xl blur opacity-20" />
                <div className="relative glass-card p-4">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Pedro-Uva-Cambly-Certificate_6135a3a1.png"
                    alt="Certificado de Estudo de Inglês Cambly - Pedro Uva"
                    className="w-full h-auto rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                    width="1123"
                    height="793"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
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

          <div className="max-w-4xl mx-auto text-center relative z-10 glass-card p-12 md:p-20 border border-orange-500/20">
            <h2 className="title-standard text-center text-4xl font-bold">Evolução Contínua é o Diferencial</h2>
            <p className="mb-12 max-w-2xl mx-auto text-lg font-medium text-[#E2E8F0]">
              Não prometo fluência instantânea, mas compromisso com evolução real. 
              Cada aula é um passo rumo à comunicação global efetiva.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] transition-all duration-300 rounded-full font-bold"
                onClick={() => window.open('https://wa.me/5511978768690', '_blank')}
              >
                Conectar no LinkedIn <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </div>
        </section>

      <Footer />
    </div>
  );
}
