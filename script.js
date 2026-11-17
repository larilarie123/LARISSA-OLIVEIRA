
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

    // ABRIR E FECHAR O QUIZ
    const botaoAbrirQuiz = document.getElementById("botao-abrir-quiz");
    const formularioQuiz = document.getElementById("form-teste");
    const resultadoQuiz = document.getElementById("resultado-teste");

    if (botaoAbrirQuiz && formularioQuiz) {

        botaoAbrirQuiz.addEventListener("click", function () {

            formularioQuiz.hidden = !formularioQuiz.hidden;

            botaoAbrirQuiz.textContent = formularioQuiz.hidden
                ? "Descobrir minha maquiagem ideal"
                : "Fechar teste";

            if (!formularioQuiz.hidden) {
                formularioQuiz.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            } else if (resultadoQuiz) {
                resultadoQuiz.hidden = true;
            }
        });
    }

    // DÚVIDAS FREQUENTES
    const botaoProdutos = document.getElementById("botao-produtos");
    const secaoProdutos = document.getElementById("secao-produtos");
    const botaoVoltar = document.getElementById("botao-voltar");

    const destaqueQuiz = document.querySelector(".destaque-quiz");
    const titulo = document.querySelector(".titulo");
    const maquiagens = document.getElementById("maquiagens");

    if (botaoProdutos && secaoProdutos) {

        botaoProdutos.addEventListener("click", function () {

            if (destaqueQuiz) destaqueQuiz.hidden = true;
            if (titulo) titulo.hidden = true;
            if (maquiagens) maquiagens.hidden = true;

            secaoProdutos.hidden = false;

            if (menu) menu.hidden = true;

            if (botaoMenu) {
                botaoMenu.setAttribute("aria-expanded", "false");
            }

            secaoProdutos.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        });
    }

    if (botaoVoltar && secaoProdutos) {

        botaoVoltar.addEventListener("click", function () {

            secaoProdutos.hidden = true;

            if (destaqueQuiz) destaqueQuiz.hidden = false;
            if (titulo) titulo.hidden = false;
            if (maquiagens) maquiagens.hidden = false;

            if (destaqueQuiz) {
                destaqueQuiz.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
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

        function resetarCard() {

            const elevacao = card.classList.contains("card-ativo")
                ? -8
                : 0;

            card.style.zIndex = "1";

            card.style.transform =
                `perspective(1000px) translateY(${elevacao}px) rotateX(0deg) rotateY(0deg) scale(1)`;

            card.style.transition = "transform 0.5s ease-out";
        }

        function aplicarEfeito3D(clientX, clientY) {

            const rect = card.getBoundingClientRect();

            const x = clientX - rect.left;
            const y = clientY - rect.top;

            const centroX = rect.width / 2;
            const centroY = rect.height / 2;

            const rotacaoX = ((y - centroY) / centroY) * -10;
            const rotacaoY = ((x - centroX) / centroX) * 10;

            const elevacao = card.classList.contains("card-ativo")
                ? -8
                : 0;

            card.style.zIndex = "20";

            card.style.transform =
                `perspective(1000px) translateY(${elevacao}px) rotateX(${rotacaoX}deg) rotateY(${rotacaoY}deg) scale(1.02)`;

            card.style.transition = "transform 0.1s ease-out";
        }

        if (temMouse) {

            card.addEventListener("mousemove", function (e) {
                aplicarEfeito3D(e.clientX, e.clientY);
            });

            card.addEventListener("mouseleave", resetarCard);
        }

        card.addEventListener("click", function (event) {

            if (event.target.closest("a, button")) {
                return;
            }

            card.classList.toggle("card-ativo");

            resetarCard();
        });
    });

});
