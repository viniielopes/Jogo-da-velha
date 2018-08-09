import * as express from "express";
import * as http from "http";
import * as next from "next";
import { wsJogoDaVelha } from "./WebSocket/jogodavelha";
import { wsMensagens } from "./WebSocket/mensagens";

const app = express();
const httpServer = http.createServer(app);

wsJogoDaVelha(httpServer);
wsMensagens(httpServer);

const porta = process.env.PORT || 3000;
// const porta = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";

const nextAPP = next({ dev, dir: "./dist" });
const nextHandler = nextAPP.getRequestHandler();

nextAPP.prepare().then(() => {
  app.get("/", (req, res) => {
    nextAPP.render(req, res, "/index");
  });

  app.get("/mensagens", (req, res) => {
    nextAPP.render(req, res, "/mensagens");
  });

  app.get("*", (req, res) => {
    return nextHandler(req, res);
  });

  httpServer.listen(porta, (err) => {
    if (err) {
      // tslint:disable-next-line:no-console
      console.log(err);
      return;
    }
    // tslint:disable-next-line:no-console
    console.log(`SERVIDOR INICIOU NA PORTA: ${porta}`);
  });
});
