let idades = [20, 10, 18, 13, 19, 22, 23, 25, 70, 11];
quantidadeIdades = idades.length;

for (i = 0; i < quantidadeIdades; i++) {
  if (idades[i] >= 18) {
    console.log(`Você tem ${idades[i]} anos, portanto é maior de idade`);
  }
}
