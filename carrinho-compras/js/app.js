
let totalGeral = 0;
function adicionar() {
    let listaProdutos = document.querySelector("#lista-produtos");
    let QTitems = parseInt(document.querySelector("#quantidade").value);
    let produto = document.querySelector("#produto").value;
    let totalValorProdutos = document.querySelector("#valor-total");
    let NomeProduto = produto.split("-")[0];
    let ValorProduto = parseInt(produto.split("R$")[1]);
  
    if (isNaN(QTitems) || QTitems <= 0) {
      alert("Selecione a quantidade e o produto!");
    } else {
      let novoItem = document.createElement("li");
      novoItem.innerHTML = ` <span class="texto-azul">${QTitems}x </span>${NomeProduto}<span class="texto-azul"> ${ValorProduto}</span> `;
      listaProdutos.appendChild(novoItem);
  
      let valorItem = QTitems * ValorProduto;
    
    totalGeral = totalGeral +valorItem
  
      totalValorProdutos.textContent = `R$${totalGeral}`;
    }
  }
  function limpar(){
    let listaProdutos = document.querySelector("#lista-produtos");
    listaProdutos.innerHTML=''
    let totalValorProdutos = document.querySelector("#valor-total");
    totalValorProdutos.textContent='R$0'
    parseInt(document.querySelector("#quantidade").value=0)
  
   
  }
  