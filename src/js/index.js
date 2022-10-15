// OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o contéudo da aba anterior

// - passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba")
// - passo 2 - dar um jeito de identificar o clique no elemento da aba
abas.forEach((aba) => {
    aba.addEventListener("click", function() {
        // se o codigo nao precisar rodar, nao vai!
        if (aba.classList.contains("selecionada")) {
            return;
        };

        selecionarAba(aba);

        mostrarInformacoesDaAba(aba);
    });
});

function selecionarAba(aba) {
    // - passo 3 - quando usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionada");
    abaSelecionada.classList.remove("selecionada");

    // - passo 4 - marcar a aba clicada como selecionado
    aba.classList.add("selecionada");
}

function mostrarInformacoesDaAba(aba) {
    // - passo 5 - esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionada");
    informacaoSelecionada.classList.remove("selecionada");

    // - passo 6 - mostrar o conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);

    informacaoASerMostrada.classList.add("selecionada");
}



