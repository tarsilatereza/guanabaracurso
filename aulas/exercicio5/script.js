    var res = document.querySelector('div#result');

    function gerar() {
        var number = document.getElementById('number');
        let button = document.querySelector('input#button');



        if (number.value.length == 0) {
            alert("ERRO. PREENCHA O CAMPO");

        } else {
            for (var x = 1; x <= 10; x++) {
                let multi = x*number.value;
                res.innerHTML += `${x} * ${number.value} = ${multi}` + '<br>';
            }
        }
    }

    function clearBox (){

        location.reload();

    /* ou
    res.innerHTML = "" pra só limpar o resultado*/

}