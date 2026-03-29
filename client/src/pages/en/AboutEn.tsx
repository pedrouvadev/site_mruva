import { ArrowRight, Code2, Briefcase, Zap, Globe, Users, TrendingUp } from "lucide-react";
import { useLocation } from "wouter";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutEn() {
  const [, navigate] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] overflow-hidden relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/50 to-[#0F172A]" />
      
      <div className="relative z-10">
        <Header lang="en" />

      {/* Hero Section with Photo */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/hero-3d-neon-ETM4gefM3NZLJ3bB38yXCc.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/50 to-[#0F172A]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <div className="mb-6 flex justify-start">
                <div className="glass-card px-4 py-2 text-sm md:text-base font-semibold text-cyan-400 inline-block max-w-full leading-relaxed">
                  👨‍💻 Developer & Digital Strategist
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">Pedro Uva</span>
              </h1>

              <p className="text-lg md:text-xl text-[#94A3B8] mb-8 max-w-2xl">
                Over 25 years of experience in technology. I transform ideas into scalable digital solutions, combining technical rigor with strategic business vision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => navigate("/en/services")}
                  className="btn-gradient text-lg py-6 flex items-center justify-center gap-2"
                >
                  Explore Services <ArrowRight className="w-5 h-5" />
                </button>
                <a 
                  href="https://www.linkedin.com/in/mruva/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-card px-8 py-6 text-lg font-semibold hover:border-cyan-400/50 transition-all flex items-center justify-center gap-2"
                >
                  LinkedIn <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="glass-card p-4 text-center">
                  <p className="text-2xl font-bold text-indigo-400">25+</p>
                  <p className="text-sm text-[#94A3B8]">Years in Tech</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <p className="text-2xl font-bold text-cyan-400">33</p>
                  <p className="text-sm text-[#94A3B8]">Certifications</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <p className="text-2xl font-bold text-orange-400">100+</p>
                  <p className="text-sm text-[#94A3B8]">Projects</p>
                </div>
              </div>
            </div>

            {/* Professional Photo */}
            <div className="flex justify-center">
              <div className="glass-card p-6 hover:scale-105 transition-transform">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/pedrouva_3x4_55f0cfe1.png" 
                  alt="Pedro Uva - Professional Photo" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trajectory Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Professional Trajectory</h2>
          <p className="text-center text-[#94A3B8] mb-16 max-w-2xl mx-auto">
            From technical support to digital strategist: a journey of continuous learning and transformation
          </p>

          <div className="space-y-6">
            {/* Timeline Item 1 */}
            <div className="glass-card p-6 border-l-4 border-indigo-500">
              <div className="flex items-start gap-4">
                <Code2 className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">1997-2001: First Steps in Tech</h3>
                  <p className="text-[#94A3B8] mb-2">
                    Started as a support technician in telecommunications companies (Prest Service, System Informática, UOL, AT&T Latin America). Learned to work under pressure, solve complex problems, and handle large-scale clients.
                  </p>
                  <p className="text-sm text-cyan-400">Technologies: Hardware, Networks, Technical Support</p>
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
                      <h3 className="text-xl font-bold mb-2">2008-2013: Financial Market</h3>
                      <p className="text-[#94A3B8] mb-2">
                        Worked as a trader and commercial specialist at Um Investimentos. Led the "Retomada ao Topo" campaign with Google Ads, capturing 340 new investors with proven ROI. Consolidated knowledge in finance, marketing, and resilience.
                      </p>
                      <p className="text-sm text-cyan-400">Technologies: Trading, Google Ads, Digital Marketing</p>
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
                  <h3 className="text-xl font-bold mb-2">2014-2020: Entrepreneurship</h3>
                  <p className="text-[#94A3B8] mb-2">
                    Founded Respiro Aventura (adventure tourism) and Engenharia de Conteúdo (digital agency). Developed skills in management, content creation, SEO, and digital marketing. Operated as an independent trader with discipline and risk management.
                  </p>
                  <p className="text-sm text-cyan-400">Technologies: PHP, MySQL, SEO, Google Ads, Meta Ads</p>
                </div>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="glass-card p-6 border-l-4 border-indigo-500">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">2020-2025: Digital Transformation</h3>
                  <p className="text-[#94A3B8] mb-2">
                    Returned to Lavanderia Umarizal (family business) and implemented a complete digital transformation: new website, Google Ads campaigns (220% ROI), process automation, AI for customer service. Manages 18 employees and own VPS infrastructure.
                  </p>
                  <p className="text-sm text-cyan-400">Technologies: React, Node.js, AI, Google Cloud, DevOps</p>
                </div>
              </div>
            </div>

            {/* Timeline Item 5 */}
            <div className="glass-card p-6 border-l-4 border-cyan-500">
              <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">2025-2026: Education & Specialization</h3>
                  <p className="text-[#94A3B8] mb-2">
                    Pursuing a degree in Systems Development (FAT/Fatec), participating in Oracle ONE, studying advanced English at Cambly. Accumulates 25 Google Cloud Skill Badges in AI/ML. Preparing to operate at an international level.
                  </p>
                  <p className="text-sm text-cyan-400">Technologies: Full Stack, AI, Google Cloud, Advanced English</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center">Technical Skills</h2>
          <p className="text-center text-[#94A3B8] mb-16 max-w-2xl mx-auto">
            Complete stack for development, marketing, and automation
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Front-end */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-indigo-400">Front-end</h3>
              <ul className="space-y-2 text-[#94A3B8] text-sm">
                <li>✓ React 19 + TypeScript</li>
                <li>✓ HTML5 + CSS3</li>
                <li>✓ Tailwind CSS v4</li>
                <li>✓ Advanced JavaScript</li>
                <li>✓ Responsive Design</li>
              </ul>
            </div>

            {/* Back-end */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Back-end</h3>
              <ul className="space-y-2 text-[#94A3B8] text-sm">
                <li>✓ Node.js + Express</li>
                <li>✓ PHP + Laravel</li>
                <li>✓ MySQL + PostgreSQL</li>
                <li>✓ REST APIs</li>
                <li>✓ Authentication & Security</li>
              </ul>
            </div>

            {/* DevOps */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-orange-400">DevOps</h3>
              <ul className="space-y-2 text-[#94A3B8] text-sm">
                <li>✓ Linux (25+ years)</li>
                <li>✓ Docker & Containers</li>
                <li>✓ Git & GitHub</li>
                <li>✓ VPS & Cloud</li>
                <li>✓ CI/CD Pipelines</li>
              </ul>
            </div>

            {/* Marketing */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-indigo-400">Digital Marketing</h3>
              <ul className="space-y-2 text-[#94A3B8] text-sm">
                <li>✓ Google Ads & GA4</li>
                <li>✓ Meta Ads (Facebook/Instagram)</li>
                <li>✓ On-page & Off-page SEO</li>
                <li>✓ Content Strategy</li>
                <li>✓ Measurable ROI</li>
              </ul>
            </div>

            {/* IA & Automation */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">AI & Automation</h3>
              <ul className="space-y-2 text-[#94A3B8] text-sm">
                <li>✓ ChatGPT & LLMs</li>
                <li>✓ Process Automation</li>
                <li>✓ Google Cloud AI/ML</li>
                <li>✓ Advanced Integrations</li>
                <li>✓ Prompt Engineering</li>
              </ul>
            </div>

            {/* Finance */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-orange-400">Finance & Trading</h3>
              <ul className="space-y-2 text-[#94A3B8] text-sm">
                <li>✓ Technical Analysis</li>
                <li>✓ Trading (Index & Dollar)</li>
                <li>✓ Risk Management</li>
                <li>✓ Compliance</li>
                <li>✓ Trading Psychology</li>
              </ul>
            </div>

            {/* Management */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-indigo-400">Business Management</h3>
              <ul className="space-y-2 text-[#94A3B8] text-sm">
                <li>✓ People Management</li>
                <li>✓ Strategic Planning</li>
                <li>✓ Digital Transformation</li>
                <li>✓ Project Management</li>
                <li>✓ Leadership & Mentoring</li>
              </ul>
            </div>

            {/* Languages */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Languages</h3>
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

      {/* Personal Gallery */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Personal Gallery</h2>
          <p className="text-center text-[#94A3B8] mb-16 max-w-2xl mx-auto">
            Moments that reflect the professional journey and a passion for technology
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Photo 1 */}
            <div className="glass-card p-4 hover:scale-105 transition-transform">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/no-meu-quarto_998b2075.jpg" 
                alt="Pedro Uva" 
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-[#94A3B8] mt-4 text-sm">A moment of creation and reflection</p>
            </div>

            {/* Photo 2 */}
            <div className="glass-card p-4 hover:scale-105 transition-transform">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/pedro_uva-trader-profissional-do-mercado-financeiro_9dabad75.jpg" 
                alt="Pedro Uva - Professional Trader" 
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-[#94A3B8] mt-4 text-sm">Professional Financial Market Trader</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-indigo-500/5" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">Professional Philosophy</h2>

          <div className="space-y-6">
            <div className="glass-card p-8 border-cyan-500/50">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">🎯 Purpose Above All</h3>
              <p className="text-[#94A3B8]">
                I decline projects that are not aligned with my values. I seek work with "soul" — something that generates real impact, continuous learning, and a genuine contribution to the community.
              </p>
            </div>

            <div className="glass-card p-8 border-indigo-500/50">
              <h3 className="text-xl font-bold mb-3 text-indigo-400">🔄 Continuous Learning</h3>
              <p className="text-[#94A3B8]">
                I have never stopped studying. Even without complete formal degrees, I have accumulated knowledge equivalent or superior to many graduations, with the advantage of immediate practical application.
              </p>
            </div>

            <div className="glass-card p-8 border-orange-500/50">
              <h3 className="text-xl font-bold mb-3 text-orange-400">💪 Resilience as a Competency</h3>
              <p className="text-[#94A3B8]">
                The crises I faced — bankruptcies, layoffs, family problems, business failures — did not paralyze me. From each one, I extracted learning and started again stronger.
              </p>
            </div>

            <div className="glass-card p-8 border-cyan-500/50">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">🌍 Ubuntu in Business</h3>
              <p className="text-[#94A3B8]">
                "I am because we are". I value win-win partnerships, build communities, and promote transparency, collaboration, and meritocracy in everything I do.
              </p>
            </div>

            <div className="glass-card p-8 border-indigo-500/50">
              <h3 className="text-xl font-bold mb-3 text-indigo-400">🚀 Geographical Freedom & Autonomy</h3>
              <p className="text-[#94A3B8]">
                I dream of geographical freedom (motorhome, Starlink) and professional autonomy: working from anywhere, on meaningful projects, without corporate constraints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Recognition */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Certifications & Recognition</h2>
          <p className="text-center text-[#94A3B8] mb-16 max-w-2xl mx-auto">
            Continuous education and recognition of expertise
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6 text-center">
              <p className="text-3xl font-bold text-indigo-400 mb-2">33</p>
              <p className="text-[#94A3B8]">Official Certifications</p>
              <p className="text-sm text-cyan-400 mt-2">Google, Oracle, Goobec, Qualifica SP</p>
            </div>
            <div className="glass-card p-6 text-center">
              <p className="text-3xl font-bold text-cyan-400 mb-2">25</p>
              <p className="text-[#94A3B8]">Google Cloud Skill Badges</p>
              <p className="text-sm text-orange-400 mt-2">AI, ML, Cloud Infrastructure</p>
            </div>
            <div className="glass-card p-6 text-center">
              <p className="text-3xl font-bold text-orange-400 mb-2">22K+</p>
              <p className="text-[#94A3B8]">LinkedIn Followers</p>
              <p className="text-sm text-indigo-400 mt-2">Authority in Tech & Entrepreneurship</p>
            </div>
          </div>

          <div className="glass-card p-8 border-cyan-500/50">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Ongoing Education</h3>
            <ul className="space-y-3 text-[#94A3B8]">
              <li>✓ <strong>Systems Development Technologist</strong> - FAT/Fatec (2025-2026)</li>
              <li>✓ <strong>Oracle ONE</strong> - 12-month Development Program (2024-2025)</li>
              <li>✓ <strong>Google Cloud Skills Boost</strong> - 25 Skill Badges in AI/ML (2024-2026)</li>
              <li>✓ <strong>Digital Marketing</strong> - Goobec (Google Partner) - Google Ads, Meta Ads, GA4</li>
              <li>✓ <strong>IT Project Management</strong> - Qualifica SP</li>
              <li>✓ <strong>Advanced English</strong> - Cambly (1.5 years with native speakers)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-cyan-500/10" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            I have experience in full stack development, digital marketing, digital transformation, and strategic consulting. Let's create something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511978768690" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-gradient text-lg py-6 flex items-center justify-center gap-2"
            >
              Book a Call <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mruva/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card px-8 py-6 text-lg font-semibold hover:border-cyan-400/50 transition-all flex items-center justify-center gap-2"
            >
              Connect on LinkedIn <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </div>
  );
}
