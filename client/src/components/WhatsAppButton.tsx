import { useState } from "react";
import { X, Send } from "lucide-react";

// WhatsApp Icon SVG Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const whatsappNumber = "5511978768690";
  const defaultMessage = "Olá Pedro! Estou pronto para escalar meu negócio. Vamos conversar!";

  const handleSendMessage = () => {
    const finalMessage = message || defaultMessage;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
    setMessage("");
  };

  return (
    <>
      {/* Botão Flutuante */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse-slow border-2 border-white/20"
        aria-label="Contato via WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-[#0F172A] border border-cyan-500/20 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <WhatsAppIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Pedro Uva</h3>
                  <p className="text-green-400 text-sm">Online agora</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4">
              <p className="text-[#94A3B8] mb-4">
                Olá! 👋 Sou Pedro Uva. Como posso ajudar você a escalar seu negócio hoje?
              </p>
              
              <div className="space-y-3">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Digite sua mensagem aqui..."
                  className="w-full bg-[#1E293B] border border-cyan-500/20 rounded-lg p-3 text-white placeholder-[#64748B] resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                  rows={4}
                />
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setMessage(defaultMessage)}
                    className="px-4 py-2 bg-[#1E293B] border border-cyan-500/20 rounded-lg text-[#94A3B8] hover:bg-[#334155] transition-colors text-sm"
                  >
                    Usar mensagem padrão
                  </button>
                  <button
                    onClick={handleSendMessage}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Enviar
                  </button>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-cyan-500/20">
                <p className="text-xs text-[#64748B] text-center">
                  Resposta rápida em minutos • Disponível 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
