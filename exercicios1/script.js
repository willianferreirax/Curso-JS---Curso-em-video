function carregar(){
    var data = new Date()
    var agora = data.getHours()

    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    msg.innerHTML = `Agora são ${agora} horas`

    if(agora <12){
        
        imagem.src="images/morning.jpg"
    }
    else if(agora >12 && agora < 18){
    
        imagem.src="images/afternoon.jpg"
    }
    else{
        
        imagem.src="images/night.jpg"
    }
}