var agora = new Date()
var hora = agora.getHours()

console.log(`agora são exatamento ${hora} horas`) 
if(hora <12){
  console.log('Bom dia')
}
else if( hora >12 && hora < 18){
 console.log('Boa tarde')
}
else{
    console.log("boa noite")
}