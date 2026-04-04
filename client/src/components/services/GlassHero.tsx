import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ParticleBackground } from './ParticleBackground';

gsap.registerPlugin(ScrollTrigger);

interface GlassHeroProps {
  title: string;
  subtitle: string;
  description: string;
  children?: ReactNode;
}

export function GlassHero({ title, subtitle, description, children }: GlassHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.9, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 30% 20%, #1a1f3a 0%, #0F172A 50%, #0F172A 100%)',
      }}
    >
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)
          `,
          animation: 'gradientShift 25s linear infinite',
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Three.js Particles */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div
          ref={cardRef}
          className="backdrop-blur-3xl bg-white/10 border border-cyan-400/30 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl"
          style={{
            boxShadow: '0 0 60px -10px rgb(34 211 238)',
          }}
        >
          {/* Pre-title */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent" />
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
              Serviço Premium
            </span>
          </div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6"
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-xl sm:text-2xl lg:text-3xl text-cyan-300 font-medium mb-6"
          >
            {subtitle}
          </p>

          {/* Description */}
          <p
            ref={descRef}
            className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl"
          >
            {description}
          </p>

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>

      {/* Gradient animation keyframes */}
      <style>{`
        @keyframes gradientShift {
          0%, 100% {
            transform: translateX(-5%) translateY(-5%);
          }
          50% {
            transform: translateX(5%) translateY(5%);
          }
        }
      `}</style>
    </section>
  );
}
