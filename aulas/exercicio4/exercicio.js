// EXERCÍCIO https://www.cursoemvideo.com/course/javascript/aulas/repeticoes-em-javascript/modulos/exercicios-javascript-parte-4/



function contar() {

    
var start = document.getElementById('start');
var end = document.getElementById('end');
var passo = document.getElementById('passo');
var button = document.getElementById('botao');
var resultado = document.getElementById('result');



var startValue = Number(start.value)
var endValue = Number(end.value)
var passoValue = Number(passo.value)

var total = endValue - startValue



if  (startValue.lenght == 0 || endValue.lenght == 0 || passoValue.lenght == 0){
        alert("ERRO! PREENCHA TODOS OS CAMPOS");
    } else {
        resultado.innerHTML = `Contando `
    	for (var c = startValue; c <= endValue; c += passoValue) {
    		resultado.innerHTML += `${c} \u{1F643} `
    	}
    }
    
}