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
        this.io = socketIO.connect("http://localhost:3000/");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLDZDQUE2QztBQUM3QyxpREFBMEM7QUFDMUMsbURBQTRDO0FBTzVDLE1BQXFCLEtBQU0sU0FBUSxLQUFLLENBQUMsYUFBNEI7SUFPbkUsWUFBWSxLQUFLO1FBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBUGY7O1dBRUc7UUFFSyxrQkFBYSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQW9CLENBQUM7UUFxRHBELG1CQUFjLEdBQUcsR0FBeUIsRUFBRTtZQUNsRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUM1Qyw0QkFBSSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFHLFFBQVEsQ0FBTSxDQUN4QyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQztRQXZEQSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsUUFBUSxFQUFFLEVBQUU7WUFDWixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7UUFDRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUM5QixJQUFJLElBQUksR0FBYSxFQUFFLENBQUM7WUFDeEIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sTUFBTTtRQUNYLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QyxPQUFPLENBQ0w7WUFDRSxvQkFBQyxnQkFBTSxPQUFHO1lBQ1YsNkJBQUssU0FBUyxFQUFDLGdCQUFnQjtnQkFDN0I7b0JBQ0UsNEJBQUksU0FBUyxFQUFDLEVBQUUsMEJBQXlCO29CQUN4QyxTQUFTLENBQ04sQ0FDRjtZQUNOLDZCQUFLLFNBQVMsRUFBQyxXQUFXO2dCQUN4Qiw2QkFBSyxTQUFTLEVBQUMsS0FBSztvQkFDbEIsK0JBQ0UsSUFBSSxFQUFDLE1BQU0sRUFDWCxJQUFJLEVBQUMsVUFBVSxFQUNmLEVBQUUsRUFBQyxVQUFVLEVBQ2IsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQ3ZCLFNBQVMsRUFBQyxxQkFBcUIsR0FDL0I7b0JBQ0YsZ0NBQVEsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLHNCQUFzQixhQUV4RCxDQUNMLENBQ0Y7WUFDTixvQkFBQyxpQkFBTyxPQUFHLENBQ1AsQ0FDUCxDQUFDO0lBQ0osQ0FBQztJQVVPLFNBQVM7UUFDZixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQTJCLENBQUM7UUFDaEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0Y7QUF0RUQsd0JBc0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIHNvY2tldElPIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBTY3JpcHRzIGZyb20gXCIuLi9jb21wb25lbnRzL1NjcmlwdHNcIjtcclxuXHJcbmludGVyZmFjZSBJQXBwU3RhdGUge1xyXG4gIG1lbnNhZ2Vuczogc3RyaW5nW107XHJcbiAgbWVuc2FnZW06IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PHt9LCBJQXBwU3RhdGU+IHtcclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG5cclxuICBwcml2YXRlIGNhbXBvTWVuc2FnZW0gPSBSZWFjdC5jcmVhdGVSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcclxuICBwcml2YXRlIGlvOiBTb2NrZXRJT0NsaWVudC5Tb2NrZXQ7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG1lbnNhZ2VtOiBcIlwiLFxyXG4gICAgICBtZW5zYWdlbnM6IFtdLFxyXG4gICAgfTtcclxuICAgIHRoaXMuZXhpYmlNZW5zYWdlbnMgPSB0aGlzLmV4aWJpTWVuc2FnZW5zLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5lbnZpYXJNU0cgPSB0aGlzLmVudmlhck1TRy5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5pbyA9IHNvY2tldElPLmNvbm5lY3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvXCIpO1xyXG5cclxuICAgIHRoaXMuaW8ub24oXCJyZWNlYmVNU0dcIiwgKG1zZykgPT4ge1xyXG4gICAgICBsZXQgbXNnczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgbXNncyA9IHRoaXMuc3RhdGUubWVuc2FnZW5zLmNvbmNhdChtc2cpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVuc2FnZW5zOiBtc2dzIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgbGlzdGFNU0dTID0gdGhpcy5leGliaU1lbnNhZ2VucygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb24gbXQtMFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIlwiPk1lbnNhZ2VucyBBbm9uaW1hczo8L2gyPlxyXG4gICAgICAgICAgICB7bGlzdGFNU0dTfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibWVuc2FnZW1cIlxyXG4gICAgICAgICAgICAgIGlkPVwibWVuc2FnZW1cIlxyXG4gICAgICAgICAgICAgIHJlZj17dGhpcy5jYW1wb01lbnNhZ2VtfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtMTBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZW52aWFyTVNHfSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBjb2wtMlwiPlxyXG4gICAgICAgICAgICAgIEVudmlhclxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxTY3JpcHRzIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhpYmlNZW5zYWdlbnMgPSAoKTogSlNYLkVsZW1lbnRbXSB8IHZvaWQgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubWVuc2FnZW5zLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubWVuc2FnZW5zLm1hcCgobWVuc2FnZW0pID0+IChcclxuICAgICAgICA8bGkga2V5PXtNYXRoLnJhbmRvbSgpfT57bWVuc2FnZW19PC9saT5cclxuICAgICAgKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBlbnZpYXJNU0coKSB7XHJcbiAgICBjb25zdCBtZW5zYWdlbSA9IHRoaXMuY2FtcG9NZW5zYWdlbS5jdXJyZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICB0aGlzLmlvLmVtaXQoXCJlbnZpYU1TR1wiLCBtZW5zYWdlbS52YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==