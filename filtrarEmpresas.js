const empresas = [
    { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];

//const anoEmpresas = empresas.filter(empresas =>  empresas.anoDeCriacao > 2000);


const nomeCeo = empresas.map(empresas => `${empresas.nome} CEO: ${empresas.CEO}` ) //Retorna nome e Ceo das empresas

//const totalEmpresas = empresas.reduce((acum, valor) => acum + valor.valorDeMercado ,0)
console.log(nomeCeo)

