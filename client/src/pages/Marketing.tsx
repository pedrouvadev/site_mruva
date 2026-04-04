import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, TrendingUp, BarChart3, Target } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function Marketing() {
  // SEO Configuration para página de Growth Marketing
  useSEO({
    title: "Consultoria de Growth Marketing | Estratégias de Growth Hacking São Paulo",
    description: "Aumente vendas com consultoria de growth marketing baseada em dados. Estratégias de growth hacking, SEO técnico e otimização de conversão em São Paulo.",
    keywords: "Growth Marketing, Consultoria de Growth, Growth Hacking, Marketing de Performance, SEO técnico, Otimização de Conversão, São Paulo",
    ogTitle: "Consultoria de Growth Marketing | Mr. Uva",
    ogDescription: "Transforme cliques em faturamento real. Estratégias de growth marketing com ROI comprovado para sua empresa.",
    canonicalUrl: "https://mruva.com.br/marketing",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Consultoria de Growth Marketing",
      "description": "Serviço de consultoria em growth marketing, estratégias de growth hacking e otimização de conversão para empresas.",
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
      "serviceType": "Consultoria de Marketing Digital"
    }
  })
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
          className="absolute inset-0 z-0 bg-hero-image"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dtfsdkdu6/image/upload/v1775243673/pdrouva-trabalhando_hwty0u.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex justify-center animate-fade-in">
            <div className="glass-card px-4 py-2 text-sm md:text-base font-semibold text-orange-400 inline-flex items-center gap-2 border border-orange-500/30 uppercase tracking-widest">
              <Target className="w-4 h-4" /> Marketing de Performance & ROI
            </div>
          </div>

          <h1 className="title-standard animate-fade-in animation-delay-100 tracking-tighter">
            Pare de Financiar a <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Incompetência</span>
          </h1>

          <p className="mb-12 max-w-4xl mx-auto animate-fade-in animation-delay-200 font-medium">
            Enquanto você lê esta página, o Google e Meta estão engolindo 40% da sua margem de lucro. Eu sou Uva, o Engenheiro de Lucro que une rigor técnico com inteligência bélica de aquisição.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in animation-delay-300">
            <Button 
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open('https://wa.me/5511978768690', '_blank')}
            >
              Quero Parar de Perder Dinheiro <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>

          <p className="text-sm text-[#94A3B8] italic animate-fade-in animation-delay-400">
            ⚠️ Aviso: Aceito apenas 4 novos projetos por mês devido à complexidade da engenharia de dados.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-standard">
        <div className="max-w-4xl mx-auto">
          <h2 className="title-standard text-center text-4xl font-bold">Você Está "Voando às Cegas"</h2>

          <div className="space-y-6 mb-12">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3 text-orange-400">❓ Teste de Realidade</h3>
              <p className="text-[#94A3B8] mb-4">Responda rápido:</p>
              <ul className="space-y-3 text-[#94A3B8]">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">1.</span>
                  <span>Você sabe exatamente qual campanha, anúncio ou palavra-chave gerou a venda de ontem?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">2.</span>
                  <span>Seu site carrega em menos de 2.5 segundos no 4G?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">3.</span>
                  <span>Você aparece no Google quando o cliente busca e no Instagram quando ele relaxa?</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 border-orange-500/50">
              <h3 className="text-xl font-bold mb-3 text-orange-400">🩸 O Veredito</h3>
              <p className="text-[#94A3B8]">
                Se você gaguejou para responder a qualquer uma dessas perguntas, você não tem uma estratégia de marketing. Você tem uma <strong>loteria cara</strong>. O Google penaliza sites lentos (você perde 53% dos clientes se demorar mais de 3 segundos). O Meta pune quem não tem tracking correto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-standard relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/services-grid-bg-37RfWbP5XKmep3Fcdnw4qM.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="title-standard text-center text-4xl font-bold">A Santíssima Trindade do Crescimento Previsível</h2>
          <p className="text-center text-[#94A3B8] mb-16 text-lg">Como eu transformo seu marketing em máquina de vendas</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pilar 1 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 rounded-lg w-fit">
                <BarChart3 className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Inteligência de Vendas</h3>
              <p className="text-[#94A3B8] mb-4">GA4 + Google Ads</p>
              <div className="space-y-2 text-sm text-[#94A3B8]">
                <p><strong className="text-cyan-400">O que as agências fazem:</strong> Olham métricas de vaidade ("likes" e "cliques")</p>
                <p><strong className="text-cyan-400">O que eu faço:</strong> Instalo o "Mapa do Tesouro". Tracking avançado para o algoritmo focar apenas em quem tem intenção real de compra. Redução de até 40% no CPA.</p>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-cyan-400/20 to-orange-500/20 rounded-lg w-fit">
                <Target className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Dominação Omnichannel</h3>
              <p className="text-[#94A3B8] mb-4">Google + Meta Integrados</p>
              <div className="space-y-2 text-sm text-[#94A3B8]">
                <p><strong className="text-cyan-400">O que as agências fazem:</strong> Impulsionam posts no Instagram sem funil</p>
                <p><strong className="text-cyan-400">O que eu faço:</strong> Cerco militar. Aparecemos no Google (rede de pesquisa) para fechar a venda e no Meta Ads para gerar o desejo. Onipresença total.</p>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-orange-500/20 to-indigo-500/20 rounded-lg w-fit">
                <TrendingUp className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Blindagem Digital</h3>
              <p className="text-[#94A3B8] mb-4">Core Web Vitals + SEO Técnico</p>
              <div className="space-y-2 text-sm text-[#94A3B8]">
                <p><strong className="text-cyan-400">O que as agências fazem:</strong> Usam templates pesados e código sujo</p>
                <p><strong className="text-cyan-400">O que eu faço:</strong> Intervenção direto no código. Site ultraveloz, otimizado para o algoritmo do Google. Fim da invisibilidade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificações & Credenciais Section - Combinada */}
      <section className="section-standard">
        <div className="max-w-6xl mx-auto">
          <h2 className="title-standard text-center text-4xl font-bold">Menos de 1% do Mercado Tem Esta Combinação</h2>
          <p className="text-center text-[#94A3B8] mb-12 max-w-2xl mx-auto text-lg">
            Certificações que comprovam expertise em Google Ads, GA4, Meta Ads e estratégia de marketing digital
          </p>

          {/* Descrição dos Certificados */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-indigo-400">🏆 Google Ads Certificado</h3>
              <p className="text-[#94A3B8] text-sm">Especialista em Rede de Pesquisa e Display com foco em redução de CPA e aumento de ROI.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">📊 GA4 Especialista</h3>
              <p className="text-[#94A3B8] text-sm">Implementação técnica e análise de eventos customizados para mapeamento de funil de vendas.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-orange-400">📱 Meta Ads Certificado</h3>
              <p className="text-[#94A3B8] text-sm">Gestão de campanhas de alta performance no Instagram e Facebook com segmentação cirúrgica.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-indigo-400">🎓 Goobec (Google Partner)</h3>
              <p className="text-[#94A3B8] text-sm">Formado pela primeira parceira oficial do Google na América Latina com metodologia hands-on.</p>
            </div>
          </div>

          {/* Imagens dos Certificados */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="glass-card p-4 hover:scale-105 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/certificado-marketing-digital_4c3373a5.png" alt="Certificado Marketing Digital" className="w-full h-auto rounded-lg" width="1080" height="764" />
            </div>
            <div className="glass-card p-4 hover:scale-105 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/certificado-google-ads_1f217a44.png" alt="Certificado Google Ads" className="w-full h-auto rounded-lg" width="1080" height="764" />
            </div>
            <div className="glass-card p-4 hover:scale-105 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/certificado-ga4_421ff0fb.png" alt="Certificado GA4" className="w-full h-auto rounded-lg" width="1080" height="764" />
            </div>
            <div className="glass-card p-4 hover:scale-105 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/certificado-meta-ads_1f6a6081.png" alt="Certificado Meta Ads" className="w-full h-auto rounded-lg" width="1080" height="764" />
            </div>
          </div>

          <div className="glass-card p-8 border-cyan-500/50">
            <p className="text-[#94A3B8]">
              Não sou um aventureiro digital. Sou formado em Desenvolvimento de Sistemas (FATEC) e treinado pela primeira parceira oficial do Google na América Latina (Goobec). Eu não "acho" nada. Eu aplico a metodologia que o Google usa para escalar faturamentos bilionários.
            </p>
          </div>
        </div>
      </section>

      {/* Anti-Venda Section */}
      <section className="section-standard">
        <div className="max-w-4xl mx-auto">
          <h2 className="title-standard text-center text-4xl font-bold">Eu Não Sou Para Você Se...</h2>

          <div className="space-y-4 mb-12">
            <div className="glass-card p-6 border-red-500/30">
              <p className="flex items-start gap-3">
                <span className="text-red-500 text-xl">✗</span>
                <span className="text-[#94A3B8]">Você busca "diquinhas de Instagram" ou gestão de redes sociais</span>
              </p>
            </div>
            <div className="glass-card p-6 border-red-500/30">
              <p className="flex items-start gap-3">
                <span className="text-red-500 text-xl">✗</span>
                <span className="text-[#94A3B8]">Você vê investimento em tecnologia como "gasto" e não quer otimizar sua máquina de vendas</span>
              </p>
            </div>
            <div className="glass-card p-6 border-red-500/30">
              <p className="flex items-start gap-3">
                <span className="text-red-500 text-xl">✗</span>
                <span className="text-[#94A3B8]">Você quer resultados mágicos sem ajustar a infraestrutura da sua empresa</span>
              </p>
            </div>
          </div>

          <div className="glass-card p-8 border-cyan-500/50">
            <p className="text-[#94A3B8] mb-4">
              <strong className="text-cyan-400">Mas se você é um empresário sério</strong>, focado em ROI, e quer parar de terceirizar sua inteligência de dados para amadores, nós precisamos conversar.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-standard">
        <div className="max-w-4xl mx-auto">
          <h2 className="title-standard text-center text-4xl font-bold">Perguntas Frequentes</h2>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Tecnologia e consultoria são caros?</h3>
              <p className="text-[#94A3B8]">
                Gasto é pagar por cliques de pessoas que nunca vão comprar de você. O que eu entrego é mitigação de risco e um sistema que identifica compradores. É um investimento com ROI provado.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Meu site atual já funciona.</h3>
              <p className="text-[#94A3B8]">
                Ele funciona para você, mas o algoritmo do Google está te escondendo dos novos clientes porque seu código está obsoleto e lento. Enquanto você dorme, seu concorrente está dominando a primeira página.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Quanto tempo leva para ver resultados?</h3>
              <p className="text-[#94A3B8]">
                Otimizações técnicas começam a impactar em 2-4 semanas. Campanhas de Google Ads bem estruturadas mostram ROI em 30 dias. Estratégia omnichannel completa: 90 dias para domínio de mercado.
              </p>
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

        <div className="max-w-4xl mx-auto text-center relative z-10 glass-card p-12 md:p-20 border border-cyan-500/20">
          <h2 className="title-standard text-center text-4xl font-bold">A Inação Custa Mais Caro Que a Intervenção</h2>
          <p className="mb-12 max-w-2xl mx-auto text-lg font-medium text-[#E2E8F0]">
            A cada dia que seu site roda sem inteligência de dados e com lentidão, seu concorrente ganha mercado com um CPA mais barato usando IA. A escolha é sua: ser o predador de conversões ou a presa do mercado.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open('https://wa.me/5511978768690', '_blank')}
            >
              Candidatar-se para Consultoria <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
