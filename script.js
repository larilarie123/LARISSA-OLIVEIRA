const cards = document.querySelectorAll(".cartao-make");

cards.forEach(function (card) {
    
    function aplicarEfeito3D(clientX, clientY) {
        const rect = card.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centroX = rect.width / 2;
        const centroY = rect.height / 2;

        const rotacaoX = ((y - centroY) / centroY) * -10;
        const rotacaoY = ((x - centroX) / centroX) * 10;

        // Z-index alto para o card ativo não ficar por baixo do vizinho
        card.style.zIndex = "10";
        card.style.transform = `perspective(1000px) rotateX(${rotacaoX}deg) rotateY(${rotacaoY}deg) scale(1.02)`;
        card.style.transition = "transform 0.1s ease-out";
    }

    function resetarCard() {
        card.style.zIndex = "1";
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        card.style.transition = "transform 0.5s ease-out";
    }

    // Ativa o 3D apenas para dispositivos com mouse (evita travar a rolagem no celular)
    card.addEventListener("mousemove", function (e) {
        aplicarEfeito3D(e.clientX, e.clientY);
    });

    card.addEventListener("mouseleave", resetarCard);

    // Clique funciona tanto no PC quanto no celular
    card.addEventListener("click", function (event) {
        if (event.target.closest("a, button")) {
            return;
        }
        card.classList.toggle("card-ativo");
    });
});
