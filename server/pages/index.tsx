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
            <h2
              className="col-12 text-center text-uppercase"
              style={{ color: "cornsilk" }}>
              Mensagens :
            </h2>
          </div>

          <div className="row">
            <div
              className="card col-12 col-lg-6 offset-lg-3 rounded"
              style={AreaMensagem}>
              <div className="card-body" id="txtAreaMensagem">
                {""}
                {listaMSGS}
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-3">
          <div className="row offset-lg-4 mx-1">
            <input
              type="text"
              name="mensagem"
              id="mensagem"
              ref={this.campoMensagem}
              className="form-control col-8 col-lg-5 offset-3"
            />

            <button
              onClick={this.enviarMSG}
              className="btn btn-danger col-lg-1 col-4">
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
        <p key={Math.random()} className="col-12">
          {mensagem}
        </p>
      ));
    }
  };

  private enviarMSG = () => {
    const mensagem = this.campoMensagem.current as HTMLInputElement;
    if (mensagem.value.length > 0) {
      this.io.emit("enviaMSG", mensagem.value);
      this.campoMensagem.current.value = "";
    }
  };

  private ScrollMensagens = () => {
    const ultimamensagem = document.querySelector("p:last-child");
    ultimamensagem.scrollIntoView();
  };
}

const bodyTelaToda: React.CSSProperties = {
  height: "-webkit-fill-available",
  backgroundImage: "url(static/imgs/background.jpg)",
  backgroundRepeat: "repeat",
};

const AreaMensagem: React.CSSProperties = {
  paddingBottom: "1rem",
  overflowY: "auto",
  overflowX: "hidden",
  height: "20rem",
  backgroundColor: "cornsilk",
};
