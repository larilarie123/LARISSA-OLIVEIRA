
document.addEventListener("DOMContentLoaded", function () {

    // MENU INTERATIVO
    const botaoMenu = document.getElementById("botao-menu");
    const menu = document.getElementById("menu");

    if (botaoMenu && menu) {

        botaoMenu.addEventListener("click", function () {

            menu.hidden = !menu.hidden;

            botaoMenu.setAttribute(
                "aria-expanded",
                String(!menu.hidden)
            );

        });

    }

    // DÚVIDAS FREQUENTES
    const botaoProdutos = document.getElementById("botao-produtos");
    const secaoProdutos = document.getElementById("secao-produtos");
    const botaoVoltar = document.getElementById("botao-voltar");
    const maquiagens = document.getElementById("maquiagens");

    if (botaoProdutos && secaoProdutos && maquiagens) {

        botaoProdutos.addEventListener("click", function () {

            maquiagens.hidden = true;
            secaoProdutos.hidden = false;
            menu.hidden = true;

            botaoMenu.setAttribute("aria-expanded", "false");

            secaoProdutos.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        });

    }

    if (botaoVoltar && secaoProdutos && maquiagens) {

        botaoVoltar.addEventListener("click", function () {

            secaoProdutos.hidden = true;
            maquiagens.hidden = false;

            maquiagens.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        });

    }

    // EFEITO 3D DOS CARDS
    const cards = document.querySelectorAll(
        "#maquiagens .cartao-make"
    );

    const temMouse = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
    ).matches;

    cards.forEach(function (card) {

        function atualizarEfeito(rotacaoX, rotacaoY) {

            const elevacao = card.classList.contains("card-ativo")
                ? -8
                : 0;

            card.style.zIndex = "20";

            card.style.transform =
                `perspective(1000px) translateY(${elevacao}px) rotateX(${rotacaoX}deg) rotateY(${rotacaoY}deg) scale(1.02)`;

        }

        function aplicarEfeito3D(clientX, clientY) {

            const rect = card.getBoundingClientRect();

            const x = clientX - rect.left;
            const y = clientY - rect.top;

            const centroX = rect.width / 2;
            const centroY = rect.height / 2;

            const rotacaoX = ((y - centroY) / centroY) * -10;
            const rotacaoY = ((x - centroX) / centroX) * 10;

            atualizarEfeito(rotacaoX, rotacaoY);

            card.style.transition = "transform 0.1s ease-out";

        }

        function resetarCard() {

            const elevacao = card.classList.contains("card-ativo")
                ? -8
                : 0;

            card.style.zIndex = "1";

            card.style.transform =
                `perspective(1000px) translateY(${elevacao}px) rotateX(0deg) rotateY(0deg) scale(1)`;

            card.style.transition = "transform 0.5s ease-out";

        }

        // MOVIMENTO COM MOUSE
        if (temMouse) {

            card.addEventListener("mousemove", function (e) {

                aplicarEfeito3D(e.clientX, e.clientY);

            });

            card.addEventListener("mouseleave", resetarCard);

        }

        // EFEITO DE CLIQUE
        card.addEventListener("click", function (event) {

            if (event.target.closest("a, button")) {
                return;
            }

            card.classList.toggle("card-ativo");

            resetarCard();

        });

    });

});
