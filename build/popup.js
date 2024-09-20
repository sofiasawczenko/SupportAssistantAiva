/* global chrome */

let selectedText = '';

// Recebe a mensagem do content.js com o texto selecionado
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'sendTextToPopup') {
      selectedText = message.text;

      // Dispara o evento para abrir o drawer
      const openEvent = new Event('sendTextToChatbot');
      window.dispatchEvent(openEvent);

      // Envia o texto para o chatbot
      openAivaSidebar(selectedText);
  }
});

// Função para abrir o sidebar e enviar o texto para o chatbot
function openAivaSidebar(text) {
  const openEvent = new Event('sendTextToChatbot');
  window.dispatchEvent(openEvent, { detail: { text } });
}
