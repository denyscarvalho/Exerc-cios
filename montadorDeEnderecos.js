let enderecos = 
[{
    Rua: "Do Sertao",
    Cidade: "Salvador",
    Estado: "BA",
    Cep: "40718620", 
   
    
}, 
{
    Rua: "Amazonia",
    Cidade: "Aracaju",
    Estado: "SE",
    Cep: "41236587", 
   
}]
const dadosRua = enderecos.map(enderecos => `${enderecos.Rua}`);
console.log(dadosRua);

/*function exibirEndereco(enderecos)  {

    for(let chave in enderecos)
    console.log(chave, enderecos[chave]);


} 
exibirEndereco(enderecos)*/

