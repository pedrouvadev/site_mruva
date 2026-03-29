import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Code2, Zap, Database, Cloud } from "lucide-react";

export default function FullstackEn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0]">
      {/* Navigation */}
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
            opacity: 0.2,
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/50 to-[#0F172A]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex justify-center inline-block max-w-full">
            <div className="glass-card px-4 py-2 text-sm font-semibold text-cyan-400 inline-block leading-relaxed">
              ⚡ Fullstack Empower • Vai na Web
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Full-Stack <span className="bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">Profit</span> Architect
          </h1>

          <p className="text-lg md:text-xl text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            Don't hire coders. Hire an architect who unites React, Node.js, TypeScript, and AI to create sales machines that work 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="btn-gradient text-lg py-6" onClick={() => {
              const element = document.getElementById('services');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Explore Fullstack Stack <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Empower 5.0 Training</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Front-End</h3>
              <ul className="space-y-3 text-[#94A3B8]">
                <li>✓ Advanced React 19</li>
                <li>✓ TypeScript</li>
                <li>✓ Tailwind CSS v4</li>
                <li>✓ Performance (Core Web Vitals)</li>
                <li>✓ Accessibility</li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-indigo-400">Back-End</h3>
              <ul className="space-y-3 text-[#94A3B8]">
                <li>✓ Node.js & Express</li>
                <li>✓ REST and GraphQL APIs</li>
                <li>✓ JWT Authentication</li>
                <li>✓ Automated Testing</li>
                <li>✓ Security</li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-orange-400">DevOps & Cloud</h3>
              <ul className="space-y-3 text-[#94A3B8]">
                <li>✓ Docker & Containers</li>
                <li>✓ Vercel & Deployment</li>
                <li>✓ CI/CD Pipelines</li>
                <li>✓ Monitoring</li>
                <li>✓ Scalability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
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
          <h2 className="text-4xl font-bold mb-12 text-center">Stop Hiring Coders</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 border-red-500/30">
              <h3 className="text-2xl font-bold mb-6 text-red-400">❌ Ordinary Coder</h3>
              <ul className="space-y-3 text-[#94A3B8]">
                <li>• Slow site (LCP &gt; 4s)</li>
                <li>• Fragile code without tests</li>
                <li>• No strategic thinking</li>
                <li>• Bugs in production</li>
                <li>• No conversion optimization</li>
              </ul>
            </div>

            <div className="glass-card p-8 border-cyan-500/50">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">✓ Fullstack Architect</h3>
              <ul className="space-y-3 text-[#94A3B8]">
                <li>• Ultra-fast site (LCP &lt; 2s)</li>
                <li>• Robust code with tests</li>
                <li>• Business-minded</li>
                <li>• Zero surprises</li>
                <li>• Sales-optimized</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Fullstack Services</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 rounded-lg w-fit">
                <Code2 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Platform Development</h3>
              <p className="text-[#94A3B8] mb-6">
                High-performance web applications with React, Node.js, and PostgreSQL. Scalable and secure.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>✓ Modern architecture</li>
                <li>✓ End-to-end TypeScript</li>
                <li>✓ Automated testing</li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-orange-500/20 rounded-lg w-fit">
                <Zap className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Performance Optimization</h3>
              <p className="text-[#94A3B8] mb-6">
                Slow sites lose 53% of customers. I transform heavy code into conversion machines.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>✓ Optimized Core Web Vitals</li>
                <li>✓ Technical SEO</li>
                <li>✓ Increased conversion</li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-orange-500/20 to-cyan-400/20 rounded-lg w-fit">
                <Database className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">APIs and Integrations</h3>
              <p className="text-[#94A3B8] mb-6">
                Robust APIs that connect your systems. Integration with Google Ads, Meta, Stripe, and more.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>✓ REST and GraphQL</li>
                <li>✓ Webhooks</li>
                <li>✓ Security in layers</li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 rounded-lg w-fit">
                <Cloud className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Deployment and DevOps</h3>
              <p className="text-[#94A3B8] mb-6">
                Automated deployment, 24/7 monitoring, and infinite scalability. Your site never goes down.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>✓ Automated CI/CD</li>
                <li>✓ Real-time monitoring</li>
                <li>✓ Disaster recovery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Mastered Fullstack Stack</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Front-End</h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• React 19</li>
                <li>• Astro</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Next.js</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-indigo-400">Back-End</h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• Node.js</li>
                <li>• Express</li>
                <li>• NestJS</li>
                <li>• GraphQL</li>
                <li>• REST APIs</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-orange-400">Database</h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• PostgreSQL</li>
                <li>• MongoDB</li>
                <li>• Redis</li>
                <li>• Prisma ORM</li>
                <li>• Migrations</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">DevOps</h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• Docker</li>
                <li>• Vercel</li>
                <li>• GitHub Actions</li>
                <li>• AWS</li>
                <li>• Monitoring</li>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Build the Next Generation?</h2>
          <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            Let's talk about how modern fullstack architecture can transform your vision into a successful product.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gradient text-lg py-6 px-8" onClick={() => window.open('https://wa.me/5511978768690', '_blank')}>
              Schedule Consulting
            </Button>
            <a href="https://wa.me/5511978768690" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-lg py-6 px-8 border-cyan-500/50 hover:bg-cyan-500/10 w-full">
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto text-center text-sm text-[#94A3B8]">
          <p>© 2026 Pedro Luiz Uva Junior. Fullstack Development Specialist.</p>
        </div>
      </footer>
    </div>
  );
}
