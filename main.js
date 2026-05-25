// Aguarda o carregamento do DOM para garantir que os elementos existem
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona o botão de curiosidade
    const alertBtn = document.getElementById("alertBtn");

    // Lista de curiosidades para exibir de forma aleatória ao clicar
    const curiosidades = [
        "Sabia que existem mais organismos vivos em uma colher de sopa de solo saudável do que pessoas no planeta Terra?",
        "As minhocas podem digerir o seu próprio peso em solo e matéria orgânica todos os dias, transformando terra compacta em adubo rico!",
        "Cerca de 25% de toda a biodiversidade do planeta está escondida debaixo da terra.",
        "Os fungos micorrízicos criam redes subterrâneas que conectam as raízes das plantas, ajudando-as a trocar nutrientes e informações sobre pragas!"
    ];

    // Adiciona o evento de clique no botão
    if (alertBtn) {
        alertBtn.addEventListener("click", () => {
            // Seleciona uma curiosidade aleatória da lista
            const randomIndex = Math.floor(Math.random() * curiosidades.length);
            alert(curiosidades[randomIndex]);
        });
    }

    // Opcional: Efeito simples de log ao navegar pelos links (para fins de auditoria/melhorias futuras)
    const navLinks = document.querySelectorAll("header nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            console.log(`Navegando para a seção: ${e.target.getAttribute("href")}`);
        });
    });

});
