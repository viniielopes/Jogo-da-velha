import * as React from "react";
import * as socketIO from "socket.io-client";

interface IAppState {
  mensagens: string[];
}

export default class IApp extends React.Component<{}, IAppState> {
  private io: SocketIOClient.Socket;

  constructor(props) {
    super(props);
    this.state = {
      mensagens: [],
    };

    this.exibiMensagens = this.exibiMensagens.bind(this);
  }

  public componentDidMount() {
    this.io = socketIO.connect("http://localhost:3000/");
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
        <h1>Mensagens:</h1>

        {listaMSGS}
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
}
