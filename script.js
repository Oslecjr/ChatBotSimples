window.onload = function() {
    const chatlog = document.getElementById('chatlog');

    // Mensagem introdutória
    const introMessage = document.createElement('div');
    introMessage.className = 'bot-message';
    introMessage.textContent = "Olá! Este é um projeto simples para testar o conhecimento de Celso Filho. Aqui estão algumas perguntas que você pode fazer:\n- Qual é o LinkedIn do Celso?\n- Qual é o GitHub do Celso?\n- Quais linguagens de programação o Celso conhece?";
    chatlog.appendChild(introMessage);

    // Adiciona evento de pressionar 'Enter' para enviar mensagem
    document.getElementById('userInput').addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
}

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === "") return;

    const chatlog = document.getElementById('chatlog');
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = userInput;
    chatlog.appendChild(userMessage);

    const botResponse = getBotResponse(userInput);
    const botMessage = document.createElement('div');
    botMessage.className = 'bot-message';
    botMessage.innerHTML = botResponse; // Usando innerHTML para permitir HTML nos links
    chatlog.appendChild(botMessage);

    document.getElementById('userInput').value = "";
    chatlog.scrollTop = chatlog.scrollHeight;
}

function getBotResponse(input) {
    const lowerInput = input.toLowerCase();

    // Resposta padrão do bot com introdução
    if (lowerInput.includes("oi")) {
        return "Olá! Este é um projeto simples para testar o conhecimento de Celso Filho. Como posso ajudar?";
    }

    // Resposta para LinkedIn
    if (lowerInput.includes("linkedin")) {
        return 'Aqui está o LinkedIn do Celso Filho: <a href="https://www.linkedin.com/in/celso-de-lira-silva-filho-827a56255/" target="_blank">LinkedIn do Celso Filho</a>';
    }

    // Resposta para GitHub
    if (lowerInput.includes("github")) {
        return 'Aqui está o GitHub do Celso Filho: <a href="https://github.com/Oslecjr" target="_blank">GitHub do Celso Filho</a>';
    }

    // Resposta para linguagens conhecidas
    if (lowerInput.includes("linguagens") || lowerInput.includes("conhece") || lowerInput.includes("sabe programar")) {
        return "O Celso Filho sabe programar em Python, C#, Java e JavaScript.";
    }

    // Resposta padrão para entradas não reconhecidas
    return "Desculpe, não entendi. Pode repetir?";
}
