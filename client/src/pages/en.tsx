import {
  ArrowRight,
  Code,
  Bot,
  TrendingUp,
  Presentation,
  MessageCircle,
  Shield,
  Rocket,
  CheckCircle,
  Code2,
  Briefcase,
  Zap,
  Globe,
  Users,
  Target,
  Award,
  ExternalLink,
  Linkedin,
  CheckCircle2,
  Github,
  Send,
} from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function En() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Pedro Uva | Full-Stack Engineer & AI Strategist Portfolio";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Elite Full-Stack Code, Scalable AI & Growth Marketing. 25+ years expertise in digital transformation for global enterprises."
      );
    }
  }, []);

  const whatsappLink =
    "https://wa.me/5511978768690?text=Hi%20Pedro!%20I'm%20ready%20to%20scale%20my%20business.%20Let's%20talk!";
  const githubLink = "https://github.com/pedrouvadev";

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] overflow-hidden relative font-sans selection:bg-cyan-500/30">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />

      <div className="relative z-10">
        <Header lang="en" showStatus={true} />

        {/* 1. Hero Section - The Hook */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
        >
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
            <div className="mb-6 animate-fade-in flex justify-center">
              <div className="glass-card px-4 py-2 text-sm font-semibold text-cyan-400 inline-flex items-center gap-2 border border-cyan-500/30 uppercase tracking-widest">
                <Rocket className="w-4 h-4" /> The Trinity Marketing AI Baseline
              </div>
            </div>

            <h1 className="title-standard animate-fade-in animation-delay-100 tracking-tighter">
              Full-Stack Code, Scalable AI &{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                Growth Marketing
              </span>
            </h1>

            <p className="mb-12 max-w-4xl mx-auto animate-fade-in animation-delay-200 font-medium">
              <span className="text-white">
                One Single Mind. Global Delivery.
              </span>{" "}
              Engineering high-performance digital solutions for companies ready
              to revolutionize the market.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in animation-delay-300">
              <Button
                className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                Book a Strategic Call <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-xs uppercase tracking-widest text-cyan-400">
                  Years of Experience
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-white">33+</div>
                <div className="text-xs uppercase tracking-widest text-indigo-400">
                  Certifications
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-xs uppercase tracking-widest text-orange-400">
                  Delivered Projects
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-white">Global</div>
                <div className="text-xs uppercase tracking-widest text-blue-400">
                  Ready
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Expert - Authority & History */}
        <section id="expert" className="section-standard bg-black/20 text-left">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-2xl blur opacity-20" />
                <div className="relative flex flex-col items-center">
                  <div className="relative overflow-hidden rounded-xl max-w-sm mx-auto -mt-8">
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/pedrouva_3x4_55f0cfe1.png"
                      alt="Pedro Uva - Full-Stack Developer & Digital Strategist in São Paulo"
                      className="w-full h-auto"
                      width="384"
                      height="512"
                      loading="eager"
                    />
                  </div>
                  <div className="mt-4 w-[90%] max-w-sm glass-card p-4 border-l-4 border-cyan-400">
                    <h4 className="text-xl font-bold text-white">Pedro Uva</h4>
                    <p className="text-cyan-400 text-sm font-semibold mb-3">
                      FullStack & Digital Strategist
                    </p>
                    <div className="flex gap-4 justify-start">
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Pedro Uva's GitHub profile"
                        className="text-[#94A3B8] hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" aria-hidden="true" />
                      </a>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contact via WhatsApp"
                        className="text-[#94A3B8] hover:text-[#25D366] transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" aria-hidden="true" />
                      </a>
                      <a
                        href="https://t.me/pedrouva"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contact via Telegram"
                        className="text-[#94A3B8] hover:text-[#0088cc] transition-colors"
                      >
                        <Send className="w-5 h-5" aria-hidden="true" />
                      </a>
                      <a
                        href="https://discord.com/users/pedrouva"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contact via Discord"
                        className="text-[#94A3B8] hover:text-[#5865F2] transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/mruva/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Pedro Uva's LinkedIn profile"
                        className="text-[#94A3B8] hover:text-[#0077B5] transition-colors"
                      >
                        <Linkedin className="w-5 h-5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="title-standard">
                  Engineering Excellence since{" "}
                  <span className="text-indigo-400">1997</span>
                </h2>
                <p className="mb-8">
                  I'm not just a developer. I'm a{" "}
                  <strong className="text-white">strategist</strong> who
                  understands that code is a tool to generate profit. From the
                  beginning with hardware and networks to modern AI-driven
                  architectures, my journey has been defined by one thing:{" "}
                  <strong className="text-white">
                    Solving Complex Problems.
                  </strong>
                </p>

                <div className="space-y-6 mb-10 text-left">
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500/10 p-2 rounded-lg mt-1">
                      <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                    </div>
                    <p className="text-lg text-[#CBD5E1]">
                      <strong className="text-white">
                        Technical Foundation:
                      </strong>{" "}
                      Over 25 years evolving from technical support to
                      Full-Stack and AI Engineering.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-500/10 p-2 rounded-lg mt-1">
                      <CheckCircle2 className="w-6 h-6 text-indigo-400" />
                    </div>
                    <p className="text-lg text-[#CBD5E1]">
                      <strong className="text-white">Business Vision:</strong>{" "}
                      Entrepreneur, trader, with deep understanding of ROI, B3
                      financial markets, Cryptos and Forex, and digital
                      marketing growth strategies.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/10 p-2 rounded-lg mt-1">
                      <CheckCircle2 className="w-6 h-6 text-orange-400" />
                    </div>
                    <p className="text-lg text-[#CBD5E1]">
                      <strong className="text-white">AI Specialization:</strong>{" "}
                      Certified by Google Cloud and Instituto Vai na Web,
                      specialist in LLM integration and workflow automation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/mruva/"
                    target="_blank"
                    className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors font-bold text-lg"
                  >
                    <Linkedin className="w-6 h-6" /> Connect on LinkedIn{" "}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Services Arsenal - The Solution */}
        <section id="services" className="section-standard bg-[#0B1120]">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-7xl font-bold mb-6">
                The <span className="text-cyan-400">Arsenal</span>
              </h2>
              <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
                Elite capabilities systematically combined to build, launch, and
                scale world-class digital products globally.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: <Code className="w-10 h-10 text-cyan-400" />,
                  title: "Development",
                  desc: "End-to-end scalable web applications using React 19, Node.js, and TypeScript. Architecture designed for high performance and zero friction.",
                  tags: ["Full-Stack", "Architecture", "Performance"],
                  link: "/en/development",
                },
                {
                  icon: <Bot className="w-10 h-10 text-indigo-400" />,
                  title: "Artificial Intelligence",
                  desc: "Custom LLM integrations, workflow automation, and predictive analytics. I put AI to work for your profit, not just for the hype.",
                  tags: ["LLMs", "Automation", "GPT-4"],
                  link: "/en/ai",
                },
                {
                  icon: <TrendingUp className="w-10 h-10 text-blue-400" />,
                  title: "Growth Marketing",
                  desc: "Data-driven global campaigns. Google and Meta ad management focused on ROI and advanced technical SEO for international markets.",
                  tags: ["ROI", "Google Ads", "SEO"],
                  link: "/en/marketing",
                },
              ].map((service, idx) => (
                <article
                  key={idx}
                  className="glass-card p-10 hover:scale-[1.05] transition-all duration-500 border border-white/5 hover:border-cyan-500/30 flex flex-col h-full group text-left"
                >
                  <div className="bg-[#0F172A] p-5 rounded-2xl w-fit mb-8 shadow-inner border border-white/5 group-hover:border-cyan-500/50 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">
                    {service.title}
                  </h3>
                  <p className="text-[#94A3B8] text-lg leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 rounded-full text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={service.link}
                    className="mt-auto inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors"
                  >
                    Know More <ArrowRight className="w-4 h-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. GitHub Section - Open Source & Transparency */}
        <section
          id="github"
          className="py-32 px-4 sm:px-6 lg:px-8 relative bg-black/20"
        >
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                  Open Source &{" "}
                  <span className="text-cyan-400">Clean Code</span>
                </h2>
                <p className="text-xl text-[#94A3B8] mb-8 leading-relaxed">
                  I believe in transparency and continuous contribution to the
                  developer community. My GitHub reflects my commitment to code
                  quality and the constant exploration of new technologies.
                </p>
                <button
                  onClick={() => window.open(githubLink, "_blank")}
                  className="group flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 rounded-full text-xl font-bold hover:bg-white/10 transition-all"
                >
                  <Github className="w-8 h-8" />
                  View Github Profile
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-cyan-500/20 blur-2xl rounded-full animate-pulse" />
                  <Github className="w-48 h-48 md:w-64 md:h-64 text-white/10 relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. The Workflow Guarantee - Predictability */}
        <section id="workflow" className="py-32 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 z-0 bg-gradient-to-tr from-indigo-900/20 via-[#0F172A] to-cyan-900/10" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 text-left">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                  The Workflow{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-indigo-400 bg-clip-text text-transparent">
                    Guarantee
                  </span>
                </h2>
                <p className="text-xl text-[#94A3B8] mb-10 leading-relaxed">
                  Your project is managed using{" "}
                  <strong className="text-white">
                    standardized Scrum frameworks
                  </strong>{" "}
                  to ensure predictability, transparency, and high-quality
                  deliverables. I don't just develop; I manage the complexity so
                  you don't have to.
                </p>

                <ul className="space-y-8">
                  {[
                    {
                      title: "Predictable Delivery",
                      desc: "Organized sprints with clear milestones and frequent updates.",
                    },
                    {
                      title: "Transparency",
                      desc: "Strict timeline tracking and constant alignment with stakeholders.",
                    },
                    {
                      title: "Zero Chaos",
                      desc: "Scrum-certified methodology to eliminate uncontrolled scope creep and delays.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-5">
                      <div className="mt-1 bg-orange-500/20 p-2 rounded-full border border-orange-500/30">
                        <CheckCircle className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-[#94A3B8] text-lg">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="order-1 lg:order-2 glass-card p-4 relative animate-fade-in">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-indigo-500 rounded-2xl blur opacity-20" />
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/certificado-gestao_edd771b2.png"
                  alt="Scrum Certification - Mr. Uva"
                  className="relative w-full h-auto rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. Ready for the World - Communication */}
        <section
          id="communication"
          className="py-32 px-4 sm:px-6 lg:px-8 relative bg-black/40"
        >
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-bold mb-8 uppercase tracking-widest mx-auto">
                <Globe className="w-4 h-4" /> Ready for Global Business
              </div>
              <h2 className="text-4xl md:text-7xl font-bold mb-8">
                Professional Proficiency
              </h2>
              <p className="text-2xl text-[#94A3B8] max-w-3xl mx-auto font-medium">
                Verified proficiency for high-level communication, daily
                meetings, and management of international stakeholders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="glass-card p-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10">
                <div className="relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-blue-500/10 z-10 mix-blend-overlay" />
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Pedro-Uva-Cambly-Certificate_6135a3a1.png"
                    alt="Cambly English Certificate - Mr. Uva"
                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              <div className="space-y-10 text-left">
                <div className="glass-card p-10 border-l-4 border-l-blue-500 bg-white/5">
                  <h4 className="text-3xl font-bold text-white mb-4">
                    Fluid Communication
                  </h4>
                  <p className="text-[#94A3B8] text-xl leading-relaxed">
                    Over <strong>69 verified hours</strong> of conversational
                    English with native speakers. Ready for high-level
                    negotiations and collaboration in global teams without
                    friction.
                  </p>
                </div>

                <div className="glass-card p-8 border border-white/5">
                  <a
                    href="https://cambly.com/en/certificate/verify/0e67533e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between text-white hover:text-cyan-400 transition-all"
                  >
                    <span className="text-xl font-bold">
                      Verify Certificate Authenticity
                    </span>
                    <ExternalLink className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Professional Trajectory */}
        <section
          id="trajectory"
          className="py-24 px-4 sm:px-6 lg:px-8 text-left"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
              Professional Trajectory
            </h2>
            <p className="text-center text-[#94A3B8] mb-16 max-w-2xl mx-auto">
              From technical support to digital strategist: a journey of
              continuous learning and transformation
            </p>

            <div className="space-y-6">
              {/* Timeline Item 1 */}
              <div className="glass-card p-6 border-l-4 border-indigo-500">
                <div className="flex items-start gap-4">
                  <Code2 className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      1997-2001: First Steps in Tech
                    </h3>
                    <p className="text-[#94A3B8] mb-2">
                      Started as a support technician in telecommunications
                      companies (Prest Service, System Informática, UOL, AT&T
                      Latin America). Learned to work under pressure, solve
                      complex problems, and handle large-scale clients.
                    </p>
                    <p className="text-sm text-cyan-400">
                      Technologies: Hardware, Networks, Technical Support
                    </p>
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
                        <h3 className="text-xl font-bold mb-2">
                          2008-2013: Financial Market
                        </h3>
                        <p className="text-[#94A3B8] mb-2">
                          Worked as a trader and commercial specialist at Um
                          Investimentos. Led the "Retomada ao Topo" campaign
                          with Google Ads, capturing 340 new investors with
                          proven ROI. Consolidated knowledge in finance,
                          marketing, and resilience.
                        </p>
                        <p className="text-sm text-cyan-400">
                          Technologies: Trading, Google Ads, Digital Marketing
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-48 flex-shrink-0">
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/pedro_uva-trader-profissional-do-mercado-financeiro_9dabad75.jpg"
                      alt="Pedro Uva - Professional Financial Market Trader"
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
                    <h3 className="text-xl font-bold mb-2">
                      2014-2020: Entrepreneurship
                    </h3>
                    <p className="text-[#94A3B8] mb-2">
                      Founded Respiro Aventura (adventure tourism) and
                      Engenharia de Conteúdo (digital agency). Developed skills
                      in management, content creation, SEO, and digital
                      marketing. Operated as an independent trader with
                      discipline and risk management.
                    </p>
                    <p className="text-sm text-cyan-400">
                      Technologies: PHP, MySQL, SEO, Google Ads, Meta Ads
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="glass-card p-6 border-l-4 border-indigo-500">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      2020-2025: Digital Transformation
                    </h3>
                    <p className="text-[#94A3B8] mb-2">
                      Returned to Lavanderia Umarizal (family business) and
                      implemented a complete digital transformation: new
                      website, Google Ads campaigns (220% ROI), process
                      automation, AI for customer service. Manages 18 employees
                      and own VPS infrastructure.
                    </p>
                    <p className="text-sm text-cyan-400">
                      Technologies: React, Node.js, IA, Google Cloud, DevOps
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 5 */}
              <div className="glass-card p-6 border-l-4 border-cyan-500">
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      2025-2026: Education & Specialization
                    </h3>
                    <p className="text-[#94A3B8] mb-2">
                      Pursuing a degree in Systems Development (FAT/Fatec),
                      participating in Oracle ONE, studying advanced English at
                      Cambly. Accumulates 25 Google Cloud Skill Badges in AI/ML.
                      Preparing to operate at an international level.
                    </p>
                    <p className="text-sm text-cyan-400">
                      Technologies: Full Stack, IA, Google Cloud, Advanced
                      English
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Technical Skills */}
        <section
          id="skills"
          className="py-24 px-4 sm:px-6 lg:px-8 relative text-left"
        >
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
              Technical Skills
            </h2>
            <p className="text-center text-[#94A3B8] mb-16 max-w-2xl mx-auto">
              Complete stack for development, marketing, and automation
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-indigo-400">
                  Front-end
                </h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ React 19 + TypeScript</li>
                  <li>✓ HTML5 + CSS3</li>
                  <li>✓ Tailwind CSS v4</li>
                  <li>✓ Advanced JavaScript</li>
                  <li>✓ Responsive Design</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-cyan-400">
                  Back-end
                </h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Node.js + Express</li>
                  <li>✓ PHP + Laravel</li>
                  <li>✓ MySQL + PostgreSQL</li>
                  <li>✓ REST APIs</li>
                  <li>✓ Authentication & Security</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-orange-400">
                  DevOps
                </h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Linux (25+ years)</li>
                  <li>✓ Docker & Containers</li>
                  <li>✓ Git & GitHub</li>
                  <li>✓ VPS & Cloud</li>
                  <li>✓ CI/CD Pipelines</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-indigo-400">
                  Digital Marketing
                </h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Google Ads & GA4</li>
                  <li>✓ Meta Ads</li>
                  <li>✓ On-page & Off-page SEO</li>
                  <li>✓ Content Strategy</li>
                  <li>✓ Measurable ROI</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-cyan-400">
                  AI & Automation
                </h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ ChatGPT & LLMs</li>
                  <li>✓ Process Automation</li>
                  <li>✓ Google Cloud AI/ML</li>
                  <li>✓ Advanced Integrations</li>
                  <li>✓ Prompt Engineering</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-orange-400">
                  Finance & Trading
                </h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Technical Analysis</li>
                  <li>✓ Trading (Index & Dollar)</li>
                  <li>✓ Risk Management</li>
                  <li>✓ Compliance</li>
                  <li>✓ Trading Psychology</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-indigo-400">
                  Business Management
                </h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ People Management</li>
                  <li>✓ Strategic Planning</li>
                  <li>✓ Digital Transformation</li>
                  <li>✓ Project Management</li>
                  <li>✓ Leadership & Mentoring</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-cyan-400">
                  Languages
                </h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Portuguese (Native)</li>
                  <li>✓ English (Advanced)</li>
                  <li>✓ Global Communication</li>
                  <li>✓ 1.5 years Cambly</li>
                  <li>✓ Ready for Int'l Market</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Personal Gallery */}
        <section id="gallery" className="section-standard text-left">
          <div className="max-w-6xl mx-auto">
            <h2 className="title-standard text-center">Personal Gallery</h2>
            <p className="text-center text-[#94A3B8] mb-16 max-w-2xl mx-auto">
              Moments that reflect the professional journey and a passion for
              technology
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-4 hover:scale-105 transition-transform text-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/no-meu-quarto_998b2075.jpg"
                  alt="Pedro Uva"
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-[#94A3B8] mt-4 text-sm font-medium">
                  Home Office: Strategy & Planning
                </p>
              </div>

              <div className="glass-card p-4 hover:scale-105 transition-transform text-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/pedro_uva-trader-profissional-do-mercado-financeiro_9dabad75.jpg"
                  alt="Pedro Uva - Professional Trader"
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-[#94A3B8] mt-4 text-sm">
                  Professional Financial Market Trader
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Professional Philosophy */}
        <section id="philosophy" className="section-standard text-left">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-indigo-500/5" />
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="title-standard text-center">
              Professional Philosophy
            </h2>

            <div className="space-y-6">
              <div className="glass-card p-8 border-cyan-500/50">
                <h3 className="text-xl font-bold mb-3 text-cyan-400">
                  🎯 Purpose Above All
                </h3>
                <p className="text-[#94A3B8]">
                  I decline projects that are not aligned with my values. I seek
                  work with "soul" — something that generates real impact,
                  continuous learning, and a genuine contribution to the
                  community.
                </p>
              </div>

              <div className="glass-card p-8 border-indigo-500/50">
                <h3 className="text-xl font-bold mb-3 text-indigo-400">
                  🔄 Continuous Learning
                </h3>
                <p className="text-[#94A3B8]">
                  I have never stopped studying. Even without complete formal
                  degrees, I have accumulated knowledge equivalent or superior
                  to many graduations, with the advantage of immediate practical
                  application.
                </p>
              </div>

              <div className="glass-card p-8 border-orange-500/50">
                <h3 className="text-xl font-bold mb-3 text-orange-400">
                  💪 Resilience as a Competency
                </h3>
                <p className="text-[#94A3B8]">
                  The crises I faced — bankruptcies, layoffs, family problems,
                  business failures — did not paralyze me. From each one, I
                  extracted learning and started again stronger.
                </p>
              </div>

              <div className="glass-card p-8 border-cyan-500/50">
                <h3 className="text-xl font-bold mb-3 text-cyan-400">
                  🌍 Ubuntu in Business
                </h3>
                <p className="text-[#94A3B8]">
                  "I am because we are". I value win-win partnerships, build
                  communities, and promote transparency, collaboration, and
                  meritocracy in everything I do.
                </p>
              </div>

              <div className="glass-card p-8 border-indigo-500/50">
                <h3 className="text-xl font-bold mb-3 text-indigo-400">
                  🚀 Geographical Freedom & Autonomy
                </h3>
                <p className="text-[#94A3B8]">
                  I dream of geographical freedom (motorhome, Starlink) and
                  professional autonomy: working from anywhere, on meaningful
                  projects, without corporate constraints.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Certifications & Recognition */}
        <section id="certifications" className="section-standard text-left">
          <div className="max-w-6xl mx-auto">
            <h2 className="title-standard text-center">
              Certifications & Recognition
            </h2>
            <p className="text-center text-[#94A3B8] mb-16 max-w-2xl mx-auto">
              Continuous education and recognition of expertise
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="glass-card p-6 text-center">
                <p className="text-3xl font-bold text-indigo-400 mb-2">33</p>
                <p className="text-[#94A3B8]">Official Certifications</p>
                <p className="text-sm text-cyan-400 mt-2">
                  Google, Oracle, Goobec, Qualifica SP
                </p>
              </div>
              <div className="glass-card p-6 text-center">
                <p className="text-3xl font-bold text-cyan-400 mb-2">25</p>
                <p className="text-[#94A3B8]">Google Cloud Skill Badges</p>
                <p className="text-sm text-orange-400 mt-2">
                  AI, ML, Cloud Infrastructure
                </p>
              </div>
              <div className="glass-card p-6 text-center">
                <p className="text-3xl font-bold text-orange-400 mb-2">22K+</p>
                <p className="text-[#94A3B8]">LinkedIn Followers</p>
                <p className="text-sm text-indigo-400 mt-2">
                  Authority in Tech & Entrepreneurship
                </p>
              </div>
            </div>

            <div className="glass-card p-8 border-cyan-500/50">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">
                Ongoing Education
              </h3>
              <ul className="space-y-3 text-[#94A3B8]">
                <li>
                  ✓ <strong>Systems Development Technologist</strong> -
                  FAT/Fatec (2025-2026)
                </li>
                <li>
                  ✓ <strong>Oracle ONE</strong> - 12-month Development Program
                  (2024-2025)
                </li>
                <li>
                  ✓ <strong>Google Cloud Skills Boost</strong> - 25 Skill Badges
                  in AI/ML (2024-2026)
                </li>
                <li>
                  ✓ <strong>Digital Marketing</strong> - Goobec (Google Partner)
                  - Google Ads, Meta Ads, GA4
                </li>
                <li>
                  ✓ <strong>IT Project Management</strong> - Qualifica SP
                </li>
                <li>
                  ✓ <strong>Advanced English</strong> - Cambly (1.5 years with
                  native speakers)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 12. Final CTA */}
        <section id="finalcta" className="section-standard">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0F172A] via-indigo-900/30 to-[#0F172A]" />

          <div className="max-w-5xl mx-auto relative z-10 text-center glass-card p-16 md:p-32 border border-cyan-500/20 shadow-[0_0_150px_rgba(34,211,238,0.15)]">
            <h2 className="title-standard tracking-tighter">
              Ready to execute <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                at the highest level?
              </span>
            </h2>
            <p className="text-2xl text-[#94A3B8] mb-16 max-w-3xl mx-auto leading-relaxed">
              Stop settling for average execution. Let's engineer digital growth
              that disrupts your market and scales your operations globally.
            </p>

            <button
              onClick={() => window.open(whatsappLink, "_blank")}
              className="group relative inline-flex items-center justify-center gap-4 px-16 py-8 text-3xl font-black text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full hover:from-cyan-400 hover:to-indigo-500 hover:scale-105 shadow-[0_0_60px_rgba(34,211,238,0.5)]"
            >
              <MessageCircle className="w-8 h-8" />
              Book a Strategic Call
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </button>

            <p className="mt-12 text-[#94A3B8] font-semibold uppercase tracking-widest text-sm">
              Available for Global Projects & Remote Roles
            </p>
          </div>
        </section>

        <Footer lang="en" />
      </div>
    </div>
  );
}
