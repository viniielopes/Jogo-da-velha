"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const document_1 = require("next/document");
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
            React.createElement(document_1.Head, null,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNENBQXFDO0FBQ3JDLCtCQUErQjtBQUMvQiw2Q0FBNkM7QUFDN0MsbURBQTRDO0FBTzVDLE1BQXFCLEtBQU0sU0FBUSxLQUFLLENBQUMsYUFBNEI7SUFPbkUsWUFBWSxLQUFLO1FBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBUGY7O1dBRUc7UUFFSyxrQkFBYSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQW9CLENBQUM7UUE4RXBELG1CQUFjLEdBQUcsR0FBeUIsRUFBRTtZQUNsRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUM1QywyQkFBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBQyxRQUFRLElBQ3RDLFFBQVEsQ0FDUCxDQUNMLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDO1FBRU0sY0FBUyxHQUFHLEdBQUcsRUFBRTtZQUN2QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQTJCLENBQUM7WUFDaEUsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7YUFDdkM7UUFDSCxDQUFDLENBQUM7UUFFTSxvQkFBZSxHQUFHLEdBQUcsRUFBRTtZQUM3QixNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzlELGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsQyxDQUFDLENBQUM7UUEvRkEsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFFBQVEsRUFBRSxFQUFFO1lBQ1osU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBQ0osQ0FBQztJQUVNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQ3hCLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FDM0QsQ0FBQztRQUVGLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzlCLElBQUksSUFBSSxHQUFhLEVBQUUsQ0FBQztZQUN4QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxrQkFBa0I7UUFDdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFTSxNQUFNO1FBQ1gsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hDLE9BQU8sQ0FDTCw4QkFBTSxLQUFLLEVBQUUsWUFBWTtZQUN2QixvQkFBQyxlQUFJO2dCQUNILCtDQUF3QixDQUNuQjtZQUVQLDZCQUFLLFNBQVMsRUFBQyxXQUFXO2dCQUN4Qiw2QkFBSyxTQUFTLEVBQUMsVUFBVTtvQkFDdkIsNEJBQ0UsU0FBUyxFQUFDLG1DQUFtQyxFQUM3QyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLGtCQUV6QixDQUNEO2dCQUVOLDZCQUFLLFNBQVMsRUFBQyxLQUFLO29CQUNsQiw2QkFDRSxTQUFTLEVBQUMsMENBQTBDLEVBQ3BELEtBQUssRUFBRSxZQUFZO3dCQUNuQiw2QkFBSyxTQUFTLEVBQUMsV0FBVyxFQUFDLEVBQUUsRUFBQyxpQkFBaUI7NEJBQzVDLEVBQUU7NEJBQ0YsU0FBUyxDQUNOLENBQ0YsQ0FDRixDQUNGO1lBQ04sNkJBQUssU0FBUyxFQUFDLGdCQUFnQjtnQkFDN0IsNkJBQUssU0FBUyxFQUFDLHNCQUFzQjtvQkFDbkMsK0JBQ0UsSUFBSSxFQUFDLE1BQU0sRUFDWCxJQUFJLEVBQUMsVUFBVSxFQUNmLEVBQUUsRUFBQyxVQUFVLEVBQ2IsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQ3ZCLFNBQVMsRUFBQyxzQ0FBc0MsR0FDaEQ7b0JBRUYsZ0NBQ0UsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQ3ZCLFNBQVMsRUFBQywrQkFBK0IsYUFFbEMsQ0FDTCxDQUNGO1lBQ04sb0JBQUMsaUJBQU8sT0FBRyxDQUNOLENBQ1IsQ0FBQztJQUNKLENBQUM7Q0F3QkY7QUF6R0Qsd0JBeUdDO0FBRUQsTUFBTSxZQUFZLEdBQXdCO0lBQ3hDLE1BQU0sRUFBRSx3QkFBd0I7SUFDaEMsZUFBZSxFQUFFLGlDQUFpQztJQUNsRCxnQkFBZ0IsRUFBRSxRQUFRO0NBQzNCLENBQUM7QUFFRixNQUFNLFlBQVksR0FBd0I7SUFDeEMsYUFBYSxFQUFFLE1BQU07SUFDckIsU0FBUyxFQUFFLE1BQU07SUFDakIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsTUFBTSxFQUFFLE9BQU87SUFDZixlQUFlLEVBQUUsVUFBVTtDQUM1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBzb2NrZXRJTyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQgU2NyaXB0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9TY3JpcHRzXCI7XHJcblxyXG5pbnRlcmZhY2UgSUFwcFN0YXRlIHtcclxuICBtZW5zYWdlbnM6IHN0cmluZ1tdO1xyXG4gIG1lbnNhZ2VtOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDx7fSwgSUFwcFN0YXRlPiB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuXHJcbiAgcHJpdmF0ZSBjYW1wb01lbnNhZ2VtID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XHJcbiAgcHJpdmF0ZSBpbzogU29ja2V0SU9DbGllbnQuU29ja2V0O1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtZW5zYWdlbTogXCJcIixcclxuICAgICAgbWVuc2FnZW5zOiBbXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmlvID0gc29ja2V0SU8uY29ubmVjdChcclxuICAgICAgYCR7ZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2x9Ly8ke2RvY3VtZW50LmxvY2F0aW9uLmhvc3R9YFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmlvLm9uKFwicmVjZWJlTVNHXCIsIChtc2cpID0+IHtcclxuICAgICAgbGV0IG1zZ3M6IHN0cmluZ1tdID0gW107XHJcbiAgICAgIG1zZ3MgPSB0aGlzLnN0YXRlLm1lbnNhZ2Vucy5jb25jYXQobXNnKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnNhZ2VuczogbXNncyB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLm1lbnNhZ2Vucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuU2Nyb2xsTWVuc2FnZW5zKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgbGlzdGFNU0dTID0gdGhpcy5leGliaU1lbnNhZ2VucygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGJvZHkgc3R5bGU9e2JvZHlUZWxhVG9kYX0+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+TWVuc2FnZW5zPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTMgcm93XCI+XHJcbiAgICAgICAgICAgIDxoMlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlciB0ZXh0LXVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiY29ybnNpbGtcIiB9fT5cclxuICAgICAgICAgICAgICBNZW5zYWdlbnMgOlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQgY29sLTEyIGNvbC1sZy02IG9mZnNldC1sZy0zIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtBcmVhTWVuc2FnZW19PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgaWQ9XCJ0eHRBcmVhTWVuc2FnZW1cIj5cclxuICAgICAgICAgICAgICAgIHtcIlwifVxyXG4gICAgICAgICAgICAgICAge2xpc3RhTVNHU31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC0zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBvZmZzZXQtbGctNCBteC0xXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibWVuc2FnZW1cIlxyXG4gICAgICAgICAgICAgIGlkPVwibWVuc2FnZW1cIlxyXG4gICAgICAgICAgICAgIHJlZj17dGhpcy5jYW1wb01lbnNhZ2VtfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtOCBjb2wtbGctNSBvZmZzZXQtM1wiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5lbnZpYXJNU0d9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgY29sLWxnLTEgY29sLTRcIj5cclxuICAgICAgICAgICAgICBFbnZpYXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8U2NyaXB0cyAvPlxyXG4gICAgICA8L2JvZHk+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleGliaU1lbnNhZ2VucyA9ICgpOiBKU1guRWxlbWVudFtdIHwgdm9pZCA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tZW5zYWdlbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5tZW5zYWdlbnMubWFwKChtZW5zYWdlbSkgPT4gKFxyXG4gICAgICAgIDxwIGtleT17TWF0aC5yYW5kb20oKX0gY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICB7bWVuc2FnZW19XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGVudmlhck1TRyA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lbnNhZ2VtID0gdGhpcy5jYW1wb01lbnNhZ2VtLmN1cnJlbnQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGlmIChtZW5zYWdlbS52YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuaW8uZW1pdChcImVudmlhTVNHXCIsIG1lbnNhZ2VtLnZhbHVlKTtcclxuICAgICAgdGhpcy5jYW1wb01lbnNhZ2VtLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgU2Nyb2xsTWVuc2FnZW5zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdWx0aW1hbWVuc2FnZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwicDpsYXN0LWNoaWxkXCIpO1xyXG4gICAgdWx0aW1hbWVuc2FnZW0uc2Nyb2xsSW50b1ZpZXcoKTtcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBib2R5VGVsYVRvZGE6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgaGVpZ2h0OiBcIi13ZWJraXQtZmlsbC1hdmFpbGFibGVcIixcclxuICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKHN0YXRpYy9pbWdzL2JhY2tncm91bmQuanBnKVwiLFxyXG4gIGJhY2tncm91bmRSZXBlYXQ6IFwicmVwZWF0XCIsXHJcbn07XHJcblxyXG5jb25zdCBBcmVhTWVuc2FnZW06IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgcGFkZGluZ0JvdHRvbTogXCIxcmVtXCIsXHJcbiAgb3ZlcmZsb3dZOiBcImF1dG9cIixcclxuICBvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXHJcbiAgaGVpZ2h0OiBcIjIwcmVtXCIsXHJcbiAgYmFja2dyb3VuZENvbG9yOiBcImNvcm5zaWxrXCIsXHJcbn07XHJcbiJdfQ==