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
                return this.state.mensagens.map((mensagem) => (React.createElement("li", { key: Math.random(), className: "col-12" }, mensagem)));
            }
        };
        this.enviarMSG = () => {
            const mensagem = this.campoMensagem.current;
            this.io.emit("enviaMSG", mensagem.value);
        };
        this.ScrollMensagens = () => {
            const ultimamensagem = document.querySelector("li:last-child");
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
            React.createElement(Header_1.default, null),
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "ml-3 row" },
                    React.createElement("h2", { className: "col-12" }, "Mensagens :")),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "card col-12 bg-info", style: AreaMensagem },
                        React.createElement("div", { className: "card-body", id: "txtAreaMensagem" },
                            "",
                            listaMSGS)))),
            React.createElement("div", { className: "container", style: fixBottom },
                React.createElement("div", { className: "row" },
                    React.createElement("input", { type: "text", name: "mensagem", id: "mensagem", ref: this.campoMensagem, className: "form-control col-10" }),
                    React.createElement("button", { onClick: this.enviarMSG, className: "btn btn-danger col-2" }, "Enviar"))),
            React.createElement(Scripts_1.default, null)));
    }
}
exports.default = Index;
const fixBottom = {
    bottom: "0",
    left: "0",
    right: "0",
    position: "fixed",
    zIndex: 1030,
    marginBottom: "1rem",
};
const bodyTelaToda = {
    height: "-webkit-fill-available",
};
const AreaMensagem = {
    paddingBottom: "1rem",
    overflowY: "auto",
    height: "33rem",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQStCO0FBQy9CLDZDQUE2QztBQUM3QyxpREFBMEM7QUFDMUMsbURBQTRDO0FBTzVDLE1BQXFCLEtBQU0sU0FBUSxLQUFLLENBQUMsYUFBNEI7SUFPbkUsWUFBWSxLQUFLO1FBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBUGY7O1dBRUc7UUFFSyxrQkFBYSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQW9CLENBQUM7UUFtRXBELG1CQUFjLEdBQUcsR0FBeUIsRUFBRTtZQUNsRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUM1Qyw0QkFBSSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBQyxRQUFRLElBQ3ZDLFFBQVEsQ0FDTixDQUNOLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDO1FBRU0sY0FBUyxHQUFHLEdBQUcsRUFBRTtZQUN2QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQTJCLENBQUM7WUFDaEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUM7UUFFTSxvQkFBZSxHQUFHLEdBQUcsRUFBRTtZQUM3QixNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQy9ELGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsQyxDQUFDLENBQUM7UUFqRkEsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFFBQVEsRUFBRSxFQUFFO1lBQ1osU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBQ0osQ0FBQztJQUVNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQ3hCLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FDM0QsQ0FBQztRQUVGLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzlCLElBQUksSUFBSSxHQUFhLEVBQUUsQ0FBQztZQUN4QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxrQkFBa0I7UUFDdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFTSxNQUFNO1FBQ1gsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hDLE9BQU8sQ0FDTCw4QkFBTSxLQUFLLEVBQUUsWUFBWTtZQUN2QixvQkFBQyxnQkFBTSxPQUFHO1lBQ1YsNkJBQUssU0FBUyxFQUFDLFdBQVc7Z0JBQ3hCLDZCQUFLLFNBQVMsRUFBQyxVQUFVO29CQUN2Qiw0QkFBSSxTQUFTLEVBQUMsUUFBUSxrQkFBaUIsQ0FDbkM7Z0JBRU4sNkJBQUssU0FBUyxFQUFDLEtBQUs7b0JBQ2xCLDZCQUFLLFNBQVMsRUFBQyxxQkFBcUIsRUFBQyxLQUFLLEVBQUUsWUFBWTt3QkFDdEQsNkJBQUssU0FBUyxFQUFDLFdBQVcsRUFBQyxFQUFFLEVBQUMsaUJBQWlCOzRCQUM1QyxFQUFFOzRCQUNGLFNBQVMsQ0FDTixDQUNGLENBQ0YsQ0FDRjtZQUNOLDZCQUFLLFNBQVMsRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFFLFNBQVM7Z0JBQ3pDLDZCQUFLLFNBQVMsRUFBQyxLQUFLO29CQUNsQiwrQkFDRSxJQUFJLEVBQUMsTUFBTSxFQUNYLElBQUksRUFBQyxVQUFVLEVBQ2YsRUFBRSxFQUFDLFVBQVUsRUFDYixHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFDdkIsU0FBUyxFQUFDLHFCQUFxQixHQUMvQjtvQkFFRixnQ0FBUSxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsc0JBQXNCLGFBRXhELENBQ0wsQ0FDRjtZQUNOLG9CQUFDLGlCQUFPLE9BQUcsQ0FDTixDQUNSLENBQUM7SUFDSixDQUFDO0NBcUJGO0FBM0ZELHdCQTJGQztBQUVELE1BQU0sU0FBUyxHQUF3QjtJQUNyQyxNQUFNLEVBQUUsR0FBRztJQUNYLElBQUksRUFBRSxHQUFHO0lBQ1QsS0FBSyxFQUFFLEdBQUc7SUFDVixRQUFRLEVBQUUsT0FBTztJQUNqQixNQUFNLEVBQUUsSUFBSTtJQUNaLFlBQVksRUFBRSxNQUFNO0NBQ3JCLENBQUM7QUFFRixNQUFNLFlBQVksR0FBd0I7SUFDeEMsTUFBTSxFQUFFLHdCQUF3QjtDQUNqQyxDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQXdCO0lBQ3hDLGFBQWEsRUFBRSxNQUFNO0lBQ3JCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLE1BQU0sRUFBRSxPQUFPO0NBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBzb2NrZXRJTyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgU2NyaXB0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9TY3JpcHRzXCI7XHJcblxyXG5pbnRlcmZhY2UgSUFwcFN0YXRlIHtcclxuICBtZW5zYWdlbnM6IHN0cmluZ1tdO1xyXG4gIG1lbnNhZ2VtOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDx7fSwgSUFwcFN0YXRlPiB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuXHJcbiAgcHJpdmF0ZSBjYW1wb01lbnNhZ2VtID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XHJcbiAgcHJpdmF0ZSBpbzogU29ja2V0SU9DbGllbnQuU29ja2V0O1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtZW5zYWdlbTogXCJcIixcclxuICAgICAgbWVuc2FnZW5zOiBbXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmlvID0gc29ja2V0SU8uY29ubmVjdChcclxuICAgICAgYCR7ZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2x9Ly8ke2RvY3VtZW50LmxvY2F0aW9uLmhvc3R9YFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmlvLm9uKFwicmVjZWJlTVNHXCIsIChtc2cpID0+IHtcclxuICAgICAgbGV0IG1zZ3M6IHN0cmluZ1tdID0gW107XHJcbiAgICAgIG1zZ3MgPSB0aGlzLnN0YXRlLm1lbnNhZ2Vucy5jb25jYXQobXNnKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnNhZ2VuczogbXNncyB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLm1lbnNhZ2Vucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuU2Nyb2xsTWVuc2FnZW5zKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgbGlzdGFNU0dTID0gdGhpcy5leGliaU1lbnNhZ2VucygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGJvZHkgc3R5bGU9e2JvZHlUZWxhVG9kYX0+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTMgcm93XCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb2wtMTJcIj5NZW5zYWdlbnMgOjwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTEyIGJnLWluZm9cIiBzdHlsZT17QXJlYU1lbnNhZ2VtfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIGlkPVwidHh0QXJlYU1lbnNhZ2VtXCI+XHJcbiAgICAgICAgICAgICAgICB7XCJcIn1cclxuICAgICAgICAgICAgICAgIHtsaXN0YU1TR1N9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17Zml4Qm90dG9tfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibWVuc2FnZW1cIlxyXG4gICAgICAgICAgICAgIGlkPVwibWVuc2FnZW1cIlxyXG4gICAgICAgICAgICAgIHJlZj17dGhpcy5jYW1wb01lbnNhZ2VtfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtMTBcIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmVudmlhck1TR30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgY29sLTJcIj5cclxuICAgICAgICAgICAgICBFbnZpYXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8U2NyaXB0cyAvPlxyXG4gICAgICA8L2JvZHk+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleGliaU1lbnNhZ2VucyA9ICgpOiBKU1guRWxlbWVudFtdIHwgdm9pZCA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tZW5zYWdlbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5tZW5zYWdlbnMubWFwKChtZW5zYWdlbSkgPT4gKFxyXG4gICAgICAgIDxsaSBrZXk9e01hdGgucmFuZG9tKCl9IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAge21lbnNhZ2VtfVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgZW52aWFyTVNHID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWVuc2FnZW0gPSB0aGlzLmNhbXBvTWVuc2FnZW0uY3VycmVudCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgdGhpcy5pby5lbWl0KFwiZW52aWFNU0dcIiwgbWVuc2FnZW0udmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgU2Nyb2xsTWVuc2FnZW5zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdWx0aW1hbWVuc2FnZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGk6bGFzdC1jaGlsZFwiKTtcclxuICAgIHVsdGltYW1lbnNhZ2VtLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgZml4Qm90dG9tOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gIGJvdHRvbTogXCIwXCIsXHJcbiAgbGVmdDogXCIwXCIsXHJcbiAgcmlnaHQ6IFwiMFwiLFxyXG4gIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgekluZGV4OiAxMDMwLFxyXG4gIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXHJcbn07XHJcblxyXG5jb25zdCBib2R5VGVsYVRvZGE6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgaGVpZ2h0OiBcIi13ZWJraXQtZmlsbC1hdmFpbGFibGVcIixcclxufTtcclxuXHJcbmNvbnN0IEFyZWFNZW5zYWdlbTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuICBwYWRkaW5nQm90dG9tOiBcIjFyZW1cIixcclxuICBvdmVyZmxvd1k6IFwiYXV0b1wiLFxyXG4gIGhlaWdodDogXCIzM3JlbVwiLFxyXG59O1xyXG4iXX0=