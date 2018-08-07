"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const head_1 = require("next/head");
const React = require("react");
const socketIO = require("socket.io-client");
const styled_components_1 = require("styled-components");
class JogoDaVelha extends React.Component {
    /**
     *
     */
    constructor(props) {
        super(props);
        this.campos = () => {
            const botoes = this.state.jogadas.map((jogador, i) => (
            // tslint:disable-next-line:jsx-no-lambda
            React.createElement(GridItem, { onClick: (e) => this.jogada(i, e), key: i, id: `btn${i}` },
                jogador,
                " ")));
            return botoes;
        };
        this.jogada = (i, event) => {
            event.currentTarget.innerText = this.state.vezJogador ? "X" : "O";
            const jogadas = this.state.jogadas.slice();
            jogadas[i] = this.state.vezJogador ? "X" : "O";
            this.setState({ vezJogador: !this.state.vezJogador });
            event.currentTarget.disabled = true;
            this.io.emit("fezJogada", jogadas, this.state.vezJogador);
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
                React.createElement(GridContainer, null, botoes))));
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
`;
const Wrapper = styled_components_1.default.div `
  display: flex;
  justify-content: center;
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9nb2RhdmVsaGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvcGFnZXMvam9nb2RhdmVsaGEudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQTZCO0FBQzdCLCtCQUErQjtBQUMvQiw2Q0FBNkM7QUFDN0MseURBQXVDO0FBUXZDLE1BQXFCLFdBQVksU0FBUSxLQUFLLENBQUMsU0FHOUM7SUFHQzs7T0FFRztJQUVILFlBQVksS0FBSztRQUNmLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQW1DUCxXQUFNLEdBQUcsR0FBa0IsRUFBRTtZQUNuQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNwRCx5Q0FBeUM7WUFDekMsb0JBQUMsUUFBUSxJQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQy9ELE9BQU87b0JBQ0MsQ0FDWixDQUFDLENBQUM7WUFFSCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUM7UUFFTSxXQUFNLEdBQUcsQ0FBQyxDQUFTLEVBQUUsS0FBMEMsRUFBRSxFQUFFO1lBQ3pFLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNsRSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBRS9DLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDdEQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBRXBDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUM7UUF0REEsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFFBQVEsRUFBRSxFQUFFO1lBQ1osT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQzdCLENBQUM7SUFDSixDQUFDO0lBRU0sTUFBTTtRQUNYLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QixPQUFPLENBQ0wsb0JBQUMsS0FBSyxDQUFDLFFBQVE7WUFDYixvQkFBQyxjQUFJO2dCQUNILG1EQUE0QixDQUN2QjtZQUNQLDRCQUFJLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUU7O2dCQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQzlDO1lBQ0wsb0JBQUMsT0FBTztnQkFDTixvQkFBQyxhQUFhLFFBQUUsTUFBTSxDQUFpQixDQUMvQixDQUNLLENBQ2xCLENBQUM7SUFDSixDQUFDO0lBRU0saUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FDeEIsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUMzRCxDQUFDO1FBRUYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBZ0IsRUFBRSxVQUFtQixFQUFFLEVBQUU7WUFDaEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBdUJGO0FBbkVELDhCQW1FQztBQUVELE1BQU0sYUFBYSxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFBOzs7Ozs7OztDQVEvQixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUcsMkJBQU0sQ0FBQyxNQUFNLENBQUE7Ozs7OztDQU03QixDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQUE7OztDQUd6QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgc29ja2V0SU8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUpvZ29EYVZlbGhhU3RhdGUge1xyXG4gIHZlekpvZ2Fkb3I6IGJvb2xlYW47XHJcbiAgbWVuc2FnZW06IHN0cmluZztcclxuICBqb2dhZGFzOiBzdHJpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm9nb0RhVmVsaGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XHJcbiAge30sXHJcbiAgSUpvZ29EYVZlbGhhU3RhdGVcclxuPiB7XHJcbiAgcHJpdmF0ZSBpbzogU29ja2V0SU9DbGllbnQuU29ja2V0O1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdmV6Sm9nYWRvcjogdHJ1ZSxcclxuICAgICAgbWVuc2FnZW06IFwiXCIsXHJcbiAgICAgIGpvZ2FkYXM6IEFycmF5KDkpLmZpbGwobnVsbCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGJvdG9lcyA9IHRoaXMuY2FtcG9zKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+Sm9nbyBkYSB2ZWxoYTwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxoMSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICBWZXogZG8gam9nYWRvciB7dGhpcy5zdGF0ZS52ZXpKb2dhZG9yID8gXCJYXCIgOiBcIk9cIn1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgICAgPEdyaWRDb250YWluZXI+e2JvdG9lc308L0dyaWRDb250YWluZXI+XHJcbiAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuaW8gPSBzb2NrZXRJTy5jb25uZWN0KFxyXG4gICAgICBgJHtkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbH0vLyR7ZG9jdW1lbnQubG9jYXRpb24uaG9zdH1gXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuaW8ub24oXCJmZXpKb2dhZGFcIiwgKGpvZ2FkYTogc3RyaW5nW10sIHZlemRlSm9nYXI6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGpvZ2FkYXM6IGpvZ2FkYSwgdmV6Sm9nYWRvcjogdmV6ZGVKb2dhciB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYW1wb3MgPSAoKTogSlNYLkVsZW1lbnRbXSA9PiB7XHJcbiAgICBjb25zdCBib3RvZXMgPSB0aGlzLnN0YXRlLmpvZ2FkYXMubWFwKChqb2dhZG9yLCBpKSA9PiAoXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpqc3gtbm8tbGFtYmRhXHJcbiAgICAgIDxHcmlkSXRlbSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5qb2dhZGEoaSwgZSl9IGtleT17aX0gaWQ9e2BidG4ke2l9YH0+XHJcbiAgICAgICAge2pvZ2Fkb3J9IHsvKiAvLyBYIG91IE8gKi99XHJcbiAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICApKTtcclxuXHJcbiAgICByZXR1cm4gYm90b2VzO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgam9nYWRhID0gKGk6IG51bWJlciwgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dCA9IHRoaXMuc3RhdGUudmV6Sm9nYWRvciA/IFwiWFwiIDogXCJPXCI7XHJcbiAgICBjb25zdCBqb2dhZGFzID0gdGhpcy5zdGF0ZS5qb2dhZGFzLnNsaWNlKCk7XHJcbiAgICBqb2dhZGFzW2ldID0gdGhpcy5zdGF0ZS52ZXpKb2dhZG9yID8gXCJYXCIgOiBcIk9cIjtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmV6Sm9nYWRvcjogIXRoaXMuc3RhdGUudmV6Sm9nYWRvciB9KTtcclxuICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuaW8uZW1pdChcImZlekpvZ2FkYVwiLCBqb2dhZGFzLCB0aGlzLnN0YXRlLnZlekpvZ2Fkb3IpO1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNXJlbSA1cmVtIDVyZW07XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMmZyIDJmcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xyXG4gIGdyaWQtcm93LWdhcDogMXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IEdyaWRJdGVtID0gc3R5bGVkLmJ1dHRvbmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG4iXX0=