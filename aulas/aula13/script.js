let num = [5, 8, 4]
num[3] = 6 // na posição 3 vai adicionar o número seis
num.push(7) //criar na última posição mais um elemento e adicionar o sete

console.log(`our vector is ${num}`);
console.log(``);
// num.length a extensão do vetor
console.log(`the vector has ${num.length} positions`);
console.log(``);

console.log(`the first element of our vector is ${num[0]}`);
console.log(``);

num.sort() //colocar em ordem crescente
console.log(`in order our vector is ${num}`);
console.log(``);

for (var i = 0; i < num.length; i++) {
	console.log(`the position ${i} has the value ${num[i]}`);
} //percurso pra exibição de vetor

console.log("usando FOR IN:")

for (var i in num){
	console.log(`the position ${i} has the value ${num[i]}`)
}

//num.indexOf(7) --> busca o valor e retorna a chave onde se encontra

var where = num.indexOf(7);
console.log(`the value 7 is on ${where} position;`) //qual a posição do valor 7?