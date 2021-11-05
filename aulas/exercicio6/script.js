var number = document.querySelector('input#number')
var area = document.querySelector('select#areaSelect')
var finish = document.querySelector('input#finishButton')

function add(){
	if (number.value == 0){
		alert("escolha um número de 1 a 100")
	} else {
		area.innerHTML = `Valor ${number.value} foi adicionado`
	}
}