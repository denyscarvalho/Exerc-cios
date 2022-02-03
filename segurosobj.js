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
}, 
{nome: "Luna",
  Parestesco: "Filha", 
  DataNasc: "02/11/2005" }],

saldo:100, depositar:function(valor){
 this.saldo += valor
}
 
}

function oferecerSeguro(obj){
  const propsCliente = Object.keys(obj);
  if(propsCliente.includes("dependentes"))
  {
      console.log(`${obj.nome}: Você tem uma oferta de seguro liberada`);
  }
}

//console.log(Object.keys(cliente)) 
//console.log(Object.values(cliente))
oferecerSeguro(cliente)