let botaoDecodificador = document.querySelector('[data-botao-decodificador]');

botaoDecodificador.addEventListener('click', function () {
    // Apos o clique, pega o visualViewport, pois a variavel ja foi chamada em 'copia-mensagem.js'
    const caixaDecodificador = document.querySelector('[data-caixa-decodificador]');
    if (caixaDecodificador.value == '') {
        criaMensagem(
            'Digite a mensagem para decodificação!',
            '#c30000'
        )
    } else {
        let mensagemMinuscula = caixaDecodificador.value.toLowerCase();
        let mensagemSemAcento = mensagemMinuscula.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        let retorno = decodifica(mensagemSemAcento);
        recebeDecodificado(retorno);
        criaMensagem(
            'Mensagem decodificada',
            '#adff2f'
        )
        caixaDecodificador.value = '';
        caixaCodificador.focus()
    }
})

function decodifica(mensagem) {
    if (mensagem.includes('ai')) {
        mensagem = mensagem.replaceAll('ai', 'a');
    }
    if (mensagem.includes('enter')) {
        mensagem = mensagem.replaceAll('enter', 'e');
    }
    if (mensagem.includes('imes')) {
        mensagem = mensagem.replaceAll('imes', 'i');
    }
    if (mensagem.includes('ober')) {
        mensagem = mensagem.replaceAll('ober', 'o');
    }
    if (mensagem.includes('ufat')) {
        mensagem = mensagem.replaceAll('ufat', 'u');
    }
    return mensagem;
}

function recebeCodificado(mensagemCodificada) {
    caixaDecodificador.value = mensagemCodificada;
}

function criaMensagem(mensagem, cor) {
    // Limpa
    mensagens.innerHTML = ''
    // Cria o elemento/filho
    let novaMensagem = document.createElement('p')
    // Cria a mensaegem
    let conteudo = document.createTextNode(mensagem);
    // Adiciona a mensagem no filho
    novaMensagem.appendChild(conteudo)
    // Adiciona o filho no pai
    mensagens.appendChild(novaMensagem)
    // Adiciona cor de acordo com o parametro
    mensagens.style.color = cor
}