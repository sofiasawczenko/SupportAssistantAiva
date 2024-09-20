/* global chrome */

let tooltip;
let selectedText = '';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "openDrawer") {
      window.dispatchEvent(new CustomEvent("openDrawerEvent"));
    }
  });
  

document.addEventListener('selectionchange', () => {
    const selection = window.getSelection();
    selectedText = selection.toString();

    // Verifica se o texto selecionado não está vazio
    if (selectedText) {
        // Cria o tooltip se ainda não existir
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            document.body.appendChild(tooltip);
        }

        // Atualiza a posição do tooltip
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        const tooltipHeight = 40; // Defina a altura aproximada do tooltip

        tooltip.style.left = `${rect.left}px`;
        tooltip.style.top = `${rect.top - tooltipHeight + window.scrollY}px`; // Coloca o tooltip acima da seleção

        // Limpa o conteúdo anterior do tooltip
        tooltip.innerHTML = '';

        // Botão "Enviar para AIVA"
        const aivaButton = document.createElement('button');
        aivaButton.appendChild(document.createTextNode('Enviar para AIVA'));
        aivaButton.classList.add('aiva-button');
        aivaButton.onclick = () => {
            // Envia o texto selecionado para o popup.js via API
            chrome.runtime.sendMessage({ action: 'sendTextToPopup', text: selectedText });
            document.body.removeChild(tooltip); // Remove o tooltip ao clicar
            tooltip = null; // Limpa a referência do tooltip
        };

        // Botão "Explorar"
        const exploreButton = document.createElement('button');
        exploreButton.appendChild(document.createTextNode('Explorar'));
        exploreButton.classList.add('explore-button');
        exploreButton.onclick = () => {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(selectedText)}`);
            document.body.removeChild(tooltip); // Remove o tooltip ao clicar
            tooltip = null; // Limpa a referência do tooltip
        };

        // Botão "Traduzir"
        const translateButton = document.createElement('button');
        translateButton.appendChild(document.createTextNode('Traduzir'));
        translateButton.classList.add('translate-button');
        translateButton.onclick = () => {
            window.open(`https://translate.google.com/?text=${encodeURIComponent(selectedText)}`);
            document.body.removeChild(tooltip); // Remove o tooltip ao clicar
            tooltip = null; // Limpa a referência do tooltip
        };

        // Adiciona os botões ao tooltip
        tooltip.appendChild(aivaButton);
        tooltip.appendChild(exploreButton);
        tooltip.appendChild(translateButton);
    } else if (tooltip) {
        // Se não houver seleção, remove o tooltip
        document.body.removeChild(tooltip);
        tooltip = null; // Limpa a referência do tooltip
    }
});


const style = document.createElement('style');
style.textContent = `
    .tooltip {
        position: absolute;
        background: rgba(20, 20, 20, 0.8);
        color: #fff;
        padding: 3px; 
        border-radius: 5px;
        z-index: 9999;
        display: flex;
        gap: 2px;
        font-family: "Fira Sans Condensed", sans-serif;
    }

    .aiva-button,
    .explore-button,
    .translate-button {
        background-color: #232323; 
        color: white;
        border-radius: 6px;
        cursor: pointer; 
        padding: 8px 16px; 
        text-align: center; 
        font-size: 14px;
        border: 1px solid #44D4C6;
        margin: 2px; 
    }

    .aiva-button:hover,
    .explore-button:hover,
    .translate-button:hover {
        background-color: #474747;
    }
`;

document.head.appendChild(style);
