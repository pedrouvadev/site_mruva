import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface NeonBentoCardProps {
  children: ReactNode;
  title: string;
  icon?: ReactNode;
  className?: string;
  delay?: number;
}

export function NeonBentoCard({
  children,
  title,
  icon = <Sparkles className="w-6 h-6 text-cyan-400" />,
  className = '',
  delay = 0,
}: NeonBentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`
        group relative overflow-hidden
        backdrop-blur-xl bg-slate-900/70
        border border-cyan-400/20
        rounded-2xl p-6
        transition-all duration-200 ease-out
        hover:scale-105 hover:-translate-y-2
        hover:border-cyan-400/60
        hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)]
        ${className}
      `}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34,211,238,0.15), transparent 40%)',
        }}
      />

      {/* Icon */}
      <div className="mb-4 p-3 w-fit rounded-xl bg-cyan-500/10 border border-cyan-400/30 group-hover:bg-cyan-500/20 transition-colors">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
        {title}
      </h3>
      <div className="text-slate-300 text-sm leading-relaxed">{children}</div>

      {/* Border glow animation */}
      <div className="absolute inset-0 rounded-2xl border border-cyan-400/0 group-hover:border-cyan-400/40 transition-all duration-500 pointer-events-none" />
    </div>
  );
}
