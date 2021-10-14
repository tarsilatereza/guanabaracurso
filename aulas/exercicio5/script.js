function gerar() {
    let number = document.getElementById('number')
    let button = document.querySelector('input#button')
    var res = document.querySelector('div#result')
    


    if (number.value.length == 0) {
        alert("ERRO. PREENCHA O CAMPO")

    } else {
        for (var x = 1; x <= 10; x++) {
                res.innerHTML += `${x*number.value}`
        }
    }
}