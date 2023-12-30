const agora = new Date()
const hora = agora.getHours()
console.log(`agora são ${hora} horas.`)
if (hora < 12){
        console.log('bom dia')
}else if(hora <= 13 ){
    console.log('boa tarde')
}else{
    console.log("boa noite")
}