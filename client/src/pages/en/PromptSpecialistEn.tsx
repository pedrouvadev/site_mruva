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
    document.title = 'Prompt Specialist: Language Architectures That Sell | Mr. Uva';

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Advanced prompt engineering with chain-of-thought, few-shot examples, and technical calibration. I transform GPT, Claude, and Gemini into business specialists. 30-day results guaranteed.';

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Prompt Specialist: Language Architectures That Sell | Mr. Uva' },
      { property: 'og:description', content: 'Advanced prompt engineering with chain-of-thought, few-shot examples, and technical calibration. I transform LLMs into business specialists.' },
      { property: 'og:image', content: '/og/prompt-specialist.jpg' },
      { property: 'og:image:alt', content: 'Prompt Specialist Mr. Uva – creating AI intelligences that sell' },
      { property: 'og:url', content: 'https://mruva.com.br/en/services/prompt-specialist' },
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
      { name: 'twitter:title', content: 'Prompt Specialist: Prompts That Make Any AI Work for You' },
      { name: 'twitter:description', content: 'I create intelligences that obey, convert, and go viral. AI personas for GPT, Claude, Gemini.' },
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
    canonical.href = 'https://mruva.com.br/en/services/prompt-specialist';

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
          '@id': 'https://mruva.com.br/en/services/prompt-specialist#service',
          name: 'Prompt Specialist',
          description:
            'Advanced prompt creation and AI persona service for GPT, Claude, Gemini, Grok, and Llama. +30% conversion guaranteed.',
          provider: {
            '@type': 'Person',
            name: 'Pedro Uva',
            url: 'https://mruva.com.br',
          },
          areaServed: {
            '@type': 'Place',
            name: 'Global',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Prompt Specialist Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Custom AI Persona',
                  description: 'Salesperson, Consultant, Creative, Support, Lawyer, Advertiser',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Multiplatform Copy',
                  description: 'Google Ads, Instagram, WhatsApp, email, and landing pages',
                },
              },
            ],
          },
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://mruva.com.br/en/services/prompt-specialist#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is a Prompt Specialist session?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A session where we analyze your business and create custom AI personas that convert visitors into customers, with mental triggers and persuasive copy.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take to see results?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Prompts are delivered ready for immediate use. Most clients report increased conversion rates in the first week of use.',
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

export default function PromptSpecialistEn() {
  const containerRef = useRef<HTMLDivElement>(null);
  const whatsappLink = "https://wa.me/5511978768690?text=Hi%20Pedro!%20I%20want%20to%20transform%20my%20AI%20into%20a%20selling%20machine.";

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
      <Header lang="en" showStatus={true} />

      <div className="relative z-10" ref={containerRef}>
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dtfsdkdu6/image/upload/v1775314243/pedrouva-prompt-specialist_wmn976.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.4,
            }}
          />
          <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 flex justify-center hero-title">
              <div className="glass-card px-4 py-2 text-sm font-semibold text-cyan-400 inline-flex items-center gap-2 border border-cyan-500/30 uppercase tracking-widest">
                <Sparkles className="w-4 h-4" /> AI Language Architecture
              </div>
            </div>

            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter">
              I Transform{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Any AI
              </span>{" "}
              Into a{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Sales Machine
              </span>
            </h1>

            <p className="hero-subtitle text-xl md:text-2xl text-[#94A3B8] max-w-4xl mx-auto mb-12 leading-relaxed">
              Advanced prompt engineering with chain-of-thought, few-shot examples, and technical calibration. 
              I make GPT, Claude, and Gemini obey your business rules and convert visitors into customers.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="btn-gradient text-lg px-8 py-4 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                Transform My AI Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8 py-4 rounded-full font-bold transition-all duration-300"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">30%</div>
                <div className="text-sm text-cyan-400">More Conversion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24h</div>
                <div className="text-sm text-purple-400">Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-sm text-pink-400">AI Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-green-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                How I Create{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  AI That Sells
                </span>
              </h2>
              <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
                My methodology combines cognitive psychology, copywriting, and technical precision
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Target className="w-8 h-8 text-cyan-400" />,
                  title: "1. Business Analysis",
                  description: "I study your market, audience, and conversion goals to design the perfect AI persona.",
                },
                {
                  icon: <Brain className="w-8 h-8 text-purple-400" />,
                  title: "2. Prompt Architecture",
                  description: "I create chain-of-thought structures with mental triggers and persuasive techniques.",
                },
                {
                  icon: <Rocket className="w-8 h-8 text-pink-400" />,
                  title: "3. Multiplatform Deployment",
                  description: "I adapt the prompts for GPT, Claude, Gemini, and other platforms with specific optimizations.",
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
                What I{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Create For You
                </span>
              </h2>
              <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
                Specialized AI personas for every business need
              </p>
            </div>

            <div className="bento-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <NeonBentoCard title="Sales Persona" delay={0}>
                <Users className="w-6 h-6 text-cyan-400" />
                AI that sells naturally, overcomes objections, and closes deals
              </NeonBentoCard>
              <NeonBentoCard title="Support Specialist" delay={0.1}>
                <MessageSquare className="w-6 h-6 text-purple-400" />
                Customer service that resolves issues and increases satisfaction
              </NeonBentoCard>
              <NeonBentoCard title="Technical Consultant" delay={0.2}>
                <Code className="w-6 h-6 text-pink-400" />
                AI that explains complex concepts and guides implementation
              </NeonBentoCard>
              <NeonBentoCard title="Marketing Analyst" delay={0.3}>
                <BarChart3 className="w-6 h-6 text-orange-400" />
                AI that analyzes data and provides strategic insights
              </NeonBentoCard>
              <NeonBentoCard title="Creative Director" delay={0.4}>
                <Lightbulb className="w-6 h-6 text-yellow-400" />
                AI that generates ideas and creates compelling content
              </NeonBentoCard>
              <NeonBentoCard title="Custom Solution" delay={0.5}>
                <Bot className="w-6 h-6 text-green-400" />
                Tailored AI persona for your specific business needs
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
                  Technical{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Excellence
                  </span>
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: <CheckCircle className="w-5 h-5 text-cyan-400" />,
                      title: "Chain-of-Thought",
                      description: "Structured reasoning that guides AI to logical conclusions",
                    },
                    {
                      icon: <CheckCircle className="w-5 h-5 text-purple-400" />,
                      title: "Few-Shot Examples",
                      description: "Concrete examples that teach AI exactly how to respond",
                    },
                    {
                      icon: <CheckCircle className="w-5 h-5 text-pink-400" />,
                      title: "Technical Calibration",
                      description: "Precise parameter tuning for optimal performance",
                    },
                    {
                      icon: <CheckCircle className="w-5 h-5 text-green-400" />,
                      title: "Multiplatform Optimization",
                      description: "Specific adjustments for each AI platform",
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
                    <h3 className="text-2xl font-bold mb-2 text-white">Quick Results</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#94A3B8]">Delivery Time</span>
                      <span className="text-cyan-400 font-bold">24 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#94A3B8]">Integration</span>
                      <span className="text-purple-400 font-bold">Immediate</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#94A3B8]">Results</span>
                      <span className="text-pink-400 font-bold">First week</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#94A3B8]">Support</span>
                      <span className="text-green-400 font-bold">30 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <ServiceCTA
          title="Ready to Transform Your AI?"
          subtitle="Let's create intelligent prompts that convert, engage, and sell"
          buttonText="Start My AI Transformation"
          buttonHref={whatsappLink}
        />

        <Footer />
      </div>
    </div>
  );
}
