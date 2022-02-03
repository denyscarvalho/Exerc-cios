const produtos = [{
    name: 'TV',
    price: 100
  }, {
    name: 'Monitor',
    price: 150
  }, {
    name: 'SSD',
    price: 300
  }];

  //const productsDiscount = Object.keys(products).map(key => products[key]['price'] *= 0.9);
       
    //const nomeprodutos = produtos.map(produtos => `${produtos.name}`)
 

//const valorTotal = produtos.reduce((acum, valor) => acum + valor.price, 0 );
  //console.log (`O valor total dos produtos é: ${valorTotal}`)
    const prodDesconto = produtos.map(produtos => produtos.price*0.9)

    console.log (`O preço com desconto é: ${prodDesconto}`)

