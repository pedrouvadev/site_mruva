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
        tag.setAttribute('property', property);
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
            {
              '@type': 'Question',
              name: 'Funciona com qualquer IA?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sim! Nossos prompts são otimizados para GPT, Claude, Gemini, Grok, Llama e outros modelos de linguagem.',
              },
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://mruva.com.br/servicos/prompt-specialist#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://mruva.com.br',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Serviços',
              item: 'https://mruva.com.br/servicos',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Prompt Specialist',
              item: 'https://mruva.com.br/servicos/prompt-specialist',
            },
          ],
        },
      ],
    });
    document.head.appendChild(script);

    return () => {
      const schema = document.getElementById('prompt-specialist-schema');
      if (schema) schema.remove();
    };
  }, []);

  return null;
}

// Benefits Section Component
function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.benefit-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Persona Cognitiva de IA',
      description: 'Mapeio o perfil comportamental ideal: se seu negócio precisa de um consultor consultivo, um vendedor agressivo ou um criativo ousado, codifico essa personalidade em instruções de system prompt, definindo tom, vocabulário e abordagem de argumentação.',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Estrutura Multi-Contexto',
      description: 'Cada prompt inclui camadas de contexto: briefings de produto, perfis de cliente-alvo, objeções comuns e respostas — tudo organizado em few-shot examples que treinam a IA a reagir como você reagiria nas melhores situações.',
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Calibração Técnica',
      description: 'Ajusto parâmetros de inferência (temperature, top-p, frequency penalty) e aplico técnicas como chain-of-thought prompting e ReAct para maximizar a qualidade das respostas. Resultado mensurável em conversão e engajamento.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
          O que entrego na sua sessão de {' '}
          <span className="text-cyan-400">Prompt Specialist</span>:
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-item group p-8 rounded-2xl backdrop-blur-xl bg-slate-900/50 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-slate-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Quote Block Component
function QuoteBlock() {
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!quoteRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, quoteRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A]">
      <div ref={quoteRef} className="max-w-4xl mx-auto">
        <div className="relative p-8 sm:p-12 rounded-3xl backdrop-blur-xl bg-slate-900/70 border border-cyan-400/30 overflow-hidden">
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-3xl border-2 border-cyan-400/0 animate-pulse" />

          {/* Decorative gradient */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 leading-tight">
              Ao final do projeto, você não tem "um texto legal". Tem{' '}
              <span className="text-cyan-400">uma máquina de conversão</span> que entende seu negócio melhor que muitos funcionários.
            </blockquote>

            <div className="text-center">
              <p className="text-xl text-indigo-300 font-semibold italic mb-4">
                "Não uso IA. Construo sistemas de linguagem que vendem."
              </p>
              <p className="text-slate-400 text-sm">
                Metodologia aplicada: 5 camadas de contexto, raciocínio hierárquico, few-shots do seu nicho, e calibração técnica fina. Resultado? Conteúdo que converte 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonial Section
function TestimonialSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Por que esses prompts funcionam enquanto outros falham?
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          A diferença está na arquitetura. Não copio templates — construo sistemas de linguagem baseados em engenharia de prompt avançada.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NeonBentoCard
            title="Arquitetura de Contexto em Camadas"
            icon={<Target className="w-6 h-6 text-cyan-400" />}
            delay={0}
          >
            Os prompts são projetados com 5 blocos hierárquicos seguindo a seguinte lógica: fundamentos de negócio, visão estratégica, execução tática, monitoramento e otimização contínua. Cada camada alimenta a próxima, criando uma cadeia de raciocínio que gera respostas coerentes e estratégicas, não genéricas.
          </NeonBentoCard>

          <NeonBentoCard
            title="Raciocínio em Cadeia (Chain-of-Thought)"
            icon={<Lightbulb className="w-6 h-6 text-cyan-400" />}
            delay={0.1}
          >
            Em vez de pedir respostas diretas, instruo a IA a "pensar em voz alta" primeiro. Isso ativa o raciocínio de múltiplos passos, reduzindo alucinações e aumentando a precisão. O resultado é conteúdo que convence porque foi construído logicamente, não improvisado.
          </NeonBentoCard>

          <NeonBentoCard
            title="Gatilhos Comportamentais Codificados"
            icon={<Brain className="w-6 h-6 text-cyan-400" />}
            delay={0.2}
          >
            Princípios de psicologia aplicada (reciprocidade, autoridade, escassez, prova social) são traduzidos em instruções explícitas para a IA. Não é sobre manipulação — é sobre alinhar a comunicação com como o cérebro humano naturalmente processa decisões de compra.
          </NeonBentoCard>

          <NeonBentoCard
            title="Few-Shot Examples Contextualizados"
            icon={<Rocket className="w-6 h-6 text-cyan-400" />}
            delay={0.3}
          >
            Cada prompt inclui exemplos reais do seu nicho: como responder objeções específicas, como apresentar propostas, como fechar vendas. A IA aprende pelo padrão, não pela descrição — e isso muda completamente a qualidade do output.
          </NeonBentoCard>

          <NeonBentoCard
            title="Validação do Teste do Uber Driver"
            icon={<CheckCircle className="w-6 h-6 text-cyan-400" />}
            delay={0.4}
            className="sm:col-span-2 lg:col-span-2"
          >
            Todo prompt entregue passa pelo critério de clareza extrema: se um motorista de Uber entender o valor em 30 segundos de leitura, está aprovado. Técnico o suficiente para gerar resultados. Simples o suficiente para ser usado. Essa é a obsessão que move cada projeto.
          </NeonBentoCard>
        </div>
      </div>
    </section>
  );
}

// FAQ Section for GEO
function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      q: 'O que exatamente é entregue numa sessão de Prompt Specialist?',
      a: 'A entrega é uma arquitetura de prompt completa: system prompt com persona cognitiva definida, chain-of-thought instructions, few-shot examples do seu nicho, parâmetros de inferência calibrados (temperature, top-p), e um guia de uso. É como ter um manual de instruções pro seu modelo de IA virar um especialista do seu negócio.',
    },
    {
      q: 'Como garantir que os prompts vão funcionar pro meu negócio específico?',
      a: 'Antes de escrever qualquer linha, faço uma análise de contexto: estudo seu produto, concorrência, público-alvo e objeções comuns. Os prompts incluem camadas de contexto específicas — não é tentativa de adivinhar, é codificação do seu conhecimento de negócio em instruções que a IA segue à risca.',
    },
    {
      q: 'Funciona com qualquer IA? GPT, Claude, Gemini?',
      a: 'Sim. Os prompts são projetados seguindo princípios universais de engenharia de linguagem: contexto hierárquico, raciocínio em cadeia, few-shot learning. Essas técnicas funcionam em qualquer LLM moderno — GPT-4, Claude 3, Gemini 1.5, Grok, Llama 3. Você escolhe a plataforma, adapto a calibração.',
    },
    {
      q: 'Qual a garantia de resultado oferecida?',
      a: 'Garantia técnica de 30 dias: se você não medir melhora nos KPIs de conversão (taxa de resposta, leads qualificados, fechamentos), devolvo 100% do investimento. O trabalho é baseado em metodologia testada — ciência aplicada à linguagem, não chute.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Dúvidas sobre como {' '}
          <span className="text-cyan-400">projeto prompts</span>?
        </h2>
        <p className="text-center text-slate-400 mb-12">
          Tire suas dúvidas sobre engenharia de linguagem e como LLMs são transformados em especialistas do seu negócio
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item p-6 rounded-xl backdrop-blur-xl bg-slate-900/50 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-3">
                <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                {faq.q}
              </h3>
              <p className="text-slate-300 pl-8">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Internal Links Section for SEO
function InternalLinksSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0F172A] border-t border-cyan-500/10">
      <div className="max-w-6xl mx-auto">
        <p className="text-slate-400 text-sm mb-4">Continue explorando meu trabalho:</p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/ia"
            className="px-4 py-2 rounded-full text-sm bg-slate-800/50 border border-cyan-400/20 text-cyan-400 hover:bg-cyan-500/10 transition-colors"
          >
            IA & Google Cloud
          </a>
          <a
            href="/servicos"
            className="px-4 py-2 rounded-full text-sm bg-slate-800/50 border border-cyan-400/20 text-cyan-400 hover:bg-cyan-500/10 transition-colors"
          >
            Todos os Serviços
          </a>
          <span className="px-4 py-2 rounded-full text-sm bg-slate-800/30 border border-slate-700/50 text-slate-500">
            Em breve: Growth Marketing
          </span>
          <span className="px-4 py-2 rounded-full text-sm bg-slate-800/30 border border-slate-700/50 text-slate-500">
            Em breve: Agentes de IA
          </span>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function PromptSpecialist() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A]">
      <SEOMetaTags />
      <Header lang="pt" showStatus={true} />

      <div className="relative z-10">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-10" />
      </div>

      <main>
        {/* Hero Section - Padrão Formações */}
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.4,
            }}
          />
          <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            <div className="mb-6 flex justify-center animate-fade-in">
              <div className="glass-card px-4 py-2 text-sm md:text-base font-semibold text-cyan-400 inline-flex items-center gap-2 border border-cyan-500/30 uppercase tracking-widest">
                <Bot className="w-4 h-4" /> Engenharia de Prompts Avançada
              </div>
            </div>

            {/* H1 */}
            <h1 className="title-standard animate-fade-in animation-delay-100 tracking-tighter">
              Prompts que Fazem Qualquer{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                IA Trabalhar
              </span>{' '}
              por Você
            </h1>

            {/* Subtitle */}
            <p className="mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-200 text-xl text-slate-300">
              Não se trata de escrever prompts genéricos. O foco é em <strong className="text-white">projetar arquiteturas de linguagem</strong> que transformam qualquer LLM em um especialista do seu negócio. Os prompts são sistemas estruturados em camadas, com raciocínio hierárquico, gatilhos comportamentais e instruções de contexto que fazem a IA entender não só o que dizer, mas como pensar.
            </p>

            {/* Description */}
            <p className="mb-12 max-w-4xl mx-auto animate-fade-in animation-delay-300 font-medium text-slate-400">
              Ao contratar este serviço, você investe em engenharia de prompt que inclui: análise semântica do seu mercado, definição de persona cognitiva da IA, estruturação de few-shot contextualizados, e calibração de temperature e top-p para otimizar criatividade vs precisão. O resultado? Uma IA que vende como você vende, sem fadiga e sem erro humano.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in animation-delay-400">
              <Button 
                className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
                onClick={() => window.open('https://wa.me/5511978768690', '_blank')}
              >
                Agendar Sessão Agora <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>

            {/* Warning */}
            <p className="text-sm text-[#94A3B8] italic animate-fade-in animation-delay-500">
              ⚡ Garantia técnica: se em 30 dias você não medir melhora nos KPIs de conversão, devolvo 100% do investimento. O trabalho é ciência, não sorte.
            </p>
          </div>
        </section>

        {/* Testimonial / Why section */}
        <TestimonialSection />

        {/* Quote Block */}
        <QuoteBlock />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* CTA Section */}
        <ServiceCTA
          title="Cansado de prompts genéricos que não convertem?"
          subtitle="Vou projetar uma arquitetura de linguagem específica pro seu negócio."
          buttonText="Quero minha Persona IA agora"
          buttonHref="https://wa.me/5511978768690"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-slate-300">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>System prompt personalizado</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-600" />
            <div className="flex items-center gap-2 text-slate-300">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <span>Chain-of-thought incluído</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-600" />
            <div className="flex items-center gap-2 text-slate-300">
              <Code className="w-5 h-5 text-cyan-400" />
              <span>Funciona em GPT, Claude, Gemini</span>
            </div>
          </div>
        </ServiceCTA>

        {/* FAQ Section for GEO */}
        <FAQSection />

        {/* Internal Links */}
        <InternalLinksSection />
      </main>

      <Footer lang="pt" />
    </div>
  );
}
