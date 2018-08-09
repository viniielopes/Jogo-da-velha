import { Server } from "http";
import * as sockIO from "socket.io";

export const wsJogoDaVelha = (httpServer: Server) => {
  const io = sockIO(httpServer, { path: "/jogodavelha" });
  io.on("connect", (client) => {
    // tslint:disable-next-line:no-console
    console.log("CONECTOU NO WS DO JOGO DA VELHA");

    // tslint:disable-next-line:no-console
    client.on("enviaMSG", (msg) => io.emit("recebeMSG", msg));

    client.on("fezJogada", (jogada, vezJogador) =>
      client.broadcast.emit("fezJogada", jogada, vezJogador)
    );

    client.on("disconnect", () => {
      // tslint:disable-next-line:no-console
      console.log("DISCONECTOU DO JOGO DA VELHA");
    });
  });
};
