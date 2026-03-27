import { Mail, MessageCircle, Linkedin, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20 bg-gradient-to-b from-transparent to-indigo-500/5 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-left">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Contato</h3>
            <a href="mailto:contato@mruva.com.br" className="flex items-center gap-3 text-[#94A3B8] hover:text-cyan-400 transition-colors">
              <Mail className="w-5 h-5 text-cyan-400" />
              contato@mruva.com.br
            </a>
            <a href="https://wa.me/5511978768690" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#94A3B8] hover:text-cyan-400 transition-colors">
              <MessageCircle className="w-5 h-5 text-cyan-400" />
              +55 11 97876-8690
            </a>
          </div>

          {/* Social & Professional */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Profissional</h3>
            <a href="https://linkedin.com/in/mruva" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#94A3B8] hover:text-cyan-400 transition-colors">
              <Linkedin className="w-5 h-5 text-cyan-400" />
              linkedin.com/in/mruva
            </a>
            <div className="flex items-center gap-3 text-[#94A3B8]">
              <MapPin className="w-5 h-5 text-cyan-400" />
              São Paulo, Brasil
            </div>
          </div>

          {/* About Quick */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-white mb-4">Mr. Uva</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Transformando negócios através de tecnologia de ponta e estratégia de marketing baseada em dados. 
              Especialista em desenvolvimento Full-Stack e estratégia digital.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-cyan-500/10 text-center text-[#94A3B8]">
          <p>© 2026 Pedro Uva. Todos os direitos reservados.</p>
          <p className="text-xs mt-2 opacity-70">
            "Eu sou porque nós somos" — Ubuntu | Liberdade, Tecnologia e Propósito
          </p>
        </div>
      </div>
    </footer>
  );
}
