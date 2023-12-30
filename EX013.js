// receber uma quantidade de números para avaliar
// a função exibre quais números são pares ou ímpares
exibirtipo(10)
function exibirtipo(limite){
    for(let a = 1; a <= limite; a++){
        if(a % 2 === 0){
            console.log(a , 'Par')
        } else{
            console.log(a , 'ímpar')
        }
    }
}