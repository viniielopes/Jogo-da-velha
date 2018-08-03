"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = require("next/link");
const React = require("react");
const socketIO = require("socket.io-client");
const Header_1 = require("../components/Header");
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
                return this.state.mensagens.map((mensagem) => (React.createElement("li", { key: Math.random() }, mensagem)));
            }
        };
        this.state = {
            mensagem: "",
            mensagens: [],
        };
        this.exibiMensagens = this.exibiMensagens.bind(this);
        this.enviarMSG = this.enviarMSG.bind(this);
    }
    componentDidMount() {
        this.io = socketIO.connect(`${document.location.protocol}//${document.location.host}`);
        this.io.on("recebeMSG", (msg) => {
            let msgs = [];
            msgs = this.state.mensagens.concat(msg);
            this.setState({ mensagens: msgs });
        });
    }
    render() {
        const listaMSGS = this.exibiMensagens();
        return (React.createElement("html", null,
            React.createElement(Header_1.default, null),
            React.createElement("body", { style: bodyTelaToda },
                React.createElement("div", { className: "ml-3" },
                    React.createElement("div", null,
                        React.createElement("h2", null, "Mensagens Anonimas:"),
                        listaMSGS)),
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("input", { type: "text", name: "mensagem", id: "mensagem", ref: this.campoMensagem, className: "form-control col-10" }),
                        React.createElement(link_1.default, { prefetch: true, href: "/mensagens" },
                            React.createElement("a", null, "Home")),
                        React.createElement("button", { onClick: this.enviarMSG, className: "btn btn-danger col-2" }, "Enviar"))),
                React.createElement(Scripts_1.default, null))));
    }
    enviarMSG() {
        const mensagem = this.campoMensagem.current;
        this.io.emit("enviaMSG", mensagem.value);
    }
}
exports.default = Index;
const fixBottom = {
    bottom: 0,
    left: 0,
    right: 0,
    position: "fixed",
    zIndex: 1030,
};
const bodyTelaToda = {
    height: "-webkit-fill-available",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQTZCO0FBQzdCLCtCQUErQjtBQUMvQiw2Q0FBNkM7QUFDN0MsaURBQTBDO0FBQzFDLG1EQUE0QztBQU81QyxNQUFxQixLQUFNLFNBQVEsS0FBSyxDQUFDLGFBQTRCO0lBT25FLFlBQVksS0FBSztRQUNmLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQVBmOztXQUVHO1FBRUssa0JBQWEsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFvQixDQUFDO1FBNkRwRCxtQkFBYyxHQUFHLEdBQXlCLEVBQUU7WUFDbEQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FDNUMsNEJBQUksR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBRyxRQUFRLENBQU0sQ0FDeEMsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUM7UUEvREEsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFFBQVEsRUFBRSxFQUFFO1lBQ1osU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBQ0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUN4QixHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQzNELENBQUM7UUFFRixJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUM5QixJQUFJLElBQUksR0FBYSxFQUFFLENBQUM7WUFDeEIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sTUFBTTtRQUNYLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QyxPQUFPLENBQ0w7WUFDRSxvQkFBQyxnQkFBTSxPQUFHO1lBQ1YsOEJBQU0sS0FBSyxFQUFFLFlBQVk7Z0JBQ3ZCLDZCQUFLLFNBQVMsRUFBQyxNQUFNO29CQUNuQjt3QkFDRSxzREFBNEI7d0JBQzNCLFNBQVMsQ0FDTixDQUNGO2dCQUNOLDZCQUFLLFNBQVMsRUFBQyxXQUFXO29CQUN4Qiw2QkFBSyxTQUFTLEVBQUMsS0FBSzt3QkFDbEIsK0JBQ0UsSUFBSSxFQUFDLE1BQU0sRUFDWCxJQUFJLEVBQUMsVUFBVSxFQUNmLEVBQUUsRUFBQyxVQUFVLEVBQ2IsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQ3ZCLFNBQVMsRUFBQyxxQkFBcUIsR0FDL0I7d0JBRUYsb0JBQUMsY0FBSSxJQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLFlBQVk7NEJBQ3JDLHNDQUFXLENBQ047d0JBQ1AsZ0NBQVEsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLHNCQUFzQixhQUV4RCxDQUNMLENBQ0Y7Z0JBQ04sb0JBQUMsaUJBQU8sT0FBRyxDQUNOLENBQ0YsQ0FDUixDQUFDO0lBQ0osQ0FBQztJQVVPLFNBQVM7UUFDZixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQTJCLENBQUM7UUFDaEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0Y7QUE5RUQsd0JBOEVDO0FBRUQsTUFBTSxTQUFTLEdBQUc7SUFDaEIsTUFBTSxFQUFFLENBQUM7SUFDVCxJQUFJLEVBQUUsQ0FBQztJQUNQLEtBQUssRUFBRSxDQUFDO0lBQ1IsUUFBUSxFQUFFLE9BQU87SUFDakIsTUFBTSxFQUFFLElBQUk7Q0FDYixDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQUc7SUFDbkIsTUFBTSxFQUFFLHdCQUF3QjtDQUNqQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgc29ja2V0SU8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IFNjcmlwdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2NyaXB0c1wiO1xyXG5cclxuaW50ZXJmYWNlIElBcHBTdGF0ZSB7XHJcbiAgbWVuc2FnZW5zOiBzdHJpbmdbXTtcclxuICBtZW5zYWdlbTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8e30sIElBcHBTdGF0ZT4ge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcblxyXG4gIHByaXZhdGUgY2FtcG9NZW5zYWdlbSA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpO1xyXG4gIHByaXZhdGUgaW86IFNvY2tldElPQ2xpZW50LlNvY2tldDtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbWVuc2FnZW06IFwiXCIsXHJcbiAgICAgIG1lbnNhZ2VuczogW10sXHJcbiAgICB9O1xyXG4gICAgdGhpcy5leGliaU1lbnNhZ2VucyA9IHRoaXMuZXhpYmlNZW5zYWdlbnMuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmVudmlhck1TRyA9IHRoaXMuZW52aWFyTVNHLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmlvID0gc29ja2V0SU8uY29ubmVjdChcclxuICAgICAgYCR7ZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2x9Ly8ke2RvY3VtZW50LmxvY2F0aW9uLmhvc3R9YFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmlvLm9uKFwicmVjZWJlTVNHXCIsIChtc2cpID0+IHtcclxuICAgICAgbGV0IG1zZ3M6IHN0cmluZ1tdID0gW107XHJcbiAgICAgIG1zZ3MgPSB0aGlzLnN0YXRlLm1lbnNhZ2Vucy5jb25jYXQobXNnKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnNhZ2VuczogbXNncyB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGxpc3RhTVNHUyA9IHRoaXMuZXhpYmlNZW5zYWdlbnMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxodG1sPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8Ym9keSBzdHlsZT17Ym9keVRlbGFUb2RhfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtM1wiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMj5NZW5zYWdlbnMgQW5vbmltYXM6PC9oMj5cclxuICAgICAgICAgICAgICB7bGlzdGFNU0dTfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJtZW5zYWdlbVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cIm1lbnNhZ2VtXCJcclxuICAgICAgICAgICAgICAgIHJlZj17dGhpcy5jYW1wb01lbnNhZ2VtfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC0xMFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2g9e3RydWV9IGhyZWY9XCIvbWVuc2FnZW5zXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZW52aWFyTVNHfSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBjb2wtMlwiPlxyXG4gICAgICAgICAgICAgICAgRW52aWFyXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8U2NyaXB0cyAvPlxyXG4gICAgICAgIDwvYm9keT5cclxuICAgICAgPC9odG1sPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhpYmlNZW5zYWdlbnMgPSAoKTogSlNYLkVsZW1lbnRbXSB8IHZvaWQgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubWVuc2FnZW5zLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubWVuc2FnZW5zLm1hcCgobWVuc2FnZW0pID0+IChcclxuICAgICAgICA8bGkga2V5PXtNYXRoLnJhbmRvbSgpfT57bWVuc2FnZW19PC9saT5cclxuICAgICAgKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBlbnZpYXJNU0coKSB7XHJcbiAgICBjb25zdCBtZW5zYWdlbSA9IHRoaXMuY2FtcG9NZW5zYWdlbS5jdXJyZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICB0aGlzLmlvLmVtaXQoXCJlbnZpYU1TR1wiLCBtZW5zYWdlbS52YWx1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBmaXhCb3R0b20gPSB7XHJcbiAgYm90dG9tOiAwLFxyXG4gIGxlZnQ6IDAsXHJcbiAgcmlnaHQ6IDAsXHJcbiAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICB6SW5kZXg6IDEwMzAsXHJcbn07XHJcblxyXG5jb25zdCBib2R5VGVsYVRvZGEgPSB7XHJcbiAgaGVpZ2h0OiBcIi13ZWJraXQtZmlsbC1hdmFpbGFibGVcIixcclxufTtcclxuIl19