// velocidade máxxima de até 70
// a cada 5km acima do limite ganha 1 ponto
// Math.floor()
// caso os pontos sejam maiores que 12 = "carteira suspensa"
velocidademaxima(70.1)
function velocidademaxima(velocidade){
        if(velocidade <= 70){
            console.log('Velocidade Permitida')
        } else{
            const pontos = Math.floor((velocidade - 70) / 5 )
            if (pontos >= 12){
                console.log('Carteira Suspensa')
            } else{
                console.log('Pontos - ' , pontos)
            }
        }
}