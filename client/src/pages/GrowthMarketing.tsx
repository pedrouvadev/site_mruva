import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, TrendingUp, BarChart3, Target, Zap, Users, Globe, Shield, Rocket } from "lucide-react";

export default function GrowthMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Growth Marketing | Estrategista de Gestão de Tráfego | Mr. Uva";
    
    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Estrategista especializado em gestão de tráfego pago e orgânico. Domine Google Ads, Meta Ads e SEO técnico para escalar vendas com ROI comprovado. São Paulo.";

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Growth Marketing | Estrategista de Gestão de Tráfego | Mr. Uva' },
      { property: 'og:description', content: 'Estrategista especializado em gestão de tráfego pago e orgânico. Domine Google Ads, Meta Ads e SEO técnico para escalar vendas com ROI comprovado.' },
      { property: 'og:image', content: '/og/growth-marketing.jpg' },
      { property: 'og:image:alt', content: 'Growth Marketing Mr. Uva – estrategista de gestão de tráfego' },
      { property: 'og:url', content: 'https://mruva.com.br/servicos/growth-marketing' },
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
      { name: 'twitter:title', content: 'Growth Marketing | Estrategista de Gestão de Tráfego | Mr. Uva' },
      { name: 'twitter:description', content: 'Estrategista especializado em gestão de tráfego pago e orgânico. Domine Google Ads, Meta Ads e SEO técnico.' },
      { name: 'twitter:image', content: '/og/growth-marketing.jpg' },
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
    canonical.href = 'https://mruva.com.br/servicos/growth-marketing';

    // JSON-LD Schema
    const schemaScript = document.getElementById('growth-marketing-schema');
    if (schemaScript) {
      schemaScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'growth-marketing-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': 'https://mruva.com.br/servicos/growth-marketing#service',
          name: 'Growth Marketing - Gestão de Tráfego',
          description: 'Estrategista especializado em gestão de tráfego pago e orgânico. Domine Google Ads, Meta Ads e SEO técnico para escalar vendas com ROI comprovado.',
          provider: {
            '@type': 'Person',
            name: 'Pedro Uva',
            url: 'https://mruva.com.br',
            jobTitle: 'Estrategista de Growth Marketing',
            knowsAbout: ['Google Ads', 'Meta Ads', 'SEO Técnico', 'Gestão de Tráfego', 'Marketing Digital'],
          },
          areaServed: {
            '@type': 'Place',
            name: 'Brasil',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Serviços de Growth Marketing',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Gestão de Tráfego Pago',
                  description: 'Google Ads, Meta Ads, LinkedIn Ads com estratégia de ROI',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'SEO Técnico e Orgânico',
                  description: 'Otimização para primeira página do Google',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Análise de Dados',
                  description: 'GA4, Hotjar e métricas de conversão',
                },
              },
            ],
          },
        },
        {
          '@type': 'ProfessionalService',
          '@id': 'https://mruva.com.br/servicos/growth-marketing#professional',
          name: 'Pedro Uva - Estrategista de Growth Marketing',
          description: 'Especialista em gestão de tráfego com certificações Google Ads e experiência comprovada em escalar vendas.',
          provider: {
            '@type': 'Person',
            name: 'Pedro Uva',
            alumniOf: 'FATEC',
            knowsAbout: ['Google Ads', 'Meta Ads', 'SEO', 'Growth Hacking', 'Marketing Digital'],
          },
          serviceType: 'Growth Marketing',
          areaServed: 'Brasil',
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://mruva.com.br/servicos/growth-marketing#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'O que é gestão de tráfego?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'É a administração estratégica de anúncios pagos e orgânicos para atrair visitantes qualificados para seu site, focando em conversão e ROI.',
              },
            },
            {
              '@type': 'Question',
              name: 'Quanto tempo para ver resultados?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tráfego pago: resultados em 7-14 dias. SEO orgânico: 30-90 dias para primeiras posições. Estratégia combinada: resultados imediatos com crescimento sustentável.',
              },
            },
            {
              '@type': 'Question',
              name: 'Por que preciso de um estrategista?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Agências focam em métricas de vaidade. Eu foco em ROI real, otimizando cada centavo investido em tráfego para gerar vendas lucrativas.',
              },
            },
          ],
        },
      ],
    });
    document.head.appendChild(script);

    return () => {
      const schema = document.getElementById('growth-marketing-schema');
      if (schema) {
        schema.remove();
      }
    };
  }, []);

  const whatsappLink = "https://wa.me/5511978768690?text=Olá%20Pedro!%20Quero%20escalar%20meu%20tráfego%20com%20ROI%20comprovado.";

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] overflow-hidden relative font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <Header showStatus={true} />

      <div className="relative z-10">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663505203277/onVzTcrnLavQFonV.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="glass-card px-4 py-2 text-sm md:text-base font-semibold text-cyan-400 inline-flex items-center gap-2 border border-cyan-500/30 uppercase tracking-widest">
              <Target className="w-4 h-4" /> Gestão de Tráfego & ROI
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter">
            Pare de <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Queimar Dinheiro</span> em Anúncios
          </h1>

          <p className="mb-12 max-w-4xl mx-auto text-xl md:text-2xl font-medium">
            Eu sou o Estrategista que transforma seu orçamento de marketing em máquina de vendas previsível. 
            Google Ads + Meta Ads + SEO Técnico = Domínio Total do Mercado.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Dominar Meu Mercado <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>

          <p className="text-sm text-[#94A3B8] italic">
            ⚠️ Aviso: Aceito apenas 3 novos projetos por mês para garantir ROI acima de 300%
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Sua Agência Está Contando Histórias</h2>

          <div className="space-y-6 mb-12">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">📊 Realidade Cruel</h3>
              <p className="text-[#94A3B8] mb-4">Verdade sobre seu marketing atual:</p>
              <ul className="space-y-3 text-[#94A3B8]">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>CPA aumentando mês após mês e agência culpando "sazonalidade"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Relatórios bonitos mas zero insight sobre lucro real</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Tráfego orgânico zerado porque focam só em anúncios</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 border-cyan-500/50">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">💣 O Problema</h3>
              <p className="text-[#94A3B8]">
                Agências tradicionais são <strong>agências de mídia</strong>, não de crescimento. 
                Elas sabem gastar seu dinheiro, mas não sabem <strong>gerar lucro</strong>. 
                Google Ads sem otimização + Meta Ads sem funil = queimada de caixa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Método de Guerra Digital</h2>
          <p className="text-center text-[#94A3B8] mb-16 text-lg">Como eu domino algoritmos e esmago concorrentes</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pilar 1 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg w-fit">
                <BarChart3 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Inteligência de Dados</h3>
              <p className="text-[#94A3B8] mb-4">GA4 + Hotjar + CRM</p>
              <div className="space-y-2 text-sm text-[#94A3B8]">
                <p><strong className="text-cyan-400">O que outros fazem:</strong> Olham CTR e CPC</p>
                <p><strong className="text-cyan-400">O que eu faço:</strong> Mapeio jornada completa do cliente. Identifico gargalos e oportunidades ocultas. Redução de 60% no CPA.</p>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg w-fit">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Domínio de Plataformas</h3>
              <p className="text-[#94A3B8] mb-4">Google + Meta + LinkedIn</p>
              <div className="space-y-2 text-sm text-[#94A3B8]">
                <p><strong className="text-cyan-400">O que outros fazem:</strong> Impulsionam conteúdo sem estratégia</p>
                <p><strong className="text-cyan-400">O que eu faço:</strong> Guerra cirúrgica. Segmentação por intenção, remarketing comportamental e lookalikes de alta conversão.</p>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-lg w-fit">
                <Rocket className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">SEO Técnico Avançado</h3>
              <p className="text-[#94A3B8] mb-4">Core Web Vitals + Schema</p>
              <div className="space-y-2 text-sm text-[#94A3B8]">
                <p><strong className="text-cyan-400">O que outros fazem:</strong> Conteúdo sem otimização técnica</p>
                <p><strong className="text-cyan-400">O que eu faço:</strong> Otimização profunda de código. Sites ultravelozes, schema markup avançado. Primeira página garantida.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Resultados Comprovados</h2>
          <p className="text-center text-[#94A3B8] mb-16 text-lg">Números que não mentem</p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-sm text-[#94A3B8]">ROI Médio</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">-60%</div>
              <div className="text-sm text-[#94A3B8]">Redução CPA</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">2.5s</div>
              <div className="text-sm text-[#94A3B8]">Tempo Carregamento</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">30d</div>
              <div className="text-sm text-[#94A3B8]">Primeiros Resultados</div>
            </div>
          </div>

          <div className="glass-card p-8 border-cyan-500/30">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">🎯 Estudo de Caso Real</h3>
            <p className="text-[#94A3B8] mb-4">
              E-commerce de moda: CPA de R$45 para R$18 em 45 dias. Aumento de 247% no faturamento 
              com o mesmo orçamento. Como? Otimização técnica + segmentação comportamental + remarketing dinâmico.
            </p>
            <p className="text-[#94A3B8]">
              <strong className="text-cyan-400">Segredo:</strong> Não é sobre mais tráfego. É sobre tráfego <strong>qualificado</strong> que converte.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Arsenal de Crescimento</h2>
          <p className="text-center text-[#94A3B8] mb-16 text-lg">Ferramentas e estratégias que dominam o mercado</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-bold text-white">Google Ads Mastery</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• Search Ads com intenção de compra</li>
                <li>• Performance Max otimizado</li>
                <li>• Shopping Ads para e-commerce</li>
                <li>• Remarketing dinâmico</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">Meta Ads Precision</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• Facebook Ads com funil completo</li>
                <li>• Instagram Ads storytelling</li>
                <li>• Lead Ads qualificados</li>
                <li>• Lookalikes avançados</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-bold text-white">SEO Técnico</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• Core Web Vitals otimizado</li>
                <li>• Schema markup avançado</li>
                <li>• Link building estratégico</li>
                <li>• Conteúdo otimizado para IA</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-bold text-white">Análise Avançada</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• GA4 com eventos customizados</li>
                <li>• Hotjar mapas de calor</li>
                <li>• Funil de conversão completo</li>
                <li>• A/B testing contínuo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Perguntas Estratégicas</h2>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Por que não contratar uma agência tradicional?</h3>
              <p className="text-[#94A3B8]">
                Agências focam em volume de impressões. Eu foco em lucro real. 
                Enquanto eles celebram "milhares de cliques", eu celebro "aumento de 300% no faturamento".
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Você trabalha com qualquer nicho?</h3>
              <p className="text-[#94A3B8]">
                Sim, desde que tenha produto/serviço válido e margem para investir em tráfego. 
                Já dominei e-commerce, SaaS, serviços B2B, educação, saúde e imobiliário.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Qual investimento necessário?</h3>
              <p className="text-[#94A3B8]">
                Mínimo de R$5.000/mês em mídia + minha consultoria. 
                Isso garante escala suficiente para otimizações e resultados estatisticamente relevantes.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Como garante os resultados?</h3>
              <p className="text-[#94A3B8]">
                Metodologia comprovada + dados em tempo real + otimização diária. 
                Não trabalho com achismos. Cada decisão é baseada em números que impactam diretamente o ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
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

        <div className="max-w-4xl mx-auto text-center relative z-10 glass-card p-12 md:p-20 border border-cyan-500/20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Seus Concorrentes Estão Dominando</h2>
          <p className="mb-12 max-w-2xl mx-auto text-lg font-medium text-[#E2E8F0]">
            Enquanto você hesita, eles estão otimizando CPA, dominando SEO e 
            roubando seus clientes. A escolha é simples: ser o predador ou a presa.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Dominar Meu Mercado Agora <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
