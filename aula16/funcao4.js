function fatorial(n){
    let result = n
    for(var i = n-1;i>0;i-- ){
        result *=i
    }
    return result
}
console.log(fatorial(5))