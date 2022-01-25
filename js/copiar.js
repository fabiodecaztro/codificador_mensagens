var botaoCopiar = document.querySelector('#botaoCopiar');
var caixaDecod = document.querySelector('#caixaDecod');
var msgInformativa = document.querySelector('#msgInformativa');
var nome = document.querySelector('.nome-rodape');

botaoCopiar.addEventListener('click', function(){
	if(caixaDecod.value == ''){
		msgInformativa.textContent = 'Nenhuma mensagem para ser copiada!';
		msgInformativa.style.color = 'red';
        setTimeout(function(){
	    	msgInformativa.textContent = '';
			msgInformativa.style.color = '#adff2f';
	    }, 5000);
	}else{
		navigator.clipboard.writeText(caixaDecod.value)
	    msgInformativa.textContent = 'Mensagem copiada para a área de transferência';
	    setTimeout(function(){
	    	msgInformativa.textContent = '';
	    }, 5000);
	}
});
 