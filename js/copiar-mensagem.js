const botaoCopiar = document.querySelector('.botao-copiar');
let caixaDecodificador = document.querySelector('.caixa-decodificador');
let mensagens = document.querySelector('.mensagens');

// Ao CredentialsContainer, copia os dados da mensagem codificada para area de transferencia e imprime uma mensagem de erro/sucesso
botaoCopiar.addEventListener('click', function () {
	// Verifica se campo está vazio
	if (caixaDecodificador.value == '') {
		// Chama a função criadora da mensagem para erro
		criaMensagem(
			'Nenhuma mensagem para ser copiada - Digite algo!',
			'red'
		)
	// Chama a função criadora da mensagem para sucesso
	} else {
		criaMensagem(
			'Mensagem copiada para a área de transferência',
			'#abff2e'
		)
		// Coleta os dados da caixa e armazena na área de transferência
		navigator.clipboard.writeText(caixaDecodificador.value)
		// Limpa a caixa de mensagem
		caixaDecodificador.value = ''
	}
});

// Remove os filhos do pai 'mensagens' e cria um novo de acordo com o parametro passado
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