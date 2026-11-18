
document.addEventListener("DOMContentLoaded", function () {

    // MENU INTERATIVO
    const botaoMenu = document.getElementById("botao-menu");
    const menu = document.getElementById("menu");

    if (botaoMenu && menu) {

        botaoMenu.addEventListener("click", function () {

            menu.hidden = !menu.hidden;

            botaoMenu.setAttribute(
                "aria-expanded",
                !menu.hidden
            );

        });

    }

    // DÚVIDAS FREQUENTES
    const botaoProdutos = document.getElementById("botao-produtos");
    const secaoProdutos = document.getElementById("secao-produtos");
    const maquiagens = document.getElementById("maquiagens");

    if (botaoProdutos && secaoProdutos) {

        botaoProdutos.addEventListener("click", function () {

            secaoProdutos.hidden = false;

            if (maquiagens) {
                maquiagens.hidden = true;
            }

            secaoProdutos.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        });

    }

    // BOTÃO VOLTAR ÀS MAQUIAGENS
    const botaoVoltar = document.getElementById("botao-voltar");

    if (botaoVoltar) {

        botaoVoltar.addEventListener("click", function () {

            if (secaoProdutos) {
                secaoProdutos.hidden = true;
            }

            if (maquiagens) {
                maquiagens.hidden = false;
            }

            if (maquiagens) {
                maquiagens.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

        });

    }

});
