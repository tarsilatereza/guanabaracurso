
function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
     
    if(hora > 18) {
     msg.innerHTML = `Agora são ${hora} horas, boa noite.`  
       
     img.src = 'night.jpg'   

    } else if (hora > 12){
        msg.innerHTML = `Agora são ${hora} horas, boa tarde`
      
        img.src = 'afternoon.jpg'

    } else if (hora > 5){
        msg.innerHTML = `Agora são ${hora} horas, bom dia`
        
        img.src = 'morning.jpg'
        
    } else{
        msg.innerHTML = `Agora são ${hora} horas, boa madrugada. Vai dormir maluco`
    }

}
