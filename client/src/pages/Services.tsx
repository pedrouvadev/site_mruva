import { ArrowRight, Code2, TrendingUp, Brain, Zap, CheckCircle2, MessageCircle, Rocket, Shield, Target } from "lucide-react";
import { useLocation } from "wouter";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Services() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappLink = "https://wa.me/5511978768690?text=Olá%20Pedro!%20Vi%20seus%20serviços%20e%20quero%20elevar%20o%20nível%20do%20meu%20projeto.";

  const services = [
    {
      icon: Code2,
      title: "Desenvolvimento Full-Stack",
      headline: "Construo aplicações que não apenas funcionam, mas escalam.",
      description: "Eu desenvolvo sistemas robustos, rápidos e seguros. Do banco de dados à interface, utilizo o que há de mais moderno (React 19, Node.js, TypeScript) para entregar uma experiência impecável ao seu usuário final.",
      features: ["Aplicações Web de Alta Performance", "Sistemas Escaláveis e Seguros", "Interfaces Modernas (UI/UX)", "Integração de APIs e Bancos de Dados", "Arquitetura Limpa e Manutenível"],
      cta: "Quero meu sistema",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital & Growth",
      headline: "Transformo cliques em faturamento real com estratégia baseada em dados.",
      description: "Não acredito em &quot;métricas de vaidade&quot; Minha abordagem foca no ROI. Utilizo Google Ads, Meta Ads e SEO avançado para colocar sua marca na frente de quem realmente quer comprar de você.",
      features: ["Gestão de Tráfego Pago (Google/Meta)", "SEO Técnico para Rankeamento Real", "Análise de Dados e Funis de Conversão", "Estratégias de Growth Hacking", "Otimização de Taxa de Conversão (CRO)"],
      cta: "Quero vender mais",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Brain,
      title: "IA & Automação Inteligente",
      headline: "Coloco a Inteligência Artificial para trabalhar pelo seu lucro.",
      description: "Integro LLMs (como GPT-4) e automações de fluxo para eliminar tarefas repetitivas e aumentar a produtividade da sua equipe em até 10x. Tecnologia de ponta aplicada ao seu operacional.",
      features: ["Integração de LLMs e Agentes de IA", "Automação de Fluxos de Trabalho", "Chatbots Inteligentes de Atendimento", "Prompt Engineering Especializado", "Análise Preditiva de Dados"],
      cta: "Automatizar meu negócio",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Consultoria de Transformação Digital",
      headline: "Modernizo seu modelo de negócio para a era da IA.",
      description: "Eu faço um diagnóstico profundo da sua operação e desenho o roadmap tecnológico. Unimos código, marketing e gestão ágil para garantir que sua empresa lidere o mercado, não apenas sobreviva.",
      features: ["Diagnóstico Tecnológico Completo", "Planejamento Estratégico Digital", "Implementação de Cultura Ágil (Scrum)", "Mentoria em Tecnologia e Inovação", "Suporte e Evolução Contínua"],
      cta: "Transformar minha empresa",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] overflow-hidden relative font-sans selection:bg-cyan-500/30">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />
      
      <div className="relative z-10">
        <Header showStatus={true} />
        
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      </div>

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
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
          <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/90 to-[#0F172A]" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 flex justify-center animate-fade-in">
              <div className="glass-card px-4 py-2 text-sm md:text-base font-semibold text-cyan-400 inline-flex items-center gap-2 border border-cyan-500/30">
                <Target className="w-4 h-4" /> Soluções de Alta Performance
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in animation-delay-100 tracking-tight">
              Estratégia e tecnologia para <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">escalar vendas com previsibilidade e ROI</span>            
            </h1>

            <p className="text-xl md:text-2xl text-[#94A3B8] mb-10 max-w-3xl mx-auto animate-fade-in animation-delay-200 leading-relaxed">
              Mais que serviços, projeto a evolução do seu negócio. Com mais de 25 anos no campo de batalha da tecnologia e dos negócios, uno <strong className="text-white">Código de Elite</strong>, <strong className="text-white">Marketing de Dados</strong> e <strong className="text-white">Inteligência Artificial</strong> para escalar sua operação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-300">
              <Button 
                className="btn-gradient text-lg py-7 px-10 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] transition-all duration-300"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Solicitar Diagnóstico Estratégico <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Serviços Detalhados */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0B1120]">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Como posso <span className="text-cyan-400">alavancar seu negócio?</span></h2>
              <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
                Cada projeto que assumo é tratado com rigor técnico e visão de dono. Escolha o pilar que sua empresa precisa fortalecer hoje:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index}
                    className="glass-card p-10 hover:border-cyan-500/50 transition-all duration-500 animate-fade-in group flex flex-col h-full"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`bg-gradient-to-br ${service.color} p-4 rounded-xl w-fit mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-3xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-cyan-400 font-semibold mb-4 text-lg">{service.headline}</p>
                    <p className="text-[#94A3B8] mb-8 leading-relaxed text-lg flex-grow">{service.description}</p>

                    <div className="mb-10">
                      <ul className="space-y-4">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-[#CBD5E1]">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                            <span className="text-lg">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button 
                      onClick={() => window.open(whatsappLink, '_blank')}
                      className="w-full btn-gradient py-5 text-xl font-bold flex items-center justify-center gap-3 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                    >
                      {service.cta} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Diferenciais / Por que eu? */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Por que confiar o seu projeto <span className="text-indigo-400">nas minhas mãos?</span></h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="bg-indigo-500/10 p-4 rounded-full h-fit border border-indigo-500/20">
                      <Shield className="w-8 h-8 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2">Segurança e Transparência</h4>
                      <p className="text-[#94A3B8] text-lg">Trabalho com metodologias ágeis (Scrum/Kanban). Você sabe exatamente o que está sendo feito, em tempo real, sem surpresas no orçamento.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="bg-cyan-500/10 p-4 rounded-full h-fit border border-cyan-500/20">
                      <Rocket className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2">Visão 360º de Negócio</h4>
                      <p className="text-[#94A3B8] text-lg">Eu não sou apenas um programador. Sou um estrategista. Meu objetivo é fazer sua empresa lucrar mais através da tecnologia.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass-card p-4 relative animate-fade-in animation-delay-200">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-2xl blur opacity-10" />
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/pedrouva_3x4_55f0cfe1.png" 
                  alt="Pedro Uva - Estrategista Digital" 
                  className="relative w-full h-auto rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0F172A] via-indigo-900/20 to-[#0F172A]" />
          <div className="max-w-4xl mx-auto relative z-10 text-center glass-card p-12 md:p-20 border border-cyan-500/20 shadow-[0_0_100px_rgba(34,211,238,0.1)]">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Vamos tirar sua ideia <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">do papel agora?</span>
            </h2>
            <p className="text-xl text-[#94A3B8] mb-12 max-w-2xl mx-auto">
              Estou pronto para aplicar minha experiência e as melhores tecnologias do mercado no seu próximo grande desafio.
            </p>

            <button 
              onClick={() => window.open(whatsappLink, '_blank')}
              className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 text-2xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full hover:scale-105 shadow-[0_0_40px_rgba(34,211,238,0.4)]"
            >
              <MessageCircle className="w-7 h-7" />
              Falar diretamente comigo
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
