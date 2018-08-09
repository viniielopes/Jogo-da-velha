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
            if (this.state.mensagem === "") {
                event.currentTarget.innerText = this.state.vezJogador ? "X" : "O";
                const campoJogado = this.state.jogadas.slice();
                campoJogado[i] = this.state.vezJogador ? "X" : "O";
                this.verificaVecendor(campoJogado);
                this.setState({
                    jogadas: campoJogado,
                    vezJogador: !this.state.vezJogador,
                });
                event.currentTarget.disabled = true;
                this.io.emit("fezJogada", campoJogado, !this.state.vezJogador);
            }
        };
        this.ReiniciarJogo = () => {
            this.setState({
                vezJogador: true,
                mensagem: "",
                jogadas: Array(9).fill(null),
            });
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
            React.createElement("h1", { style: { textAlign: "center" } }, this.state.mensagem !== ""
                ? // tslint:disable-next-line:jsx-no-multiline-js
                    this.state.mensagem
                : `Vez do jogador ${this.state.vezJogador ? "X" : "O"}`),
            React.createElement(Wrapper, null,
                React.createElement(GridContainer, null,
                    botoes,
                    React.createElement(BtnReiniciar, { hidden: this.state.mensagem !== "" ? false : true, onClick: this.ReiniciarJogo }, "Reiniciar")))));
    }
    componentDidMount() {
        this.io = socketIO.connect(`${location.protocol}//${location.host}${location.pathname}`);
        this.io.on("fezJogada", (jogada, vezdeJogar) => {
            this.setState({ jogadas: jogada, vezJogador: vezdeJogar });
            this.verificaVecendor(this.state.jogadas);
        });
    }
    verificaVecendor(camposJogados) {
        const vencedor = jogodavelha_1.verificaVitoria(camposJogados);
        if (vencedor !== "") {
            this.setState({ mensagem: `O vencedor é o jogador: ${vencedor}` });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9nb2RhdmVsaGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvcGFnZXMvam9nb2RhdmVsaGEudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQTZCO0FBQzdCLCtCQUErQjtBQUMvQiw2Q0FBNkM7QUFDN0MseURBQXVDO0FBQ3ZDLHdEQUF5RDtBQVF6RCxNQUFxQixXQUFZLFNBQVEsS0FBSyxDQUFDLFNBRzlDO0lBR0M7O09BRUc7SUFFSCxZQUFZLEtBQUs7UUFDZixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFnRFAsV0FBTSxHQUFHLEdBQWtCLEVBQUU7WUFDbkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDcEQsb0JBQUMsUUFBUTtZQUNQLHlDQUF5Qzs7Z0JBQXpDLHlDQUF5QztnQkFDekMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDakMsR0FBRyxFQUFFLENBQUMsRUFDTixFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFDYixRQUFRLEVBQUUsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQ3hDLE9BQU8sQ0FHQyxDQUNaLENBQUMsQ0FBQztZQUVILE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQztRQUVNLFdBQU0sR0FBRyxDQUFDLENBQVMsRUFBRSxLQUEwQyxFQUFFLEVBQUU7WUFDekUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsS0FBSyxFQUFFLEVBQUU7Z0JBQzlCLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFH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UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBcUNPLGdCQUFnQixDQUFDLGFBQXVCO1FBQzlDLE1BQU0sUUFBUSxHQUFrQiw2QkFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9ELElBQUksUUFBUSxLQUFLLEVBQUUsRUFBRTtZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLDJCQUEyQixRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDO0NBU0Y7QUE1R0QsOEJBNEdDO0FBRUQsTUFBTSxhQUFhLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQUE7Ozs7Ozs7O0NBUS9CLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRywyQkFBTSxDQUFDLE1BQU0sQ0FBQTs7Ozs7OztDQU83QixDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQUcsMkJBQU0sQ0FBQyxNQUFNLENBQUEsRUFBRSxDQUFDO0FBRXJDLE1BQU0sT0FBTyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFBOzs7Q0FHekIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIHNvY2tldElPIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHZlcmlmaWNhVml0b3JpYSB9IGZyb20gXCIuLi9IZWxwZXJzL2pvZ29kYXZlbGhhXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElKb2dvRGFWZWxoYVN0YXRlIHtcclxuICB2ZXpKb2dhZG9yOiBib29sZWFuO1xyXG4gIG1lbnNhZ2VtOiBzdHJpbmc7XHJcbiAgam9nYWRhczogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpvZ29EYVZlbGhhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxyXG4gIHt9LFxyXG4gIElKb2dvRGFWZWxoYVN0YXRlXHJcbj4ge1xyXG4gIHByaXZhdGUgaW86IFNvY2tldElPQ2xpZW50LlNvY2tldDtcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHZlekpvZ2Fkb3I6IHRydWUsXHJcbiAgICAgIG1lbnNhZ2VtOiBcIlwiLFxyXG4gICAgICBqb2dhZGFzOiBBcnJheSg5KS5maWxsKG51bGwpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBib3RvZXMgPSB0aGlzLmNhbXBvcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPkpvZ28gZGEgdmVsaGE8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUubWVuc2FnZW0gIT09IFwiXCJcclxuICAgICAgICAgICAgPyAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6anN4LW5vLW11bHRpbGluZS1qc1xyXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUubWVuc2FnZW1cclxuICAgICAgICAgICAgOiBgVmV6IGRvIGpvZ2Fkb3IgJHt0aGlzLnN0YXRlLnZlekpvZ2Fkb3IgPyBcIlhcIiA6IFwiT1wifWB9XHJcbiAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgICA8R3JpZENvbnRhaW5lcj5cclxuICAgICAgICAgICAge2JvdG9lc31cclxuXHJcbiAgICAgICAgICAgIDxCdG5SZWluaWNpYXJcclxuICAgICAgICAgICAgICBoaWRkZW49e3RoaXMuc3RhdGUubWVuc2FnZW0gIT09IFwiXCIgPyBmYWxzZSA6IHRydWV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5SZWluaWNpYXJKb2dvfT5cclxuICAgICAgICAgICAgICBSZWluaWNpYXJcclxuICAgICAgICAgICAgPC9CdG5SZWluaWNpYXI+XHJcbiAgICAgICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuaW8gPSBzb2NrZXRJTy5jb25uZWN0KFxyXG4gICAgICBgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdH0ke2xvY2F0aW9uLnBhdGhuYW1lfWBcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5pby5vbihcImZlekpvZ2FkYVwiLCAoam9nYWRhOiBzdHJpbmdbXSwgdmV6ZGVKb2dhcjogYm9vbGVhbikgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgam9nYWRhczogam9nYWRhLCB2ZXpKb2dhZG9yOiB2ZXpkZUpvZ2FyIH0pO1xyXG4gICAgICB0aGlzLnZlcmlmaWNhVmVjZW5kb3IodGhpcy5zdGF0ZS5qb2dhZGFzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYW1wb3MgPSAoKTogSlNYLkVsZW1lbnRbXSA9PiB7XHJcbiAgICBjb25zdCBib3RvZXMgPSB0aGlzLnN0YXRlLmpvZ2FkYXMubWFwKChqb2dhZG9yLCBpKSA9PiAoXHJcbiAgICAgIDxHcmlkSXRlbVxyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpqc3gtbm8tbGFtYmRhXHJcbiAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMuam9nYWRhKGksIGUpfVxyXG4gICAgICAgIGtleT17aX1cclxuICAgICAgICBpZD17YGJ0biR7aX1gfVxyXG4gICAgICAgIGRpc2FibGVkPXtqb2dhZG9yICE9PSBudWxsID8gdHJ1ZSA6IGZhbHNlfT5cclxuICAgICAgICB7am9nYWRvcn1cclxuXHJcbiAgICAgICAgey8qIC8vIFggb3UgTyAqL31cclxuICAgICAgPC9HcmlkSXRlbT5cclxuICAgICkpO1xyXG5cclxuICAgIHJldHVybiBib3RvZXM7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBqb2dhZGEgPSAoaTogbnVtYmVyLCBldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLm1lbnNhZ2VtID09PSBcIlwiKSB7XHJcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0ID0gdGhpcy5zdGF0ZS52ZXpKb2dhZG9yID8gXCJYXCIgOiBcIk9cIjtcclxuICAgICAgY29uc3QgY2FtcG9Kb2dhZG8gPSB0aGlzLnN0YXRlLmpvZ2FkYXMuc2xpY2UoKTtcclxuICAgICAgY2FtcG9Kb2dhZG9baV0gPSB0aGlzLnN0YXRlLnZlekpvZ2Fkb3IgPyBcIlhcIiA6IFwiT1wiO1xyXG5cclxuICAgICAgdGhpcy52ZXJpZmljYVZlY2VuZG9yKGNhbXBvSm9nYWRvKTtcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGpvZ2FkYXM6IGNhbXBvSm9nYWRvLFxyXG4gICAgICAgIHZlekpvZ2Fkb3I6ICF0aGlzLnN0YXRlLnZlekpvZ2Fkb3IsXHJcbiAgICAgIH0pO1xyXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuaW8uZW1pdChcImZlekpvZ2FkYVwiLCBjYW1wb0pvZ2FkbywgIXRoaXMuc3RhdGUudmV6Sm9nYWRvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSB2ZXJpZmljYVZlY2VuZG9yKGNhbXBvc0pvZ2Fkb3M6IHN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCB2ZW5jZWRvcjogc3RyaW5nIHwgbnVsbCA9IHZlcmlmaWNhVml0b3JpYShjYW1wb3NKb2dhZG9zKTtcclxuICAgIGlmICh2ZW5jZWRvciAhPT0gXCJcIikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVuc2FnZW06IGBPIHZlbmNlZG9yIMOpIG8gam9nYWRvcjogJHt2ZW5jZWRvcn1gIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBSZWluaWNpYXJKb2dvID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHZlekpvZ2Fkb3I6IHRydWUsXHJcbiAgICAgIG1lbnNhZ2VtOiBcIlwiLFxyXG4gICAgICBqb2dhZGFzOiBBcnJheSg5KS5maWxsKG51bGwpLFxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1cmVtIDVyZW0gNXJlbTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAyZnIgMmZyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBncmlkLWNvbHVtbi1nYXA6IDFyZW07XHJcbiAgZ3JpZC1yb3ctZ2FwOiAxcmVtO1xyXG5gO1xyXG5cclxuY29uc3QgR3JpZEl0ZW0gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiA1LjVyZW07XHJcbmA7XHJcblxyXG5jb25zdCBCdG5SZWluaWNpYXIgPSBzdHlsZWQuYnV0dG9uYGA7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG4iXX0=