// tipo primitivo
const mensagem = 'Bom dia, Boa noite, Boa tarde'
// conta todos os caractéres dentro desse texto
console.log('essa frase tem', mensagem.length)
console.log(" ")
// verifica se a palavra que você escreve existe na frase
console.log("aparecerá <true> se essa palavra tiver aqui, e <false> se ela não estiver ==>" , mensagem.includes('Bom dia'), "<==")
console.log(" ")
// verifica se o texto começa com o caractér que você escreve
console.log(mensagem.startsWith('b'))
console.log(" ")
// verifica se o texto termina com o caractér que você escreveu
console.log(mensagem.endsWith('e'))
console.log(" ")
// verifica quantos caractéres são precisos para chegar até esse texto
console.log(mensagem.indexOf("Boa"))
console.log(" ")
// troca uma palavra pela outra
console.log(mensagem.replace("Bom", "Belo"))
console.log(" ")
// tira os espaços do início e do fim do texto
console.log(mensagem.trim())
console.log(" ")
// separa o texto a partir de um caractér, como o espaço com o exemplo abaixo
console.log(mensagem.split(' '))