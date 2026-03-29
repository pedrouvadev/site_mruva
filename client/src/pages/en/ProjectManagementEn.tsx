import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Layers, TrendingUp, Shield, Rocket, MessageCircle } from "lucide-react";

export default function ProjectManagementEn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const whatsappLink = "https://wa.me/5511978768690?text=Hi%20Pedro!%20I%20want%20my%20project%20with%20this%20management.";

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] overflow-hidden relative font-sans selection:bg-cyan-500/30">
      <div className="relative z-10">
        <Header lang="en" showStatus={true} />
        
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/hero-3d-neon-ETM4gefM3NZLJ3bB38yXCc.webp')" }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/90 to-[#0F172A]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <div className="mb-6 flex justify-center">
            <div className="glass-card px-4 py-2 text-sm font-semibold text-orange-400 inline-flex items-center gap-2 border border-orange-500/30">
              <Shield className="w-4 h-4" /> Competitive Advantage and Flow Guarantee
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Your Project with <span className="bg-gradient-to-r from-orange-400 to-indigo-500 bg-clip-text text-transparent">Shielded Delivery</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#94A3B8] mb-8 max-w-3xl mx-auto leading-relaxed">
            I don't just develop; I manage complexity. My management uses the <strong>Scrum</strong> framework to guarantee the success of the <strong>Development and Digital Marketing</strong> projects you hire.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in animation-delay-200">
            <Button 
              className="btn-gradient text-lg py-7 px-10 shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] transition-all duration-300"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              I want my project with this management <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0B1120]">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Agile Management as a <span className="text-orange-400">Pillar of Success</span></h2>
            <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
              When you hire me for Full-Stack, Digital Marketing, or AI, you get a Certified Scrum Professional to set up your project, ensuring transparency and on-time delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 border-l-4 border-l-orange-500 hover:scale-[1.02] transition-transform">
              <div className="mb-4 bg-gradient-to-br from-indigo-500/20 to-orange-400/20 p-3 rounded-lg w-fit">
                <TrendingUp className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Predictability and Sprints</h3>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                I use the Scrum framework to ensure development moves in clear cycles. No surprises, no delays. You track the real evolution of your product with every delivery.
              </p>
            </div>

            <div className="glass-card p-8 border-l-4 border-l-cyan-500 hover:scale-[1.02] transition-transform">
              <div className="mb-4 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 p-3 rounded-lg w-fit">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Transparency and On-time Delivery</h3>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                My methodology focuses on eliminating bugs before they reach production. Crystal-clear communication and constant alignment ensure the final project is exactly what your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-indigo-900/10 via-[#0F172A] to-orange-900/10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 glass-card p-4 hover:scale-105 transition-transform duration-500 bg-white/5 border border-orange-500/20">
              <div className="relative overflow-hidden rounded-xl bg-[#0F172A]">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/certificado-gestao_edd771b2.png" 
                  alt="Project Management Certificate - Qualifica SP & FAT Foundation" 
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold mb-6">
                <CheckCircle2 className="w-4 h-4" /> Proven Official Qualification
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                The Technical Foundation of<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-indigo-400 tracking-tight">
                  Your Peace of Mind
                </span>
              </h2>
              <p className="text-[#94A3B8] text-xl leading-relaxed mb-6 font-medium">
                With 120 official hours in IT Project Management by Qualifica SP / FAT Foundation, I apply Scrum and Kanban rituals to shield your investment.
              </p>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                This theoretical foundation allows me to manage complex flows, removing blockers and ensuring the technical team (or myself during development) focuses 100% on generating value for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0F172A] via-orange-900/10 to-[#0F172A]" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center glass-card p-12 md:p-16 border border-orange-500/20 shadow-[0_0_100px_rgba(249,115,22,0.1)]">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            Let's develop your project <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-indigo-500">without chaos and with results?</span>
          </h2>
          <p className="text-xl text-[#94A3B8] mb-12 leading-relaxed">
            Stop suffering from delays and lack of transparency. Let's combine cutting-edge technology with professional management focused on your delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => window.open(whatsappLink, '_blank')}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-orange-500 to-indigo-600 rounded-full hover:scale-105 shadow-[0_0_40px_rgba(249,115,22,0.4)]"
            >
              <MessageCircle className="w-6 h-6" />
              I want my project with this management
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
