"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const head_1 = require("next/head");
const React = require("react");
const socketIO = require("socket.io-client");
const Scripts_1 = require("../components/Scripts");
class Index extends React.PureComponent {
    constructor(props) {
        super(props);
        /**
         *
         */
        this.campoMensagem = React.createRef();
        this.exibiMensagens = () => {
            if (this.state.mensagens.length > 0) {
                return this.state.mensagens.map((mensagem) => (React.createElement("p", { key: Math.random(), className: "col-12" }, mensagem)));
            }
        };
        this.enviarMSG = () => {
            const mensagem = this.campoMensagem.current;
            if (mensagem.value.length > 0) {
                this.io.emit("enviaMSG", mensagem.value);
                this.campoMensagem.current.value = "";
            }
        };
        this.ScrollMensagens = () => {
            const ultimamensagem = document.querySelector("p:last-child");
            ultimamensagem.scrollIntoView();
        };
        this.state = {
            mensagem: "",
            mensagens: [],
        };
    }
    componentDidMount() {
        this.io = socketIO.connect(`${document.location.protocol}//${document.location.host}`);
        this.io.on("recebeMSG", (msg) => {
            let msgs = [];
            msgs = this.state.mensagens.concat(msg);
            this.setState({ mensagens: msgs });
        });
    }
    componentDidUpdate() {
        if (this.state.mensagens.length > 0) {
            this.ScrollMensagens();
        }
    }
    render() {
        const listaMSGS = this.exibiMensagens();
        return (React.createElement("body", { style: bodyTelaToda },
            React.createElement(head_1.default, null,
                React.createElement("title", null, "Mensagens")),
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "ml-3 row" },
                    React.createElement("h2", { className: "col-12 text-center text-uppercase", style: { color: "cornsilk" } }, "Mensagens :")),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "card col-12 col-lg-6 offset-lg-3 rounded", style: AreaMensagem },
                        React.createElement("div", { className: "card-body", id: "txtAreaMensagem" },
                            "",
                            listaMSGS)))),
            React.createElement("div", { className: "container mt-3" },
                React.createElement("div", { className: "row offset-lg-4 mx-1" },
                    React.createElement("input", { type: "text", name: "mensagem", id: "mensagem", ref: this.campoMensagem, className: "form-control col-8 col-lg-5 offset-3" }),
                    React.createElement("button", { onClick: this.enviarMSG, className: "btn btn-danger col-lg-1 col-4" }, "Enviar"))),
            React.createElement(Scripts_1.default, null)));
    }
}
exports.default = Index;
const bodyTelaToda = {
    height: "-webkit-fill-available",
    backgroundImage: "url(static/imgs/background.jpg)",
    backgroundRepeat: "repeat",
};
const AreaMensagem = {
    paddingBottom: "1rem",
    overflowY: "auto",
    overflowX: "hidden",
    height: "20rem",
    backgroundColor: "cornsilk",
};
//# sourceMappingURL=../../server/dist/pages/index.js.map