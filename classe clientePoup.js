class Cliente {

    constructor (nome,cpf,email,saldo){
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo;
    }

     depositar(valor){
         this.saldo += valor;
     }
      exibirSaldo() {
          console.log(this.saldo)
      }
}

class ClientePoup extends Cliente {
    constructor (nome,cpf,email,saldo, saldoPoup) {
        super(nome,cpf,email,saldo)
        this.saldoPoup = saldoPoup
    }
    depositarPoupanca(valor)
    {
        this.saldoPoup += valor
    }
}

const Denise = new ClientePoup ("Denise", "123456789",  "deny@gmail.com", 1000000, 500000)

console.log(Denise)