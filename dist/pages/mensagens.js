"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const socketIO = require("socket.io-client");
class IApp extends React.Component {
    constructor(props) {
        super(props);
        this.exibiMensagens = () => {
            if (this.state.mensagens.length > 0) {
                return this.state.mensagens.map((mensagem) => (React.createElement("li", { key: Math.random() }, mensagem)));
            }
        };
        this.state = {
            mensagens: [],
        };
        this.exibiMensagens = this.exibiMensagens.bind(this);
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
            React.createElement("h1", null, "Mensagens:"),
            listaMSGS));
    }
}
exports.default = IApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVuc2FnZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyL3BhZ2VzL21lbnNhZ2Vucy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBK0I7QUFDL0IsNkNBQTZDO0FBTTdDLE1BQXFCLElBQUssU0FBUSxLQUFLLENBQUMsU0FBd0I7SUFHOUQsWUFBWSxLQUFLO1FBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBNEJQLG1CQUFjLEdBQUcsR0FBeUIsRUFBRTtZQUNsRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUM1Qyw0QkFBSSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFHLFFBQVEsQ0FBTSxDQUN4QyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQztRQWpDQSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBRUYsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU0saUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzlCLElBQUksSUFBSSxHQUFhLEVBQUUsQ0FBQztZQUN4QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxNQUFNO1FBQ1gsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hDLE9BQU8sQ0FDTDtZQUNFLDZDQUFtQjtZQUVsQixTQUFTLENBQ04sQ0FDUCxDQUFDO0lBQ0osQ0FBQztDQVNGO0FBdkNELHVCQXVDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBzb2NrZXRJTyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5cclxuaW50ZXJmYWNlIElBcHBTdGF0ZSB7XHJcbiAgbWVuc2FnZW5zOiBzdHJpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSUFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgSUFwcFN0YXRlPiB7XHJcbiAgcHJpdmF0ZSBpbzogU29ja2V0SU9DbGllbnQuU29ja2V0O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbWVuc2FnZW5zOiBbXSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5leGliaU1lbnNhZ2VucyA9IHRoaXMuZXhpYmlNZW5zYWdlbnMuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuaW8gPSBzb2NrZXRJTy5jb25uZWN0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiKTtcclxuICAgIHRoaXMuaW8ub24oXCJyZWNlYmVNU0dcIiwgKG1zZykgPT4ge1xyXG4gICAgICBsZXQgbXNnczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgbXNncyA9IHRoaXMuc3RhdGUubWVuc2FnZW5zLmNvbmNhdChtc2cpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVuc2FnZW5zOiBtc2dzIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgbGlzdGFNU0dTID0gdGhpcy5leGliaU1lbnNhZ2VucygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+TWVuc2FnZW5zOjwvaDE+XHJcblxyXG4gICAgICAgIHtsaXN0YU1TR1N9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhpYmlNZW5zYWdlbnMgPSAoKTogSlNYLkVsZW1lbnRbXSB8IHZvaWQgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubWVuc2FnZW5zLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubWVuc2FnZW5zLm1hcCgobWVuc2FnZW0pID0+IChcclxuICAgICAgICA8bGkga2V5PXtNYXRoLnJhbmRvbSgpfT57bWVuc2FnZW19PC9saT5cclxuICAgICAgKSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXX0=