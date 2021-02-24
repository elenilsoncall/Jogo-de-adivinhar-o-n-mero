/*Declarando a Variavél sorteio aleatóri 1 a 100 */ 
let randomNumber =Math.floor(Math.random() * 100) + 1;
/*Declarando as contantes|suposicao|ultimo resultado|baixoValor|suposicaoEnviar|suposicaoCampo|*/
const suposicao = document.querySelector('.suposicao');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoValor = document.querySelector('.baixoValor');
/*Entrada e botao de envio*/
const suposicaoEnviar = document.querySelector('.suposicaoEnviar');
const suposicaoCampo = document.querySelector('.suposicaoCampo');
/*Armazenamento de contagem|controle de jogadas|botao reiniciar*/
let guesscount = 1;
let resetarBotao ;

function checarSuposicao() {
    
    /*Adicionando valores de entradas */
    suposicaoEnviar.addEventListener('clique', checarSuposicao);

    /*Definição variavél usuaruio adivinha */
    let usuarioAdivinha = numero(suposicaoCampo.nodeValue);
    /*Jogo inicia se numero for 1 a 100 */
    if (suposicaoContar === 1) {
        suposicao.textContent = 'Suposições anteriores';
    }
    
    suposicao.textContent += usuarioAdivinha + '';
   /*Se o Jogador acertar a número sorteado enteão jogo reinicia  */
    if (usuarioAdivinha === randomNumber) {
        ultimoResultado.textContent = 'Parabéns! Você acertou';
        ultimoResultado.style.backgroundcolor = 'green';
        baixoValor.textContent = '';
        definirGameOver();
    /*Se jogador tentar mais de 10 vezes Fim do jogo */    
    } else if (suposicaoContar===10) {
        ultimoResultado.textContent =' Fim do Jogo!!';
        definirGameOver();
     /* Outras condicionais para que o jogo continue até o jogador ganhar ou perder */   
    } 
    else{
        ultimoResultado.textContent = 'Errado!';
        ultimoResultado.style.backgroundcolor = 'red';
        if (usuarioAdivinha < randomNumber) {
            baixoValor.textContent = 'Valor muito baixo!'
        } else if (usuarioAdivinha > randomNumber) {
            baixoValor.textContent = 'valor muito alto !';
        }
    }
    /* adicionar 1 a varivél|limpar o campo do texto e recomeçar */
    suposicaoContar ++;
    suposicaoEnviar.nodeValue = '';
    suposicaoEnviar.focus();
    /*Desativar entrada de texto e botão|criar botão reiniciar */
    function definirGameOver() { 
        suposicaoCampo.disabled = true;
        suposicaoEnviar.disabled = true;
        resetarBotao = document.createElement('button');
        resetarBotao.textContent = 'Iniciar novo Jogo';
        document.body.append(resetarBotao);
        resetarBotao.addEventListener('Clique', resetarGame);

        
    }

    /* Bloco de reiniciar tudo do zero |new game */
    function resetarGame() {
        suposicaoContar = 1;

        const resetparas = document.querySelectorAll('resulparas p');
        for (let i = 0; i < resetparas.length; i++) {
             resetparas[i].textContent = '';
            
        }
        
        resetarBotao.perentNode.removeChild(resetarBotao);

        suposicaoCampo.disabled = false
        suposicaoEnviar.disabled = false
        suposicaoCampo.nodeValue ='';
        suposicaoCampo.focus()

        ultimoResultado.style.backgroundcolor = 'white'
        randomNumber = Math.floor(Math.random() * 100) + 1;
    }






}