const soma = (a,b) => a + b

const subtrair = (a,b) => a - b

const imposto = x => x * 0.20

const precoProduto  = 1300

const desconto = 130 

let precoFinal = subtrair(soma(precoProduto, imposto(precoProduto)), desconto) 
console.log(Precofinal)