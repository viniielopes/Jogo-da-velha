import { Server } from "http";
import * as sockIO from "socket.io";

export const wsMensagens = (httpServer: Server) => {
  const io = sockIO(httpServer);
  io.on("connect", (client) => {
    // tslint:disable-next-line:no-console
    console.log("CONECTOU EM MENSAGENS");

    // tslint:disable-next-line:no-console
    client.on("enviaMSG", (msg) => io.emit("recebeMSG", msg));

    client.on("fezJogada", (jogada, vezJogador) =>
      client.broadcast.emit("fezJogada", jogada, vezJogador)
    );

    client.on("disconnect", () => {
      // tslint:disable-next-line:no-console
      console.log("DISCONECTOU DE MENSAGENS");
    });
  });
};
