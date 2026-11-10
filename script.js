document.addEventListener("DOMContentLoaded", function () {

    // MENU
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

    // DUVIDAS FREQUENTES
    const botaoDuvidas = document.getElementById("botao-produtos");
    const secaoDuvidas = document.getElementById("secao-produtos");
    const maquiagens = document.getElementById("maquiagens");
    const botaoVoltar = document.getElementById("botao-voltar");

    if (botaoDuvidas && secaoDuvidas && maquiagens) {

        botaoDuvidas.addEventListener("click", function () {

            maquiagens.hidden = true;
            secaoDuvidas.hidden = false;

            if (menu) {
                menu.hidden = true;
            }

            if (botaoMenu) {
                botaoMenu.setAttribute("aria-expanded", "false");
            }

            secaoDuvidas.scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // VOLTAR PARA AS MAQUIAGENS
    if (botaoVoltar && secaoDuvidas && maquiagens) {

        botaoVoltar.addEventListener("click", function () {

            secaoDuvidas.hidden = true;
            maquiagens.hidden = false;

            maquiagens.scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // ANIMACAO DOS CARDS AO CLICAR
    const cards = document.querySelectorAll(".cartao-make");

    cards.forEach(function (card) {

        card.addEventListener("click", function (event) {

            if (event.target.closest("a, button")) {
                return;
            }

            card.classList.toggle("card-ativo");

        });

    });

    // EFEITO 3D DOS CARDS COM O MOUSE
    cards.forEach(function (card) {

        card.addEventListener("mousemove", function (e) {

            if (window.matchMedia("(hover: none)").matches) {
                return;
            }

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const grausX = -(y / rect.height) * 8;
            const grausY = (x / rect.width) * 8;

            card.style.transform =
                `perspective(1000px) rotateX(${grausX}deg) rotateY(${grausY}deg) scale(1.02)`;

        });

        card.addEventListener("mouseleave", function () {

            card.style.transform = "";

        });

    });

});
