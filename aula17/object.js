let amigo = {
    nome:'jose',
    sexo:'m',
    peso:80,
    engordar(p=0){
        console.log('engordou '+p+' kg')
        this.peso+=2
    }
}