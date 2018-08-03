"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        return (React.createElement("div", null,
            React.createElement(Header_1.default, null),
            React.createElement("div", { className: "jumbotron mt-0" },
                React.createElement("div", null,
                    React.createElement("h2", { className: "" }, "Mensagens Anonimas:"),
                    listaMSGS)),
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row" },
                    React.createElement("input", { type: "text", name: "mensagem", id: "mensagem", ref: this.campoMensagem, className: "form-control col-10" }),
                    React.createElement("button", { onClick: this.enviarMSG, className: "btn btn-danger col-2" }, "Enviar"))),
            React.createElement(Scripts_1.default, null)));
    }
    enviarMSG() {
        const mensagem = this.campoMensagem.current;
        this.io.emit("enviaMSG", mensagem.value);
    }
}
exports.default = Index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLDZDQUE2QztBQUM3QyxpREFBMEM7QUFDMUMsbURBQTRDO0FBTzVDLE1BQXFCLEtBQU0sU0FBUSxLQUFLLENBQUMsYUFBNEI7SUFPbkUsWUFBWSxLQUFLO1FBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBUGY7O1dBRUc7UUFFSyxrQkFBYSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQW9CLENBQUM7UUFxRHBELG1CQUFjLEdBQUcsR0FBeUIsRUFBRTtZQUNsRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUM1Qyw0QkFBSSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFHLFFBQVEsQ0FBTSxDQUN4QyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQztRQXZEQSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsUUFBUSxFQUFFLEVBQUU7WUFDWixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7UUFDRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFdkYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDOUIsSUFBSSxJQUFJLEdBQWEsRUFBRSxDQUFDO1lBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLE1BQU07UUFDWCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEMsT0FBTyxDQUNMO1lBQ0Usb0JBQUMsZ0JBQU0sT0FBRztZQUNWLDZCQUFLLFNBQVMsRUFBQyxnQkFBZ0I7Z0JBQzdCO29CQUNFLDRCQUFJLFNBQVMsRUFBQyxFQUFFLDBCQUF5QjtvQkFDeEMsU0FBUyxDQUNOLENBQ0Y7WUFDTiw2QkFBSyxTQUFTLEVBQUMsV0FBVztnQkFDeEIsNkJBQUssU0FBUyxFQUFDLEtBQUs7b0JBQ2xCLCtCQUNFLElBQUksRUFBQyxNQUFNLEVBQ1gsSUFBSSxFQUFDLFVBQVUsRUFDZixFQUFFLEVBQUMsVUFBVSxFQUNiLEdBQUcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUN2QixTQUFTLEVBQUMscUJBQXFCLEdBQy9CO29CQUNGLGdDQUFRLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxzQkFBc0IsYUFFeEQsQ0FDTCxDQUNGO1lBQ04sb0JBQUMsaUJBQU8sT0FBRyxDQUNQLENBQ1AsQ0FBQztJQUNKLENBQUM7SUFVTyxTQUFTO1FBQ2YsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUEyQixDQUFDO1FBQ2hFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUNGO0FBdEVELHdCQXNFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBzb2NrZXRJTyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgU2NyaXB0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9TY3JpcHRzXCI7XHJcblxyXG5pbnRlcmZhY2UgSUFwcFN0YXRlIHtcclxuICBtZW5zYWdlbnM6IHN0cmluZ1tdO1xyXG4gIG1lbnNhZ2VtOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDx7fSwgSUFwcFN0YXRlPiB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuXHJcbiAgcHJpdmF0ZSBjYW1wb01lbnNhZ2VtID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XHJcbiAgcHJpdmF0ZSBpbzogU29ja2V0SU9DbGllbnQuU29ja2V0O1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtZW5zYWdlbTogXCJcIixcclxuICAgICAgbWVuc2FnZW5zOiBbXSxcclxuICAgIH07XHJcbiAgICB0aGlzLmV4aWJpTWVuc2FnZW5zID0gdGhpcy5leGliaU1lbnNhZ2Vucy5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuZW52aWFyTVNHID0gdGhpcy5lbnZpYXJNU0cuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuaW8gPSBzb2NrZXRJTy5jb25uZWN0KGAke2RvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sfS8vJHtkb2N1bWVudC5sb2NhdGlvbi5ob3N0fWApO1xyXG5cclxuICAgIHRoaXMuaW8ub24oXCJyZWNlYmVNU0dcIiwgKG1zZykgPT4ge1xyXG4gICAgICBsZXQgbXNnczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgbXNncyA9IHRoaXMuc3RhdGUubWVuc2FnZW5zLmNvbmNhdChtc2cpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVuc2FnZW5zOiBtc2dzIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgbGlzdGFNU0dTID0gdGhpcy5leGliaU1lbnNhZ2VucygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb24gbXQtMFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIlwiPk1lbnNhZ2VucyBBbm9uaW1hczo8L2gyPlxyXG4gICAgICAgICAgICB7bGlzdGFNU0dTfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibWVuc2FnZW1cIlxyXG4gICAgICAgICAgICAgIGlkPVwibWVuc2FnZW1cIlxyXG4gICAgICAgICAgICAgIHJlZj17dGhpcy5jYW1wb01lbnNhZ2VtfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtMTBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZW52aWFyTVNHfSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBjb2wtMlwiPlxyXG4gICAgICAgICAgICAgIEVudmlhclxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxTY3JpcHRzIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhpYmlNZW5zYWdlbnMgPSAoKTogSlNYLkVsZW1lbnRbXSB8IHZvaWQgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubWVuc2FnZW5zLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubWVuc2FnZW5zLm1hcCgobWVuc2FnZW0pID0+IChcclxuICAgICAgICA8bGkga2V5PXtNYXRoLnJhbmRvbSgpfT57bWVuc2FnZW19PC9saT5cclxuICAgICAgKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBlbnZpYXJNU0coKSB7XHJcbiAgICBjb25zdCBtZW5zYWdlbSA9IHRoaXMuY2FtcG9NZW5zYWdlbS5jdXJyZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICB0aGlzLmlvLmVtaXQoXCJlbnZpYU1TR1wiLCBtZW5zYWdlbS52YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==