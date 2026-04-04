import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

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
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-[#0F172A] border border-cyan-500/20 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
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
