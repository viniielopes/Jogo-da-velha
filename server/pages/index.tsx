import * as React from "react";
import * as socketIO from "socket.io-client";
import Header from "../components/Header";
import Scripts from "../components/Scripts";

interface IAppState {
  mensagens: string[];
  mensagem: string;
}

export default class Index extends React.PureComponent<{}, IAppState> {
  /**
   *
   */

  private campoMensagem = React.createRef<HTMLInputElement>();
  private io: SocketIOClient.Socket;
  constructor(props) {
    super(props);
    this.state = {
      mensagem: "",
      mensagens: [],
    };
    this.exibiMensagens = this.exibiMensagens.bind(this);

    this.enviarMSG = this.enviarMSG.bind(this);
  }

  public componentDidMount() {
    this.io = socketIO.connect(`${document.location.protocol}//${document.location.host}`);

    this.io.on("recebeMSG", (msg) => {
      let msgs: string[] = [];
      msgs = this.state.mensagens.concat(msg);
      this.setState({ mensagens: msgs });
    });
  }

  public render() {
    const listaMSGS = this.exibiMensagens();
    return (
      <div>
        <Header />
        <div className="jumbotron mt-0">
          <div>
            <h2 className="">Mensagens Anonimas:</h2>
            {listaMSGS}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <input
              type="text"
              name="mensagem"
              id="mensagem"
              ref={this.campoMensagem}
              className="form-control col-10"
            />
            <button onClick={this.enviarMSG} className="btn btn-danger col-2">
              Enviar
            </button>
          </div>
        </div>
        <Scripts />
      </div>
    );
  }

  private exibiMensagens = (): JSX.Element[] | void => {
    if (this.state.mensagens.length > 0) {
      return this.state.mensagens.map((mensagem) => (
        <li key={Math.random()}>{mensagem}</li>
      ));
    }
  };

  private enviarMSG() {
    const mensagem = this.campoMensagem.current as HTMLInputElement;
    this.io.emit("enviaMSG", mensagem.value);
  }
}
