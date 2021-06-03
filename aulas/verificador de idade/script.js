

function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoInserido = document.getElementById('yeartext')
    var resultado = document.getElementById('res')
    var soma = anoAtual - Number(anoInserido.value)

    if (anoInserido.value.length == 0) {
        alert('ERRO! Corrija os dados inseridos')
    } else if (soma >= 100) {
        alert(`ATENÇÃO!!! A pessoa mais velha do mundo (no momento) é uma mulher de 122 anos. Você inseriu um ano que corresponde a idade de ${soma} anos, você tem certeza que seus dados estão corretos? Clique em "Ok" para continuar`)
    } else if (anoInserido.value > anoAtual) {
        alert(`ERRO! É impossível saber se a máquina do tempo já foi inventada mas acredito que você não tenha nascido no ano de ${anoInserido.value}`)
    } else {
        var sexo = document.getElementsByName("sex")
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            if (soma >= 0 && soma <= 2) {
                genero = "bebê menino"
                resultado.innerHTML = `Idade calculada. Você é um ${genero} com ${soma} anos`
                var imagem = document.createElement('img')
                img.setAttribute('id', 'foto')
            } else if (soma >= 3 && soma <= 11) {
                resultado.innerHTML = `Idade calculada. Você é uma criança com ${soma} anos`
                imagem.setAttribute('src' , './images/babyboy.jpg')             

                
            } else if (soma >= 12 && soma <= 19) {
                resultado.innerHTML = `Idade calculada. Você é um adolescente de ${soma} anos`
            } else {
                genero = "homem"
                if (soma >= 20 && soma <= 39) {
                    resultado.innerHTML = `Idade calculada. Você é um ${genero} com ${soma} anos`
                } else if (soma >= 40 && soma <= 65) {
                    resultado.innerHTML = `Idade calculada. Você é um ${genero} com ${soma} anos`
                } else {
                    resultado.innerHTML = `Idade calculada. Você é um ${genero} com ${soma} anos`
                }
            }
        } else if (sexo[1].checked) {
            genero = "mulher"
            resultado.innerHTML = `Idade calculada. Você é uma ${genero} com ${soma} anos`
        }
        resultado.appendChild(img)
    }
}