import Head from "next/head";
import * as React from "react";
import * as socketIO from "socket.io-client";
import styled from "styled-components";

export interface IJogoDaVelhaState {
  vezJogador: boolean;
  mensagem: string;
  jogadas: string[];
}

export default class JogoDaVelha extends React.Component<
  {},
  IJogoDaVelhaState
> {
  private io: SocketIOClient.Socket;

  /**
   *
   */

  constructor(props) {
    super(props);
    this.state = {
      vezJogador: true,
      mensagem: "",
      jogadas: Array(9).fill(null),
    };
  }

  public render() {
    const botoes = this.campos();
    return (
      <React.Fragment>
        <Head>
          <title>Jogo da velha</title>
        </Head>
        <h1 style={{ textAlign: "center" }}>
          Vez do jogador {this.state.vezJogador ? "X" : "O"}
        </h1>
        <Wrapper>
          <GridContainer>{botoes}</GridContainer>
        </Wrapper>
      </React.Fragment>
    );
  }

  public componentDidMount() {
    this.io = socketIO.connect(
      `${document.location.protocol}//${document.location.host}`
    );

    this.io.on("fezJogada", (jogada: string[], vezdeJogar: boolean) => {
      this.setState({ jogadas: jogada, vezJogador: vezdeJogar });
    });
  }

  private campos = (): JSX.Element[] => {
    const botoes = this.state.jogadas.map((jogador, i) => (
      // tslint:disable-next-line:jsx-no-lambda
      <GridItem onClick={(e) => this.jogada(i, e)} key={i} id={`btn${i}`}>
        {jogador} {/* // X ou O */}
      </GridItem>
    ));

    return botoes;
  };

  private jogada = (i: number, event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.innerText = this.state.vezJogador ? "X" : "O";
    const jogadas = this.state.jogadas.slice();
    jogadas[i] = this.state.vezJogador ? "X" : "O";

    this.setState({ vezJogador: !this.state.vezJogador });
    event.currentTarget.disabled = true;

    this.io.emit("fezJogada", jogadas, this.state.vezJogador);
  };
}

const GridContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 5rem 5rem 5rem;
  grid-template-rows: 2fr 2fr 2fr;
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
