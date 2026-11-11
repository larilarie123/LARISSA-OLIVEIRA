
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

    // CARDS
    const cards = document.querySelectorAll(".cartao-make");

    cards.forEach(function (card) {

        // PREPARAÇÃO DO EFEITO 3D
        card.style.transformStyle = "preserve-3d";
        card.style.willChange = "transform";
        card.style.transition = "transform 0.15s ease, box-shadow 0.2s ease";

        // MOVIMENTO 3D COM O MOUSE
        card.addEventListener("pointermove", function (event) {

            if (event.pointerType !== "mouse") return;

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centroX = rect.width / 2;
            const centroY = rect.height / 2;

            const rotacaoY = ((x - centroX) / centroX) * 10;
            const rotacaoX = ((centroY - y) / centroY) * 10;

            card.style.transform =
                "perspective(1000px) rotateX(" +
                rotacaoX +
                "deg) rotateY(" +
                rotacaoY +
                "deg) scale3d(1.04, 1.04, 1.04)";

            card.style.boxShadow =
                "0 20px 35px rgba(180, 70, 100, 0.30)";
        });

        // VOLTA AO NORMAL
        card.addEventListener("pointerleave", function () {

            card.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";

            card.style.boxShadow = "";
        });

        // ANIMACAO AO CLICAR
        card.addEventListener("click", function (event) {

            if (event.target.closest("a, button")) {
                return;
            }

            card.classList.toggle("card-ativo");
        });

    });

    // ANIMACAO AO ROLAR A PAGINA
    if ("IntersectionObserver" in window) {

        const observador = new IntersectionObserver(
            function (entradas) {

                entradas.forEach(function (entrada) {

                    if (entrada.isIntersecting) {

                        const card = entrada.target;

                        const animacao = card.animate(
                            [
                                {
                                    opacity: 0,
                                    transform: "translateY(45px) scale(0.94)"
                                },
                                {
                                    opacity: 1,
                                    transform: "translateY(0) scale(1)"
                                }
                            ],
                            {
                                duration: 850,
                                easing: "cubic-bezier(0.22, 1, 0.36, 1)"
                            }
                        );

                        animacao.onfinish = function () {
                            card.style.opacity = "1";
                        };

                        observador.unobserve(card);
                    }
                });

            },
            {
                threshold: 0.15
            }
        );

        cards.forEach(function (card) {
            observador.observe(card);
        });
    }

});
