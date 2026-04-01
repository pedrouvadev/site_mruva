import {
  ArrowRight,
  Code2,
  TrendingUp,
  Brain,
  Zap,
  CheckCircle2,
  MessageCircle,
  Rocket,
  Shield,
  Target,
} from "lucide-react";
import { useLocation } from "wouter";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function ServicesEn() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Expert Digital Strategy & Tech Services | Pedro Uva";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore elite Full-Stack Development, AI, and Digital Marketing services by Pedro Uva. Professional solutions for global business growth."
      );
    }
  }, []);

  const whatsappLink =
    "https://wa.me/5511978768690?text=Hi%20Pedro!%20I%20saw%20your%20services%20and%20want%20to%20elevate%20my%20project.";

  const services = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      headline: "I build applications that don't just work; they scale.",
      description:
        "I develop robust, fast, and secure systems. From database to interface, I use the latest technologies (React 19, Node.js, TypeScript) to deliver a flawless experience to your end user.",
      features: [
        "High-Performance Web Applications",
        "Scalable and Secure Systems",
        "Modern Interfaces (UI/UX)",
        "API and Database Integration",
        "Clean and Maintainable Architecture",
      ],
      cta: "I want my system",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing & Growth",
      headline:
        "I transform clicks into real revenue with data-driven strategy.",
      description:
        'I don\'t believe in "vanity metrics." My approach focuses on ROI. I use Google Ads, Meta Ads, and advanced SEO to put your brand in front of those who actually want to buy from you.',
      features: [
        "Paid Traffic Management (Google/Meta)",
        "Technical SEO for Real Ranking",
        "Data Analysis and Conversion Funnels",
        "Growth Hacking Strategies",
        "Conversion Rate Optimization (CRO)",
      ],
      cta: "I want to sell more",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Brain,
      title: "AI & Intelligent Automation",
      headline: "I put Artificial Intelligence to work for your profit.",
      description:
        "I integrate LLMs (like GPT-4) and workflow automations to eliminate repetitive tasks and increase your team's productivity by up to 10x. Cutting-edge technology applied to your operations.",
      features: [
        "Integration of LLMs and AI Agents",
        "Workflow Automation",
        "Intelligent Support Chatbots",
        "Specialized Prompt Engineering",
        "Predictive Data Analysis",
      ],
      cta: "Automate my business",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Zap,
      title: "Digital Transformation Consulting",
      headline: "I modernize your business model for the AI era.",
      description:
        "I perform a deep diagnosis of your operation and design the technological roadmap. We combine code, marketing, and agile management to ensure your company leads the market, doesn't just survive.",
      features: [
        "Complete Technological Diagnosis",
        "Digital Strategic Planning",
        "Agile Culture Implementation (Scrum)",
        "Technology and Innovation Mentoring",
        "Continuous Support and Evolution",
      ],
      cta: "Transform my company",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] relative font-sans selection:bg-cyan-500/30">
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
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex justify-center animate-fade-in">
            <div className="glass-card px-4 py-2 text-sm md:text-base font-semibold text-cyan-400 inline-flex items-center gap-2 border border-cyan-500/30 uppercase tracking-widest">
              <Target className="w-4 h-4" /> High-Performance Solutions
            </div>
          </div>

          <h1 className="title-standard animate-fade-in animation-delay-100 tracking-tighter">
            Strategy and technology to{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              scale sales with predictability and ROI
            </span>
          </h1>

          <p className="mb-12 max-w-4xl mx-auto animate-fade-in animation-delay-200 font-medium">
            More than services, I design your business's evolution. With over 25
            years on the technology and business battlefield, I unite{" "}
            <strong className="text-white">Elite Code</strong>,{" "}
            <strong className="text-white">Data Marketing</strong>, and{" "}
            <strong className="text-white">Artificial Intelligence</strong> to
            scale your operation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in animation-delay-300">
            <Button
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              Request Strategic Diagnosis{" "}
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-standard bg-[#0B1120]">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="title-standard text-center text-4xl md:text-5xl font-bold">
              How can I{" "}
              <span className="text-cyan-400">leverage your business?</span>
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto font-medium">
              Every project I take on is treated with technical rigor and an
              owner's mindset. Choose the pillar your company needs to
              strengthen today:
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
                  <div
                    className={`bg-gradient-to-br ${service.color} p-4 rounded-xl w-fit mb-8 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-4 text-lg">
                    {service.headline}
                  </p>
                  <p className="text-[#94A3B8] mb-8 leading-relaxed text-lg flex-grow">
                    {service.description}
                  </p>

                  <div className="mb-10">
                    <ul className="space-y-4">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[#CBD5E1]"
                        >
                          <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                          <span className="text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => window.open(whatsappLink, "_blank")}
                    className="w-full btn-gradient py-5 text-xl font-bold flex items-center justify-center gap-3 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                  >
                    {service.cta}{" "}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentials / Why me? */}
      <section className="section-standard relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="title-standard text-4xl md:text-5xl font-bold">
                Why trust your project{" "}
                <span className="text-indigo-400">in my hands?</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-indigo-500/10 p-4 rounded-full h-fit border border-indigo-500/20">
                    <Shield className="w-8 h-8 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Security and Transparency
                    </h4>
                    <p className="text-[#94A3B8] text-lg">
                      I work with agile methodologies (Scrum/Kanban). You know
                      exactly what is being done, in real time, with no budget
                      surprises.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-cyan-500/10 p-4 rounded-full h-fit border border-cyan-500/20">
                    <Rocket className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      360º Business Vision
                    </h4>
                    <p className="text-[#94A3B8] text-lg">
                      I am not just a programmer. I am a strategist. My goal is
                      to make your company more profitable through technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-4 relative animate-fade-in animation-delay-200">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-2xl blur opacity-10" />
              <img
                src="https://res.cloudinary.com/dtfsdkdu6/image/upload/v1774841184/pedrouva_ylzklx.webp"
                alt="Uva - Digital Strategist"
                className="relative w-1/2 h-auto rounded-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-standard relative">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0F172A] via-indigo-900/20 to-[#0F172A]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center glass-card p-12 md:p-20 border border-cyan-500/20 shadow-[0_0_100px_rgba(34,211,238,0.1)]">
          <h2 className="title-standard text-center text-4xl md:text-6xl font-bold tracking-tight">
            Let's bring your idea <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              to life now?
            </span>
          </h2>
          <p className="mb-12 max-w-2xl mx-auto text-lg font-medium text-[#E2E8F0]">
            I am ready to apply my experience and the best technologies on the
            market to your next big challenge.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              Talk directly with me <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Schema for SEO */}
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Which technologies does Uva use for development?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "I use the most modern and robust technologies available, including React 19, Node.js, TypeScript, and cloud-native architectures (Google Cloud/AWS), ensuring high performance and massive scalability."
              }
            },
            {
              "@type": "Question",
              "name": "How does project management work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All projects are managed under the Agile Scrum methodology, with weekly sprints, total transparency on progress, and incremental high-value deliveries."
              }
            },
            {
              "@type": "Question",
              "name": "Do you handle projects outside of Brazil?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. I serve clients globally, with professional English fluency and a complete infrastructure for seamless remote collaboration and delivery."
              }
            }
          ]
        }`}
      </script>
      <div className="h-20"></div>
    </div>
    <Footer lang="en" />
    </>
  );
}
