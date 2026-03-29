import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Code2,
  Database,
  Shield,
  Cloud,
  Zap,
  GraduationCap,
  Award,
} from "lucide-react";

export default function DevelopmentEn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0]">
      <Header lang="en" />

      {/* Hero Section */}
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex justify-center animate-fade-in">
            <div className="glass-card px-4 py-2 text-sm md:text-base font-semibold text-cyan-400 text-center inline-block max-w-full leading-relaxed">
              ⚡ Two degree programs • One mission: High Performance Software
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Software{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Engineering
            </span>{" "}
            with Purpose
          </h1>

          <p className="text-lg md:text-xl text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            A hybrid education that combines the academic tradition of the FAT Foundation (created by Fatec-SP professors) with the innovation and digital inclusion of Vai na Web. 1,200h of technical knowledge + a human approach to build solutions that transform businesses and lives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="btn-gradient text-lg py-6" onClick={() => {
              const element = document.getElementById('certifications');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Discover the Programs <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Certifications in progress */}
      <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Certifications in Development
          </h2>
          <p className="text-center text-[#94A3B8] mb-12 max-w-2xl mx-auto">
            Two journeys of technical excellence, both scheduled for completion in the coming months.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FAT Card */}
            <div className="glass-card p-8 border-cyan-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-cyan-500/20 px-4 py-1 rounded-bl-lg text-sm font-semibold text-cyan-300">
                Completion: Dec/2026
              </div>
              <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 rounded-lg w-fit">
                <GraduationCap className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">FAT Foundation (Fatec-SP)</h3>
              <p className="text-[#94A3B8] text-sm mb-4">
                Systems Development Technologist • 1,200 hours
              </p>
              <p className="text-[#94A3B8] mb-6">
                Complete curriculum emphasizing software engineering, databases, information security, and cloud computing. A program created by Fatec-SP professors, a benchmark in technology.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-cyan-400">
                <span className="px-2 py-1 bg-cyan-500/10 rounded">GDPR/LGPD</span>
                <span className="px-2 py-1 bg-cyan-500/10 rounded">AWS</span>
                <span className="px-2 py-1 bg-cyan-500/10 rounded">Power BI</span>
              </div>
            </div>

            {/* Vai na Web Card */}
            <div className="glass-card p-8 border-orange-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-500/20 px-4 py-1 rounded-bl-lg text-sm font-semibold text-orange-300">
                Completion: Jun/2026
              </div>
              <div className="mb-4 p-3 bg-gradient-to-br from-cyan-400/20 to-orange-500/20 rounded-lg w-fit">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Vai na Web</h3>
              <p className="text-[#94A3B8] text-sm mb-4">
                Fullstack Empower 5.0 • 6 intensive months
              </p>
              <p className="text-[#94A3B8] mb-6">
                High-performance program focused on React, Node.js, TypeScript, and market best practices. A practical methodology that prepares for real industry challenges.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-orange-400">
                <span className="px-2 py-1 bg-orange-500/10 rounded">
                  React 19
                </span>
                <span className="px-2 py-1 bg-orange-500/10 rounded">
                  Node.js
                </span>
                <span className="px-2 py-1 bg-orange-500/10 rounded">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Formations */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#0F172A]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            The Best of Both Worlds
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                FAT Academic Structure
              </h3>
              <ul className="space-y-2 text-[#94A3B8]">
                <li>✓ 1,200 hours of complete technical training</li>
                <li>✓ Integrative projects with agile methodologies</li>
                <li>✓ Fundamentals of networks, operating systems, and security</li>
                <li>✓ Data analysis and business intelligence</li>
                <li>✓ Entrepreneurship and innovation</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">
                Vai na Web Fullstack Practice
              </h3>
              <ul className="space-y-2 text-[#94A3B8]">
                <li>✓ React 19, TypeScript, and advanced Tailwind CSS</li>
                <li>✓ REST and GraphQL APIs with Node.js</li>
                <li>✓ Docker, CI/CD, and automated deployment</li>
                <li>✓ Performance optimization (Core Web Vitals)</li>
                <li>✓ Business-result oriented development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/services-grid-bg-37RfWbP5XKmep3Fcdnw4qM.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center">
            High-Performance Technical Solutions
          </h2>
          <p className="text-center text-[#94A3B8] mb-16">
            Combine academic depth with market agility for extraordinary results.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 rounded-lg w-fit">
                <Shield className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Data Audit and Shielding
              </h3>
              <p className="text-[#94A3B8] mb-6">
                Deep 360º analysis of digital infrastructure with GDPR/LGPD compliance.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8] mb-6">
                <li>✓ Database vulnerability mapping</li>
                <li>✓ Security protocol implementation</li>
                <li>✓ Ransomware protection</li>
                <li>✓ Technical compliance report</li>
              </ul>
              <Button className="btn-gradient w-full" onClick={() => window.open('https://wa.me/5511978768690', '_blank')}>
                Request Audit
              </Button>
            </div>

            {/* Service 2 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-cyan-400/20 to-orange-500/20 rounded-lg w-fit">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Full-Stack Sales Ecosystem
              </h3>
              <p className="text-[#94A3B8] mb-6">
                Integrated sales machine with fast front-end and robust back-end.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8] mb-6">
                <li>✓ Ultra-fast site (LCP &lt; 2s)</li>
                <li>✓ Embedded technical SEO</li>
                <li>✓ Google Ads integration</li>
                <li>✓ Scalable database</li>
              </ul>
              <Button className="btn-gradient w-full" onClick={() => window.open('https://wa.me/5511978768690', '_blank')}>
                Explore Solution
              </Button>
            </div>

            {/* Service 3 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-orange-500/20 to-indigo-500/20 rounded-lg w-fit">
                <Database className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Data Intelligence and Automation
              </h3>
              <p className="text-[#94A3B8] mb-6">
                Chaos-to-clarity data organization in intelligent dashboards.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8] mb-6">
                <li>✓ Database structuring</li>
                <li>✓ Automations that eliminate manual work</li>
                <li>✓ Power BI dashboards</li>
                <li>✓ Reduction in operational costs</li>
              </ul>
              <Button className="btn-gradient w-full" onClick={() => window.open('https://wa.me/5511978768690', '_blank')}>
                Transform Data
              </Button>
            </div>

            {/* Service 4 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 rounded-lg w-fit">
                <Cloud className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Technical Consulting & Mentoring
              </h3>
              <p className="text-[#94A3B8] mb-6">
                Expert guidance on system architecture and digital transformation.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8] mb-6">
                <li>✓ Current technology assessment</li>
                <li>✓ Transformation roadmap</li>
                <li>✓ Continuous technical mentoring</li>
                <li>✓ Agile methodology implementation</li>
              </ul>
              <Button className="btn-gradient w-full" onClick={() => window.open('https://wa.me/5511978768690', '_blank')}>
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consolidated Stack */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Unified Tech Stack
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">
                Front-End
              </h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• React 19 / Next.js</li>
                <li>• Astro</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Performance (Core Web Vitals)</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-indigo-400">
                Back-End
              </h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• Node.js / Express / NestJS</li>
                <li>• PHP / Laravel</li>
                <li>• REST / GraphQL APIs</li>
                <li>• JWT Authentication</li>
                <li>• Automated Testing</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-orange-400">
                Database
              </h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• PostgreSQL / MySQL</li>
                <li>• MongoDB / Redis</li>
                <li>• Prisma ORM / SQL</li>
                <li>• Modeling and optimization</li>
                <li>• Backup and security</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">
                DevOps & Cloud
              </h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• Docker / CI/CD</li>
                <li>• AWS / Vercel</li>
                <li>• Linux (Debian/Ubuntu)</li>
                <li>• Monitoring</li>
                <li>• Git / GitHub Actions</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-indigo-400">
                Security
              </h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• GDPR/LGPD Compliance</li>
                <li>• Encryption</li>
                <li>• Vulnerability Analysis</li>
                <li>• Data Protection</li>
                <li>• OWASP Best Practices</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-orange-400">
                Methodologies
              </h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• Scrum / Kanban</li>
                <li>• Agile Development</li>
                <li>• User Stories</li>
                <li>• Continuous Integration</li>
                <li>• Design Thinking</li>
              </ul>
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

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Elevate Your Technology?
          </h2>
          <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            With two cutting-edge education programs and an approach that merges theory and practice, I deliver solutions that transform businesses and generate real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gradient text-lg py-6 px-8" onClick={() => window.open('https://wa.me/5511978768690', '_blank')}>
              Request Technical Consulting
            </Button>
            <a
              href="https://wa.me/5511978768690"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="text-lg py-6 px-8 border-cyan-500/50 hover:bg-cyan-500/10 w-full"
              >
                WhatsApp: +55 11 97876-8690
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
