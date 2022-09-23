document.getElementById("btn").onclick=function(){
	var operador = document.getElementById("operador").value
	switch (operador){
		case"+":
		soma()
		break;
		case"-":
		diminui();
		break;
		case"/":
		divisao();
		break
		case"*":
		multiplica();
		break
		default:
		document.getElementById('resultado').innerHTML = ("operador invalido") 
		break
	}
}	
