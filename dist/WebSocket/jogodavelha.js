"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sockIO = require("socket.io");
exports.wsJogoDaVelha = (httpServer) => {
    const io = sockIO(httpServer, { path: "/jogodavelha" });
    io.on("connect", (client) => {
        // tslint:disable-next-line:no-console
        console.log("CONECTOU NO WS DO JOGO DA VELHA");
        // tslint:disable-next-line:no-console
        client.on("enviaMSG", (msg) => io.emit("recebeMSG", msg));
        client.on("fezJogada", (jogada, vezJogador) => client.broadcast.emit("fezJogada", jogada, vezJogador));
        client.on("disconnect", () => {
            // tslint:disable-next-line:no-console
            console.log("DISCONECTOU DO JOGO DA VELHA");
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9nb2RhdmVsaGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvV2ViU29ja2V0L2pvZ29kYXZlbGhhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esb0NBQW9DO0FBRXZCLFFBQUEsYUFBYSxHQUFHLENBQUMsVUFBa0IsRUFBRSxFQUFFO0lBQ2xELE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN4RCxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQzFCLHNDQUFzQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFFL0Msc0NBQXNDO1FBQ3RDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTFELE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQzVDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQ3ZELENBQUM7UUFFRixNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7WUFDM0Isc0NBQXNDO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmVyIH0gZnJvbSBcImh0dHBcIjtcclxuaW1wb3J0ICogYXMgc29ja0lPIGZyb20gXCJzb2NrZXQuaW9cIjtcclxuXHJcbmV4cG9ydCBjb25zdCB3c0pvZ29EYVZlbGhhID0gKGh0dHBTZXJ2ZXI6IFNlcnZlcikgPT4ge1xyXG4gIGNvbnN0IGlvID0gc29ja0lPKGh0dHBTZXJ2ZXIsIHsgcGF0aDogXCIvam9nb2RhdmVsaGFcIiB9KTtcclxuICBpby5vbihcImNvbm5lY3RcIiwgKGNsaWVudCkgPT4ge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcclxuICAgIGNvbnNvbGUubG9nKFwiQ09ORUNUT1UgTk8gV1MgRE8gSk9HTyBEQSBWRUxIQVwiKTtcclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxyXG4gICAgY2xpZW50Lm9uKFwiZW52aWFNU0dcIiwgKG1zZykgPT4gaW8uZW1pdChcInJlY2ViZU1TR1wiLCBtc2cpKTtcclxuXHJcbiAgICBjbGllbnQub24oXCJmZXpKb2dhZGFcIiwgKGpvZ2FkYSwgdmV6Sm9nYWRvcikgPT5cclxuICAgICAgY2xpZW50LmJyb2FkY2FzdC5lbWl0KFwiZmV6Sm9nYWRhXCIsIGpvZ2FkYSwgdmV6Sm9nYWRvcilcclxuICAgICk7XHJcblxyXG4gICAgY2xpZW50Lm9uKFwiZGlzY29ubmVjdFwiLCAoKSA9PiB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRElTQ09ORUNUT1UgRE8gSk9HTyBEQSBWRUxIQVwiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG4iXX0=