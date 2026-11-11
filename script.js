
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

        // Nao interfere nos botoes e links  
        if (event.target.closest("a, button")) {  
            return;  
        }  

        card.classList.toggle("card-ativo");  

    });  

});  

// MOVIMENTO DOS CARDS AO ROLAR A PAGINA  
if ("IntersectionObserver" in window) {  

    const observador = new IntersectionObserver(  
        function (entradas) {  

            entradas.forEach(function (entrada) {  

                if (entrada.isIntersecting) {  

                    entrada.target.animate(  
                        [  
                            {  
                                opacity: 0,  
                                transform: "translateY(55px) scale(0.94)"  
                            },  
                            {  
                                opacity: 1,  
                                transform: "translateY(0) scale(1)"  
                            }  
                        ],  
                        {  
                            duration: 850,  
                            easing: "cubic-bezier(0.22, 1, 0.36, 1)",  
                            fill: "both"  
                        }  
                    );  

                    observador.unobserve(entrada.target);  
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
