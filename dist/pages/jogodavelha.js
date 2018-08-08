"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const head_1 = require("next/head");
const React = require("react");
const socketIO = require("socket.io-client");
const styled_components_1 = require("styled-components");
const jogodavelha_1 = require("../Helpers/jogodavelha");
class JogoDaVelha extends React.Component {
    /**
     *
     */
    constructor(props) {
        super(props);
        this.campos = () => {
            const botoes = this.state.jogadas.map((jogador, i) => (React.createElement(GridItem
            // tslint:disable-next-line:jsx-no-lambda
            , { 
                // tslint:disable-next-line:jsx-no-lambda
                onClick: (e) => this.jogada(i, e), key: i, id: `btn${i}`, disabled: jogador !== null ? true : false }, jogador)));
            return botoes;
        };
        this.jogada = (i, event) => {
            event.currentTarget.innerText = this.state.vezJogador ? "X" : "O";
            const campoJogado = this.state.jogadas.slice();
            campoJogado[i] = this.state.vezJogador ? "X" : "O";
            jogodavelha_1.verificaVitoria(campoJogado);
            this.setState({ jogadas: campoJogado, vezJogador: !this.state.vezJogador });
            event.currentTarget.disabled = true;
            this.io.emit("fezJogada", campoJogado, !this.state.vezJogador);
        };
        this.state = {
            vezJogador: true,
            mensagem: "",
            jogadas: Array(9).fill(null),
        };
    }
    render() {
        const botoes = this.campos();
        return (React.createElement(React.Fragment, null,
            React.createElement(head_1.default, null,
                React.createElement("title", null, "Jogo da velha")),
            React.createElement("h1", { style: { textAlign: "center" } },
                "Vez do jogador ",
                this.state.vezJogador ? "X" : "O"),
            React.createElement(Wrapper, null,
                React.createElement(GridContainer, null,
                    botoes,
                    React.createElement(BtnReiniciar, { hidden: true }, "Reiniciar")))));
    }
    componentDidMount() {
        this.io = socketIO.connect(`${document.location.protocol}//${document.location.host}`);
        this.io.on("fezJogada", (jogada, vezdeJogar) => {
            this.setState({ jogadas: jogada, vezJogador: vezdeJogar });
        });
    }
}
exports.default = JogoDaVelha;
const GridContainer = styled_components_1.default.div `
  display: inline-grid;
  grid-template-columns: 5rem 5rem 5rem;
  grid-template-rows: 2fr 2fr 2fr;
  background-color: #2196f3;
  padding: 10px;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;
const GridItem = styled_components_1.default.button `
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
  min-height: 5.5rem;
`;
const BtnReiniciar = styled_components_1.default.button ``;
const Wrapper = styled_components_1.default.div `
  display: flex;
  justify-content: center;
`;
//# sourceMappingURL=../../server/dist/pages/jogodavelha.js.map