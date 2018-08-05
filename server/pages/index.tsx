import Link from "next/link";
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
  }

  public componentDidMount() {
    this.io = socketIO.connect(
      `${document.location.protocol}//${document.location.host}`
    );

    this.io.on("recebeMSG", (msg) => {
      let msgs: string[] = [];
      msgs = this.state.mensagens.concat(msg);
      this.setState({ mensagens: msgs });
    });
  }

  public componentDidUpdate() {
    if (this.state.mensagens.length > 0) {
      this.ScrollMensagens();
    }
  }

  public render() {
    const listaMSGS = this.exibiMensagens();
    return (
      <body style={bodyTelaToda}>
        <Header />
        <div className="container">
          <div className="ml-3 row">
            <h2 className="col-12">Mensagens :</h2>
          </div>

          <div className="row">
            <div className="card col-12 bg-info" style={AreaMensagem}>
              <div className="card-body" id="txtAreaMensagem">
                {""}
                {listaMSGS}
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={fixBottom}>
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
      </body>
    );
  }

  private exibiMensagens = (): JSX.Element[] | void => {
    if (this.state.mensagens.length > 0) {
      return this.state.mensagens.map((mensagem) => (
        <li key={Math.random()} className="col-12">
          {mensagem}
        </li>
      ));
    }
  };

  private enviarMSG = () => {
    const mensagem = this.campoMensagem.current as HTMLInputElement;
    this.io.emit("enviaMSG", mensagem.value);
  };

  private ScrollMensagens = () => {
    const ultimamensagem = document.querySelector("li:last-child");
    ultimamensagem.scrollIntoView();
  };
}

const fixBottom: React.CSSProperties = {
  bottom: "0",
  left: "0",
  right: "0",
  position: "fixed",
  zIndex: 1030,
  marginBottom: "1rem",
};

const bodyTelaToda: React.CSSProperties = {
  height: "-webkit-fill-available",
};

const AreaMensagem: React.CSSProperties = {
  paddingBottom: "1rem",
  overflowY: "auto",
  height: "33rem",
};
