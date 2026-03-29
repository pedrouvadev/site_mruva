import { ArrowRight, Code, Bot, TrendingUp, Presentation, MessageCircle, Shield, Rocket, CheckCircle, Code2, Briefcase, Zap, Globe, Users, Target, Award, ExternalLink, Linkedin, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function En() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappLink = "https://wa.me/5511978768690?text=Hi%20Pedro!%20I'm%20ready%20to%20scale%20my%20business.%20Let's%20talk!";

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] overflow-hidden relative font-sans selection:bg-cyan-500/30">
      {/* SEO Metadata & JSON-LD (Structured Data) could be added here if using a Meta component */}
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />
      
      <div className="relative z-10">
        <Header lang="en" showScheduleButton={false} />

        {/* 1. Hero Section - The Hook */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
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

            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight animate-fade-in animation-delay-100 tracking-tighter">
              Full-Stack Code, Scalable AI, & <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Growth Marketing</span>
            </h1>

            <p className="text-xl md:text-3xl text-[#94A3B8] mb-12 max-w-4xl mx-auto animate-fade-in animation-delay-200 leading-relaxed font-medium">
              <span className="text-white">One Mind. Global Delivery.</span> Engineering high-performance digital solutions for companies ready to disrupt the market.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in animation-delay-300">
              <Button 
                className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Book a Strategy Call <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-xs uppercase tracking-widest text-cyan-400">Years of Experience</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-white">33</div>
                <div className="text-xs uppercase tracking-widest text-indigo-400">Certifications</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-xs uppercase tracking-widest text-orange-400">Delivery Rate</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-white">Global</div>
                <div className="text-xs uppercase tracking-widest text-blue-400">Ready</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Expert Section - Authority & History */}
        <section id="expert" className="py-32 px-4 sm:px-6 lg:px-8 relative bg-black/20">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/pedrouva_3x4_55f0cfe1.png" 
                  alt="Pedro Uva - Full-Stack Engineer & AI Strategist" 
                  className="relative w-full h-auto rounded-xl shadow-2xl border border-white/10"
                />
                <div className="absolute bottom-6 left-6 right-6 glass-card p-6 border-l-4 border-cyan-400">
                  <h4 className="text-xl font-bold text-white">Pedro Uva</h4>
                  <p className="text-cyan-400 text-sm font-semibold">Multidisciplinary Professional</p>
                </div>
              </div>

              <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Engineering Excellence Since <span className="text-indigo-400">1997</span></h2>
                <p className="text-xl text-[#94A3B8] mb-8 leading-relaxed">
                  I am not just a developer. I am a <strong className="text-white">strategist</strong> who understands that code is a tool for profit. From the early days of hardware and networks to modern AI-driven architectures, my journey has been defined by one thing: <strong className="text-white">Solving Complex Problems.</strong>
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500/10 p-2 rounded-lg mt-1"><CheckCircle2 className="w-6 h-6 text-cyan-400" /></div>
                    <p className="text-lg text-[#CBD5E1]"><strong className="text-white">Technical Foundation:</strong> 25+ years evolving from technical support to Full-Stack & AI Engineering.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-500/10 p-2 rounded-lg mt-1"><CheckCircle2 className="w-6 h-6 text-indigo-400" /></div>
                    <p className="text-lg text-[#CBD5E1]"><strong className="text-white">Business Acumen:</strong> Former trader with a deep understanding of ROI, financial markets, and growth strategies.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/10 p-2 rounded-lg mt-1"><CheckCircle2 className="w-6 h-6 text-orange-400" /></div>
                    <p className="text-lg text-[#CBD5E1]"><strong className="text-white">AI Specialization:</strong> Google Cloud & Oracle ONE certified, specializing in LLM integration and workflow automation.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/mruva/" target="_blank" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors font-bold text-lg">
                    <Linkedin className="w-6 h-6" /> Connect on LinkedIn <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Services Grid - The Solution */}
        <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 relative bg-[#0B1120]">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-7xl font-bold mb-6">The <span className="text-cyan-400">Arsenal</span></h2>
              <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
                Elite capabilities systematically combined to build, launch, and scale world-class digital products globally.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: <Code className="w-10 h-10 text-cyan-400" />,
                  title: "Development",
                  desc: "End-to-end scalable web applications using React 19, Node.js, and TypeScript. Architecture designed for high performance and zero friction.",
                  tags: ["Full-Stack", "Architecture", "Performance"]
                },
                {
                  icon: <Bot className="w-10 h-10 text-indigo-400" />,
                  title: "Artificial Intelligence",
                  desc: "Custom LLM integrations, workflow automation, and predictive analytics. I put AI to work for your bottom line, not just for the hype.",
                  tags: ["LLMs", "Automation", "GPT-4"]
                },
                {
                  icon: <TrendingUp className="w-10 h-10 text-blue-400" />,
                  title: "Growth Marketing",
                  desc: "Data-driven global campaigns. ROI-focused Google & Meta Ads management and advanced technical SEO for international markets.",
                  tags: ["ROI", "Google Ads", "SEO"]
                }
              ].map((service, idx) => (
                <article key={idx} className="glass-card p-10 hover:scale-[1.05] transition-all duration-500 border border-white/5 hover:border-cyan-500/30 flex flex-col h-full group">
                  <div className="bg-[#0F172A] p-5 rounded-2xl w-fit mb-8 shadow-inner border border-white/5 group-hover:border-cyan-500/50 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">{service.title}</h3>
                  <p className="text-[#94A3B8] text-lg leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 rounded-full text-white/50">{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. The Workflow Guarantee - The Predictability */}
        <section id="workflow" className="py-32 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 z-0 bg-gradient-to-tr from-indigo-900/20 via-[#0F172A] to-cyan-900/10" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">The Workflow <span className="bg-gradient-to-r from-orange-400 to-indigo-400 bg-clip-text text-transparent">Guarantee</span></h2>
                <p className="text-xl text-[#94A3B8] mb-10 leading-relaxed">
                  Your project is managed using standardized <strong className="text-white">Scrum frameworks</strong> to guarantee predictability, transparency, and high-quality deliverables. I don't just develop; I manage the complexity so you don't have to.
                </p>
                
                <ul className="space-y-8">
                  {[
                    { title: "Predictable Delivery", desc: "Organized sprints with clear milestones and daily updates." },
                    { title: "Transparency", desc: "Strict timeline tracking and constant stakeholder alignment." },
                    { title: "Zero Chaos", desc: "Scrum-certified methodology to eliminate 'scope creep' and delays." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-5">
                      <div className="mt-1 bg-orange-500/20 p-2 rounded-full border border-orange-500/30">
                        <CheckCircle className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
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

        {/* 5. Global Ready - The Communication */}
        <section id="communication" className="py-32 px-4 sm:px-6 lg:px-8 relative bg-black/40">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-bold mb-8 uppercase tracking-widest">
                <Globe className="w-4 h-4" /> Global Business Ready
              </div>
              <h2 className="text-4xl md:text-7xl font-bold mb-8">
                Professional Working Proficiency
              </h2>
              <p className="text-2xl text-[#94A3B8] max-w-3xl mx-auto font-medium">
                Verified Professional Working Proficiency for high-stakes communication, dailies, and stakeholder management.
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

              <div className="space-y-10">
                <div className="glass-card p-10 border-l-4 border-l-blue-500 bg-white/5">
                  <h4 className="text-3xl font-bold text-white mb-4">Seamless Communication</h4>
                  <p className="text-[#94A3B8] text-xl leading-relaxed">
                    Over <strong>69+ Verified Hours</strong> of Conversational English with Native Speakers. Ready for high-level negotiations and global team collaboration without friction.
                  </p>
                </div>
                
                <div className="glass-card p-8 border border-white/5">
                  <a 
                    href="https://cambly.com/en/certificate/verify/0e67533e" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between text-white hover:text-cyan-400 transition-all"
                  >
                    <span className="text-xl font-bold">Verify Certificate Authenticity</span>
                    <ExternalLink className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Final CTA - The Conversion */}
        <section id="contact" className="py-40 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0F172A] via-indigo-900/30 to-[#0F172A]" />
          
          <div className="max-w-5xl mx-auto relative z-10 text-center glass-card p-16 md:p-32 border border-cyan-500/20 shadow-[0_0_150px_rgba(34,211,238,0.15)]">
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-tight">
              Ready to execute <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">at the highest level?</span>
            </h2>
            <p className="text-2xl text-[#94A3B8] mb-16 max-w-3xl mx-auto leading-relaxed">
              Stop settling for average execution. Let's engineer digital growth that disrupts your market and scales your operations globally.
            </p>

            <button 
              onClick={() => window.open(whatsappLink, '_blank')}
              className="group relative inline-flex items-center justify-center gap-4 px-16 py-8 text-3xl font-black text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full hover:from-cyan-400 hover:to-indigo-500 hover:scale-105 shadow-[0_0_60px_rgba(34,211,238,0.5)]"
            >
              <MessageCircle className="w-8 h-8" />
              Book a Strategy Call
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </button>
            
            <p className="mt-12 text-[#94A3B8] font-semibold uppercase tracking-widest text-sm">
              Available for Global Projects & Remote Roles
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
