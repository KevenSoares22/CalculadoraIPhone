
var Clean = document.querySelectorAll('.botaoClean')

var Result = document.querySelectorAll('.botaoResult')



function attela(valor){
	
	tela.innerHTML += valor
	
	
}
function clean(){
    tela.innerHTML = ' '
	
	
	
}
function resposta(){
    if(tela.textContent!='Erro'){
	document.querySelector('#tela').innerHTML = eval(tela.innerHTML)
	}
	
}


function inValor(){
	
	tela.innerHTML = tela.innerHTML*(-1)
	
	
}

