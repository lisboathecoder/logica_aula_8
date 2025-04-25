let jogos = ["CS2", "Minecraft", "GTA 5"];

let quantidadeJogos = jogos.length;

let jogoFavorito = jogos[0];

for (i = 0; i < quantidadeJogos; i++) {
  if (jogoFavorito === jogos[i]) {
    console.log(
      `O jogo ${jogos[i]} está em ${
        i + 1
      }º lugar no ranking, e é o meu jogo favorito!`
    );
  }
}
console.log(`-----------------------`);
console.log(`O ranking completo é:`);
console.log(`-----------------------`);
console.log(`${jogos[0]} em ${i - 2}º lugar no ranking`);
console.log(`${jogos[1]} em ${i - 1}º lugar no ranking`);
console.log(`${jogos[2]} em ${i}º lugar no ranking`);
