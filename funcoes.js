function soma() {
	let num1 = document.getElementById("num1").value
	let num2 = document.getElementById("num2").value
	let resultado = parseInt(num1) + parseInt(num2);
	document.getElementById('resultado').innerHTML = resultado
}
function diminui() {
	let num1 = document.getElementById("num1").value
	let num2 = document.getElementById("num2").value
	let resultado = parseInt(num1) - parseInt(num2);
	document.getElementById('resultado').innerHTML = resultado
	
}
function divisao(){
	let num1 = document.getElementById("num1").value
	let num2 = document.getElementById("num2").value
	let resultado = parseInt(num1) / parseInt(num2);
	document.getElementById('resultado').innerHTML = resultado
}
function multiplica(){
	let num1 = document.getElementById("num1").value
	let num2 = document.getElementById("num2").value
	let resultado = parseInt(num1) * parseInt(num2);
	document.getElementById('resultado').innerHTML = resultado
}