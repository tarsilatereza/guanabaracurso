var number = document.querySelector('input#number')
var area = document.querySelector('select#areaSelect')
var resultado = document.getElementById('resultado')
var num = []
var verific = num.indexOf(number.value)
function add(){
	if (number.value < 1 || number.value > 100) {
		alert("ERRO!!! Escolha número de 1 a 100")
	} else if (num.indexOf(number.value) === -1 ) {
		num.push(number.value);
		console.log(num);
 		var selectOption = document.createElement('option')
 		var option = document.getElementsByName('option')
 		selectOption.text += `Valor ${number.value} adicionado`
		area.appendChild(selectOption)
	} else {
		alert(`ERRO!!! O valor ${number.value} já foi adicionado.`)
	}
}
function result(){
	var size = num.length - 1
	num.sort()
	resultado.innerHTML = `Ao todo, temos ${num.length} números cadastrados` + '<br>'
	console.log(num[size])
	resultado.innerHTML += `O maior valor dessa lista é ${num[size]}` + '<br>'
	resultado.innerHTML += `O menor valor dessa lista é ${num[0]}` + '<br>'
	var soma = 0
		for (i = 0; i < num.length; i++ ){
			soma += Number(num[i])		
		}
	resultado.innerHTML += `Somando todos os valores, temos ${soma}` + '<br>'
	var media = soma / num.length
	resultado.innerHTML += `A média dos valores digitados é ${media}`	
}
