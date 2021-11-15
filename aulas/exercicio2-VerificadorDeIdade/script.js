

function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoInserido = document.getElementById('yeartext')
    var resultado = document.getElementById('res')
    var soma = anoAtual - Number(anoInserido.value)

    if (anoInserido.value.length == 0) {
        alert('ERRO! Corrija os dados inseridos')
    } else if (soma > 122) {
        alert(`ATENÇÃO!!! A pessoa mais velha do mundo (no momento) é uma mulher de 122 anos. Você inseriu um ano que corresponde a idade de ${soma} anos, você tem certeza que seus dados estão corretos? Se sim, onde fica a fonte da juventude? Se não, reveja seus dados.`)
    } else if (anoInserido.value > anoAtual) {
        alert(`ERRO! É impossível saber se a máquina do tempo já foi inventada mas acredito que você não tenha nascido no ano de ${anoInserido.value}. Reveja seus dados.`)
    } else {
        var sexo = document.getElementsByName("sex")
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        resultado.style.padding = '5%'
        imagem.style.width = '70%'
        imagem.style.padding = '10%'
        imagem.style.borderRadius = '70px';

        if (sexo[0].checked) {
            if (soma >= 0 && soma <= 2) {
                genero = "bebê menino"
                if (soma < 2) {
                    resultado.innerHTML = `Idade calculada. Você é um ${genero} com ${soma} ano`
                } else {
                    resultado.innerHTML = `Idade calculada. Você é um ${genero} com ${soma} anos`
                }
                imagem.setAttribute('src', './images/babyboy.jpg')
            } else if (soma >= 3 && soma <= 11) {
                resultado.innerHTML = `Idade calculada. Você é uma criança com ${soma} anos`
                imagem.setAttribute('src', './images/littleboy.jpg')

            } else if (soma >= 12 && soma <= 19) {
                resultado.innerHTML = `Idade calculada. Você é um adolescente de ${soma} anos`
                imagem.setAttribute('src', './images/teenagerboy.jpg')
            } else {
                genero = "homem"
                if (soma >= 20 && soma <= 39) {
                    resultado.innerHTML = `Idade calculada. Você é um ${genero} com ${soma} anos`
                    imagem.setAttribute('src', './images/youngman.jpg')
                } else if (soma >= 40 && soma <= 65) {
                    resultado.innerHTML = `Idade calculada. Você é um ${genero} com ${soma} anos`
                    imagem.setAttribute('src', './images/middleman.jpg')
                } else {
                    resultado.innerHTML = `Idade calculada. Você é um ${genero} com ${soma} anos`
                    imagem.setAttribute('src', './images/oldman.jpg')

                }
            }
        } else if (sexo[1].checked) {
            if (soma >= 0 && soma <= 2) {
                if (soma < 2) {
                    resultado.innerHTML = `Idade calculada. Você é uma bebê menina com ${soma} ano`
                } else {
                    resultado.innerHTML = `Idade calculada. Você é uma bebê menina com ${soma} anos`
                }
                imagem.setAttribute('src', './images/babygirl.jpg')

            } else if (soma >= 3 && soma <= 11) {
                resultado.innerHTML = `Idade claculada. Você é uma criança com ${soma} anos`
                imagem.setAttribute('src', './images/littlegirl.jpg')
            } else if (soma >= 12 && soma <= 19) {
                resultado.innerHTML = `Idade calculada. Você é uma adolescente com ${soma} anos`
                imagem.setAttribute('src', './images/teenagergirl.jpg')
            } else {
                genero = 'mulher'
                if (soma >= 20 && soma <= 39) {
                    resultado.innerHTML = `Idade calculada. Você é uma ${genero} de ${soma} anos`
                    imagem.setAttribute('src', './images/youngwoman.jpg')
                } else if (soma >= 40 && soma <= 65) {
                    resultado.innerHTML = `Idade calculada. Você é uma ${genero} de ${soma} anos`
                    imagem.setAttribute('src', './images/middlewoman.jpg')
                } else {
                    resultado.innerHTML = `Idade calculada. Você é uma ${genero} de ${soma} anos`
                    imagem.setAttribute('src', './images/oldwoman.jpg')
                }
            }

        }
        resultado.appendChild(imagem)
    }
}