// Objeto com as seguintes propriedades?
// Rua
// Cidade
// CEP
// criar função para mostrar as propriedade do objeto como
// exibirPropriedade(endereco)
const endereco1 = {
        Rua: 60,
        Cidade: 'Goiânia',
        CEP: 121221.000
}
function exibirEndereco(endereco2){
        for (let chave in endereco1){
            console.log(chave,endereco1[chave])
        }
}
exibirEndereco(endereco1)