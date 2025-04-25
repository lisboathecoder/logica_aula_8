let itens = ["Item 1", "Item 2", "Item 3", "Item 4"];
quantidadeItens = itens.length

for (let i = 0; i < quantidadeItens; i++) {

    console.log(itens.reverse()[i]);
    itens.reverse();
}