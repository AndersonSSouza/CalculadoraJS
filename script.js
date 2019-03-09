function escrever(num){

	var texto =document.querySelector("#texto1")
	if (texto.textContent == 0 ) {
		texto.textContent = num
	}else{
		texto.textContent += num
	}

}

function botao1(){
	escrever(1)
}
function botao2(){
	escrever(2)
}
function botao3(){
	escrever(3)
}
function botao4(){
	escrever(4)
}
function botao5(){
	escrever(5)
}
function botao6(){
	escrever(6)
}
function botao7(){
	escrever(7)
}
function botao8(){
	escrever(8)
}
function botao9(){
	escrever(9)
}
function botaoponto(){
	escrever(".")
}

function cce(){
	var texto =document.querySelector("#texto1")
	texto.textContent = 0
}