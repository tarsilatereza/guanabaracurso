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



if  (start.value < 0){
        alert("VALOR INVÁLIDO. USE VALORES MAIORES QUE 0");
    } else if ( passoValue > endValue - startValue){
        alert("ERRO, VOCÊ NÃO PODE DAR UM PASSO MAIOR QUE A PERNA")
    } else {
    
        while (startValue <= endValue){
            startValue + passoValue
            resultado.innerHTML = `teste ${startValue}`
        }
    }
    
}