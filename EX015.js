//criar função somar que retorna a
//soma de todos os múltiplos de 3 e 5
// 10 = 3,6,9
// 10 = 5,10
// 3,6,9 + 5,10 = 33
somar(100)
function somar(limite){
        let multiploDe3 = 0
        let multiploDe5 = 0
        for(let i = 0; i <= limite; i++){
                if(i % 3 === 0){
                        multiploDe3 += i
                } else if(i % 5 === 0){
                        multiploDe5 += i
                }
        } console.log(multiploDe3 + multiploDe5)
}