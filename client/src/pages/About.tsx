import { ArrowRight, Code2, Briefcase, Zap, Globe, Users, TrendingUp } from "lucide-react";
import { useLocation } from "wouter";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function About() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/5511978768690';
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] relative overflow-hidden">
<<<<<<< HEAD
=======
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
>>>>>>> 891c928 (fix: Add background images, fix subtitle wrapping, improve header spacing)
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-cyan-500/5" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
      
      <div className="relative z-10">
        <Header />

        {/* Hero Section com Foto */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
          <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/50 to-[#0F172A]" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Texto */}
              <div>
<<<<<<< HEAD
                <div className="mb-6 inline-block">
                  <span className="glass-card px-4 py-2 text-sm font-semibold text-cyan-400">
=======
                <div className="mb-8 inline-block mt-8">
                  <span className="glass-card px-4 py-2 text-sm font-semibold text-cyan-400 whitespace-nowrap">
>>>>>>> 891c928 (fix: Add background images, fix subtitle wrapping, improve header spacing)
                    👨‍💻 Desenvolvedor & Estrategista Digital
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">Pedro Uva</span>
                </h1>

                <p className="text-lg md:text-xl text-[#94A3B8] mb-8 max-w-2xl">
                  Mais de 25 anos de experiência em tecnologia. Transformo ideias em soluções digitais escaláveis, combinando rigor técnico com visão estratégica de negócios.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button 
                    onClick={() => setLocation("/servicos")}
                    className="btn-gradient text-lg py-6 flex items-center justify-center gap-2"
                  >
                    Conhecer Serviços <ArrowRight className="w-5 h-5" />
                  </Button>
                  <a 
                    href="https://www.linkedin.com/in/mruva/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass-card px-8 py-6 text-lg font-semibold hover:border-cyan-400/50 transition-all flex items-center justify-center gap-2"
                  >
                    LinkedIn <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="glass-card p-4 text-center">
                    <p className="text-2xl font-bold text-indigo-400">25+</p>
                    <p className="text-sm text-[#94A3B8]">Anos em Tech</p>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <p className="text-2xl font-bold text-cyan-400">33</p>
                    <p className="text-sm text-[#94A3B8]">Certificações</p>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <p className="text-2xl font-bold text-orange-400">100+</p>
                    <p className="text-sm text-[#94A3B8]">Projetos</p>
                  </div>
                </div>
              </div>

              {/* Foto 3x4 */}
              <div className="flex justify-center">
                <div className="glass-card p-6 hover:scale-105 transition-transform">
                  <img 
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/pedrouva_3x4_55f0cfe1.png" 
                    alt="Pedro Uva - Foto Profissional" 
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trajetória Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Trajetória Profissional</h2>
            <p className="text-center text-[#94A3B8] mb-16 max-w-2xl mx-auto">
              De suporte técnico a estrategista digital: uma jornada de aprendizado contínuo e transformação
            </p>

            <div className="space-y-6">
              {/* Timeline Item 1 */}
              <div className="glass-card p-6 border-l-4 border-indigo-500">
                <div className="flex items-start gap-4">
                  <Code2 className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">1997-2001: Primeiros Passos em Tech</h3>
                    <p className="text-[#94A3B8] mb-2">
                      Começou como técnico de suporte em empresas de telecomunicações (Prest Service, System Informática, UOL, AT&T Latin America). Aprendeu a trabalhar sob pressão, resolver problemas complexos e lidar com clientes em larga escala.
                    </p>
                    <p className="text-sm text-cyan-400">Tecnologias: Hardware, Redes, Suporte Técnico</p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="glass-card p-6 border-l-4 border-cyan-500">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <TrendingUp className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-2">2008-2013: Mercado Financeiro</h3>
                        <p className="text-[#94A3B8] mb-2">
                          Trabalhou como trader e especialista comercial na Um Investimentos. Liderou a campanha "Retomada ao Topo" com Google Ads, captando 340 novos investidores com ROI comprovado. Consolidou conhecimento em finanças, marketing e resiliência.
                        </p>
                        <p className="text-sm text-cyan-400">Tecnologias: Trading, Google Ads, Marketing Digital</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-48 flex-shrink-0">
                    <img 
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/pedro_uva-trader-profissional-do-mercado-financeiro_9dabad75.jpg" 
                      alt="Pedro Uva - Trader Profissional do Mercado Financeiro" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="glass-card p-6 border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">2014-2020: Empreendedorismo</h3>
                    <p className="text-[#94A3B8] mb-2">
                      Fundou Respiro Aventura (turismo de aventura) e Engenharia de Conteúdo (agência digital). Desenvolveu habilidades em gestão, criação de conteúdo, SEO e marketing digital. Operou como trader autônomo com disciplina e gestão de risco.
                    </p>
                    <p className="text-sm text-cyan-400">Tecnologias: PHP, MySQL, SEO, Google Ads, Meta Ads</p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="glass-card p-6 border-l-4 border-indigo-500">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">2020-2025: Transformação Digital</h3>
                    <p className="text-[#94A3B8] mb-2">
                      Retornou à Lavanderia Umarizal (negócio familiar) e implementou transformação digital completa: novo site, campanhas Google Ads (ROI 220%), automação de processos, IA para atendimento. Gerencia 18 colaboradores e infraestrutura VPS própria.
                    </p>
                    <p className="text-sm text-cyan-400">Tecnologias: React, Node.js, IA, Google Cloud, DevOps</p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 5 */}
              <div className="glass-card p-6 border-l-4 border-cyan-500">
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">2025-2026: Formação & Especialização</h3>
                    <p className="text-[#94A3B8] mb-2">
                      Cursa Tecnólogo em Desenvolvimento de Sistemas (FAT/Fatec), participa do Oracle ONE, estuda inglês avançado no Cambly. Acumula 25 Google Cloud Skill Badges em IA/ML. Prepara-se para atuar em nível internacional.
                    </p>
                    <p className="text-sm text-cyan-400">Tecnologias: Full Stack, IA, Google Cloud, Inglês Avançado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Habilidades Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-center">Habilidades Técnicas</h2>
            <p className="text-center text-[#94A3B8] mb-16 max-w-2xl mx-auto">
              Stack completo para desenvolvimento, marketing e automação
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Front-end */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-indigo-400">Front-end</h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ React 19 + TypeScript</li>
                  <li>✓ HTML5 + CSS3</li>
                  <li>✓ Tailwind CSS v4</li>
                  <li>✓ JavaScript Avançado</li>
                  <li>✓ Responsive Design</li>
                </ul>
              </div>

              {/* Back-end */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-cyan-400">Back-end</h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Node.js + Express</li>
                  <li>✓ PHP + Laravel</li>
                  <li>✓ MySQL + PostgreSQL</li>
                  <li>✓ APIs REST</li>
                  <li>✓ Autenticação JWT</li>
                </ul>
              </div>

              {/* Marketing & Dados */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-orange-400">Marketing & Dados</h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Google Ads (Search/Display)</li>
                  <li>✓ Google Analytics 4 (GA4)</li>
                  <li>✓ Meta Ads (Insta/FB)</li>
                  <li>✓ GTM (Google Tag Manager)</li>
                  <li>✓ Estratégia de SEO</li>
                </ul>
              </div>

              {/* Cloud & IA */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-indigo-400">Cloud & IA</h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Google Cloud (Vertex AI)</li>
                  <li>✓ IA Generativa (Gemini/GPT)</li>
                  <li>✓ Linux (Ubuntu/Debian)</li>
                  <li>✓ Docker & CI/CD</li>
                  <li>✓ VPS Management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-cyan-500/10" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-6">Vamos Conversar?</h2>
            <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto">
              Estou sempre aberto a novos desafios e parcerias estratégicas. Vamos transformar seu negócio através da tecnologia.
            </p>

            <div className="flex justify-center">
              <Button className="btn-gradient text-lg py-6 px-12" onClick={handleWhatsApp}>
                Agendar Call Estratégica <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
