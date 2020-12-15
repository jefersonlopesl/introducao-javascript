var pacientes = document.querySelectorAll(".paciente");
var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;


var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;

var alturaEhValida = true;

if(peso <= 0 || peso >= 1000) {
  console.log("Erro de digitação no peso");
  pesoEhValido = false;
  tdImc.textContent = "Peso invalido";
}

if(altura <= 0 || altura >= 3.0) {
    console.log("Erro de digitação em altura");
    alturaEhValida = false;
    tdImc.textContent = "Altura invalida"
}

if(alturaEhValida && pesoEhValido) {

var imc = peso/ (altura *altura);

tdImc.textContent = imc;

}
