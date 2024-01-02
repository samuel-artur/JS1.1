// obter a média a partir de um array(vetor)
// 0-59 = F
// 60-69 = D
// 70-79 = C
// 80-89 = B
// 90-100 = A
const array = [80]

console.log(mediadoaluno(array))

function mediadoaluno(notas){
    const media = calcular(notas)
        if(media >= 0 && media <= 59){
            console.log('F')
        } else if(media >= 60 && media <= 69){
            console.log('D')
        } else if(media >= 70 && media <= 79){
            console.log('C')
        } else if(media >= 80 && media <= 89){
            console.log('B')
        } else if(media >= 90 && media <= 100){
            console.log('A')
        }
}
function calcular(array){
    let soma = 0
    for (let valor of array){
        soma += valor
    } return soma/(array.length)
}