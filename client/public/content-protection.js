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
  // 6. Bloquear Seleção de Texto (opcional - comentado por padrão)
  // Descomente a linha abaixo se quiser impedir a seleção de texto
  // ============================================================================
  // document.addEventListener('selectstart', function(event) {
  //   event.preventDefault();
  //   return false;
  // }, false);

  // ============================================================================
  // 7. Detectar Abertura de DevTools (método alternativo)
  // ============================================================================
  let devtools = { open: false };
  const threshold = 160;

  setInterval(function() {
    if (window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold) {
      if (!devtools.open) {
        devtools.open = true;
        console.warn('DevTools detectado. Acesso restrito.');
      }
    } else {
      if (devtools.open) {
        devtools.open = false;
      }
    }
  }, 500);

  // ============================================================================
  // 8. Desabilitar Drag and Drop (opcional)
  // ============================================================================
  document.addEventListener('dragstart', function(event) {
    event.preventDefault();
    return false;
  }, false);

  document.addEventListener('drop', function(event) {
    event.preventDefault();
    return false;
  }, false);

  console.log('%c⚠️ Este site possui proteção de conteúdo ativa', 'color: #ff6b6b; font-size: 14px; font-weight: bold;');
})();
