// Divisível por 3 = Fizz
// Divisível por 5 = Buzz
// Divisível por 3 e 5 = FizzBuzz
// Não divisível por 3 e 5 = entrada
// Não é um número = 'Não é um número'
const resultado = Fizzbuzz()
console.log("---> FIM <---")
function Fizzbuzz(entrada){
    if(typeof entrada !== 'number'){
        console.log('isso não é um núumero, reinicie e tente novamente')
    }
    else if (entrada % 3 === 0 && entrada % 5 === 0){
        console.log('FizzBuzz')
    }
    else if(entrada % 3 === 0){
        console.log('Fizz')
    }
    else if(entrada % 5 === 0){
    console.log('Buzz'); 
    }
    else{
        return entrada;
    }
}