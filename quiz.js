
document.addEventListener("DOMContentLoaded", function () {

    // PEGAR OS ELEMENTOS DO QUIZ
    const formulario = document.getElementById("form-teste");
    const resultado = document.getElementById("resultado-teste");

    // VERIFICAR SE ESTÁ NA PÁGINA DO QUIZ
    if (!formulario || !resultado) {
        return;
    }

    // QUANDO CLICAR NO BOTÃO
    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        // PEGAR AS RESPOSTAS
        const respostas = new FormData(formulario);

        let natural = 0;
        let social = 0;
        let marcante = 0;
        let artistica = 0;

        // CONTAR AS RESPOSTAS
        for (let i = 1; i <= 4; i++) {

            let resposta = respostas.get("p" + i);

            if (resposta === "natural") {
                natural++;
            }
            else if (resposta === "social") {
                social++;
            }
            else if (resposta === "marcante") {
                marcante++;
            }
            else if (resposta === "artistica") {
                artistica++;
            }
        }

        // DESCOBRIR QUAL ESTILO TEVE MAIS RESPOSTAS
        let nomeMaquiagem = "";
        let imagemMaquiagem = "";
        let descricao = "";
        let pagina = "";

        if (natural >= social && natural >= marcante && natural >= artistica) {

            nomeMaquiagem = "Pele Iluminada";
            imagemMaquiagem = "maquiagem natural.jpg";
            descricao = "Sua maquiagem ideal é a Pele Iluminada! Um visual leve e delicado, perfeito para o dia a dia.";
            pagina = "natural.html";

        }

        else if (social >= marcante && social >= artistica) {

            nomeMaquiagem = "Maquiagem Social";
            imagemMaquiagem = "maquiagem evento.webp";
            descricao = "Sua maquiagem ideal é a Maquiagem Social! Um visual elegante para festas e eventos.";
            pagina = "noturna.html";

        }

        else if (marcante >= artistica) {

            nomeMaquiagem = "Olhar Marcante";
            imagemMaquiagem = "maquiagem olhar marcanter.jpg";
            descricao = "Sua maquiagem ideal é o Olhar Marcante! Uma produção com destaque nos olhos.";
            pagina = "marcante.html";

        }

        else {

            nomeMaquiagem = "Maquiagem Artística";
            imagemMaquiagem = "IMG_b711f3c4-f574-4a25-bfa9-8b15b6210e20.jpg";
            descricao = "Sua maquiagem ideal é a Maquiagem Artística! Um estilo criativo e cheio de cores.";
            pagina = "Artística.html";

        }

        // MOSTRAR O NOME DA MAQUIAGEM
        document.getElementById("nome-resultado").textContent = nomeMaquiagem;

        // MOSTRAR A IMAGEM
        document.getElementById("imagem-resultado").src = imagemMaquiagem;

        // MOSTRAR A DESCRIÇÃO
        document.getElementById("descricao-resultado").textContent = descricao;

        // COLOCAR O LINK DA MAQUIAGEM
        document.getElementById("link-resultado").href = pagina;

        // MOSTRAR O RESULTADO NA TELA
        resultado.hidden = false;

        resultado.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});
