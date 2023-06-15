function somarColunas(matriz) {
    const numColunas = matriz[0].length
    const somaColunas = []
  
    for (let j = 0; j < numColunas; j++) {
      somaColunas[j] = 0
    }
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < numColunas; j++) {
        somaColunas[j] += matriz[i][j]
      }
    }
    return somaColunas;
  }
  
    module.exports = somarColunas;
  