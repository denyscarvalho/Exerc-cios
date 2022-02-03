const cliente = {
    nome: "Denise",
    idade : 36,
    email : "deny.soares@gmail.com",
    cpf : "123456789",
    fones : ["7133984126", "71991062019"],
dependentes : [{
  Nome: "Gabriel Carvalho",
  Parentesco: 'Filho',
  DataNas: '29/09/2007'
}]
}
cliente.dependentes.push ({
  nome: "Luna",
  Parestesco: "Filha", 
  DataNasc: "02/11/2005"

})

const filhoMaisNovo= cliente.dependentes.filter(dependente=>dependente.DataNas=== '29/09/2007')

console.log(filhoMaisNovo[0].Nome)