function calcular(matriz) {
    let soma = 0
    let total = 0

    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j]
        total++
      }
    }
  
    const media = soma / total
  
    return media
  }
  
  module.exports = {
    calcular: calcular
  }