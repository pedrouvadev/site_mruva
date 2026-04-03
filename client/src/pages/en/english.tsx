import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, Award, Globe, Users, CheckCircle2 } from "lucide-react";

// Schema for SEO
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "English Studies with Native Teacher | Pedro Uva - B1 Evolution",
  "description": "Follow my English learning journey at Cambly. Focus on simple negotiations, daily conversations and constant evolution.",
  "provider": {
    "@type": "Organization",
    "name": "Pedro Uva",
    "url": "https://mruva.com.br"
  },
  "educationalLevel": "Intermediate",
  "inLanguage": "en",
  "about": "English Language Learning",
  "timeRequired": "PT69H",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "instructor": {
      "@type": "Person",
      "name": "Native English Teachers"
    }
  }
};

export default function EnglishStudiesEn() {
  useEffect(() => {
    document.title = "English Studies with Native Teacher | Pedro Uva - B1 Evolution";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      "Follow my English learning journey at Cambly. Focus on simple negotiations, daily conversations and constant evolution."
    );
    
    // Insert Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(courseSchema);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] overflow-hidden relative font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <Header showStatus={true} lang="en" />

      <div className="relative z-10">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dtfsdkdu6/image/upload/v1775241145/pedrouva-sala-de-aula-ingles_rq7upf.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex justify-center animate-fade-in">
            <div className="glass-card px-4 py-2 text-sm md:text-base font-semibold text-orange-400 inline-flex items-center gap-2 border border-orange-500/30 uppercase tracking-widest">
              <Globe className="w-4 h-4" /> International Training
            </div>
          </div>

          <h1 className="title-standard animate-fade-in animation-delay-100 tracking-tighter">
            Global Communication in{" "}
            <span className="bg-gradient-to-r from-orange-400 to-indigo-500 bg-clip-text text-transparent">
              Progress
            </span>
          </h1>

          <p className="mb-12 max-w-4xl mx-auto animate-fade-in animation-delay-200 font-medium">
            Real Business English with <strong className="text-white">native teachers</strong> at{" "}
            <strong className="text-white">Cambly International School</strong>. Over 69 hours of verified practice with constant evolution for international professional context.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in animation-delay-300">
            <Button 
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open('https://wa.me/5511978768690', '_blank')}
            >
              Connect on LinkedIn <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>

          <p className="text-sm text-[#94A3B8] italic animate-fade-in animation-delay-400">
            ⚠️ Notice: Focus on realistic evolution, without instant fluency promises.
          </p>
        </div>
      </section>

        {/* Progress Section */}
        <section className="section-standard bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="title-standard text-center mb-16">
              Evolution <span className="text-orange-400">Status</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card p-8 text-center border-l-4 border-l-orange-500 hover:scale-[1.02] transition-transform">
                <div className="mb-4 bg-gradient-to-br from-orange-400/20 to-indigo-500/20 p-3 rounded-lg w-fit mx-auto">
                  <TrendingUp className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Current Level</h3>
                <p className="text-4xl font-black text-orange-400 mb-2">B1</p>
                <p className="text-[#94A3B8] text-lg">Intermediate</p>
              </div>

              <div className="glass-card p-8 text-center border-l-4 border-l-cyan-500 hover:scale-[1.02] transition-transform">
                <div className="mb-4 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 p-3 rounded-lg w-fit mx-auto">
                  <Clock className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Study Hours</h3>
                <p className="text-4xl font-black text-cyan-400 mb-2">69h</p>
                <p className="text-[#94A3B8] text-lg">Verified Practice</p>
              </div>

              <div className="glass-card p-8 text-center border-l-4 border-l-indigo-500 hover:scale-[1.02] transition-transform">
                <div className="mb-4 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 p-3 rounded-lg w-fit mx-auto">
                  <Award className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Study Time</h3>
                <p className="text-4xl font-black text-indigo-400 mb-2">1.5 years</p>
                <p className="text-[#94A3B8] text-lg">Consistency</p>
              </div>
            </div>

            <div className="glass-card p-8 border border-orange-500/20">
              <h3 className="text-2xl font-bold mb-6 text-center text-orange-400">Learning Routine</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Frequency</h4>
                    <p className="text-[#94A3B8] text-lg">1 hour per week</p>
                    <p className="text-sm text-cyan-400">2 lessons of 30 minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Method</h4>
                    <p className="text-[#94A3B8] text-lg">Conversation with natives</p>
                    <p className="text-sm text-cyan-400">Real and contextual practice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="section-standard">
          <div className="max-w-6xl mx-auto">
            <h2 className="title-standard text-center mb-16">
              Real <span className="text-orange-400">Capabilities</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="glass-card p-8 border-l-4 border-l-green-500">
                  <h3 className="text-2xl font-bold mb-4 text-white">🗣️ Daily Conversations</h3>
                  <p className="text-[#94A3B8] text-lg leading-relaxed">
                    Ability to maintain natural conversations about everyday topics, 
                    understand slang and idiomatic expressions with natives.
                  </p>
                </div>
                
                <div className="glass-card p-8 border-l-4 border-l-blue-500">
                  <h3 className="text-2xl font-bold mb-4 text-white">💼 Simple Negotiations</h3>
                  <p className="text-[#94A3B8] text-lg leading-relaxed">
                    Skill to negotiate basic business terms, 
                    discuss prices and close agreements in English.
                  </p>
                </div>
                
                <div className="glass-card p-8 border-l-4 border-l-purple-500">
                  <h3 className="text-2xl font-bold mb-4 text-white">👥 Understanding Natives</h3>
                  <p className="text-[#94A3B8] text-lg leading-relaxed">
                    Clear comprehension when natives speak at normal speed 
                    about technical and professional subjects.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-indigo-500 rounded-2xl blur opacity-20" />
                <div className="relative glass-card p-4">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Pedro-Uva-Cambly-Certificate_6135a3a1.png"
                    alt="English Study Certificate Cambly - Pedro Uva"
                    className="w-full h-auto rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                    width="1123"
                    height="793"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
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

        <div className="max-w-4xl mx-auto text-center relative z-10 glass-card p-12 md:p-20 border border-orange-500/20">
          <h2 className="title-standard text-center text-4xl font-bold">Continuous Evolution is the Differential</h2>
          <p className="mb-12 max-w-2xl mx-auto text-lg font-medium text-[#E2E8F0]">
            I don't promise instant fluency, but commitment to real evolution. 
            Each lesson is a step towards effective global communication.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open('https://wa.me/5511978768690', '_blank')}
            >
              Connect on LinkedIn <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </div>
  );
}
