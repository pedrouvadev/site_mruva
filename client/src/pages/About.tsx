import { ArrowRight, Code2, Briefcase, Zap, Globe, Users, TrendingUp } from "lucide-react";
import { useLocation } from "wouter";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  const [, navigate] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] overflow-hidden relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/50 to-[#0F172A]" />
      
      <div className="relative z-10">
        <Header />

      {/* Hero Section com Foto */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
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
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/50 to-[#0F172A]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div>
              <div className="mb-6 flex justify-start">
                <div className="glass-card px-4 py-2 text-sm md:text-base font-semibold text-cyan-400 inline-block max-w-full leading-relaxed">
                  👨‍💻 Desenvolvedor & Estrategista Digital
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">Pedro Uva</span>
              </h1>

              <p className="text-lg md:text-xl text-[#94A3B8] mb-8 max-w-2xl">
                Mais de 25 anos de experiência em tecnologia. Transformo ideias em soluções digitais escaláveis, combinando rigor técnico com visão estratégica de negócios.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => navigate("/marketing")}
                  className="btn-gradient text-lg py-6 flex items-center justify-center gap-2"
                >
                  Conhecer Serviços <ArrowRight className="w-5 h-5" />
                </button>
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
                <li>✓ Autenticação & Segurança</li>
              </ul>
            </div>

            {/* DevOps */}
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

            {/* Marketing */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-indigo-400">Marketing Digital</h3>
              <ul className="space-y-2 text-[#94A3B8] text-sm">
                <li>✓ Google Ads & GA4</li>
                <li>✓ Meta Ads (Facebook/Instagram)</li>
                <li>✓ SEO On-page & Off-page</li>
                <li>✓ Content Strategy</li>
                <li>✓ ROI Mensurável</li>
              </ul>
            </div>

            {/* IA & Automação */}
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

            {/* Finanças */}
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

            {/* Gestão */}
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

            {/* Idiomas */}
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

      {/* Galeria Pessoal */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Galeria Pessoal</h2>
          <p className="text-center text-[#94A3B8] mb-16 max-w-2xl mx-auto">
            Momentos que refletem a jornada profissional e a paixão por tecnologia
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Foto 1 */}
            <div className="glass-card p-4 hover:scale-105 transition-transform">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/no-meu-quarto_998b2075.jpg" 
                alt="Pedro Uva" 
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-[#94A3B8] mt-4 text-sm">Momento de criação e reflexão</p>
            </div>

            {/* Foto 2 */}
            <div className="glass-card p-4 hover:scale-105 transition-transform">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/pedro_uva-trader-profissional-do-mercado-financeiro_9dabad75.jpg" 
                alt="Pedro Uva - Trader Profissional" 
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-[#94A3B8] mt-4 text-sm">Trader Profissional do Mercado Financeiro</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia Profissional */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-indigo-500/5" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">Filosofia Profissional</h2>

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

      {/* Certificações & Reconhecimento */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Certificações & Reconhecimento</h2>
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

      {/* CTA Final */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-cyan-500/10" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Colaborar?</h2>
          <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            Tenho experiência em desenvolvimento full stack, marketing digital, transformação digital e consultoria estratégica. Vamos criar algo extraordinário juntos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511978768690" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-gradient text-lg py-6 flex items-center justify-center gap-2"
            >
              Agendar Call <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mruva/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card px-8 py-6 text-lg font-semibold hover:border-cyan-400/50 transition-all flex items-center justify-center gap-2"
            >
              Conectar no LinkedIn <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </div>
  );
}
