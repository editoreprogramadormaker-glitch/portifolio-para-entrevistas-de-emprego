const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click", function() {
        if (aba.classList.contains("selecionado")) {
            return;
        }

        const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado");

        aba.classList.add("selecionado");

        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");

        const ideDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;

        const informacaoASerMostrada = document.getElementById(ideDoElementoDeInformacoesDaAba);
        informacaoASerMostrada.classList.add("selecionado");
    });
});