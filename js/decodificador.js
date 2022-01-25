var caixaDecod = document.querySelector('#caixaDecod');
var botaoDecod = document.querySelector('#botaoDecod');

botaoDecod.addEventListener('click', function(){
    if(caixaDecod.value == ''){
        msgInformativa.textContent = 'Digite a mensagem para decodificação!';
        msgInformativa.style.color = 'red';
        setTimeout(function(){
	    	msgInformativa.textContent = '';
            msgInformativa.style.color = '#adff2f';
	    }, 5000);
    }else{
        var mensagemMinuscula = caixaDecod.value.toLowerCase();
        var mensagemSemAcento = mensagemMinuscula.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
        var arreyMensagem = mensagemSemAcento.split('');
        var retorno = decodifica(mensagemSemAcento);
        recebeDecodificado(retorno);
        document.getElementById('caixaDecod').value='';
    }
}) 

function decodifica(mensagem){
    if(mensagem.includes('ai')){
        mensagem = mensagem.replaceAll('ai', 'a');
    }
    if(mensagem.includes('enter')){
        mensagem = mensagem.replaceAll('enter', 'e');
    }
    if(mensagem.includes('imes')){
        mensagem = mensagem.replaceAll('imes', 'i');
    }
    if(mensagem.includes('ober')){
        mensagem = mensagem.replaceAll('ober', 'o');
    }
    if(mensagem.includes('ufat')){
        mensagem = mensagem.replaceAll('ufat', 'u');
    }
    return mensagem;
}

function recebeCodificado(mensagemCodificada){
    document.getElementById('caixaDecod').value=mensagemCodificada;
}
