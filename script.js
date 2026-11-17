
document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("form-teste");
    const resultado = document.getElementById("resultado-teste");

    if (!formulario || !resultado) {
        return;
    }

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const respostas = new FormData(formulario);

        let natural = 0;
        let social = 0;
        let marcante = 0;
        let artistica = 0;

        // Contar as respostas
        for (let i = 1; i <= 4; i++) {

            const resposta = respostas.get("p" + i);

            if (resposta === "natural") natural++;
            if (resposta === "social") social++;
            if (resposta === "marcante") marcante++;
            if (resposta === "artistica") artistica++;
        }

        // Descobrir o estilo mais escolhido
        let estilo = "natural";

        if (social > natural) estilo = "social";
        if (marcante > natural && marcante > social) estilo = "marcante";
        if (artistica > natural && artistica > social && artistica > marcante) {
            estilo = "artistica";
        }

        // Mostrar o resultado
        const nome = document.getElementById("nome-resultado");
        const imagem = document.getElementById("imagem-resultado");
        const descricao = document.getElementById("descricao-resultado");
        const link = document.getElementById("link-resultado");

        if (estilo === "natural") {
            nome.textContent = "Pele Iluminada";
            imagem.src = "maquiagem natural.jpg";
            descricao.textContent = "Sua maquiagem ideal é a Pele Iluminada! Um visual leve e delicado para o dia a dia.";
            link.href = "natural.html";
        }

        if (estilo === "social") {
            nome.textContent = "Maquiagem Social";
            imagem.src = "maquiagem evento.webp";
            descricao.textContent = "Sua maquiagem ideal é a Maquiagem Social! Um visual elegante para festas e eventos.";
            link.href = "noturna.html";
        }

        if (estilo === "marcante") {
            nome.textContent = "Olhar Marcante";
            imagem.src = "maquiagem olhar marcanter.jpg";
            descricao.textContent = "Sua maquiagem ideal é o Olhar Marcante! Uma produção com destaque nos olhos.";
            link.href = "marcante.html";
        }

        if (estilo === "artistica") {
            nome.textContent = "Maquiagem Artística";
            imagem.src = "IMG_b711f3c4-f574-4a25-bfa9-8b15b6210e20.jpg";
            descricao.textContent = "Sua maquiagem ideal é a Maquiagem Artística! Um estilo criativo e cheio de cores.";
            link.href = "Artística.html";
        }

        resultado.hidden = false;

        resultado.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});
