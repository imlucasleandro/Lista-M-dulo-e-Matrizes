function somar(matriz) {
    let soma = 0
  
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j]
      }
    }

    return soma
  }
  
  module.exports = {
    adicao: somar
  }