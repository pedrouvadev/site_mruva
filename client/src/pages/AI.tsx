import { lazy, Suspense, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Brain, Zap, Database, Shield } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function AI() {
  // SEO Configuration para página de IA
  useSEO({
    title: "Desenvolvimento de Agentes de IA | Consultoria em IA Generativa São Paulo",
    description: "Crie agentes de IA personalizados e automatize seus processos. Consultoria em IA Generativa, LLMs e Automação Inteligente em São Paulo. Aumente produtividade em até 10x.",
    keywords: "Desenvolvimento de Agentes de IA, Consultoria IA Generativa, Automação com IA, LLMs, ChatGPT integração, IA para negócios, São Paulo",
    ogTitle: "Agentes de IA Personalizados | Mr. Uva",
    ogDescription: "Transforme seu negócio com Inteligência Artificial. Desenvolvimento de agentes de IA, automação de processos e soluções de IA generativa.",
    canonicalUrl: "https://mruva.com.br/ia",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Desenvolvimento de Agentes de IA",
      "description": "Serviço de desenvolvimento e implementação de agentes de inteligência artificial personalizados para empresas.",
      "provider": {
        "@type": "Organization",
        "name": "Mr. Uva",
        "url": "https://mruva.com.br",
        "telephone": "+55-11-97876-8690",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "São Paulo",
          "addressRegion": "SP",
          "addressCountry": "BR"
        }
      },
      "areaServed": "BR",
      "serviceType": "Consultoria e Desenvolvimento de IA"
    }
  });

  const whatsappLink =
    "https://wa.me/5511978768690?text=Olá%20Pedro!%20Tenho%20interesse%20em%20implementar%20agentes%20de%20IA%20na%20minha%20empresa.";

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
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/hero-3d-neon-ETM4gefM3NZLJ3bB38yXCc.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex justify-center animate-fade-in">
            <div className="glass-card px-4 py-2 text-sm font-semibold text-cyan-400 inline-flex items-center gap-2 border border-cyan-500/30 uppercase tracking-widest">
              <Brain className="w-4 h-4" /> IA & Google Cloud • 25 Skill Badges
            </div>
          </div>

          <h1 className="title-standard animate-fade-in animation-delay-100 tracking-tighter">
            Construo <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">Agentes de Inteligência Artificial</span>, Não Apenas a Uso
          </h1>

          <p className="mb-12 max-w-4xl mx-auto text-xl text-[#94A3B8] font-medium animate-fade-in animation-delay-200">
            Desenvolvimento de agentes de IA personalizados que automatizam processos, aumentam produtividade e transformam dados em decisões estratégicas. Consultoria em IA Generativa, LLMs e Automação Inteligente para empresas que querem liderar o mercado.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in animation-delay-300">
            <Button
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              Solicitar Consultoria em IA <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Seção: O que são Agentes de IA */}
      <section className="section-standard bg-[#0B1120]">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="title-standard text-4xl md:text-5xl font-bold mb-8">
                O Que São <span className="text-cyan-400">Agentes de IA</span>?
              </h2>
              <p className="text-lg text-[#94A3B8] mb-6 leading-relaxed">
                Agentes de IA são sistemas autônomos que tomam decisões, executam tarefas e se adaptam sem intervenção humana constante. Diferente de chatbots simples, os agentes de IA podem:
              </p>
              <ul className="space-y-4">
                {[
                  "Analisar dados complexos e gerar insights em tempo real",
                  "Automatizar fluxos de trabalho inteiros sem supervisão",
                  "Integrar-se com seus sistemas existentes (APIs, bancos de dados)",
                  "Aprender com padrões e melhorar continuamente",
                  "Escalar operações sem aumentar custos proporcionalmente"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#CBD5E1]">
                    <div className="bg-cyan-500/20 p-2 rounded-full h-fit mt-1">
                      <Zap className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative animate-fade-in animation-delay-200">
              <div className="bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-2xl p-8 border border-cyan-500/30">
                <Brain className="w-32 h-32 text-cyan-400 mx-auto mb-6" />
                <p className="text-center text-[#94A3B8] text-lg">
                  Agentes de IA que trabalham 24/7 para o seu negócio crescer com previsibilidade e ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Benefícios da Consultoria em IA */}
      <section className="section-standard">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="title-standard text-4xl md:text-5xl font-bold">
              Benefícios da <span className="text-indigo-400">Consultoria em IA Generativa</span>
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto font-medium mt-4">
              Implementação estratégica de IA para aumentar produtividade, reduzir custos e criar novas oportunidades de negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Automação de Processos",
                description: "Elimine tarefas repetitivas e libere sua equipe para trabalho estratégico. Aumento de produtividade de até 10x."
              },
              {
                icon: Database,
                title: "Análise Preditiva",
                description: "Tome decisões baseadas em dados. Agentes de IA analisam padrões e preveem tendências do mercado."
              },
              {
                icon: Shield,
                title: "Segurança e Conformidade",
                description: "Implementação segura com dados estruturados, conformidade LGPD e proteção de informações sensíveis."
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="glass-card p-8 hover:border-cyan-500/50 transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="bg-cyan-500/20 p-4 rounded-xl w-fit mb-6">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-[#94A3B8] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção: Casos de Uso */}
      <section className="section-standard bg-[#0B1120]">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="title-standard text-4xl md:text-5xl font-bold">
              Casos de Uso de <span className="text-cyan-400">Agentes de IA</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Atendimento ao Cliente",
                description: "Chatbots inteligentes que resolvem 80% das dúvidas sem intervenção humana, reduzindo custos de suporte."
              },
              {
                title: "Análise de Dados em Tempo Real",
                description: "Agentes que monitoram métricas, identificam anomalias e alertam sua equipe automaticamente."
              },
              {
                title: "Automação de Marketing",
                description: "Segmentação de público, personalização de mensagens e otimização de campanhas com IA."
              },
              {
                title: "Gestão de Inventário",
                description: "Previsão de demanda, otimização de estoque e redução de desperdícios com machine learning."
              }
            ].map((useCase, i) => (
              <div
                key={i}
                className="glass-card p-8 border-l-4 border-cyan-500/50 hover:border-cyan-400 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">{useCase.title}</h3>
                <p className="text-[#94A3B8] text-lg leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-standard">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="title-standard text-4xl md:text-5xl font-bold mb-8">
            Pronto para Transformar Seu Negócio com <span className="text-cyan-400">IA?</span>
          </h2>
          <p className="text-xl text-[#94A3B8] mb-12 font-medium">
            Agende uma consultoria gratuita e descubra como agentes de IA podem impulsionar seu crescimento.
          </p>
          <Button
            className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            Solicitar Consultoria Gratuita <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
