var agora = new Date()
var diaSem = agora.getDay()

/*

o getDay retorna um numero correspondente ao dia

0- Domingo
1- segunda
2- terça
3- quarta
4- quinta
5- sexta
6- sabado

*/

switch(diaSem){

    case 0 :
        console.log('Hoje é Domingo')
        break;
    
    case 1 :
        console.log('Hoje é Segunda')
        break;

    case 2 :
        console.log('Hoje é Terça')
        break;

    case 3 :
        console.log('Hoje é Quarta')
        break;

    case 4 :
        console.log('Hoje é Quinta')
        break;

    case 5 :
        console.log('Hoje é Sexta')
        break;

    case 6 :
        console.log('Hoje é Sabado')
        break;
    
    default :
        console.log("Dia inválido")
        break;
}