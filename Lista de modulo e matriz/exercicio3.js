const somarColunas = require('./exercicio3modulo')

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

const somaColunas = somarColunas(matriz)

for (let j = 0; j < somaColunas.length; j++) {
  console.log('Soma da coluna', j, ':', somaColunas[j])
}

  