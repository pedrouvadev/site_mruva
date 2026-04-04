import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, TrendingUp, BarChart3, Target, Zap, Users, Globe, Shield, Rocket } from "lucide-react";

export default function GrowthMarketingEn() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Growth Marketing | Traffic Management Strategist | Mr. Uva";
    
    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Expert traffic management strategist specializing in paid and organic traffic. Master Google Ads, Meta Ads and technical SEO to scale sales with proven ROI. São Paulo.";

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Growth Marketing | Traffic Management Strategist | Mr. Uva' },
      { property: 'og:description', content: 'Expert traffic management strategist specializing in paid and organic traffic. Master Google Ads, Meta Ads and technical SEO to scale sales with proven ROI.' },
      { property: 'og:image', content: '/og/growth-marketing.jpg' },
      { property: 'og:image:alt', content: 'Growth Marketing Mr. Uva – traffic management strategist' },
      { property: 'og:url', content: 'https://mruva.com.br/en/services/growth-marketing' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'en_US' },
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
      { name: 'twitter:title', content: 'Growth Marketing | Traffic Management Strategist | Mr. Uva' },
      { name: 'twitter:description', content: 'Expert traffic management strategist specializing in paid and organic traffic. Master Google Ads, Meta Ads and technical SEO.' },
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
    canonical.href = 'https://mruva.com.br/en/services/growth-marketing';

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
          '@id': 'https://mruva.com.br/en/services/growth-marketing#service',
          name: 'Growth Marketing - Traffic Management',
          description: 'Expert traffic management strategist specializing in paid and organic traffic. Master Google Ads, Meta Ads and technical SEO to scale sales with proven ROI.',
          provider: {
            '@type': 'Person',
            name: 'Pedro Uva',
            url: 'https://mruva.com.br',
            jobTitle: 'Growth Marketing Strategist',
            knowsAbout: ['Google Ads', 'Meta Ads', 'Technical SEO', 'Traffic Management', 'Digital Marketing'],
          },
          areaServed: {
            '@type': 'Place',
            name: 'Global',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Growth Marketing Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Paid Traffic Management',
                  description: 'Google Ads, Meta Ads, LinkedIn Ads with ROI-focused strategy',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Technical SEO & Organic',
                  description: 'Optimization for Google first page ranking',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Data Analytics',
                  description: 'GA4, Hotjar and conversion metrics',
                },
              },
            ],
          },
        },
        {
          '@type': 'ProfessionalService',
          '@id': 'https://mruva.com.br/en/services/growth-marketing#professional',
          name: 'Pedro Uva - Growth Marketing Strategist',
          description: 'Traffic management expert with Google Ads certifications and proven experience scaling sales.',
          provider: {
            '@type': 'Person',
            name: 'Pedro Uva',
            alumniOf: 'FATEC',
            knowsAbout: ['Google Ads', 'Meta Ads', 'SEO', 'Growth Hacking', 'Digital Marketing'],
          },
          serviceType: 'Growth Marketing',
          areaServed: 'Global',
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://mruva.com.br/en/services/growth-marketing#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is traffic management?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Strategic management of paid and organic ads to attract qualified visitors to your site, focusing on conversion and ROI.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long to see results?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Paid traffic: 7-14 days for results. Organic SEO: 30-90 days for first rankings. Combined strategy: immediate results with sustainable growth.',
              },
            },
            {
              '@type': 'Question',
              name: 'Why do I need a strategist?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Agencies focus on vanity metrics. I focus on real ROI, optimizing every cent invested in traffic to generate profitable sales.',
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

  const whatsappLink = "https://wa.me/5511978768690?text=Hi%20Pedro!%20I%20want%20to%20scale%20my%20traffic%20with%20proven%20ROI.";

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] overflow-hidden relative font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <Header lang="en" showStatus={true} />

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
              "url('https://res.cloudinary.com/dtfsdkdu6/image/upload/v1775313628/growth-marketing_v9rdcz.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="glass-card px-4 py-2 text-sm md:text-base font-semibold text-cyan-400 inline-flex items-center gap-2 border border-cyan-500/30 uppercase tracking-widest">
              <Target className="w-4 h-4" /> Traffic Management & ROI
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter">
            Stop <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Burning Money</span> on Ads
          </h1>

          <p className="mb-12 max-w-4xl mx-auto text-xl md:text-2xl font-medium">
            I'm the Strategist who transforms your marketing budget into a predictable sales machine. 
            Google Ads + Meta Ads + Technical SEO = Total Market Domination.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Dominate My Market <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>

          <p className="text-sm text-[#94A3B8] italic">
            ⚠️ Warning: Accepting only 3 new projects per month to guarantee ROI above 300%
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Your Agency Is Telling Stories</h2>

          <div className="space-y-6 mb-12">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">📊 Harsh Reality</h3>
              <p className="text-[#94A3B8] mb-4">Truth about your current marketing:</p>
              <ul className="space-y-3 text-[#94A3B8]">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>CPA increasing month after month and agency blaming "seasonality"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Pretty reports but zero insight on real profit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Zero organic traffic because they focus only on ads</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 border-cyan-500/50">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">💣 The Problem</h3>
              <p className="text-[#94A3B8]">
                Traditional agencies are <strong>media agencies</strong>, not growth agencies. 
                They know how to spend your money, but not how to <strong>generate profit</strong>. 
                Google Ads without optimization + Meta Ads without funnel = cash burn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Digital Warfare Method</h2>
          <p className="text-center text-[#94A3B8] mb-16 text-lg">How I dominate algorithms and crush competitors</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pilar 1 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg w-fit">
                <BarChart3 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Data Intelligence</h3>
              <p className="text-[#94A3B8] mb-4">GA4 + Hotjar + CRM</p>
              <div className="space-y-2 text-sm text-[#94A3B8]">
                <p><strong className="text-cyan-400">What others do:</strong> Look at CTR and CPC</p>
                <p><strong className="text-cyan-400">What I do:</strong> Map complete customer journey. Identify bottlenecks and hidden opportunities. 60% CPA reduction.</p>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg w-fit">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Platform Mastery</h3>
              <p className="text-[#94A3B8] mb-4">Google + Meta + LinkedIn</p>
              <div className="space-y-2 text-sm text-[#94A3B8]">
                <p><strong className="text-cyan-400">What others do:</strong> Boost content without strategy</p>
                <p><strong className="text-cyan-400">What I do:</strong> Surgical warfare. Intent-based segmentation, behavioral retargeting and high-conversion lookalikes.</p>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-lg w-fit">
                <Rocket className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Advanced Technical SEO</h3>
              <p className="text-[#94A3B8] mb-4">Core Web Vitals + Schema</p>
              <div className="space-y-2 text-sm text-[#94A3B8]">
                <p><strong className="text-cyan-400">What others do:</strong> Content without technical optimization</p>
                <p><strong className="text-cyan-400">What I do:</strong> Deep code optimization. Ultra-fast sites, advanced schema markup. First page guaranteed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Proven Results</h2>
          <p className="text-center text-[#94A3B8] mb-16 text-lg">Numbers don't lie</p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-sm text-[#94A3B8]">Average ROI</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">-60%</div>
              <div className="text-sm text-[#94A3B8]">CPA Reduction</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">2.5s</div>
              <div className="text-sm text-[#94A3B8]">Load Time</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">30d</div>
              <div className="text-sm text-[#94A3B8]">First Results</div>
            </div>
          </div>

          <div className="glass-card p-8 border-cyan-500/30">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">🎯 Real Case Study</h3>
            <p className="text-[#94A3B8] mb-4">
              Fashion e-commerce: CPA from $45 to $18 in 45 days. 247% revenue increase 
              with same budget. How? Technical optimization + behavioral segmentation + dynamic retargeting.
            </p>
            <p className="text-[#94A3B8]">
              <strong className="text-cyan-400">Secret:</strong> It's not about more traffic. It's about <strong>qualified</strong> traffic that converts.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Growth Arsenal</h2>
          <p className="text-center text-[#94A3B8] mb-16 text-lg">Tools and strategies that dominate the market</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-bold text-white">Google Ads Mastery</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• Search Ads with purchase intent</li>
                <li>• Optimized Performance Max</li>
                <li>• Shopping Ads for e-commerce</li>
                <li>• Dynamic remarketing</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">Meta Ads Precision</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• Facebook Ads with complete funnel</li>
                <li>• Instagram Ads storytelling</li>
                <li>• Qualified Lead Ads</li>
                <li>• Advanced lookalikes</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-bold text-white">Technical SEO</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• Optimized Core Web Vitals</li>
                <li>• Advanced schema markup</li>
                <li>• Strategic link building</li>
                <li>• AI-optimized content</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-bold text-white">Advanced Analytics</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• GA4 with custom events</li>
                <li>• Hotjar heatmaps</li>
                <li>• Complete conversion funnel</li>
                <li>• Continuous A/B testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Strategic Questions</h2>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Why not hire a traditional agency?</h3>
              <p className="text-[#94A3B8]">
                Agencies focus on impression volume. I focus on real profit. 
                While they celebrate "thousands of clicks", I celebrate "300% revenue increase".
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Do you work with any niche?</h3>
              <p className="text-[#94A3B8]">
                Yes, as long as you have a valid product/service and margin to invest in traffic. 
                I've mastered e-commerce, SaaS, B2B services, education, health and real estate.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">What's the required investment?</h3>
              <p className="text-[#94A3B8]">
                Minimum $5,000/month in media + my consulting fee. 
                This guarantees enough scale for optimizations and statistically significant results.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">How do you guarantee results?</h3>
              <p className="text-[#94A3B8]">
                Proven methodology + real-time data + daily optimization. 
                I don't work with hunches. Every decision is based on numbers that directly impact ROI.
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Competitors Are Dominating</h2>
          <p className="mb-12 max-w-2xl mx-auto text-lg font-medium text-[#E2E8F0]">
            While you hesitate, they're optimizing CPA, dominating SEO and 
            stealing your customers. The choice is simple: be the predator or the prey.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Dominate My Market Now <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
