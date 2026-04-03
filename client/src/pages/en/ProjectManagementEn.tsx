import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Layers, TrendingUp, Shield, Rocket, MessageCircle } from "lucide-react";

export default function ProjectManagementEn() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Agile Project Management & Scrum Services | Pedro Uva";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Ensure predictable delivery and project health with Scrum methodologies. Tech-focused project management for complex digital products.");
    }
  }, []);
  
  const whatsappLink = "https://wa.me/5511978768690?text=Hi%20Pedro!%20I%20want%20my%20project%20with%20this%20management.";

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] overflow-hidden relative font-sans selection:bg-cyan-500/30">
      <Header lang="en" showStatus={true} />

      <div className="relative z-10">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://res.cloudinary.com/dtfsdkdu6/image/upload/v1775249506/pedrouva-reuniao-gestao-de-projetos_zlvyfi.webp')" }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex justify-center animate-fade-in">
            <div className="glass-card px-4 py-2 text-sm md:text-base font-semibold text-orange-400 inline-flex items-center gap-2 border border-orange-500/30 uppercase tracking-widest">
              <Shield className="w-4 h-4" /> Workflow Guarantee & Shielded Delivery
            </div>
          </div>

          <h1 className="title-standard animate-fade-in animation-delay-100 tracking-tighter">
            Your Project with <span className="bg-gradient-to-r from-orange-400 to-indigo-500 bg-clip-text text-transparent">Shielded Delivery</span>
          </h1>

          <p className="mb-12 max-w-4xl mx-auto animate-fade-in animation-delay-200 font-medium">
            I don't just develop; I manage complexity. My management uses agile methodologies to guarantee the success of your <strong className="text-white">Development and Digital Marketing</strong> projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in animation-delay-300">
            <Button 
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Guarantee My Project Success <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section-standard bg-[#0B1120]">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="title-standard text-center text-4xl md:text-5xl font-bold">Agile Management as a <span className="text-orange-400">Pillar of Success</span></h2>
            <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto font-medium">
              When you hire me for Full-Stack, Digital Marketing, or AI, you get a Certified Scrum Professional to set up your project, ensuring transparency and on-time delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 border-l-4 border-l-orange-500 hover:scale-[1.02] transition-transform">
              <div className="mb-4 bg-gradient-to-br from-indigo-500/20 to-orange-400/20 p-3 rounded-lg w-fit">
                <TrendingUp className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Predictable Delivery</h3>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                Organized sprints with clear milestones and frequent updates. I use the Scrum framework to ensure development moves in clear cycles. No surprises, no delays.
              </p>
            </div>

            <div className="glass-card p-8 border-l-4 border-l-cyan-500 hover:scale-[1.02] transition-transform">
              <div className="mb-4 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 p-3 rounded-lg w-fit">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Full Transparency</h3>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                Strict timeline tracking and constant alignment with stakeholders. My methodology focuses on eliminating bugs before they reach production.
              </p>
            </div>

            <div className="glass-card p-8 border-l-4 border-l-indigo-500 hover:scale-[1.02] transition-transform">
              <div className="mb-4 bg-gradient-to-br from-indigo-500/20 to-purple-400/20 p-3 rounded-lg w-fit">
                <Rocket className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Zero Chaos</h3>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                Scrum-certified methodology to eliminate uncontrolled scope creep and delays. Crystal-clear communication and constant alignment ensure project success.
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
              <h2 className="title-standard text-4xl md:text-5xl font-bold leading-tight">
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
          <h2 className="title-standard text-center text-4xl font-bold">Let's develop your project without chaos and with results?</h2>
          <p className="mb-12 max-w-2xl mx-auto text-lg font-medium text-[#E2E8F0]">
            Stop suffering from delays and lack of transparency. Let's combine cutting-edge technology with professional management focused on your delivery with Scrum Framework.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              I want this management <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </div>
  );
}
