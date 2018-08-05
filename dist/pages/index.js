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
                return this.state.mensagens.map((mensagem) => (React.createElement("p", { key: Math.random(), className: "col-12" }, mensagem)));
            }
        };
        this.enviarMSG = () => {
            const mensagem = this.campoMensagem.current;
            this.io.emit("enviaMSG", mensagem.value);
            this.campoMensagem.current.value = "";
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
            React.createElement(Header_1.default, null),
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "ml-3 row" },
                    React.createElement("h2", { className: "col-12 text-center text-uppercase", style: { color: "cornsilk" } }, "Mensagens :")),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "card col-6 offset-3 rounded", style: AreaMensagem },
                        React.createElement("div", { className: "card-body", id: "txtAreaMensagem" },
                            "",
                            listaMSGS)))),
            React.createElement("div", { className: "container mt-3" },
                React.createElement("div", { className: "row offset-4" },
                    React.createElement("input", { type: "text", name: "mensagem", id: "mensagem", ref: this.campoMensagem, className: "form-control col-5" }),
                    React.createElement("button", { onClick: this.enviarMSG, className: "btn btn-danger col-2" }, "Enviar"))),
            React.createElement(Scripts_1.default, null)));
    }
}
exports.default = Index;
// const fixBottom: React.CSSProperties = {
//   bottom: "0",
//   left: "0",
//   right: "0",
//   position: "fixed",
//   zIndex: 1030,
//   marginBottom: "1rem",
// };
const bodyTelaToda = {
    height: "-webkit-fill-available",
    backgroundImage: "url(https://static.todamateria.com.br/upload/gr/af/grafite-arte-urbana-og.jpg)",
};
const AreaMensagem = {
    paddingBottom: "1rem",
    overflowY: "auto",
    overflowX: "hidden",
    height: "20rem",
    backgroundColor: "cornsilk",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQStCO0FBQy9CLDZDQUE2QztBQUM3QyxpREFBMEM7QUFDMUMsbURBQTRDO0FBTzVDLE1BQXFCLEtBQU0sU0FBUSxLQUFLLENBQUMsYUFBNEI7SUFPbkUsWUFBWSxLQUFLO1FBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBUGY7O1dBRUc7UUFFSyxrQkFBYSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQW9CLENBQUM7UUEyRXBELG1CQUFjLEdBQUcsR0FBeUIsRUFBRTtZQUNsRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUM1QywyQkFBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBQyxRQUFRLElBQ3RDLFFBQVEsQ0FDUCxDQUNMLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDO1FBRU0sY0FBUyxHQUFHLEdBQUcsRUFBRTtZQUN2QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQTJCLENBQUM7WUFDaEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FBQztRQUVNLG9CQUFlLEdBQUcsR0FBRyxFQUFFO1lBQzdCLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDOUQsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2xDLENBQUMsQ0FBQztRQTFGQSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsUUFBUSxFQUFFLEVBQUU7WUFDWixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDO0lBRU0saUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FDeEIsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUMzRCxDQUFDO1FBRUYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDOUIsSUFBSSxJQUFJLEdBQWEsRUFBRSxDQUFDO1lBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLGtCQUFrQjtRQUN2QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVNLE1BQU07UUFDWCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEMsT0FBTyxDQUNMLDhCQUFNLEtBQUssRUFBRSxZQUFZO1lBQ3ZCLG9CQUFDLGdCQUFNLE9BQUc7WUFDViw2QkFBSyxTQUFTLEVBQUMsV0FBVztnQkFDeEIsNkJBQUssU0FBUyxFQUFDLFVBQVU7b0JBQ3ZCLDRCQUNFLFNBQVMsRUFBQyxtQ0FBbUMsRUFDN0MsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxrQkFHekIsQ0FDRDtnQkFFTiw2QkFBSyxTQUFTLEVBQUMsS0FBSztvQkFDbEIsNkJBQ0UsU0FBUyxFQUFDLDZCQUE2QixFQUN2QyxLQUFLLEVBQUUsWUFBWTt3QkFFbkIsNkJBQUssU0FBUyxFQUFDLFdBQVcsRUFBQyxFQUFFLEVBQUMsaUJBQWlCOzRCQUM1QyxFQUFFOzRCQUNGLFNBQVMsQ0FDTixDQUNGLENBQ0YsQ0FDRjtZQUNOLDZCQUFLLFNBQVMsRUFBQyxnQkFBZ0I7Z0JBQzdCLDZCQUFLLFNBQVMsRUFBQyxjQUFjO29CQUMzQiwrQkFDRSxJQUFJLEVBQUMsTUFBTSxFQUNYLElBQUksRUFBQyxVQUFVLEVBQ2YsRUFBRSxFQUFDLFVBQVUsRUFDYixHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFDdkIsU0FBUyxFQUFDLG9CQUFvQixHQUM5QjtvQkFFRixnQ0FBUSxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsc0JBQXNCLGFBRXhELENBQ0wsQ0FDRjtZQUNOLG9CQUFDLGlCQUFPLE9BQUcsQ0FDTixDQUNSLENBQUM7SUFDSixDQUFDO0NBc0JGO0FBcEdELHdCQW9HQztBQUVELDJDQUEyQztBQUMzQyxpQkFBaUI7QUFDakIsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQix1QkFBdUI7QUFDdkIsa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQixLQUFLO0FBRUwsTUFBTSxZQUFZLEdBQXdCO0lBQ3hDLE1BQU0sRUFBRSx3QkFBd0I7SUFDaEMsZUFBZSxFQUNiLGdGQUFnRjtDQUNuRixDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQXdCO0lBQ3hDLGFBQWEsRUFBRSxNQUFNO0lBQ3JCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLE1BQU0sRUFBRSxPQUFPO0lBQ2YsZUFBZSxFQUFFLFVBQVU7Q0FDNUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIHNvY2tldElPIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBTY3JpcHRzIGZyb20gXCIuLi9jb21wb25lbnRzL1NjcmlwdHNcIjtcclxuXHJcbmludGVyZmFjZSBJQXBwU3RhdGUge1xyXG4gIG1lbnNhZ2Vuczogc3RyaW5nW107XHJcbiAgbWVuc2FnZW06IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PHt9LCBJQXBwU3RhdGU+IHtcclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG5cclxuICBwcml2YXRlIGNhbXBvTWVuc2FnZW0gPSBSZWFjdC5jcmVhdGVSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcclxuICBwcml2YXRlIGlvOiBTb2NrZXRJT0NsaWVudC5Tb2NrZXQ7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG1lbnNhZ2VtOiBcIlwiLFxyXG4gICAgICBtZW5zYWdlbnM6IFtdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuaW8gPSBzb2NrZXRJTy5jb25uZWN0KFxyXG4gICAgICBgJHtkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbH0vLyR7ZG9jdW1lbnQubG9jYXRpb24uaG9zdH1gXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuaW8ub24oXCJyZWNlYmVNU0dcIiwgKG1zZykgPT4ge1xyXG4gICAgICBsZXQgbXNnczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgbXNncyA9IHRoaXMuc3RhdGUubWVuc2FnZW5zLmNvbmNhdChtc2cpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVuc2FnZW5zOiBtc2dzIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubWVuc2FnZW5zLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5TY3JvbGxNZW5zYWdlbnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBsaXN0YU1TR1MgPSB0aGlzLmV4aWJpTWVuc2FnZW5zKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Ym9keSBzdHlsZT17Ym9keVRlbGFUb2RhfT5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMyByb3dcIj5cclxuICAgICAgICAgICAgPGgyXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyIHRleHQtdXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJjb3Juc2lsa1wiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBNZW5zYWdlbnMgOlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQgY29sLTYgb2Zmc2V0LTMgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e0FyZWFNZW5zYWdlbX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgaWQ9XCJ0eHRBcmVhTWVuc2FnZW1cIj5cclxuICAgICAgICAgICAgICAgIHtcIlwifVxyXG4gICAgICAgICAgICAgICAge2xpc3RhTVNHU31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC0zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBvZmZzZXQtNFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1lbnNhZ2VtXCJcclxuICAgICAgICAgICAgICBpZD1cIm1lbnNhZ2VtXCJcclxuICAgICAgICAgICAgICByZWY9e3RoaXMuY2FtcG9NZW5zYWdlbX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLTVcIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmVudmlhck1TR30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgY29sLTJcIj5cclxuICAgICAgICAgICAgICBFbnZpYXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8U2NyaXB0cyAvPlxyXG4gICAgICA8L2JvZHk+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleGliaU1lbnNhZ2VucyA9ICgpOiBKU1guRWxlbWVudFtdIHwgdm9pZCA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tZW5zYWdlbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5tZW5zYWdlbnMubWFwKChtZW5zYWdlbSkgPT4gKFxyXG4gICAgICAgIDxwIGtleT17TWF0aC5yYW5kb20oKX0gY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICB7bWVuc2FnZW19XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGVudmlhck1TRyA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lbnNhZ2VtID0gdGhpcy5jYW1wb01lbnNhZ2VtLmN1cnJlbnQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIHRoaXMuaW8uZW1pdChcImVudmlhTVNHXCIsIG1lbnNhZ2VtLnZhbHVlKTtcclxuICAgIHRoaXMuY2FtcG9NZW5zYWdlbS5jdXJyZW50LnZhbHVlID0gXCJcIjtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIFNjcm9sbE1lbnNhZ2VucyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVsdGltYW1lbnNhZ2VtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInA6bGFzdC1jaGlsZFwiKTtcclxuICAgIHVsdGltYW1lbnNhZ2VtLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgfTtcclxufVxyXG5cclxuLy8gY29uc3QgZml4Qm90dG9tOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4vLyAgIGJvdHRvbTogXCIwXCIsXHJcbi8vICAgbGVmdDogXCIwXCIsXHJcbi8vICAgcmlnaHQ6IFwiMFwiLFxyXG4vLyAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbi8vICAgekluZGV4OiAxMDMwLFxyXG4vLyAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXHJcbi8vIH07XHJcblxyXG5jb25zdCBib2R5VGVsYVRvZGE6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgaGVpZ2h0OiBcIi13ZWJraXQtZmlsbC1hdmFpbGFibGVcIixcclxuICBiYWNrZ3JvdW5kSW1hZ2U6XHJcbiAgICBcInVybChodHRwczovL3N0YXRpYy50b2RhbWF0ZXJpYS5jb20uYnIvdXBsb2FkL2dyL2FmL2dyYWZpdGUtYXJ0ZS11cmJhbmEtb2cuanBnKVwiLFxyXG59O1xyXG5cclxuY29uc3QgQXJlYU1lbnNhZ2VtOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gIHBhZGRpbmdCb3R0b206IFwiMXJlbVwiLFxyXG4gIG92ZXJmbG93WTogXCJhdXRvXCIsXHJcbiAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxyXG4gIGhlaWdodDogXCIyMHJlbVwiLFxyXG4gIGJhY2tncm91bmRDb2xvcjogXCJjb3Juc2lsa1wiLFxyXG59O1xyXG4iXX0=