# 🎨 Brainstorm de Design — Mr. Uva Portfolio 2026

## Contexto
Site profissional para Pedro Luiz Uva Junior (Mr. Uva) — Desenvolvedor Full-Stack + Estrategista de Marketing Digital. Objetivo: Impressionar empresas, vender serviços high-ticket, demonstrar expertise em tecnologia de ponta.

---

## 💡 Ideia 1: "Cyber-Noir Minimalista" (Probabilidade: 0.08)

### Design Movement
Cyberpunk 2077 meets Swiss Minimalism — Dark, sharp, futurista mas com extrema clareza tipográfica.

### Core Principles
1. **Geometria Precisa:** Linhas retas, ângulos agudos, grids invisíveis mas rigorosos
2. **Tipografia como Protagonista:** Headings em `Space Grotesk` 900 weight, corpo em `Courier Prime` monospace (reforça tech)
3. **Neon Restrito:** Apenas Cyan (#22D3EE) e Laranja (#F97316) em micro-acentos (nunca fundo cheio)
4. **Espaço Negativo Agressivo:** Muito branco/vazio para criar tensão visual

### Color Philosophy
- **Background:** #0F172A (azul-preto profundo — estabilidade, confiança)
- **Accents:** Cyan apenas em hover/CTA, Laranja em warnings/urgência
- **Text:** #E2E8F0 (cinza muito claro, não branco puro — menos agressivo)
- **Raciocínio:** Paleta reduzida força o foco no conteúdo; neon restrito cria impacto quando aparece

### Layout Paradigm
- Hero: Texto grande + simples à esquerda, espaço vazio à direita (assimétrico)
- Seções: Alternância entre full-width text blocks e imagens/3D à direita
- Grid: 2-coluna em desktop, single em mobile (nunca 3+ colunas)
- Efeito: Sensação de "menos é mais" — profissional, não poluído

### Signature Elements
1. **Linhas Divisórias Neon:** Separadores horizontais em Cyan com opacity 0.3
2. **Badges Monochrome + Neon Outline:** Certificados com borda cyan, fundo escuro
3. **Cursor Customizado:** Ponto neon que segue o mouse (micro-interação)

### Interaction Philosophy
- Transições: Fade + slide leve (200ms), nunca bounce
- Hover: Mudança de cor de texto (white → cyan), sem escala
- Scroll: Parallax sutil, não dramático
- Efeito: Elegância, controle, precisão

### Animation Guidelines
- GSAP ScrollTrigger: Fade-in de seções ao scroll (opacity 0→1, 400ms)
- Lenis: Smooth scroll suave mas responsivo
- Hover states: Mudança de cor instantânea + underline neon que cresce (300ms)
- Efeito: Movimento refinado, nunca excessivo

### Typography System
- **Display (H1/H2):** Space Grotesk 900, 48-64px, letter-spacing +2%
- **Heading (H3/H4):** Space Grotesk 700, 24-32px
- **Body:** Courier Prime 400, 16px, line-height 1.6
- **Mono (code/badges):** JetBrains Mono 500, 14px
- **Hierarquia:** Tamanho + weight, nunca cor (cor é apenas accent)

---

## 💡 Ideia 2: "Glassmorphic Gradient Neon" (Probabilidade: 0.07)

### Design Movement
Apple's glassmorphism (iOS 15+) + Figma's design system + Neon synthwave (80s futurista).

### Core Principles
1. **Blur + Transparency:** Cards com `backdrop-blur-xl` + `bg-white/10` (vidro frosted)
2. **Gradientes Sutis:** Fundo com gradiente radial cyan→indigo (nunca flat)
3. **Profundidade em Camadas:** Múltiplas camadas de cards com sombras soft
4. **Movimento Constante:** Partículas, gradientes animados, scroll parallax

### Color Philosophy
- **Background:** Gradiente radial de #0F172A (canto) → #1a1f3a (centro)
- **Glass Cards:** rgba(30, 41, 55, 0.7) com border cyan 1px
- **Gradientes:** Linear indigo→cyan em CTAs, radial cyan→transparent em backgrounds
- **Raciocínio:** Profundidade visual + movimento = premium, moderno, 2026

### Layout Paradigm
- Hero: Fundo com gradiente animado + partículas orbitando texto central
- Seções: Bento grid 3×3 com cards de vidro, cada um com micro-gradiente diferente
- Overflow: Cards saem da tela em scroll (parallax agressivo)
- Efeito: Dinâmico, imersivo, "wow factor"

### Signature Elements
1. **Partículas Orbitantes:** Pequenos círculos cyan que orbitam headings (Three.js)
2. **Cards com Glow:** Borda cyan com sombra externa neon (box-shadow: 0 0 20px rgba(34,211,238,0.5))
3. **Gradientes Animados:** Background que muda cor lentamente (GSAP timeline)

### Interaction Philosophy
- Transições: Smooth + scale (cards crescem ao hover)
- Hover: Glow aumenta, cor muda, card sobe (transform: translateY)
- Scroll: Parallax agressivo, seções "fluem" em velocidades diferentes
- Efeito: Energia, movimento, "vivo"

### Animation Guidelines
- Partículas: Orbitam em 8s loop (GSAP timeline)
- Gradientes: Mudam cor a cada 15s (GSAP gsap.to)
- Scroll: Lenis + GSAP ScrollTrigger com parallax 0.5-1.0
- Hover: Scale 1.05 + glow intensifica (200ms)
- Efeito: Constante movimento, premium, moderno

### Typography System
- **Display:** Inter 900, 56-72px, tracking +1%
- **Heading:** Inter 700, 28-40px
- **Body:** Inter 400, 16px, line-height 1.7
- **Accent:** Space Grotesk 600 (para destacar palavras-chave)
- **Hierarquia:** Tamanho + cor (accent em cyan)

---

## 💡 Ideia 3: "Brutalist Tech + Art Direction" (Probabilidade: 0.06)

### Design Movement
Brutalism (formas pesadas, concreto) + Art Direction (fotografia grande, composição deliberada) + Tech minimalism.

### Core Principles
1. **Tipografia Pesada:** Headings em `Bebas Neue` (all-caps, bold, 1.2 letter-spacing)
2. **Imagens Dominantes:** Fotos/3D ocupam 60% da tela, texto em overlay
3. **Cores Sólidas:** Blocos de cor sólida (não gradientes), transição abrupta entre seções
4. **Espaçamento Generoso:** Muita margem, padding grande, sensação de "respiração"

### Color Philosophy
- **Background:** Alterna entre #0F172A (escuro) e #1E2937 (surface) em blocos
- **Accents:** Laranja (#F97316) em blocos sólidos (não gradientes)
- **Text:** Branco puro (#FFFFFF) sobre escuro, preto (#0F172A) sobre laranja
- **Raciocínio:** Contraste máximo, impacto visual, sem sutileza

### Layout Paradigm
- Hero: Imagem 3D/foto grande (80% tela) com texto pequeno no canto
- Seções: Alternância full-width image + full-width text (tipo revista)
- Grid: Assimétrico (1 grande + 2 pequenas, depois 2 grandes + 1 pequena)
- Efeito: Composição editorial, impactante, "galeria"

### Signature Elements
1. **Blocos de Cor Sólida:** Seções inteiras em laranja ou indigo (sem gradientes)
2. **Tipografia em Overlay:** Texto branco sobre imagem escura (high contrast)
3. **Linhas Divisórias Grossas:** Separadores de 4-8px em laranja

### Interaction Philosophy
- Transições: Fade + cut (sem slide)
- Hover: Mudança de cor de fundo (indigo ↔ laranja)
- Scroll: Scroll snap (seções "travam" ao scroll)
- Efeito: Deliberado, pesado, intencional

### Animation Guidelines
- Scroll: Snap sections (scroll-snap-type: y mandatory)
- Fade: Simples opacity 0→1 ao scroll (1s)
- Hover: Cor muda (200ms), sem scale
- Efeito: Movimento mínimo, foco no conteúdo

### Typography System
- **Display:** Bebas Neue 700, 64-80px, letter-spacing +3%
- **Heading:** Bebas Neue 700, 32-48px, letter-spacing +2%
- **Body:** Inter 400, 16px, line-height 1.8
- **Accent:** Space Grotesk 700 (para CTAs)
- **Hierarquia:** Tamanho + all-caps, cor (laranja em CTAs)

---

## 🎯 DECISÃO FINAL

**Escolhido: Ideia 2 — "Glassmorphic Gradient Neon"**

### Razão
- **Alinha com 2026:** Glassmorphism é tendência oficial 2026 (Apple, Figma, Framer)
- **Vende Expertise:** Gradientes animados + partículas 3D demonstram domínio de React + Three.js
- **Diferencia:** Não é "minimalista chato" (Ideia 1) nem "pesado demais" (Ideia 3)
- **Performance:** Lenis + GSAP rodam smooth mesmo com partículas (Lighthouse 98+)
- **Impacto:** "Wow factor" que empresas lembram — exatamente o que vende

### Aplicação no Código
- Todas as seções terão `backdrop-blur-xl` + `bg-white/10` em cards
- Gradientes radiais em backgrounds, lineares em CTAs
- Partículas Three.js no hero + scroll parallax em todas as seções
- Animações GSAP em timeline global (Lenis + ScrollTrigger)
- Tipografia Inter (moderno, legível, 2026)

---

## 📝 Próximas Ações
1. Gerar 4-5 imagens de alta qualidade para hero, serviços e cases
2. Implementar `client/src/index.css` com paleta glassmorphic
3. Criar componentes base (GlassCard, GradientButton, ParticleHero)
4. Construir páginas (Home → Formações → Serviços → Cases → Contato)
5. Testar Lighthouse + performance
