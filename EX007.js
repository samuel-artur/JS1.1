function conta(){
  console.log('clicou')
let passo = document.getElementById('passo2')
let fim = document.getElementById('fim2')
let inicio = document.getElementById('inicio')
let res = document.getElementById('resu')

if (passo.value.length == 0 || inicio.value.length == 0 || fim.value.length == 0){
 window.alert('[ERROR]número inválido')
res.innerHTML += 'IMPOSSÍVEL CONTAR!! reinicie e repreencha os dados novamente'
}else{
  res.innerHTML = `Contando: `;
  let ini = Number(inicio.value)
  let fim = Number(fim.value)
  let pas = Number(passo.value)
  if(ini <= 0 ){
    console.log('PASSO INVÁLIDO!! considerando passo 1')
  }
 }if(ini < fim){
      // contagem
  for(var c=ini; c<= fim;c+=pas){
    res.innerHTML += `\u{1F449}`
  }
}else{
      // contagem regressiva
  for(var c = ini; c>= fim; c-=pas){

  }
}

{
  }
} res.innerHTML += `🏳️`