const saldoPartidas = (vitorias, derrotas) => {
  return vitorias - derrotas;
};

const tabelaClassificacao = [
  {
    limitePontos: 0,
    classe: "Ferro",
  },
  {
    limitePontos: 10,
    classe: "Bronze",
  },
  {
    limitePontos: 20,
    classe: "Prata",
  },
  {
    limitePontos: 50,
    classe: "Ouro",
  },
  {
    limitePontos: 80,
    classe: "Diamante",
  },
  {
    limitePontos: 90,
    classe: "Lendário",
  },
  {
    limitePontos: 100,
    classe: "Imortal",
  },
];

let i = tabelaClassificacao.length - 1;

function classificarSaldoPartidas(saldo, tabela) {
  if (saldo < 0) {
    return `O herói possui ${Math.abs(saldo)} derrotas e pertence a classe ${
      tabela[0].classe
    }`;
  } else if (saldo === 0) {
    return `O herói possui ${saldo} vitórias e pertence a classe ${tabela[0].classe}`;
  } else {
    while (i >= 0) {
      switch (saldo > tabela[i].limitePontos) {
        case true:
          return `O herói possui ${saldo} vitórias e pertence a classe ${tabela[i].classe}`;
          break;
        case false:
          i--;

        default:
          break;
      }
    }
  }
}

console.log(
  classificarSaldoPartidas(saldoPartidas(31, 31), tabelaClassificacao)
);
