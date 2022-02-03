const nomes = ["Aline" , "Ana", "Rui", "Bia"]
const notas = ["7", "4", "9", "3"]

const reprovados = nomes.filter((aluno,indice) => notas[indice] < 5)

console.log (`Reprovados: ${reprovados}`)
