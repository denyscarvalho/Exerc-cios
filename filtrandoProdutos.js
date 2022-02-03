const produtos = [
    { id: 1, categoria: 'limpeza', name: 'Amaciante' },
    { id: 2, categoria: 'limpeza', name: 'Detergente' },
    { id: 3, categoria: 'alimento', name: 'ovo' },
    { id: 4, categoria: 'alimento', name: 'alface' },
  ]

  //const infoProdutos = produtos.map(produtos => `Categoria: ${produtos.categoria} Nome: ${produtos.name}`)
  //console.log(infoProdutos)

  const limpeza = produtos.filter(produtos => produtos.categoria === "limpeza")
  console.log(limpeza)

  