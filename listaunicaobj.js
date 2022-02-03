const cliente = [
    {   
    nome: "Denise",
    idade : 36,
    email : "deny.soares@gmail.com",
    cpf : "123456789",
    fones : ["7133984126", "71991062019"],
dependentes : [{
  Nome: "Gabriel Carvalho",
  Parentesco: 'Filho',
  DataNas: '29/09/2007'
}, 
{nome: "Luna",
  Parestesco: "Filha", 
  DataNasc: "02/11/2005" }],
},
{
    nome: "Lazaro",
    cpf : "987654321",
    dependentes : [{
  Nome: "Lazaro Junior",
  Parentesco: 'Filho',
  DataNas: '02/11/2007'
}],
}
]

const listaDependentes = [...cliente[0].dependentes,...cliente[1].dependentes]
console.table(listaDependentes)



