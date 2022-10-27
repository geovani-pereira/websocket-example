import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 3000 });

server.on("connection", (socket) => {
    // quando o cliente conectar ele irá enviar para o cliente a mensagem hello from server
    socket.send(JSON.stringify({
        mensagem: "Oi eu sou seu servidor e essa é minha resposta"
    }));

    //recebendo os dados do cliente
    // os dados por padrão são buffer e vamos converter para JSON e em seguida dar um log
    socket.on("message", (data) => {

        const packet = JSON.parse(data);

        console.log(packet)

        //enviando uma mensagem para o cliente 
        socket.send(JSON.stringify({
            mensagem: `Recebi sua mensagem numero ${packet.numero}`
        }));

    });
});


