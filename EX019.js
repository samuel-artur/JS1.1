// clonando objetos
const celular = {
        marca: 'Samsung',
        bateria: 500,
        armazenamento: 64
}
const NovoObjeto = Object.assign({
        tamanhoTela: {
            vertical: 155,
            horizontal: 55
        }
}, celular)
console.log(NovoObjeto)
// mostrar o objeto clonado