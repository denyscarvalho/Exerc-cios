const salaPhyton = [8 , 7.5, 9, 7, 8.5]
const salaJavaScript = [8, 10, 6, 9]
const salaJava = [9,8,10,7,6,5,8 ]


function mediaSala(notasSala) {

    const somaDasNotas = notasSala.reduce((acum,atual)=> acum + atual,0)
    return somaDasNotas/notasSala.length
}

console.log(`A média da sala de Phyton: ${mediaSala(salaPhyton).toFixed(2)}`)
console.log(`A média da sala de JavaScript: ${mediaSala(salaJavaScript).toFixed(2)}`)
console.log(`A média da sala de Java: ${mediaSala(salaJava).toFixed(2)}`)

