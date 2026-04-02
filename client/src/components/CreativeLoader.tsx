import { motion } from "framer-motion";

export default function CreativeLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0F172A] text-[#E2E8F0]">
      <div className="relative flex items-center justify-center">
        {/* Círculos pulsantes de fundo */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-32 w-32 rounded-full bg-indigo-500/20 blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.05, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute h-48 w-48 rounded-full bg-cyan-500/10 blur-2xl"
        />

        {/* Logo/Ícone Central Animado */}
        <div className="relative h-20 w-20">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-xl border-2 border-t-cyan-400 border-r-transparent border-b-indigo-500 border-l-transparent"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-white"
            >
              U
            </motion.span>
          </div>
        </div>
      </div>

      {/* Texto de Carregamento Inusitado */}
      <div className="mt-12 flex flex-col items-center gap-2">
        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-sm font-medium tracking-[0.2em] text-cyan-400 uppercase"
        >
          Otimizando a Realidade
        </motion.p>
        
        <div className="h-1 w-48 overflow-hidden rounded-full bg-white/5">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          />
        </div>
        
        <p className="mt-4 text-xs text-[#94A3B8] italic">
          Compilando inteligência...
        </p>
      </div>
    </div>
  );
}
