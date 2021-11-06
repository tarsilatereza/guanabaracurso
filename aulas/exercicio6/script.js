var number = document.querySelector('input#number')
var area = document.querySelector('select#areaSelect')
var finish = document.querySelector('input#finishButton')


function add(){
	if (number.value < 1 || number.value > 100){
		alert("escolha um número de 1 a 100")
	} else {
		var selectOption = document.createElement('option')
		var option = document.getElementsByName('option')
		selectOption.text += `Número ${number.value} adicionado`
		area.appendChild(selectOption)

	}

}

function result(){
	if (number.value < 1 || number.value > 100){
		alert("escolha pelo menos um número de 1 a 100")
	} else {
		let result = document.getElementById('resultado')
		
		// var list = option.value
		// alert(list)
	}
}