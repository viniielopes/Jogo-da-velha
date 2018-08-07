import Head from "next/head";
import * as React from "react";
import styled from "styled-components";

export interface IJogoDaVelhaState {
  vezJogador: boolean;
}

export default class JogoDaVelha extends React.Component<
  {},
  IJogoDaVelhaState
> {
  /**
   *
   */

  constructor(props) {
    super(props);
    this.state = {
      vezJogador: true,
    };
  }
  public render() {
    const botoes = this.campos();
    return (
      <React.Fragment>
        <Head>
          <title>Jogo da velha</title>
        </Head>
        <GridContainer>{botoes}</GridContainer>
      </React.Fragment>
    );
  }

  private campos = (): JSX.Element[] => {
    const qtdBotoes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const botoes = qtdBotoes.map((numero) => (
      <GridItem onClick={this.jogada} key={numero}>
        {numero}
      </GridItem>
    ));

    return botoes;
  };

  private jogada = () => {
    alert("OI");
  };
}

const GridContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 5rem 5rem 5rem;
  background-color: #2196f3;
  padding: 10px;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

const GridItem = styled.button`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
`;
