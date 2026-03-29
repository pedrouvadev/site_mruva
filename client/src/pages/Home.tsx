import { ArrowRight, Code, Bot, TrendingUp, Presentation, MessageCircle, Shield, Rocket, CheckCircle, Code2, Briefcase, Zap, Globe, Users, Target, Award, ExternalLink, Linkedin, CheckCircle2, Github } from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pedro Uva | Full-Stack Engineer & Estrategista Digital em São Paulo";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Especialista em Desenvolvimento Full-Stack, IA e Growth Marketing em São Paulo. 25+ anos gerando resultados reais para negócios globais.");
    }
  }, []);

  const whatsappLink = "https://wa.me/5511978768690?text=Olá%20Pedro!%20Estou%20pronto%20para%20escalar%20meu%20negócio.%20Vamos%20conversar!";
  const githubLink = "https://github.com/pedrouvadev";

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] overflow-hidden relative font-sans selection:bg-cyan-500/30">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />
      
      <div className="relative z-10">
        <Header showStatus={true} />

        {/* 1. Hero Section - O Gancho */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
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
              Código Full-Stack, IA Escalonável & <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Growth Marketing</span>
            </h1>

            <p className="mb-12 max-w-4xl mx-auto animate-fade-in animation-delay-200 font-medium">
              <span className="text-white">Uma Única Mente. Entrega Global.</span> Engenharia de soluções digitais de alto desempenho para empresas prontas para revolucionar o mercado.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in animation-delay-300">
              <Button 
                className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Agendar Call Estratégica <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-xs uppercase tracking-widest text-cyan-400">Anos de Experiência</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-white">33+</div>
                <div className="text-xs uppercase tracking-widest text-indigo-400">Certificações</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-xs uppercase tracking-widest text-orange-400">Projetos Entregues</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-white">Global</div>
                <div className="text-xs uppercase tracking-widest text-blue-400">Pronto</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. O Especialista - Autoridade & História */}
        <section id="expert" className="section-standard bg-black/20 text-left">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-xl border border-white/10 max-w-sm mx-auto">
                    <img 
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/pedrouva_3x4_55f0cfe1.png" 
                      alt="Pedro Uva - Desenvolvedor Full-Stack & Estrategista Digital" 
                      className="w-full h-auto transition-all duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] glass-card p-4 border-l-4 border-cyan-400 shadow-2xl z-20">
                    <h4 className="text-xl font-bold text-white">Pedro Luiz Uva Jr.</h4>
                    <p className="text-cyan-400 text-sm font-semibold mb-3">FullStack e Estrategista Digital</p>
                    <div className="flex gap-4 justify-start">
                      <a href="https://github.com/pedrouvadev" target="_blank" className="text-[#94A3B8] hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="https://wa.me/5511978768690" target="_blank" className="text-[#94A3B8] hover:text-[#25D366] transition-colors">
                        <MessageCircle className="w-5 h-5" />
                      </a>
                      <a href="https://www.linkedin.com/in/mruva/" target="_blank" className="text-[#94A3B8] hover:text-[#0077B5] transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="title-standard">Engenharia de Excelência desde <span className="text-indigo-400">1997</span></h2>
                <p className="mb-8">
                  Não sou apenas um desenvolvedor. Sou um <strong className="text-white">estrategista</strong> que entende que o código é uma ferramenta para gerar lucro. Desde o início com hardware e redes até as arquiteturas modernas impulsionadas por IA, minha jornada foi definida por uma coisa: <strong className="text-white">Resolver Problemas Complexos.</strong>
                </p>
                
                <div className="space-y-6 mb-10 text-left">
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500/10 p-2 rounded-lg mt-1"><CheckCircle2 className="w-6 h-6 text-cyan-400" /></div>
                    <p className="text-lg text-[#CBD5E1]"><strong className="text-white">Fundação Técnica:</strong> Mais de 25 anos evoluindo de suporte técnico para Engenharia Full-Stack e IA.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-500/10 p-2 rounded-lg mt-1"><CheckCircle2 className="w-6 h-6 text-indigo-400" /></div>
                    <p className="text-lg text-[#CBD5E1]"><strong className="text-white">Visão de Negócio:</strong> Ex-trader com profunda compreensão de ROI, mercados financeiros e estratégias de crescimento.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/10 p-2 rounded-lg mt-1"><CheckCircle2 className="w-6 h-6 text-orange-400" /></div>
                    <p className="text-lg text-[#CBD5E1]"><strong className="text-white">Especialização em IA:</strong> Certificado pelo Google Cloud e Oracle ONE, especialista em integração de LLMs e automação de fluxos de trabalho.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/mruva/" target="_blank" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors font-bold text-lg">
                    <Linkedin className="w-6 h-6" /> Conectar no LinkedIn <ArrowRight className="w-5 h-5" />
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
              <h2 className="text-4xl md:text-7xl font-bold mb-6">O <span className="text-cyan-400">Arsenal</span></h2>
              <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
                Capacidades de elite combinadas sistematicamente para construir, lançar e escalar produtos digitais de classe mundial globalmente.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: <Code className="w-10 h-10 text-cyan-400" />,
                  title: "Desenvolvimento",
                  desc: "Aplicações web escaláveis de ponta a ponta usando React 19, Node.js e TypeScript. Arquitetura projetada para alto desempenho e fricção zero.",
                  tags: ["Full-Stack", "Arquitetura", "Performance"]
                },
                {
                  icon: <Bot className="w-10 h-10 text-indigo-400" />,
                  title: "Inteligência Artificial",
                  desc: "Integrações personalizadas de LLM, automação de fluxo de trabalho e análise preditiva. Coloco a IA para trabalhar pelo seu lucro, não apenas pelo hype.",
                  tags: ["LLMs", "Automação", "GPT-4"]
                },
                {
                  icon: <TrendingUp className="w-10 h-10 text-blue-400" />,
                  title: "Growth Marketing",
                  desc: "Campanhas globais baseadas em dados. Gestão de anúncios Google e Meta focada em ROI e SEO técnico avançado para mercados internacionais.",
                  tags: ["ROI", "Google Ads", "SEO"]
                }
              ].map((service, idx) => (
                <article key={idx} className="glass-card p-10 hover:scale-[1.05] transition-all duration-500 border border-white/5 hover:border-cyan-500/30 flex flex-col h-full group text-left">
                  <div className="bg-[#0F172A] p-5 rounded-2xl w-fit mb-8 shadow-inner border border-white/5 group-hover:border-cyan-500/50 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">{service.title}</h3>
                  <p className="text-[#94A3B8] text-lg leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 rounded-full text-white/50">{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. GitHub Section - Open Source & Transparência */}
        <section id="github" className="py-32 px-4 sm:px-6 lg:px-8 relative bg-black/20">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Open Source & <span className="text-cyan-400">Código Limpo</span></h2>
                <p className="text-xl text-[#94A3B8] mb-8 leading-relaxed">
                  Acredito na transparência e na contribuição contínua para a comunidade de desenvolvedores. Meu GitHub reflete meu compromisso com a qualidade do código e a exploração constante de novas tecnologias.
                </p>
                <button 
                  onClick={() => window.open(githubLink, '_blank')}
                  className="group flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 rounded-full text-xl font-bold hover:bg-white/10 transition-all"
                >
                  <Github className="w-8 h-8" />
                  Ver Perfil no GitHub
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                   <div className="absolute -inset-4 bg-cyan-500/20 blur-2xl rounded-full animate-pulse" />
                   <Github className="w-48 h-48 md:w-64 md:h-64 text-white/10 relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. A Garantia do Fluxo de Trabalho - A Previsibilidade */}
        <section id="workflow" className="py-32 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 z-0 bg-gradient-to-tr from-indigo-900/20 via-[#0F172A] to-cyan-900/10" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 text-left">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Garantia de <span className="bg-gradient-to-r from-orange-400 to-indigo-400 bg-clip-text text-transparent">Fluxo de Trabalho</span></h2>
                <p className="text-xl text-[#94A3B8] mb-10 leading-relaxed">
                  Seu projeto é gerenciado usando frameworks <strong className="text-white">Scrum padronizados</strong> para garantir previsibilidade, transparência e entregas de alta qualidade. Não apenas desenvolvo; eu gerencio a complexidade para que você não precise.
                </p>
                
                <ul className="space-y-8">
                  {[
                    { title: "Entrega Previsível", desc: "Sprints organizadas com marcos claros e atualizações frequentes." },
                    { title: "Transparência", desc: "Acompanhamento rigoroso de cronograma e alinhamento constante com os stakeholders." },
                    { title: "Zero Caos", desc: "Metodologia certificada Scrum para eliminar o aumento descontrolado de escopo e atrasos." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-5">
                      <div className="mt-1 bg-orange-500/20 p-2 rounded-full border border-orange-500/30">
                        <CheckCircle className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-[#94A3B8] text-lg">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="order-1 lg:order-2 glass-card p-4 relative animate-fade-in">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-indigo-500 rounded-2xl blur opacity-20" />
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/certificado-gestao_edd771b2.png" 
                  alt="Certificação Scrum - Mr. Uva" 
                  className="relative w-full h-auto rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. Pronto para o Mundo - A Comunicação */}
        <section id="communication" className="py-32 px-4 sm:px-6 lg:px-8 relative bg-black/40">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-bold mb-8 uppercase tracking-widest mx-auto">
                <Globe className="w-4 h-4" /> Pronto para Negócios Globais
              </div>
              <h2 className="text-4xl md:text-7xl font-bold mb-8">
                Proficiência Profissional Fluente
              </h2>
              <p className="text-2xl text-[#94A3B8] max-w-3xl mx-auto font-medium">
                Proficiência verificada para comunicação de alto nível, reuniões diárias e gestão de stakeholders internacionais.
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
                  />
                </div>
              </div>

              <div className="space-y-10 text-left">
                <div className="glass-card p-10 border-l-4 border-l-blue-500 bg-white/5">
                  <h4 className="text-3xl font-bold text-white mb-4">Comunicação Fluida</h4>
                  <p className="text-[#94A3B8] text-xl leading-relaxed">
                    Mais de <strong>69 horas verificadas</strong> de inglês conversacional com falantes nativos. Pronto para negociações de alto nível e colaboração em equipes globais sem atritos.
                  </p>
                </div>
                
                <div className="glass-card p-8 border border-white/5">
                  <a 
                    href="https://cambly.com/en/certificate/verify/0e67533e" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between text-white hover:text-cyan-400 transition-all"
                  >
                    <span className="text-xl font-bold">Verificar Autenticidade do Certificado</span>
                    <ExternalLink className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Trajetória Profissional - Resgate de Conteúdo */}
        <section id="trajetoria" className="py-24 px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">Trajetória Profissional</h2>
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

        {/* 8. Habilidades Técnicas */}
        <section id="habilidades" className="py-24 px-4 sm:px-6 lg:px-8 relative text-left">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">Habilidades Técnicas</h2>
            <p className="text-center text-[#94A3B8] mb-16 max-w-2xl mx-auto">
              Stack completo para desenvolvimento, marketing e automação
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-cyan-400">Back-end</h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Node.js + Express</li>
                  <li>✓ PHP + Laravel</li>
                  <li>✓ MySQL + PostgreSQL</li>
                  <li>✓ APIs REST</li>
                  <li>✓ Autenticação & Segurança</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-orange-400">DevOps</h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Linux (25+ anos)</li>
                  <li>✓ Docker & Containers</li>
                  <li>✓ Git & GitHub</li>
                  <li>✓ VPS & Cloud</li>
                  <li>✓ CI/CD Pipelines</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-indigo-400">Marketing Digital</h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Google Ads & GA4</li>
                  <li>✓ Meta Ads</li>
                  <li>✓ SEO On-page & Off-page</li>
                  <li>✓ Content Strategy</li>
                  <li>✓ ROI Mensurável</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-cyan-400">IA & Automação</h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ ChatGPT & LLMs</li>
                  <li>✓ Automação de Processos</li>
                  <li>✓ Google Cloud AI/ML</li>
                  <li>✓ Integrações Avançadas</li>
                  <li>✓ Prompt Engineering</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-orange-400">Finanças & Trading</h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Análise Técnica</li>
                  <li>✓ Trading (Índice & Dólar)</li>
                  <li>✓ Gestão de Risco</li>
                  <li>✓ Compliance</li>
                  <li>✓ Psicologia do Trading</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-indigo-400">Gestão Empresarial</h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Gestão de Pessoas</li>
                  <li>✓ Planejamento Estratégico</li>
                  <li>✓ Transformação Digital</li>
                  <li>✓ Gestão de Projetos</li>
                  <li>✓ Liderança & Mentoria</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-cyan-400">Idiomas</h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Português (Nativo)</li>
                  <li>✓ Inglês (Avançado)</li>
                  <li>✓ Comunicação Global</li>
                  <li>✓ 1.5 anos Cambly</li>
                  <li>✓ Pronto para Mercado Int'l</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Galeria Pessoal */}
        <section id="galeria" className="section-standard text-left">
          <div className="max-w-6xl mx-auto">
            <h2 className="title-standard text-center">Galeria Pessoal</h2>
            <p className="text-center text-[#94A3B8] mb-16 max-w-2xl mx-auto">
              Momentos que refletem a jornada profissional e a paixão por tecnologia
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-4 hover:scale-105 transition-transform text-center">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/no-meu-quarto_998b2075.jpg" 
                  alt="Pedro Uva" 
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-[#94A3B8] mt-4 text-sm font-medium">Home Office: Estratégia e Planejamento</p>
              </div>

              <div className="glass-card p-4 hover:scale-105 transition-transform text-center">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/pedro_uva-trader-profissional-do-mercado-financeiro_9dabad75.jpg" 
                  alt="Pedro Uva - Trader Profissional" 
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-[#94A3B8] mt-4 text-sm">Trader Profissional do Mercado Financeiro</p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Filosofia Profissional */}
        <section id="filosofia" className="section-standard text-left">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-indigo-500/5" />
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="title-standard text-center">Filosofia Profissional</h2>

            <div className="space-y-6">
              <div className="glass-card p-8 border-cyan-500/50">
                <h3 className="text-xl font-bold mb-3 text-cyan-400">🎯 Propósito Acima de Tudo</h3>
                <p className="text-[#94A3B8]">
                  Recuso projetos que não estejam alinhados com meus valores. Busco trabalho com "alma" — que gere impacto real, aprendizado contínuo e contribuição genuína para a comunidade.
                </p>
              </div>

              <div className="glass-card p-8 border-indigo-500/50">
                <h3 className="text-xl font-bold mb-3 text-indigo-400">🔄 Aprendizado Contínuo</h3>
                <p className="text-[#94A3B8]">
                  Nunca parei de estudar. Mesmo sem diplomas formais completos, acumulei conhecimento equivalente ou superior a muitas graduações, com a vantagem da aplicação prática imediata.
                </p>
              </div>

              <div className="glass-card p-8 border-orange-500/50">
                <h3 className="text-xl font-bold mb-3 text-orange-400">💪 Resiliência como Competência</h3>
                <p className="text-[#94A3B8]">
                  As crises enfrentadas — falências, demissões, problemas familiares, fracassos de negócios — não me paralisaram. Em cada uma, extraí aprendizado e recomeçei mais forte.
                </p>
              </div>

              <div className="glass-card p-8 border-cyan-500/50">
                <h3 className="text-xl font-bold mb-3 text-cyan-400">🌍 Ubuntu nos Negócios</h3>
                <p className="text-[#94A3B8]">
                  "Eu sou porque nós somos". Valorizo parcerias ganha-ganha, construo comunidades, promovo transparência, colaboração e meritocracia em tudo que faço.
                </p>
              </div>

              <div className="glass-card p-8 border-indigo-500/50">
                <h3 className="text-xl font-bold mb-3 text-indigo-400">🚀 Liberdade Geográfica & Autonomia</h3>
                <p className="text-[#94A3B8]">
                  Sonho com liberdade geográfica (motorhome, Starlink) e autonomia profissional: trabalhar de qualquer lugar, com projetos significativos, sem amarras corporativas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Certificações & Reconhecimento */}
        <section id="certificacoes" className="section-standard text-left">
          <div className="max-w-6xl mx-auto">
            <h2 className="title-standard text-center">Certificações & Reconhecimento</h2>
            <p className="text-center text-[#94A3B8] mb-16 max-w-2xl mx-auto">
              Formação contínua e reconhecimento de expertise
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="glass-card p-6 text-center">
                <p className="text-3xl font-bold text-indigo-400 mb-2">33</p>
                <p className="text-[#94A3B8]">Certificações Oficiais</p>
                <p className="text-sm text-cyan-400 mt-2">Google, Oracle, Goobec, Qualifica SP</p>
              </div>
              <div className="glass-card p-6 text-center">
                <p className="text-3xl font-bold text-cyan-400 mb-2">25</p>
                <p className="text-[#94A3B8]">Google Cloud Skill Badges</p>
                <p className="text-sm text-orange-400 mt-2">IA, ML, Cloud Infrastructure</p>
              </div>
              <div className="glass-card p-6 text-center">
                <p className="text-3xl font-bold text-orange-400 mb-2">22K+</p>
                <p className="text-[#94A3B8]">Seguidores no LinkedIn</p>
                <p className="text-sm text-indigo-400 mt-2">Autoridade em Tech & Empreendedorismo</p>
              </div>
            </div>

            <div className="glass-card p-8 border-cyan-500/50">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Formação Continuada</h3>
              <ul className="space-y-3 text-[#94A3B8]">
                <li>✓ <strong>Tecnólogo em Desenvolvimento de Sistemas</strong> - FAT/Fatec (2025-2026)</li>
                <li>✓ <strong>Oracle ONE</strong> - Programa de 12 meses em Desenvolvimento (2024-2025)</li>
                <li>✓ <strong>Google Cloud Skills Boost</strong> - 25 Skill Badges em IA/ML (2024-2026)</li>
                <li>✓ <strong>Marketing Digital</strong> - Goobec (Google Partner) - Google Ads, Meta Ads, GA4</li>
                <li>✓ <strong>Gestão de Projetos de TI</strong> - Qualifica SP</li>
                <li>✓ <strong>Inglês Avançado</strong> - Cambly (1.5 anos com nativos)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 12. CTA Final */}
        <section id="contatofinal" className="section-standard">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0F172A] via-indigo-900/30 to-[#0F172A]" />
          
          <div className="max-w-5xl mx-auto relative z-10 text-center glass-card p-16 md:p-32 border border-cyan-500/20 shadow-[0_0_150px_rgba(34,211,238,0.15)]">
            <h2 className="title-standard tracking-tighter">
              Pronto para executar <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">no mais alto nível?</span>
            </h2>
            <p className="text-2xl text-[#94A3B8] mb-16 max-w-3xl mx-auto leading-relaxed">
              Pare de aceitar uma execução mediana. Vamos projetar o crescimento digital que revoluciona seu mercado e amplia suas operações globalmente.
            </p>

            <button 
              onClick={() => window.open(whatsappLink, '_blank')}
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
