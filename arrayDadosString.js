const dados = [
    { id: 1, nome: 'Adriana', valor: 10 },
    { id: 2, nome: 'Aline', valor: 20 },
    { id: 3, nome: 'Bia', valor: 30 },
    { id: 4, nome: 'Carol', valor: 40 },
    { id: 5, nome: 'Ana', valor: 50 },
];

//const numString = dados.map(item => item.nome)
//const valorTotal = dados.reduce((acc,atual) => acc + atual.valor, 0)
const soNomes = dados.map(dados => dados.nome)
console.log(soNomes.substr(0,1))

