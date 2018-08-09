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
        this.io = socketIO.connect(`${document.location.protocol}//${document.location.host}`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9nb2RhdmVsaGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvcGFnZXMvam9nb2RhdmVsaGEudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQTZCO0FBQzdCLCtCQUErQjtBQUMvQiw2Q0FBNkM7QUFDN0MseURBQXVDO0FBQ3ZDLHdEQUF5RDtBQVF6RCxNQUFxQixXQUFZLFNBQVEsS0FBSyxDQUFDLFNBRzlDO0lBR0M7O09BRUc7SUFFSCxZQUFZLEtBQUs7UUFDZixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFnRFAsV0FBTSxHQUFHLEdBQWtCLEVBQUU7WUFDbkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDcEQsb0JBQUMsUUFBUTtZQUNQLHlDQUF5Qzs7Z0JBQXpDLHlDQUF5QztnQkFDekMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDakMsR0FBRyxFQUFFLENBQUMsRUFDTixFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFDYixRQUFRLEVBQUUsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQ3hDLE9BQU8sQ0FHQyxDQUNaLENBQUMsQ0FBQztZQUVILE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQztRQUVNLFdBQU0sR0FBRyxDQUFDLENBQVMsRUFBRSxLQUEwQyxFQUFFLEVBQUU7WUFDekUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsS0FBSyxFQUFFLEVBQUU7Z0JBQzlCLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFH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UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBcUNPLGdCQUFnQixDQUFDLGFBQXVCO1FBQzlDLE1BQU0sUUFBUSxHQUFrQiw2QkFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9ELElBQUksUUFBUSxLQUFLLEVBQUUsRUFBRTtZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLDJCQUEyQixRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDO0NBU0Y7QUE1R0QsOEJBNEdDO0FBRUQsTUFBTSxhQUFhLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQUE7Ozs7Ozs7O0NBUS9CLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRywyQkFBTSxDQUFDLE1BQU0sQ0FBQTs7Ozs7OztDQU83QixDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQUcsMkJBQU0sQ0FBQyxNQUFNLENBQUEsRUFBRSxDQUFDO0FBRXJDLE1BQU0sT0FBTyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFBOzs7Q0FHekIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIHNvY2tldElPIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHZlcmlmaWNhVml0b3JpYSB9IGZyb20gXCIuLi9IZWxwZXJzL2pvZ29kYXZlbGhhXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElKb2dvRGFWZWxoYVN0YXRlIHtcclxuICB2ZXpKb2dhZG9yOiBib29sZWFuO1xyXG4gIG1lbnNhZ2VtOiBzdHJpbmc7XHJcbiAgam9nYWRhczogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpvZ29EYVZlbGhhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxyXG4gIHt9LFxyXG4gIElKb2dvRGFWZWxoYVN0YXRlXHJcbj4ge1xyXG4gIHByaXZhdGUgaW86IFNvY2tldElPQ2xpZW50LlNvY2tldDtcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHZlekpvZ2Fkb3I6IHRydWUsXHJcbiAgICAgIG1lbnNhZ2VtOiBcIlwiLFxyXG4gICAgICBqb2dhZGFzOiBBcnJheSg5KS5maWxsKG51bGwpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBib3RvZXMgPSB0aGlzLmNhbXBvcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPkpvZ28gZGEgdmVsaGE8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUubWVuc2FnZW0gIT09IFwiXCJcclxuICAgICAgICAgICAgPyAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6anN4LW5vLW11bHRpbGluZS1qc1xyXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUubWVuc2FnZW1cclxuICAgICAgICAgICAgOiBgVmV6IGRvIGpvZ2Fkb3IgJHt0aGlzLnN0YXRlLnZlekpvZ2Fkb3IgPyBcIlhcIiA6IFwiT1wifWB9XHJcbiAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgICA8R3JpZENvbnRhaW5lcj5cclxuICAgICAgICAgICAge2JvdG9lc31cclxuXHJcbiAgICAgICAgICAgIDxCdG5SZWluaWNpYXJcclxuICAgICAgICAgICAgICBoaWRkZW49e3RoaXMuc3RhdGUubWVuc2FnZW0gIT09IFwiXCIgPyBmYWxzZSA6IHRydWV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5SZWluaWNpYXJKb2dvfT5cclxuICAgICAgICAgICAgICBSZWluaWNpYXJcclxuICAgICAgICAgICAgPC9CdG5SZWluaWNpYXI+XHJcbiAgICAgICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuaW8gPSBzb2NrZXRJTy5jb25uZWN0KFxyXG4gICAgICBgJHtkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbH0vLyR7ZG9jdW1lbnQubG9jYXRpb24uaG9zdH1gXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuaW8ub24oXCJmZXpKb2dhZGFcIiwgKGpvZ2FkYTogc3RyaW5nW10sIHZlemRlSm9nYXI6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGpvZ2FkYXM6IGpvZ2FkYSwgdmV6Sm9nYWRvcjogdmV6ZGVKb2dhciB9KTtcclxuICAgICAgdGhpcy52ZXJpZmljYVZlY2VuZG9yKHRoaXMuc3RhdGUuam9nYWRhcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FtcG9zID0gKCk6IEpTWC5FbGVtZW50W10gPT4ge1xyXG4gICAgY29uc3QgYm90b2VzID0gdGhpcy5zdGF0ZS5qb2dhZGFzLm1hcCgoam9nYWRvciwgaSkgPT4gKFxyXG4gICAgICA8R3JpZEl0ZW1cclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6anN4LW5vLWxhbWJkYVxyXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmpvZ2FkYShpLCBlKX1cclxuICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgaWQ9e2BidG4ke2l9YH1cclxuICAgICAgICBkaXNhYmxlZD17am9nYWRvciAhPT0gbnVsbCA/IHRydWUgOiBmYWxzZX0+XHJcbiAgICAgICAge2pvZ2Fkb3J9XHJcblxyXG4gICAgICAgIHsvKiAvLyBYIG91IE8gKi99XHJcbiAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICApKTtcclxuXHJcbiAgICByZXR1cm4gYm90b2VzO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgam9nYWRhID0gKGk6IG51bWJlciwgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tZW5zYWdlbSA9PT0gXCJcIikge1xyXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dCA9IHRoaXMuc3RhdGUudmV6Sm9nYWRvciA/IFwiWFwiIDogXCJPXCI7XHJcbiAgICAgIGNvbnN0IGNhbXBvSm9nYWRvID0gdGhpcy5zdGF0ZS5qb2dhZGFzLnNsaWNlKCk7XHJcbiAgICAgIGNhbXBvSm9nYWRvW2ldID0gdGhpcy5zdGF0ZS52ZXpKb2dhZG9yID8gXCJYXCIgOiBcIk9cIjtcclxuXHJcbiAgICAgIHRoaXMudmVyaWZpY2FWZWNlbmRvcihjYW1wb0pvZ2Fkbyk7XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBqb2dhZGFzOiBjYW1wb0pvZ2FkbyxcclxuICAgICAgICB2ZXpKb2dhZG9yOiAhdGhpcy5zdGF0ZS52ZXpKb2dhZG9yLFxyXG4gICAgICB9KTtcclxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmlvLmVtaXQoXCJmZXpKb2dhZGFcIiwgY2FtcG9Kb2dhZG8sICF0aGlzLnN0YXRlLnZlekpvZ2Fkb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdmVyaWZpY2FWZWNlbmRvcihjYW1wb3NKb2dhZG9zOiBzdHJpbmdbXSkge1xyXG4gICAgY29uc3QgdmVuY2Vkb3I6IHN0cmluZyB8IG51bGwgPSB2ZXJpZmljYVZpdG9yaWEoY2FtcG9zSm9nYWRvcyk7XHJcbiAgICBpZiAodmVuY2Vkb3IgIT09IFwiXCIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnNhZ2VtOiBgTyB2ZW5jZWRvciDDqSBvIGpvZ2Fkb3I6ICR7dmVuY2Vkb3J9YCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgUmVpbmljaWFySm9nbyA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICB2ZXpKb2dhZG9yOiB0cnVlLFxyXG4gICAgICBtZW5zYWdlbTogXCJcIixcclxuICAgICAgam9nYWRhczogQXJyYXkoOSkuZmlsbChudWxsKSxcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNXJlbSA1cmVtIDVyZW07XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMmZyIDJmcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xyXG4gIGdyaWQtcm93LWdhcDogMXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IEdyaWRJdGVtID0gc3R5bGVkLmJ1dHRvbmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogNS41cmVtO1xyXG5gO1xyXG5cclxuY29uc3QgQnRuUmVpbmljaWFyID0gc3R5bGVkLmJ1dHRvbmBgO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuIl19