/* global chrome */

chrome.commands.onCommand.addListener((command) => {
  if (command === "_execute_action") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "openDrawer" });
    });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extensão instalada");
  chrome.contextMenus.create({
    id: "sendToChatbot",
    title: "Enviar para Chatbot",
    contexts: ["selection"]
  });
});

chrome.commands.onCommand.addListener((command) => {
  if (command === "_execute_action") {
      // Envia uma mensagem para abrir o drawer
      chrome.runtime.sendMessage({ action: 'openDrawer' });
  }
});
