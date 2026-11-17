
document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("form-teste");
    const resultado = document.getElementById("resultado-teste");

    // Só funciona na página que possui o quiz
    if (!formulario || !resultado) {
        return;
    }

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        const respostas = new FormData(formulario);

        const estilos = {
            natural: 0,
            social: 0,
            marcante: 0,
            artistica: 0
        };

        // CONTAR AS RESPOSTAS
        for (let i = 1; i <= 4; i++) {

            const resposta = respostas.get("p" + i);

            if (!resposta) {
                alert("Responda todas as perguntas antes de descobrir sua maquiagem ideal!");
                return;
            }

            if (estilos[resposta] !== undefined) {
                estilos[resposta]++;
            }
        }

        // DESCOBRIR O ESTILO MAIS ESCOLHIDO
        const estiloVencedor = Object.keys(estilos).reduce(
            (a, b) => estilos[a] >= estilos[b] ? a : b
        );

        // RESULTADOS
        const resultados = {

            natural: {
                nome: "Pele Iluminada",
                imagem: "maquiagem natural.jpg",
                descricao: "Sua maquiagem ideal é a Pele Iluminada! Um visual leve e delicado, perfeito para o dia a dia.",
                link: "natural.html"
            },

            social: {
                nome: "Maquiagem Social",
                imagem: "maquiagem evento.webp",
                descricao: "Sua maquiagem ideal é a Maquiagem Social! Um visual elegante para festas, casamentos e eventos especiais.",
                link: "noturna.html"
            },

            marcante: {
                nome: "Olhar Marcante",
                imagem: "maquiagem olhar marcanter.jpg",
                descricao: "Sua maquiagem ideal é o Olhar Marcante! Uma produção com destaque nos olhos e muita personalidade.",
                link: "marcante.html"
            },

            artistica: {
                nome: "Maquiagem Artística",
                imagem: "IMG_b711f3c4-f574-4a25-bfa9-8b15b6210e20.jpg",
                descricao: "Sua maquiagem ideal é a Maquiagem Artística! Um estilo criativo, cheio de cores, desenhos e detalhes especiais.",
                link: "Artística.html"
            }
        };

        const escolhido = resultados[estiloVencedor];

        // MOSTRAR NOME
        const nome = document.getElementById("nome-resultado");

        if (nome) {
            nome.textContent = escolhido.nome;
        }

        // MOSTRAR IMAGEM
        const imagem = document.getElementById("imagem-resultado");

        if (imagem) {
            imagem.src = escolhido.imagem;
            imagem.alt = escolhido.nome;

            imagem.onerror = function () {
                this.alt = "Imagem não encontrada. Confira o nome do arquivo.";
            };
        }

        // MOSTRAR DESCRIÇÃO
        const descricao = document.getElementById("descricao-resultado");

        if (descricao) {
            descricao.textContent = escolhido.descricao;
        }

        // LINK DO PASSO A PASSO
        const link = document.getElementById("link-resultado");

        if (link) {
            link.href = escolhido.link;
        }

        // EXIBIR RESULTADO
        resultado.hidden = false;

        resultado.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});
