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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQTZCO0FBQzdCLCtCQUErQjtBQUMvQiw2Q0FBNkM7QUFDN0MsbURBQTRDO0FBTzVDLE1BQXFCLEtBQU0sU0FBUSxLQUFLLENBQUMsYUFBNEI7SUFPbkUsWUFBWSxLQUFLO1FBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBUGY7O1dBRUc7UUFFSyxrQkFBYSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQW9CLENBQUM7UUFpRnBELG1CQUFjLEdBQUcsR0FBeUIsRUFBRTtZQUNsRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUM1QywyQkFBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBQyxRQUFRLElBQ3RDLFFBQVEsQ0FDUCxDQUNMLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDO1FBRU0sY0FBUyxHQUFHLEdBQUcsRUFBRTtZQUN2QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQTJCLENBQUM7WUFDaEUsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7YUFDdkM7UUFDSCxDQUFDLENBQUM7UUFFTSxvQkFBZSxHQUFHLEdBQUcsRUFBRTtZQUM3QixNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzlELGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsQyxDQUFDLENBQUM7UUFsR0EsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFFBQVEsRUFBRSxFQUFFO1lBQ1osU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBQ0osQ0FBQztJQUVNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQ3hCLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FDM0QsQ0FBQztRQUVGLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzlCLElBQUksSUFBSSxHQUFhLEVBQUUsQ0FBQztZQUN4QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxrQkFBa0I7UUFDdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFTSxNQUFNO1FBQ1gsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hDLE9BQU8sQ0FDTCw4QkFBTSxLQUFLLEVBQUUsWUFBWTtZQUN2QixvQkFBQyxjQUFJO2dCQUNILCtDQUF3QixDQUNuQjtZQUVQLDZCQUFLLFNBQVMsRUFBQyxXQUFXO2dCQUN4Qiw2QkFBSyxTQUFTLEVBQUMsVUFBVTtvQkFDdkIsNEJBQ0UsU0FBUyxFQUFDLG1DQUFtQyxFQUM3QyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLGtCQUd6QixDQUNEO2dCQUVOLDZCQUFLLFNBQVMsRUFBQyxLQUFLO29CQUNsQiw2QkFDRSxTQUFTLEVBQUMsMENBQTBDLEVBQ3BELEtBQUssRUFBRSxZQUFZO3dCQUVuQiw2QkFBSyxTQUFTLEVBQUMsV0FBVyxFQUFDLEVBQUUsRUFBQyxpQkFBaUI7NEJBQzVDLEVBQUU7NEJBQ0YsU0FBUyxDQUNOLENBQ0YsQ0FDRixDQUNGO1lBQ04sNkJBQUssU0FBUyxFQUFDLGdCQUFnQjtnQkFDN0IsNkJBQUssU0FBUyxFQUFDLHNCQUFzQjtvQkFDbkMsK0JBQ0UsSUFBSSxFQUFDLE1BQU0sRUFDWCxJQUFJLEVBQUMsVUFBVSxFQUNmLEVBQUUsRUFBQyxVQUFVLEVBQ2IsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQ3ZCLFNBQVMsRUFBQyxzQ0FBc0MsR0FDaEQ7b0JBRUYsZ0NBQ0UsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQ3ZCLFNBQVMsRUFBQywrQkFBK0IsYUFHbEMsQ0FDTCxDQUNGO1lBQ04sb0JBQUMsaUJBQU8sT0FBRyxDQUNOLENBQ1IsQ0FBQztJQUNKLENBQUM7Q0F3QkY7QUE1R0Qsd0JBNEdDO0FBRUQsTUFBTSxZQUFZLEdBQXdCO0lBQ3hDLE1BQU0sRUFBRSx3QkFBd0I7SUFDaEMsZUFBZSxFQUFFLGlDQUFpQztJQUNsRCxnQkFBZ0IsRUFBRSxRQUFRO0NBQzNCLENBQUM7QUFFRixNQUFNLFlBQVksR0FBd0I7SUFDeEMsYUFBYSxFQUFFLE1BQU07SUFDckIsU0FBUyxFQUFFLE1BQU07SUFDakIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsTUFBTSxFQUFFLE9BQU87SUFDZixlQUFlLEVBQUUsVUFBVTtDQUM1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgc29ja2V0SU8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuaW1wb3J0IFNjcmlwdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2NyaXB0c1wiO1xyXG5cclxuaW50ZXJmYWNlIElBcHBTdGF0ZSB7XHJcbiAgbWVuc2FnZW5zOiBzdHJpbmdbXTtcclxuICBtZW5zYWdlbTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8e30sIElBcHBTdGF0ZT4ge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcblxyXG4gIHByaXZhdGUgY2FtcG9NZW5zYWdlbSA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpO1xyXG4gIHByaXZhdGUgaW86IFNvY2tldElPQ2xpZW50LlNvY2tldDtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbWVuc2FnZW06IFwiXCIsXHJcbiAgICAgIG1lbnNhZ2VuczogW10sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5pbyA9IHNvY2tldElPLmNvbm5lY3QoXHJcbiAgICAgIGAke2RvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sfS8vJHtkb2N1bWVudC5sb2NhdGlvbi5ob3N0fWBcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5pby5vbihcInJlY2ViZU1TR1wiLCAobXNnKSA9PiB7XHJcbiAgICAgIGxldCBtc2dzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICBtc2dzID0gdGhpcy5zdGF0ZS5tZW5zYWdlbnMuY29uY2F0KG1zZyk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZW5zYWdlbnM6IG1zZ3MgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tZW5zYWdlbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLlNjcm9sbE1lbnNhZ2VucygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGxpc3RhTVNHUyA9IHRoaXMuZXhpYmlNZW5zYWdlbnMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxib2R5IHN0eWxlPXtib2R5VGVsYVRvZGF9PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPk1lbnNhZ2VuczwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0zIHJvd1wiPlxyXG4gICAgICAgICAgICA8aDJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXIgdGV4dC11cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImNvcm5zaWxrXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIE1lbnNhZ2VucyA6XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZCBjb2wtMTIgY29sLWxnLTYgb2Zmc2V0LWxnLTMgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e0FyZWFNZW5zYWdlbX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgaWQ9XCJ0eHRBcmVhTWVuc2FnZW1cIj5cclxuICAgICAgICAgICAgICAgIHtcIlwifVxyXG4gICAgICAgICAgICAgICAge2xpc3RhTVNHU31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC0zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBvZmZzZXQtbGctNCBteC0xXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibWVuc2FnZW1cIlxyXG4gICAgICAgICAgICAgIGlkPVwibWVuc2FnZW1cIlxyXG4gICAgICAgICAgICAgIHJlZj17dGhpcy5jYW1wb01lbnNhZ2VtfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtOCBjb2wtbGctNSBvZmZzZXQtM1wiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5lbnZpYXJNU0d9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgY29sLWxnLTEgY29sLTRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRW52aWFyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFNjcmlwdHMgLz5cclxuICAgICAgPC9ib2R5PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhpYmlNZW5zYWdlbnMgPSAoKTogSlNYLkVsZW1lbnRbXSB8IHZvaWQgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubWVuc2FnZW5zLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubWVuc2FnZW5zLm1hcCgobWVuc2FnZW0pID0+IChcclxuICAgICAgICA8cCBrZXk9e01hdGgucmFuZG9tKCl9IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAge21lbnNhZ2VtfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBlbnZpYXJNU0cgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZW5zYWdlbSA9IHRoaXMuY2FtcG9NZW5zYWdlbS5jdXJyZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBpZiAobWVuc2FnZW0udmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmlvLmVtaXQoXCJlbnZpYU1TR1wiLCBtZW5zYWdlbS52YWx1ZSk7XHJcbiAgICAgIHRoaXMuY2FtcG9NZW5zYWdlbS5jdXJyZW50LnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIFNjcm9sbE1lbnNhZ2VucyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVsdGltYW1lbnNhZ2VtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInA6bGFzdC1jaGlsZFwiKTtcclxuICAgIHVsdGltYW1lbnNhZ2VtLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgYm9keVRlbGFUb2RhOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gIGhlaWdodDogXCItd2Via2l0LWZpbGwtYXZhaWxhYmxlXCIsXHJcbiAgYmFja2dyb3VuZEltYWdlOiBcInVybChzdGF0aWMvaW1ncy9iYWNrZ3JvdW5kLmpwZylcIixcclxuICBiYWNrZ3JvdW5kUmVwZWF0OiBcInJlcGVhdFwiLFxyXG59O1xyXG5cclxuY29uc3QgQXJlYU1lbnNhZ2VtOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gIHBhZGRpbmdCb3R0b206IFwiMXJlbVwiLFxyXG4gIG92ZXJmbG93WTogXCJhdXRvXCIsXHJcbiAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxyXG4gIGhlaWdodDogXCIyMHJlbVwiLFxyXG4gIGJhY2tncm91bmRDb2xvcjogXCJjb3Juc2lsa1wiLFxyXG59O1xyXG4iXX0=