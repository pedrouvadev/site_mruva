import {
  ArrowRight,
  Code,
  Bot,
  TrendingUp,
  Presentation,
  MessageCircle,
  Shield,
  Rocket,
  CheckCircle,
  Code2,
  Briefcase,
  Zap,
  Globe,
  Users,
  Target,
  Award,
  ExternalLink,
  CheckCircle2,
  Send,
} from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Pedro Uva | Full-Stack Engineer & Estrategista Digital em São Paulo";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Especialista em Desenvolvimento Full-Stack, IA e Growth Marketing em São Paulo. 25+ anos gerando resultados reais para negócios globais."
      );
    }
  }, []);

  const whatsappLink =
    "https://wa.me/5511978768690?text=Olá%20Pedro!%20Estou%20pronto%20para%20escalar%20meu%20negócio.%20Vamos%20conversar!";
  const githubLink = "https://github.com/pedrouvadev";

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] overflow-hidden relative font-sans selection:bg-cyan-500/30">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />

      <Header showStatus={true} />

      <div className="relative z-10">

        {/* 1. Hero Section - O Gancho */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/hero-3d-neon-ETM4gefM3NZLJ3bB38yXCc.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.15,
            }}
          />
          <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 animate-fade-in flex justify-center">
              <div className="glass-card px-4 py-2 text-sm font-semibold text-cyan-400 inline-flex items-center gap-2 border border-cyan-500/30 uppercase tracking-widest">
                <Rocket className="w-4 h-4" /> The Trinity Marketing AI Baseline
              </div>
            </div>

            <h1 className="title-standard animate-fade-in animation-delay-100 tracking-tighter">
              Código Fullstack, IA Escalonável &{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                Growth Marketing
              </span>
            </h1>

            <p className="text-2xl text-[#94A3B8] max-w-3xl mx-auto font-medium mb-12 animate-fade-in animation-delay-200">
              <span className="text-white">
                Uma Única Mente. Entrega Global.
              </span>{" "}
              Desenvolvo soluções digitais de alto desempenho para empresas prontas para revolucionar o mercado.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in animation-delay-300">
              <Button
                className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                Agendar Call Estratégica <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-xs uppercase tracking-widest text-cyan-400">
                  Anos de Experiência
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-white">33+</div>
                <div className="text-xs uppercase tracking-widest text-indigo-400">
                  Certificações
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-xs uppercase tracking-widest text-orange-400">
                  Projetos Entregues
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-white">Global</div>
                <div className="text-xs uppercase tracking-widest text-blue-400">
                  Pronto
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. O Especialista - Autoridade & História */}
        <section id="expert" className="section-standard bg-black/20 text-left">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-2xl blur opacity-20" />
                <div className="relative">
                  <div className="relative overflow-hidden rounded-xl max-w-sm mx-auto -mt-8">
                    <img
                      src="https://res.cloudinary.com/dtfsdkdu6/image/upload/v1774841184/pedrouva_ylzklx.webp"
                      alt="Uva - Desenvolvedor Full-Stack e Estrategista Digital em São Paulo"
                      className="w-full h-auto"
                      width="384"
                      height="512"
                      loading="eager"
                      fetchpriority="high"
                    />
                  </div>
                  <div className="w-[90%] mx-auto mt-4 glass-card p-4 border-l-4 border-cyan-400 shadow-2xl">
                    <h3 className="text-xl font-bold text-white">Uva, Pedro</h3>
                    <p className="text-cyan-400 text-sm font-semibold mb-3">
                      FullStack e Estrategista Digital
                    </p>
                    <div className="flex gap-4 justify-start">
                      <a
                        href="https://github.com/pedrouvadev"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Perfil do Uva no GitHub"
                        className="text-[#94A3B8] hover:text-white transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a
                        href="https://wa.me/5511978768690"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contato via WhatsApp"
                        className="text-[#94A3B8] hover:text-[#25D366] transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" aria-hidden="true" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/mruva/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Perfil do Uva no LinkedIn"
                        className="text-[#94A3B8] hover:text-[#0077B5] transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a
                        href="https://t.me/pedrouva"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contato via Telegram"
                        className="text-[#94A3B8] hover:text-[#0088cc] transition-colors"
                      >
                        <Send className="w-5 h-5" aria-hidden="true" />
                      </a>
                      <a
                        href="https://discord.com/users/pedrouva"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contato via Discord"
                        className="text-[#94A3B8] hover:text-[#5865F2] transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="title-standard">
                  Excelência desde{" "}
                  <span className="text-indigo-400">1997</span>
                </h2>
                <p className="mb-8">
                  Não sou apenas um desenvolvedor. Sou um{" "}
                  <strong className="text-white">estrategista</strong> que
                  entende que o código é uma ferramenta para gerar lucro. Desde
                  o início com hardware e redes até as arquiteturas modernas
                  impulsionadas por IA, minha jornada foi definida por uma
                  coisa:{" "}
                  <strong className="text-white">
                    Resolver Problemas Complexos.
                  </strong>
                </p>

                <div className="space-y-6 mb-10 text-left">
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500/10 p-2 rounded-lg mt-1">
                      <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                    </div>
                    <p className="text-lg text-[#CBD5E1]">
                      <strong className="text-white">Fundação Técnica:</strong>{" "}
                      Mais de 25 anos evoluindo de suporte técnico para Full-Stack e IA.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-500/10 p-2 rounded-lg mt-1">
                      <CheckCircle2 className="w-6 h-6 text-indigo-400" />
                    </div>
                    <p className="text-lg text-[#CBD5E1]">
                      <strong className="text-white">Visão de Negócio:</strong>{" "}
                      Empreendedor com profunda compreensão de ROI, trader profissional de ativos da B3, Forex e Criptomoedas, e estratégias de marketing digital.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/10 p-2 rounded-lg mt-1">
                      <CheckCircle2 className="w-6 h-6 text-orange-400" />
                    </div>
                    <p className="text-lg text-[#CBD5E1]">
                      <strong className="text-white">
                        Especialização em IA:
                      </strong>{" "}
                      Certificado pelo Google Cloud e Instituto Vai na Web,
                      especialista em integração de LLMs e automação de fluxos
                      de trabalho.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/mruva/"
                    target="_blank"
                    className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors font-bold text-lg"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg> Conectar no LinkedIn{" "}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. O Arsenal de Serviços - A Solução */}
        <section id="services" className="section-standard bg-[#0B1120]">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-7xl font-bold mb-6">
                O <span className="text-cyan-400">Arsenal</span>
              </h2>
              <p className="text-2xl text-[#94A3B8] max-w-3xl mx-auto font-medium">
                Capacidades de elite combinadas sistematicamente para construir,
                lançar e escalar produtos digitais de classe mundial.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: <Code className="w-10 h-10 text-cyan-400" />,
                  title: "Programação",
                  desc: "Aplicações web escaláveis de ponta a ponta usando React 19, Node.js e TypeScript. Arquitetura projetada para alto desempenho e fricção zero.",
                  tags: ["Full-Stack", "Arquitetura", "Performance"],
                  link: "/desenvolvimento",
                },
                {
                  icon: <Bot className="w-10 h-10 text-indigo-400" />,
                  title: "Inteligência Artificial",
                  desc: "Integrações personalizadas de LLM, automação de fluxo de trabalho e análise preditiva. Coloco a IA para trabalhar pelo seu lucro, não apenas pelo hype.",
                  tags: ["LLMs", "Automação", "GPT-4"],
                  link: "/ia",
                },
                {
                  icon: <TrendingUp className="w-10 h-10 text-blue-400" />,
                  title: "Growth Marketing",
                  desc: "Campanhas globais baseadas em dados. Gestão de anúncios Google e Meta focada em ROI e SEO técnico avançado para mercados internacionais.",
                  tags: ["ROI", "Google Ads", "SEO"],
                  link: "/marketing",
                },
              ].map((service, idx) => (
                <article
                  key={idx}
                  className="glass-card p-10 hover:scale-[1.05] transition-all duration-500 border border-white/5 hover:border-cyan-500/30 flex flex-col h-full group text-left"
                >
                  <div className="bg-[#0F172A] p-5 rounded-2xl w-fit mb-8 shadow-inner border border-white/5 group-hover:border-cyan-500/50 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">
                    {service.title}
                  </h3>
                  <p className="text-[#94A3B8] text-lg leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={service.link}
                    className="mt-auto inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors"
                  >
                    Saiba mais sobre {service.title} <ArrowRight className="w-4 h-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. GitHub Section - Open Source & Transparência */}
        <section
          id="github"
          className="py-32 px-4 sm:px-6 lg:px-8 relative bg-black/20"
        >
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                  Open Source &{" "}
                  <span className="text-cyan-400">Código Limpo</span>
                </h2>
                <p className="text-2xl text-[#94A3B8] max-w-3xl mx-auto font-medium mb-8 leading-relaxed">
                  Acredito na transparência e na contribuição contínua para a
                  comunidade de desenvolvedores. Meu GitHub reflete meu
                  compromisso com a qualidade do código e a exploração constante
                  de novas tecnologias.
                </p>
                <button
                  onClick={() => window.open(githubLink, "_blank")}
                  className="group flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 rounded-full text-xl font-bold hover:bg-white/10 transition-all"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Ver Perfil no GitHub
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-cyan-500/20 blur-2xl rounded-full animate-pulse" />
                  <svg className="w-48 h-48 md:w-64 md:h-64 text-white/10 relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* 6. Pronto para o Mundo - A Comunicação */}
        <section
          id="communication"
          className="py-32 px-4 sm:px-6 lg:px-8 relative bg-black/40"
        >
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-bold mb-8 uppercase tracking-widest mx-auto">
                <Globe className="w-4 h-4" /> Pronto para Negócios Globais
              </div>
              <h2 className="text-4xl md:text-7xl font-bold mb-8">
                Inglês em desenvolvimento consistente
              </h2>
              <p className="text-2xl text-[#94A3B8] max-w-3xl mx-auto font-medium">
                Base intermediária real, com prática contínua com nativos e
                evolução constante para contexto profissional internacional.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="glass-card p-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10">
                <div className="relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-blue-500/10 z-10 mix-blend-overlay" />
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Pedro-Uva-Cambly-Certificate_6135a3a1.png"
                    alt="Certificado de Inglês Cambly - Mr. Uva"
                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                    width="1123"
                    height="793"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="space-y-10 text-left">
                <div className="glass-card p-10 border-l-4 border-l-blue-500 bg-white/5">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Base realista e em evolução
                  </h3>
                  <p className="text-[#94A3B8] text-xl leading-relaxed">
                    Mais de <strong>69 horas verificadas</strong> de prática de
                    inglês conversacional com falantes nativos. Meu nível atual
                    é <strong>B1 (intermediário)</strong>, com foco em evolução
                    contínua para reuniões, colaboração remota e contexto
                    profissional internacional.
                  </p>
                </div>

                <div className="glass-card p-8 border border-white/5">
                  <a
                    href="https://cambly.com/en/certificate/verify/0e67533e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between text-white hover:text-cyan-400 transition-all"
                  >
                    <span className="text-xl font-bold">
                      Verificar Autenticidade do Certificado
                    </span>
                    <ExternalLink className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Trajetória Profissional - Resgate de Conteúdo */}
        <section
          id="trajetoria"
          className="py-24 px-4 sm:px-6 lg:px-8 text-left"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
              Trajetória Profissional
            </h2>
            <p className="text-2xl text-[#94A3B8] max-w-3xl mx-auto font-medium text-center mb-16">
              De suporte técnico a estrategista digital: uma jornada de
              aprendizado contínuo e transformação
            </p>

            <div className="space-y-6">
              {/* Timeline Item 1 */}
              <div className="glass-card p-6 border-l-4 border-indigo-500">
                <div className="flex items-start gap-4">
                  <Code2 className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      1998-2001: Primeiros Passos em Tech
                    </h3>
                    <p className="text-[#94A3B8] mb-2">
                      Comecei como técnico de suporte em empresas de
                      telecomunicações (UOL, AT&T Latin America). Aprendi a trabalhar sob pressão,
                      resolver problemas complexos e lidar com clientes em larga
                      escala.
                    </p>
                    <p className="text-sm text-cyan-400">
                      Tecnologias: Hardware, Redes, Suporte Técnico
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 1.5 */}
              <div className="glass-card p-6 border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      2001-2008: Gestão e Inovação no Negócio Familiar
                    </h3>
                    <p className="text-[#94A3B8] mb-2">
                      Atuei na gestão operacional da Lavanderia Umarizal, empresa especializada em lavagem industrial de tapetes. Durante esse período, mergulhei na administração de ponta a ponta: do controle de insumos químicos e logística à gestão de equipes e atendimento ao cliente. Foi nesta fase que iniciei minha transição para o ambiente digital, implantando um ERP com CRM, desenvolvendo os primeiros sites da empresa e implementando controles eletrônicos e estratégias iniciais de SEO e Google Ads para modernizar o modelo de negócio tradicional.
                    </p>
                    <p className="text-sm text-cyan-400">
                      Tecnologias: Gestão de Processos, HTML/CSS, Planejamento Estratégico, Marketing Digital Primitivo
                    </p>
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
                        <h3 className="text-xl font-bold mb-2">
                          2008-2013: Mercado Financeiro
                        </h3>
                        <p className="text-[#94A3B8] mb-2">
                          Trabalhei como trader e especialista comercial na Um
                          Investimentos. Liderei a campanha "Retomada ao Topo"
                          com Google Ads, captando 340 novos investidores com
                          ROI comprovado. Consolidei conhecimento em finanças,
                          marketing e resiliência.
                        </p>
                        <p className="text-sm text-cyan-400">
                          Tecnologias: Trading, Google Ads, Marketing Digital
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-48 flex-shrink-0">
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/pedro_uva-trader-profissional-do-mercado-financeiro_9dabad75.jpg"
                      alt="Uva - Trader Profissional do Mercado Financeiro"
                      className="w-full h-auto rounded-lg shadow-lg"
                      width="1123"
                      height="793"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="glass-card p-6 border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      2013-2020: Empreendedorismo
                    </h3>
                    <p className="text-[#94A3B8] mb-2">
                      Fundei Respiro Aventura (turismo de aventura) e Engenharia
                      de Conteúdo (agência digital). Desenvolvi habilidades em
                      gestão, criação de conteúdo, SEO e marketing digital.
                      Operei como trader autônomo com disciplina e gestão de
                      risco.
                    </p>
                    <p className="text-sm text-cyan-400">
                      Tecnologias: PHP, MySQL, SEO, Google Ads, Meta Ads
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="glass-card p-6 border-l-4 border-indigo-500">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      2020-2025: Transformação Digital
                    </h3>
                    <p className="text-[#94A3B8] mb-2">
                      Retornei à Lavanderia Umarizal (negócio familiar) e
                      implementei transformação digital completa: novo site,
                      campanhas Google Ads (ROI 220%), automação de processos,
                      IA para atendimento. Gerencio time de colaboradores e
                      infraestrutura VPS própria.
                    </p>
                    <p className="text-sm text-cyan-400">
                      Tecnologias: React, Node.js, IA, Google Cloud, DevOps
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 5 */}
              <div className="glass-card p-6 border-l-4 border-cyan-500">
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      2025-2026: Formação & Especialização
                    </h3>
                    <p className="text-[#94A3B8] mb-2">
                      Curso Tecnólogo em Desenvolvimento de Sistemas
                      (FAT/Fatec), participo do Oracle ONE e mantenho prática
                      contínua de inglês no Cambly, atualmente em nível B1
                      (intermediário). Acumulei 25 Google Cloud Skill Badges em
                      IA/ML. Preparo-me para atuar em nível internacional com
                      transparência sobre minha evolução.
                    </p>
                    <p className="text-sm text-cyan-400">
                      Tecnologias: Full Stack, IA, Google Cloud, Inglês B1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Habilidades Técnicas */}
        <section
          id="habilidades"
          className="py-24 px-4 sm:px-6 lg:px-8 relative text-left"
        >
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
              Habilidades Técnicas
            </h2>
            <p className="text-2xl text-[#94A3B8] max-w-3xl mx-auto font-medium text-center mb-16">
              Stack completo para desenvolvimento, marketing e automação
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-indigo-400">
                  Front-end
                </h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ React 19 + TypeScript</li>
                  <li>✓ HTML5 + CSS3</li>
                  <li>✓ Tailwind CSS v4</li>
                  <li>✓ JavaScript Avançado</li>
                  <li>✓ Responsive Design</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-cyan-400">
                  Back-end
                </h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Node.js + Express</li>
                  <li>✓ PHP + Laravel</li>
                  <li>✓ MySQL + PostgreSQL</li>
                  <li>✓ APIs REST</li>
                  <li>✓ Autenticação & Segurança</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-orange-400">
                  DevOps
                </h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Linux (25+ anos)</li>
                  <li>✓ Docker & Containers</li>
                  <li>✓ Git & GitHub</li>
                  <li>✓ VPS & Cloud</li>
                  <li>✓ CI/CD Pipelines</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-indigo-400">
                  Marketing Digital
                </h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Google Ads & GA4</li>
                  <li>✓ Meta Ads</li>
                  <li>✓ SEO On-page & Off-page</li>
                  <li>✓ Content Strategy</li>
                  <li>✓ ROI Mensurável</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-cyan-400">
                  IA & Automação
                </h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ ChatGPT & LLMs</li>
                  <li>✓ Automação de Processos</li>
                  <li>✓ Google Cloud AI/ML</li>
                  <li>✓ Integrações Avançadas</li>
                  <li>✓ Prompt Engineering</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-orange-400">
                  Finanças & Trading
                </h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Análise Técnica</li>
                  <li>✓ Trading (Índice & Dólar)</li>
                  <li>✓ Gestão de Risco</li>
                  <li>✓ Compliance</li>
                  <li>✓ Psicologia do Trading</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-indigo-400">
                  Gestão Empresarial
                </h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Gestão de Pessoas</li>
                  <li>✓ Planejamento Estratégico</li>
                  <li>✓ Transformação Digital</li>
                  <li>✓ Gestão de Projetos</li>
                  <li>✓ Liderança & Mentoria</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-cyan-400">
                  Idiomas
                </h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Português (Nativo)</li>
                  <li>✓ Inglês (B1 - Intermediário)</li>
                  <li>✓ Conversação com nativos</li>
                  <li>✓ 69+ horas no Cambly</li>
                  <li>✓ Evolução contínua para mercado internacional</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Filosofia Profissional */}
        <section id="filosofia" className="section-standard text-left">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-indigo-500/5" />
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="title-standard text-center">
              Filosofia Profissional
            </h2>

            <div className="space-y-6">
              <div className="glass-card p-8 border-cyan-500/50">
                <h3 className="text-xl font-bold mb-3 text-cyan-400">
                  🎯 Propósito Acima de Tudo
                </h3>
                <p className="text-[#94A3B8]">
                  Recuso projetos que não estejam alinhados com meus valores.
                  Busco trabalho com "alma" — que gere impacto real, aprendizado
                  contínuo e contribuição genuína para a comunidade.
                </p>
              </div>

              <div className="glass-card p-8 border-indigo-500/50">
                <h3 className="text-xl font-bold mb-3 text-indigo-400">
                  🔄 Aprendizado Contínuo
                </h3>
                <p className="text-[#94A3B8]">
                  Nunca parei de estudar. Mesmo sem diplomas formais completos,
                  acumulei conhecimento equivalente ou superior a muitas
                  graduações, com a vantagem da aplicação prática imediata.
                </p>
              </div>

              <div className="glass-card p-8 border-orange-500/50">
                <h3 className="text-xl font-bold mb-3 text-orange-400">
                  💪 Resiliência como Competência
                </h3>
                <p className="text-[#94A3B8]">
                  As crises enfrentadas não me paralisaram. Em cada uma, extraí
                  aprendizado e recomeçei mais forte.
                </p>
              </div>

              <div className="glass-card p-8 border-cyan-500/50">
                <h3 className="text-xl font-bold mb-3 text-cyan-400">
                  🌍 Ubuntu nos Negócios
                </h3>
                <p className="text-[#94A3B8]">
                  "Eu sou porque nós somos". Valorizo parcerias ganha-ganha,
                  construo comunidades, promovo transparência, colaboração e
                  meritocracia em tudo que faço.
                </p>
              </div>

              <div className="glass-card p-8 border-indigo-500/50">
                <h3 className="text-xl font-bold mb-3 text-indigo-400">
                  🚀 Liberdade Geográfica & Autonomia
                </h3>
                <p className="text-[#94A3B8]">
                  Sonho com liberdade geográfica (motorhome, Starlink) e
                  autonomia profissional: trabalhar de qualquer lugar, com
                  projetos significativos, sem amarras corporativas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Certificações & Reconhecimento */}
        <section id="certificacoes" className="section-standard text-left">
          <div className="max-w-6xl mx-auto">
            <h2 className="title-standard text-center">
              Certificações & Reconhecimento
            </h2>
            <p className="text-2xl text-[#94A3B8] max-w-3xl mx-auto font-medium text-center mb-16">
              Formação contínua e reconhecimento de expertise
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="glass-card p-6 text-center">
                <p className="text-3xl font-bold text-indigo-400 mb-2">33</p>
                <p className="text-[#94A3B8]">Certificações Oficiais</p>
                <p className="text-sm text-cyan-400 mt-2">
                  Google, Oracle, Goobec, Qualifica SP
                </p>
              </div>
              <div className="glass-card p-6 text-center">
                <p className="text-3xl font-bold text-cyan-400 mb-2">25</p>
                <p className="text-[#94A3B8]">Google Cloud Skill Badges</p>
                <p className="text-sm text-orange-400 mt-2">
                  IA, ML, Cloud Infrastructure
                </p>
              </div>
              <div className="glass-card p-6 text-center">
                <p className="text-3xl font-bold text-orange-400 mb-2">22K+</p>
                <p className="text-[#94A3B8]">Seguidores no LinkedIn</p>
                <p className="text-sm text-indigo-400 mt-2">
                  Autoridade em Tech & Empreendedorismo
                </p>
              </div>
            </div>

            <div className="glass-card p-8 border-cyan-500/50">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">
                Formação Continuada
              </h3>
              <ul className="space-y-3 text-[#94A3B8]">
                <li>
                  ✓ <strong>Tecnólogo em Desenvolvimento de Sistemas</strong> -
                  FAT/Fatec (2025-2026)
                </li>
                <li>
                  ✓ <strong>Oracle ONE</strong> - Programa de 12 meses em
                  Desenvolvimento (2024-2025)
                </li>
                <li>
                  ✓ <strong>Google Cloud Skills Boost</strong> - 25 Skill Badges
                  em IA/ML (2024-2026)
                </li>
                <li>
                  ✓ <strong>Marketing Digital</strong> - Goobec (Google Partner)
                  - Google Ads, Meta Ads, GA4
                </li>
                <li>
                  ✓ <strong>Gestão de Projetos de TI</strong> - Qualifica SP
                </li>
                <li>
                  ✓ <strong>Inglês B1 (Intermediário)</strong> - Cambly (69+
                  horas com nativos)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 12. CTA Final */}
        <section id="contatofinal" className="section-standard">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0F172A] via-indigo-900/30 to-[#0F172A]" />

          <div className="max-w-5xl mx-auto relative z-10 text-center glass-card p-16 md:p-32 border border-cyan-500/20 shadow-[0_0_150px_rgba(34,211,238,0.15)]">
            <h2 className="title-standard tracking-tighter">
              Pronto para executar <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                no mais alto nível?
              </span>
            </h2>
            <p className="text-2xl text-[#94A3B8] mb-16 max-w-3xl mx-auto leading-relaxed">
              Pare de aceitar uma execução mediana. Vamos projetar o crescimento
              digital que revoluciona seu mercado e amplia suas operações
              globalmente.
            </p>

            <button
              onClick={() => window.open(whatsappLink, "_blank")}
              className="group relative inline-flex items-center justify-center gap-4 px-16 py-8 text-3xl font-black text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full hover:from-cyan-400 hover:to-indigo-500 hover:scale-105 shadow-[0_0_60px_rgba(34,211,238,0.5)]"
            >
              <MessageCircle className="w-8 h-8" />
              Agendar Call Estratégica
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </button>

            <p className="mt-12 text-[#94A3B8] font-semibold uppercase tracking-widest text-sm">
              Disponível para Projetos Globais e Funções Remotas
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
