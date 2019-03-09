function escrever(num){

	var texto =document.querySelector("#texto1")
	if (texto.textContent == 0 ) {
		texto.textContent = num
	}else{
		texto.textContent += num
	}
}

function aux(sinal){
	var textoaux = document.querySelector("#tauxiliar")
	var texto = document.querySelector("#texto1")
	calcular(sinal)
	document.getElementById("operacao").value = sinal
	texto.textContent = 0
}

function calcular(sinal){
	var textoaux = document.querySelector("#tauxiliar")
	var texto = document.querySelector("#texto1")
	// alert("45")
	var opera = document.getElementById("operacao").value
	if (opera != 0){
		switch(opera){
			case "+":
			var total = somar()
			break

			case "-":
			var total = subtrair()
			break

			case "*":
			var total = multiplicar()
			break

			case "/":
			if(texto.textContent == 0){
				alert("Divisão por Zero")
				var total = document.getElementById("resultado").value
			}else{
			var total = dividir()
			}
			break
		}
		if(sinal ==""){
			textoaux.textContent = total
			document.getElementById("resultado").value = total
			document.getElementById("operacao").value = 0	
			texto.textContent=0
		}else{
			textoaux.textContent = total + "   " + sinal
			document.getElementById("resultado").value = total
		}
	}else{
		if (sinal=="") {
			textoaux.textContent = texto.textContent
			document.getElementById("resultado").value = total
			document.getElementById("operacao").value = 0
			texto.textContent=0
		}else{
			textoaux.textContent = texto.textContent + "   " + sinal
			document.getElementById("resultado").value = texto.textContent
		}
	}

	// document.getElementById("operacao").value = sinal
	// texto.textContent = 0

}

function multiplicar(){
	var texto = document.querySelector("#texto1")
	var num1 = document.getElementById("resultado").value
	var num2 = texto.textContent
	var soma = parseInt(num1) * parseInt(num2)
	return soma
}

function somar(){
	var texto = document.querySelector("#texto1")
	var num1 = document.getElementById("resultado").value
	var num2 = texto.textContent
	var soma = parseInt(num1) + parseInt(num2)
	return soma
}

function subtrair(){
	var texto = document.querySelector("#texto1")
	var num1 = document.getElementById("resultado").value
	var num2 = texto.textContent
	var soma = parseInt(num1) - parseInt(num2)
	return soma
}

function dividir(){
	var texto = document.querySelector("#texto1")
	
	var num1 = document.getElementById("resultado").value
	var num2 = texto.textContent
	var soma = parseInt(num1) / parseInt(num2)
	return soma

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
function botao0(){
	escrever(0)
}
function botaoponto(){
	escrever(".")
}

function cce(){
	var texto =document.querySelector("#texto1")
	var textoaux = document.querySelector("#tauxiliar")
	texto.textContent = 0
	textoaux.textContent = 0
	document.getElementById("resultado").value = 0
	document.getElementById("operacao").value = 0
}
function botaosoma(){
	aux("+")
}
function botaosub(){
	aux("-")
}
function botaodiv(){
	aux("/")
}
function botaomulti(){
	aux("*")
}
function botaoraiz(){
	escrever(".")
}
function botaoporcento(){
	escrever(".")
}
function backspace(){
	var texto =document.querySelector("#texto1")
	if (texto.textContent.length == 1) {
		texto.textContent = 0	
	}else {
		texto.textContent = texto.textContent.substring(0,texto.textContent.length-1) 
	//OUTRA FORMA DE FAZER
	// nome = texto.textContent
	// var nome = nome.substring(0, nome.length-1)
	//texto.textContent = nome
	}
}
function igual(){
	calcular("")
}
