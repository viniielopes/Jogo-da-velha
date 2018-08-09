export const verificaVitoria = (jogadas: string[]): string => {
  // tslint:disable-next-line:prefer-const
  let haVencedor: string = "";

  const condicaoVitoria: number[][] = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  condicaoVitoria.forEach((condicao) => {
    const venceu: boolean =
      jogadas[condicao[0]] !== null &&
      jogadas[condicao[0]] === jogadas[condicao[1]] &&
      jogadas[condicao[0]] === jogadas[condicao[2]];

    if (venceu) {
      haVencedor = jogadas[condicao[0]];
    }
  });

  return haVencedor;
};
