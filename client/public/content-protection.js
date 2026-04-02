/**
 * Content Protection Script
 * Bloqueia visualização de código-fonte, inspeção de elementos e cópia de conteúdo
 */

(function() {
  'use strict';

  // ============================================================================
  // 1. Bloquear CTRL+U (Visualizar Código-Fonte)
  // ============================================================================
  document.addEventListener('keydown', function(event) {
    // CTRL+U (Windows/Linux) ou CMD+U (Mac)
    if ((event.ctrlKey || event.metaKey) && event.keyCode === 85) {
      event.preventDefault();
      console.warn('Visualização de código-fonte desativada');
      return false;
    }

    // F12 (Abrir DevTools)
    if (event.keyCode === 123) {
      event.preventDefault();
      console.warn('Inspeção de elementos desativada');
      return false;
    }

    // CTRL+SHIFT+I (Abrir DevTools - Windows/Linux)
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.keyCode === 73) {
      event.preventDefault();
      console.warn('Inspeção de elementos desativada');
      return false;
    }

    // CTRL+SHIFT+C (Inspecionar Elemento - Windows/Linux)
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.keyCode === 67) {
      event.preventDefault();
      console.warn('Inspeção de elementos desativada');
      return false;
    }

    // CTRL+SHIFT+J (Abrir Console - Windows/Linux)
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.keyCode === 74) {
      event.preventDefault();
      console.warn('Console desativado');
      return false;
    }

    // CMD+OPTION+I (Abrir DevTools - Mac)
    if (event.metaKey && event.altKey && event.keyCode === 73) {
      event.preventDefault();
      console.warn('Inspeção de elementos desativada');
      return false;
    }

    // CMD+OPTION+J (Abrir Console - Mac)
    if (event.metaKey && event.altKey && event.keyCode === 74) {
      event.preventDefault();
      console.warn('Console desativado');
      return false;
    }

    // CMD+OPTION+U (Visualizar Código-Fonte - Mac)
    if (event.metaKey && event.altKey && event.keyCode === 85) {
      event.preventDefault();
      console.warn('Visualização de código-fonte desativada');
      return false;
    }
  }, false);

  // ============================================================================
  // 2. Bloquear Botão Direito (Context Menu)
  // ============================================================================
  document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    console.warn('Menu de contexto desativado');
    return false;
  }, false);

  // ============================================================================
  // 3. Bloquear Copiar (CTRL+C / CMD+C)
  // ============================================================================
  document.addEventListener('copy', function(event) {
    event.preventDefault();
    console.warn('Cópia de conteúdo desativada');
    return false;
  }, false);

  // ============================================================================
  // 4. Bloquear Colar (CTRL+V / CMD+V)
  // ============================================================================
  document.addEventListener('paste', function(event) {
    event.preventDefault();
    console.warn('Cola de conteúdo desativada');
    return false;
  }, false);

  // ============================================================================
  // 5. Bloquear Cortar (CTRL+X / CMD+X)
  // ============================================================================
  document.addEventListener('cut', function(event) {
    event.preventDefault();
    console.warn('Corte de conteúdo desativado');
    return false;
  }, false);

  // ============================================================================
  // 6. Bloquear Seleção de Texto
  // ============================================================================
  document.addEventListener('selectstart', function(event) {
    event.preventDefault();
    console.warn('Seleção de texto desativada');
    return false;
  }, false);

  // Bloquear seleção via CSS também
  document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
      * {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        -webkit-touch-callout: none !important;
        -webkit-user-drag: none !important;
        -khtml-user-drag: none !important;
      }

      /* Permitir seleção apenas em campos de input e textarea */
      input, textarea, [contenteditable="true"] {
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
        user-select: text !important;
      }

      /* Manter compatibilidade com leitores de tela */
      .sr-only, .screen-reader-only {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }
    `;
    document.head.appendChild(style);
  });

  // ============================================================================
  // 7. Detectar Abertura de DevTools (método alternativo)
  // ============================================================================
  let devtools = { open: false };
  const threshold = 160;

  // Otimizado: Aumentado intervalo para reduzir processamento na main thread
  setInterval(function() {
    if (window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold) {
      if (!devtools.open) {
        devtools.open = true;
      }
    } else {
      if (devtools.open) {
        devtools.open = false;
      }
    }
  }, 2000);

  // ============================================================================
  // 8. Desabilitar Drag and Drop
  // ============================================================================
  document.addEventListener('dragstart', function(event) {
    event.preventDefault();
    return false;
  }, false);

  document.addEventListener('drop', function(event) {
    event.preventDefault();
    return false;
  }, false);

  // ============================================================================
  // 9. Proteção contra Screenshot e Print Screen
  // ============================================================================
  document.addEventListener('keyup', function(event) {
    // Print Screen
    if (event.keyCode === 44) {
      event.preventDefault();
      console.warn('Screenshot detectado. Conteúdo protegido.');
      return false;
    }
  }, false);

  // ============================================================================
  // 10. Proteção contra Iframe Embedding
  // ============================================================================
  if (window.self !== window.top) {
    console.warn('Conteúdo não pode ser incorporado em iframes');
    document.body.innerHTML = '<div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;"><h1>Conteúdo Protegido</h1><p>Este conteúdo não pode ser incorporado em outros sites.</p></div>';
  }

  // ============================================================================
  // 11. Detecção de Bots e Crawlers Maliciosos
  // ============================================================================
  const suspiciousPatterns = [
    /bot/i, /crawler/i, /spider/i, /scraper/i, /scanning/i,
    /selenium/i, /phantom/i, /headless/i, /automation/i
  ];

  const userAgent = navigator.userAgent.toLowerCase();
  const isSuspiciousBot = suspiciousPatterns.some(pattern => pattern.test(userAgent));

  if (isSuspiciousBot && !userAgent.includes('googlebot') && !userAgent.includes('bingbot')) {
    console.warn('Bot suspeito detectado');
  }

  // ============================================================================
  // 12. Proteção contra Debug e Desenvolvimento
  // ============================================================================
  Object.defineProperty(window, 'console', {
    get: function() {
      if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        return {
          log: function() { /* silenced */ },
          warn: function() { /* silenced */ },
          error: function() { /* silenced */ },
          info: function() { /* silenced */ }
        };
      }
      return console;
    },
    set: function() { /* ignore */ }
  });

  // ============================================================================
  // 13. Proteção contra Manipulação do DOM
  // ============================================================================
  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function(child) {
    if (child && child.id === 'content-protection-script') {
      console.warn('Tentativa de remover script de proteção detectada');
      return null;
    }
    return originalRemoveChild.apply(this, arguments);
  };

  // ============================================================================
  // 14. Headers de Segurança Adicionais (via meta tags)
  // ============================================================================
  document.addEventListener('DOMContentLoaded', function() {
    const metaTags = [
      { name: 'referrer', content: 'strict-origin-when-cross-origin' },
      { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
      { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' },
      { name: 'robots', content: 'index, follow, noarchive, nosnippet' }
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      Object.keys(tag).forEach(key => {
        meta.setAttribute(key, tag[key]);
      });
      document.head.appendChild(meta);
    });
  });
})();
