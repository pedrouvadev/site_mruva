import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Code2, Zap, Database, Cloud } from "lucide-react";

export default function Fullstack() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0]">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
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
          <div className="mb-6 inline-block">
            <span className="glass-card px-4 py-2 text-sm font-semibold text-cyan-400">
              ⚡ Fullstack Empower • Vai na Web
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Arquiteto de <span className="bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">Lucro</span> Full-Stack
          </h1>

          <p className="text-lg md:text-xl text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            Não contrate codificadores. Contrate um arquiteto que une React, Node.js, TypeScript e IA para criar máquinas de vendas que funcionam 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="btn-gradient text-lg py-6">
              Conhecer Stack Fullstack <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Formação Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Formação Empower 5.0</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Front-End</h3>
              <ul className="space-y-3 text-[#94A3B8]">
                <li>✓ React 19 Avançado</li>
                <li>✓ TypeScript</li>
                <li>✓ Tailwind CSS v4</li>
                <li>✓ Performance (Core Web Vitals)</li>
                <li>✓ Acessibilidade</li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-indigo-400">Back-End</h3>
              <ul className="space-y-3 text-[#94A3B8]">
                <li>✓ Node.js & Express</li>
                <li>✓ APIs REST e GraphQL</li>
                <li>✓ Autenticação JWT</li>
                <li>✓ Testes Automatizados</li>
                <li>✓ Segurança</li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-orange-400">DevOps & Cloud</h3>
              <ul className="space-y-3 text-[#94A3B8]">
                <li>✓ Docker & Containers</li>
                <li>✓ Vercel & Deployment</li>
                <li>✓ CI/CD Pipelines</li>
                <li>✓ Monitoramento</li>
                <li>✓ Escalabilidade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problema vs Solução */}
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
          <h2 className="text-4xl font-bold mb-12 text-center">Pare de Contratar Codificadores</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 border-red-500/30">
              <h3 className="text-2xl font-bold mb-6 text-red-400">❌ Codificador Comum</h3>
              <ul className="space-y-3 text-[#94A3B8]">
                <li>• Site lento (LCP &gt; 4s)</li>
                <li>• Código frágil sem testes</li>
                <li>• Sem pensamento estratégico</li>
                <li>• Bugs em produção</li>
                <li>• Sem otimização de conversão</li>
              </ul>
            </div>

            <div className="glass-card p-8 border-cyan-500/50">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">✓ Arquiteto Fullstack</h3>
              <ul className="space-y-3 text-[#94A3B8]">
                <li>• Site ultraveloz (LCP &lt; 2s)</li>
                <li>• Código robusto com testes</li>
                <li>• Pensamento de negócio</li>
                <li>• Zero surpresas</li>
                <li>• Otimizado para vendas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Serviços Fullstack</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 rounded-lg w-fit">
                <Code2 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Desenvolvimento de Plataformas</h3>
              <p className="text-[#94A3B8] mb-6">
                Aplicações web de alta performance com React, Node.js e PostgreSQL. Escaláveis e seguras.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>✓ Arquitetura moderna</li>
                <li>✓ TypeScript end-to-end</li>
                <li>✓ Testes automatizados</li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-orange-500/20 rounded-lg w-fit">
                <Zap className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Otimização de Performance</h3>
              <p className="text-[#94A3B8] mb-6">
                Sites lentos perdem 53% dos clientes. Transformo código pesado em máquinas de conversão.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>✓ Core Web Vitals otimizados</li>
                <li>✓ SEO técnico</li>
                <li>✓ Conversão aumentada</li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-orange-500/20 to-cyan-400/20 rounded-lg w-fit">
                <Database className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">APIs e Integrações</h3>
              <p className="text-[#94A3B8] mb-6">
                APIs robustas que conectam seus sistemas. Integração com Google Ads, Meta, Stripe e mais.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>✓ REST e GraphQL</li>
                <li>✓ Webhooks</li>
                <li>✓ Segurança em camadas</li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 rounded-lg w-fit">
                <Cloud className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Deployment e DevOps</h3>
              <p className="text-[#94A3B8] mb-6">
                Deploy automático, monitoramento 24/7 e escalabilidade infinita. Seu site nunca cai.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>✓ CI/CD automatizado</li>
                <li>✓ Monitoramento em tempo real</li>
                <li>✓ Disaster recovery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Stack Fullstack Dominado</h2>

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
              <h3 className="text-lg font-bold mb-4 text-orange-400">Banco de Dados</h3>
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
          <h2 className="text-4xl font-bold mb-6">Pronto para Construir a Próxima Geração?</h2>
          <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como arquitetura fullstack moderna pode transformar sua visão em um produto de sucesso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gradient text-lg py-6 px-8">
              Agendar Consultoria
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
          <p>© 2026 Pedro Luiz Uva Junior. Especialista em Desenvolvimento Fullstack.</p>
        </div>
      </footer>
    </div>
  );
}
