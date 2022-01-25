var caixaCod = document.querySelector("#caixaCod");
var botaoCod = document.querySelector("#botaoCod");
var msgInformativa = document.querySelector('#mensagemInformativa');

botaoCod.addEventListener('click', function (){
    if(caixaCod.value == ''){
        msgInformativa.textContent = 'Digite a mensagem para codificação!';
        msgInformativa.style.color = 'red';
        setTimeout(function(){
	    	msgInformativa.textContent = '';
            msgInformativa.style.color = '#adff2f';
	    }, 5000);
    }else{    
        var mensagemMinuscula = caixaCod.value.toLowerCase();
        var mensagemSemAcento = mensagemMinuscula.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z ])/g,'');
        var arreyMensagem = mensagemSemAcento.split('');
        var retorno = codifica(arreyMensagem);

        recebeCodificado(retorno);
        document.getElementById('caixaCod').value='';
    }
})

function codifica(mensagem){
    for(var letra = 0; letra < mensagem.length; letra++){
        if(mensagem[letra] == 'a'){
            mensagem[letra] = 'ai';
        }
        if(mensagem[letra] == 'e'){
            mensagem[letra] = 'enter';
        }
        if(mensagem[letra] == 'i'){
            mensagem[letra] = 'imes';
        }
        if(mensagem[letra] == 'o'){
            mensagem[letra] = 'ober';
        }
        if(mensagem[letra] == 'u'){
            mensagem[letra] = 'ufat';
        }
    }
    return mensagem.join('');
}

function recebeDecodificado(mensagemDecodificada){
    document.getElementById('caixaCod').value=mensagemDecodificada;
}
console.log("Banco de imagens - icons8.com.br<br>")
console.log("Orientações - Curso em vídeo / MDM Web Docs")
