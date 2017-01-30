// console.log("Olá mundo");

// peso / altura + altura;

/*var peso = 73;
var altura = 0;
var diferenteDeZero  = (altura !=0);

var imc = peso / (altura + altura);


if (diferenteDeZero) {
var imc = peso / (altura + altura);
console.log(imc);	
} else {
	// alert("a Altura não pode ser igual a zero.");
	console.log("Erro: Altura igual a zero.")
}

console.log(imc);
console.log(diferenteDeZero);
*/

var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");
var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
if(altura !=0){
	var imc = peso / (altura * 2);
	console.log(imc);
	document.getElementById("imc-2").textContent = imc;
}else{
	alert("Altura não pode ser zero");
}

// A aspas pode ser opcional 
var paciente = {
	nome : 	 document.getElementById("nome").textContent,
	peso : 	 document.getElementById("peso-2").textContent,
	altura : document.getElementById("altura-2").textContent 
};

if(paciente.peso !=0){
	
	console.log(	paciente.peso / (paciente.altura *2));
	console.log(	paciente["peso"] / (paciente["altura"] *2));
}
console.log(paciente.peso, paciente.altura, paciente.nome);

