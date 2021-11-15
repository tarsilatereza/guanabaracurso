function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    var atributo = document.getElementById('imagem')
    var alinhamento = document.querySelector('div#msg')
    
    if (hora > 18) {
        msg.innerHTML = `Agora são ${hora} horas, boa noite.`

        img.src = "./images/night.png"
        atributo.style.width = '70%'
        atributo.style.height = 'auto'

    } else if (hora > 12) {
        msg.innerHTML = `Agora são ${hora} horas, boa tarde`

        img.src = "./images/afternoon.png"
        atributo.style.width = '70%'
        atributo.style.height = 'auto'

    } else if (hora > 5) {
        msg.innerHTML = `Agora são ${hora} horas, bom dia`

        img.src = "./images/morning.png"
        atributo.style.width = 'auto'
        atributo.style.height = '333px'

    } else {
        msg.innerHTML = `Agora são ${hora} horas, boa madrugada. Vai dormir maluco`
        img.src = "./images/dawn.png"

        atributo.style.width = '70%'
        atributo.style.height = 'auto'
    }

}


