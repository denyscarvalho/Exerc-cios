function cliente (nome,cpf,telefone,email,saldo){
    this.nome=nome;
    this.cpf=cpf;
    this.telefone=telefone;
    this.email=email;
    this.saldo=saldo;
    this.depositar =function (valor)
    {
        this.saldo +=valor
    }
}

const Denise = new cliente("Denise", "123456789", "71991062019", "deny@gmail.com", 1000000)

console.log(Denise)