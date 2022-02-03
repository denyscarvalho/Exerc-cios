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

const Denise = new Cliente ("Denise", "123456789",  "deny@gmail.com", 1000000)
Denise.exibirSaldo()    
console.log(Denise)