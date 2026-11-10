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

});
