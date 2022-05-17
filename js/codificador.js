let caixaCodificador = document.querySelector(".caixa_codificador-js");
let botaoCodificador = document.querySelector('.botao-codificar-js');

botaoCodificador.addEventListener('click', function () {
    if (caixaCodificador.value == '') {
        criaMensagem(
            'Digite a mensagem para codificação!',
            '#c30000'
        )
    } else {
        // Transformar em minuscula
        let mensagemMinuscula = caixaCodificador.value.toLowerCase();
        // Usar um RegEx para eliminar caracteres indesejados
        let mensagemSemAcento = mensagemMinuscula.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z ])/g, '');
        // Separar as letras em uma lista
        let arreyMensagem = mensagemSemAcento.split('');
        // Enviar para a função e retornar codificado
        let retorno = codifica(arreyMensagem);
        // Enviar para a função que exibirá no decodificador
        recebeCodificado(retorno);
        criaMensagem(
            'Mensagem codificada',
            '#adff2f'
        )
        caixaCodificador.value = ''
        caixaDecodificador.focus()
    }
})

function codifica(mensagem) {
    for (var letra = 0; letra < mensagem.length; letra++) {
        if (mensagem[letra] == 'a') {
            mensagem[letra] = 'ai';
        }
        if (mensagem[letra] == 'e') {
            mensagem[letra] = 'enter';
        }
        if (mensagem[letra] == 'i') {
            mensagem[letra] = 'imes';
        }
        if (mensagem[letra] == 'o') {
            mensagem[letra] = 'ober';
        }
        if (mensagem[letra] == 'u') {
            mensagem[letra] = 'ufat';
        }
    }
    return mensagem.join('');
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

// Pega o codigo reexibe convertido na area
function recebeDecodificado(mensagemDecodificada) {
    caixaCodificador.value = mensagemDecodificada;
}