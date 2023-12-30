// criar um método para ler propriedade de um objeto e
// exibir somente as strings
const filme = {
    titulo : 'vingadores',
    ano: 2018,
}
exibirpropriedade(filme)
function exibirpropriedade(obj){
            for(let prop in obj){
                if(typeof obj[prop] === 'string'){
                    console.log(prop,obj[prop])
                }
            }
}