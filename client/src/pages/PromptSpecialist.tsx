import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { NeonBentoCard, ServiceCTA } from '@/components/services';
import {
  Target,
  Lightbulb,
  Brain,
  Rocket,
  CheckCircle,
  Sparkles,
  Zap,
  TrendingUp,
  MessageSquare,
  Code,
  BarChart3,
  Users,
  ArrowRight,
  Bot,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// SEO & GEO Meta Tags Component
function SEOMetaTags() {
  useEffect(() => {
    // Update title
    document.title = 'Prompt Specialist: Arquiteturas de Linguagem que Vendem | Mr. Uva';

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Projetos prompts avançados com chain-of-thought, few-shot examples e calibração técnica. Transformo GPT, Claude e Gemini em especialistas do seu negócio. Garantia de resultado em 30 dias.';

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Prompt Specialist: Arquiteturas de Linguagem que Vendem | Mr. Uva' },
      { property: 'og:description', content: 'Projetos prompts avançados com chain-of-thought, few-shot examples e calibração técnica. Transformo LLMs em especialistas do seu negócio.' },
      { property: 'og:image', content: '/og/prompt-specialist.jpg' },
      { property: 'og:image:alt', content: 'Prompt Specialist Mr. Uva – criando inteligências de IA que vendem' },
      { property: 'og:url', content: 'https://mruva.com.br/servicos/prompt-specialist' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'pt_BR' },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        (tag as any).property = property;
        document.head.appendChild(tag);
      }
      tag.content = content;
    });

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Prompt Specialist: Prompts que Fazem Qualquer IA Trabalhar por Você' },
      { name: 'twitter:description', content: 'Crio inteligências que obedecem, convertem e viralizam. Personas de IA para GPT, Claude, Gemini.' },
      { name: 'twitter:image', content: '/og/prompt-specialist.jpg' },
    ];

    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    });

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://mruva.com.br/servicos/prompt-specialist';

    // JSON-LD Schema
    const schemaScript = document.getElementById('prompt-specialist-schema');
    if (schemaScript) {
      schemaScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'prompt-specialist-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': 'https://mruva.com.br/servicos/prompt-specialist#service',
          name: 'Prompt Specialist',
          description:
            'Serviço de criação de prompts avançados e personas de IA para GPT, Claude, Gemini, Grok e Llama. +30% de conversão garantido.',
          provider: {
            '@type': 'Person',
            name: 'Pedro Uva',
            url: 'https://mruva.com.br',
          },
          areaServed: {
            '@type': 'Place',
            name: 'Brasil',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Serviços de Prompt Specialist',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Persona IA Sob Medida',
                  description: 'Vendedor, Consultor, Criativo, Atendente, Advogado, Publicitário',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Copy para Multiplataforma',
                  description: 'Google Ads, Instagram, WhatsApp, e-mail e landing pages',
                },
              },
            ],
          },
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://mruva.com.br/servicos/prompt-specialist#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'O que é uma sessão de Prompt Specialist?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Uma sessão onde analisamos seu negócio e criamos personas de IA sob medida que convertem visitantes em clientes, com gatilhos mentais e copy persuasiva.',
              },
            },
            {
              '@type': 'Question',
              name: 'Quanto tempo leva para ver resultados?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Os prompts são entregues prontos para uso imediato. A maioria dos clientes reporta aumento de conversão já na primeira semana de uso.',
              },
            },
          ],
        },
      ],
    });
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const schema = document.getElementById('prompt-specialist-schema');
      if (schema) {
        schema.remove();
      }
    };
  }, []);

  return null;
}

export default function PromptSpecialist() {
  const containerRef = useRef<HTMLDivElement>(null);
  const whatsappLink = "https://wa.me/5511978768690?text=Olá%20Pedro!%20Quero%20transformar%20minha%20IA%20em%20uma%20máquina%20de%20vendas.";

  useEffect(() => {
    window.scrollTo(0, 0);

    // GSAP Animations
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.hero-cta', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
      });

      // Card animations
      gsap.from('.bento-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.bento-grid',
          start: 'top 80%',
        },
      });

      // Feature animations
      gsap.from('.feature-item', {
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.features-section',
          start: 'top 80%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A]">
      <SEOMetaTags />
      <Header lang="pt" showStatus={true} />

      <div className="relative z-10" ref={containerRef}>
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-hero-image"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dtfsdkdu6/image/upload/v1775314243/pedrouva-prompt-specialist_wmn976.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 flex justify-center hero-title">
              <div className="glass-card px-4 py-2 text-sm font-semibold text-cyan-400 inline-flex items-center gap-2 border border-cyan-500/30 uppercase tracking-widest">
                <Sparkles className="w-4 h-4" /> Arquitetura de Linguagem IA
              </div>
            </div>

            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter">
              Eu Transformo{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Qualquer IA
              </span>{" "}
              Em uma{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Máquina de Vendas
              </span>
            </h1>

            <p className="hero-subtitle text-xl md:text-2xl text-[#94A3B8] max-w-4xl mx-auto mb-12 leading-relaxed">
              Engenharia de prompts avançada com chain-of-thought, few-shot examples e calibração técnica. 
              Eu faço GPT, Claude e Gemini obedecerem às regras do seu negócio e converterem visitantes em clientes.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="btn-gradient text-lg px-8 py-4 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                Transformar Minha IA Agora <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8 py-4 rounded-full font-bold transition-all duration-300"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Como Funciona
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">30%</div>
                <div className="text-sm text-cyan-400">Mais Conversão</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24h</div>
                <div className="text-sm text-purple-400">Entrega</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-sm text-pink-400">Plataformas IA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-green-400">Satisfação</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Como Eu Crio{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  IA Que Vende
                </span>
              </h2>
              <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
                Minha metodologia combina psicologia cognitiva, copywriting e precisão técnica
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Target className="w-8 h-8 text-cyan-400" />,
                  title: "1. Análise de Negócio",
                  description: "Eu estudo seu mercado, público e objetivos de conversão para projetar a persona IA perfeita.",
                },
                {
                  icon: <Brain className="w-8 h-8 text-purple-400" />,
                  title: "2. Arquitetura de Prompt",
                  description: "Eu crio estruturas chain-of-thought com gatilhos mentais e técnicas persuasivas.",
                },
                {
                  icon: <Rocket className="w-8 h-8 text-pink-400" />,
                  title: "3. Implantação Multiplataforma",
                  description: "Eu adapto os prompts para GPT, Claude, Gemini e outras plataformas com otimizações específicas.",
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-[#94A3B8] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                O Que Eu{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Crio Para Você
                </span>
              </h2>
              <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
                Personas IA especializadas para cada necessidade de negócio
              </p>
            </div>

            <div className="bento-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <NeonBentoCard title="Persona de Vendas" delay={0}>
                <Users className="w-6 h-6 text-cyan-400" />
                IA que vende naturalmente, supera objeções e fecha negócios
              </NeonBentoCard>
              <NeonBentoCard title="Especialista em Suporte" delay={0.1}>
                <MessageSquare className="w-6 h-6 text-purple-400" />
                Atendimento ao cliente que resolve problemas e aumenta satisfação
              </NeonBentoCard>
              <NeonBentoCard title="Consultor Técnico" delay={0.2}>
                <Code className="w-6 h-6 text-pink-400" />
                IA que explica conceitos complexos e guia implementação
              </NeonBentoCard>
              <NeonBentoCard title="Analista de Marketing" delay={0.3}>
                <BarChart3 className="w-6 h-6 text-orange-400" />
                IA que analisa dados e fornece insights estratégicos
              </NeonBentoCard>
              <NeonBentoCard title="Diretor Criativo" delay={0.4}>
                <Lightbulb className="w-6 h-6 text-yellow-400" />
                IA que gera ideias e cria conteúdo convincente
              </NeonBentoCard>
              <NeonBentoCard title="Solução Personalizada" delay={0.5}>
                <Bot className="w-6 h-6 text-green-400" />
                Persona IA personalizada para suas necessidades específicas de negócio
              </NeonBentoCard>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Excelência{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Técnica
                  </span>
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: <CheckCircle className="w-5 h-5 text-cyan-400" />,
                      title: "Chain-of-Thought",
                      description: "Raciocínio estruturado que guia IA para conclusões lógicas",
                    },
                    {
                      icon: <CheckCircle className="w-5 h-5 text-purple-400" />,
                      title: "Exemplos Few-Shot",
                      description: "Exemplos concretos que ensinam IA exatamente como responder",
                    },
                    {
                      icon: <CheckCircle className="w-5 h-5 text-pink-400" />,
                      title: "Calibração Técnica",
                      description: "Ajuste preciso de parâmetros para desempenho otimizado",
                    },
                    {
                      icon: <CheckCircle className="w-5 h-5 text-green-400" />,
                      title: "Otimização Multiplataforma",
                      description: "Ajustes específicos para cada plataforma IA",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="feature-item flex gap-4">
                      <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                        <p className="text-[#94A3B8]">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl" />
                <div className="relative bg-[#1E293B] border border-cyan-500/30 rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-white">Resultados Rápidos</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#94A3B8]">Tempo de Entrega</span>
                      <span className="text-cyan-400 font-bold">24 horas</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#94A3B8]">Integração</span>
                      <span className="text-purple-400 font-bold">Imediata</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#94A3B8]">Resultados</span>
                      <span className="text-pink-400 font-bold">Primeira semana</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#94A3B8]">Suporte</span>
                      <span className="text-green-400 font-bold">30 dias</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <ServiceCTA
          title="Pronto para Transformar Sua IA?"
          subtitle="Vamos criar prompts inteligentes que convertem, engajam e vendem"
          buttonText="Iniciar Minha Transformação IA"
          buttonHref={whatsappLink}
        />

        <Footer />
      </div>
    </div>
  );
}
