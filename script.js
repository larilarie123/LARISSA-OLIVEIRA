    // CARDS COM EFEITO 3D INTERATIVO E BRILHO
    const cards = document.querySelectorAll(".cartao-make");

    cards.forEach(function (card) {
        
        // Função que calcula a inclinação 3D
        function aplicarEfeito3D(clientX, clientY) {
            const rect = card.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            const centroX = rect.width / 2;
            const centroY = rect.height / 2;

            // Calcula o ângulo de rotação (máximo de 12 graus)
            const rotacaoX = ((y - centroY) / centroY) * -12;
            const rotacaoY = ((x - centroX) / centroX) * 12;

            // Aplica o movimento 3D e um leve zoom
            card.style.transform = `perspective(1000px) rotateX(${rotacaoX}deg) rotateY(${rotacaoY}deg) scale(1.03)`;
            card.style.transition = "transform 0.1s ease-out";
        }

        // Função que reseta o card quando solta ou tira o mouse
        function resetarCard() {
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
            card.style.transition = "transform 0.5s ease-out";
        }

        // Eventos para Computador (Mouse)
        card.addEventListener("mousemove", function (e) {
            aplicarEfeito3D(e.clientX, e.clientY);
        });

        card.addEventListener("mouseleave", resetarCard);

        // Eventos para Celular (Toque na tela)
        card.addEventListener("touchmove", function (e) {
            const toque = e.touches[0];
            aplicarEfeito3D(toque.clientX, toque.clientY);
        }, { passive: true });

        card.addEventListener("touchend", resetarCard);

        // Mantém o seu clique original para ativar/desativar o card
        card.addEventListener("click", function (event) {
            if (event.target.closest("a, button")) {
                return;
            }
            card.classList.toggle("card-ativo");
        });
    });
 
