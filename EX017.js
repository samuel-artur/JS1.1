//criar uma função para exibir a quantidade de *
// que aquela linha possui
asteriscos(5)
function asteriscos(linhas){
        for(let linha = 1; linha <= linhas; linha++){
            let padrao = ''
            for(let i = 0; i <= linha; i++){
                padrao += '*'
            }
            console.log(padrao)
        }
}