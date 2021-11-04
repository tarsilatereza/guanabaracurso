function parimpar(n){
	if (n%2 == 0){
		return "par"
	} else {
		return "impar"
	}
}

console.log(parimpar(5))

function soma (a, b){
	return a + b
}

console.log(soma(1, 2));

// if the a or b is not define:

function somaIndefinida (x = 0, y = 0){  //já começa sendo 0
	return x + y
}

console.log(somaIndefinida(7)) // só foi passado um parâmetro, portanto: 7 + 0 = 7


//COLOCAR FUNÇÃO EM UMA VARIÁVEL

var z = function(w){
	return 2*w
} 
console.log(z(5))