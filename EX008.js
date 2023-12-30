let num2 = [0, 1 , 2]
const num1 = document.getElementById('#n1')
let valores = []
  function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
  }
  function inLista(n, l){
    if(indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
  }

function analisar() {
     if(isNumero(num.value) && inLista(num.value)) {
     
    }else{
        window.alert(`Valor <strong>INVÁLIDO</strong> ou já <strong>ENCONTRADO</strong> na lista`)
     }
}