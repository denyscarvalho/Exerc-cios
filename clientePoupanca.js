function Cliente (nome,cpf,email,saldo){
    this.nome=nome;
    this.cpf=cpf;
    this.email=email;
    this.saldo=saldo;
    this.depositar =function (valor)
    {
        this.saldo +=valor
    }
}

function cliPoupanca (nome,cpf,email,saldo, saldoPoup)
{

    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup  = saldoPoup
}

const deni = new cliPoupanca ("Denise", "123456789",  "deny@gmail.com", 1000000, 50000)

console.log(deni)

cliPoupanca.prototype.depositarPoup = function (valor){
    this.saldoPoup += valor
}

deni.depositarPoup(550000)

console.log(deni.saldoPoup)