import { ArrowRight, Code, Bot, TrendingUp, Presentation, MessageCircle, Shield, Rocket, CheckCircle } from "lucide-react";
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
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] overflow-hidden relative font-sans">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />
      
      <div className="relative z-10">
        <Header showScheduleButton={false} />

        {/* 1. Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
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

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 animate-fade-in flex justify-center inline-block max-w-full">
              <div className="glass-card px-4 py-2 text-sm font-semibold text-cyan-400 inline-flex items-center gap-2 border border-cyan-500/30">
                <Rocket className="w-4 h-4" /> The Trinity Marketing AI Baseline
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in animation-delay-100 tracking-tight">
              Full-Stack Code, Scalable AI, & <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Growth Marketing.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#94A3B8] mb-10 max-w-3xl mx-auto animate-fade-in animation-delay-200 leading-relaxed font-semibold">
              <span className="text-white">One Mind. Global Delivery.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in animation-delay-300">
              <Button 
                className="btn-gradient text-lg py-7 px-10 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] transition-all duration-300"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Book a Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* 2. The Arsenal (Services) */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0B1120]">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">The <span className="text-cyan-400">Services</span> Grid</h2>
              <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
                Elite capabilities systematically combined to build, launch, and scale world-class digital products globally.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Code className="w-8 h-8 text-cyan-400" />,
                  title: "Development",
                  desc: "End-to-end web apps."
                },
                {
                  icon: <Bot className="w-8 h-8 text-indigo-400" />,
                  title: "Artificial Intelligence",
                  desc: "Workflow automation & LLM integration."
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
                  title: "Digital Marketing",
                  desc: "ROI-driven global campaigns."
                }
              ].map((service, idx) => (
                <article key={idx} className="glass-card p-8 hover:scale-105 transition-all duration-300 relative group overflow-hidden border border-white/5 hover:border-cyan-500/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="bg-[#0F172A] p-4 rounded-xl w-fit mb-6 shadow-inner border border-white/5">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-[#94A3B8] text-lg leading-relaxed">
                    {service.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. The Workflow Guarantee (Repositioned PM) */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 z-0 bg-gradient-to-tr from-indigo-900/20 via-[#0F172A] to-cyan-900/10" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="glass-card p-2 animate-fade-in animation-delay-200 border border-white/10 relative order-2 lg:order-1">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-indigo-500 rounded-2xl blur opacity-20" />
                <div className="relative bg-[#0F172A] rounded-xl p-8 h-full flex flex-col justify-center border-l-4 border-l-orange-500">
                  <Presentation className="w-10 h-10 text-orange-400 mb-6" />
                  <h3 className="text-3xl font-bold mb-4">Scrum-Certified Project Workflow</h3>
                  <p className="text-[#94A3B8] text-xl leading-relaxed">
                    I don't just develop; I manage the complexity so you don't have to.
                  </p>
                </div>
              </div>
              
              <div className="animate-fade-in order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">The Workflow <span className="bg-gradient-to-r from-orange-400 to-indigo-400 bg-clip-text text-transparent">Guarantee</span></h2>
                <p className="text-xl text-[#94A3B8] mb-8 leading-relaxed">
                  Your project is managed using standardized Scrum frameworks to guarantee predictability, transparency, and high-quality deliverables. <strong className="text-white">No chaos, no delays.</strong>
                </p>
                
                <ul className="space-y-6">
                  {[
                    "Daily transparent communication and organized sprints.",
                    "Strict timeline and milestone tracking (Certified Professional).",
                    "Rapid feedback loops with stakeholders."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 bg-orange-500/20 p-1 rounded-full">
                        <CheckCircle className="w-5 h-5 text-orange-400" />
                      </div>
                      <span className="text-lg text-[#CBD5E1]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The "Global Ready" Section (Cambly Integration) */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-black/40">
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-semibold mb-6">
                <Shield className="w-4 h-4" /> Verified Communication
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Professional English Fluency for <span className="text-blue-400">Global Business</span>.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="glass-card p-2 hover:scale-[1.02] transition-transform duration-500">
                <div className="relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-blue-500/10 z-10 mix-blend-overlay" />
                  <img 
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Pedro-Uva-Cambly-Certificate_6135a3a1.png" 
                    alt="Cambly English Certificate - Mr. Uva" 
                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <div className="glass-card p-6 border-l-4 border-l-blue-500">
                  <h4 className="text-2xl font-bold text-white mb-2">Seamless Communication</h4>
                  <p className="text-[#94A3B8] text-lg">
                    Over <strong>69+ Verified Hours</strong> of Conversational English with Native Speakers. Ready for dailies, stakeholder management, and high-stakes negotiations without any friction.
                  </p>
                </div>
                
                <div className="glass-card p-6 border border-white/5">
                  <p className="text-[#94A3B8] mb-4 text-sm">
                    <strong className="text-blue-400 block mb-1">Official Verification Link:</strong>
                    <a 
                      href="https://cambly.com/en/certificate/verify/0e67533e" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-400 transition-colors flex items-center gap-1"
                    >
                      Verify Certificate Authenticity <ArrowRight className="w-4 h-4" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Final Aggressive CTA */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0F172A] via-indigo-900/20 to-[#0F172A]" />
          
          <div className="max-w-4xl mx-auto relative z-10 text-center glass-card p-12 md:p-20 border border-cyan-500/20 shadow-[0_0_100px_rgba(34,211,238,0.1)]">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Ready to execute <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">at the highest level?</span>
            </h2>
            <p className="text-xl text-[#94A3B8] mb-12 max-w-2xl mx-auto">
              Stop settling for average execution. Let's engineer digital growth that disrupts your market and scales your operations globally.
            </p>

            <button 
              onClick={() => window.open(whatsappLink, '_blank')}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full hover:from-cyan-400 hover:to-indigo-500 hover:scale-105 shadow-[0_0_40px_rgba(34,211,238,0.4)]"
            >
              <MessageCircle className="w-6 h-6" />
              Book a Strategy Call
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
