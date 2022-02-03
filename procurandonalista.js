const alunos = ["Leo", "Ju", "Beto", "Carol"]

const mediaAlunos = ["7", "4", "9", "3" , "10"]

let listaDeNotasAlunos =   [alunos, mediaAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasAlunos[0].includes(nomeDoAluno  )) {

        let indice = listaDeNotasAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasAlunos[0][indice] + " A sua média é: " + listaDeNotasAlunos[1][indice]
    }else {
        return "Aluno não está na lista"
    }
}
console.log(exibeNomeNota("Beto"))