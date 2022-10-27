import WebSocket from 'ws';

const socket = new WebSocket("ws://localhost:3000");

socket.addEventListener("open", async () => {
    // envia a mensagem para o servidor
    for (let index = 0; index < 10; index++) {

        socket.send(JSON.stringify({
            mensagem: `Oi eu sou seu cliente e estou me conectando a você!`,
            numero: index
        }));
        await sleep(1000)

    }

});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// fica escutando o canal "message" quando o servidor enviar algo nesse canal
// os dados por padrão são buffer e vamos converter para JSON e em seguida dar um
socket.addEventListener("message", ({ data }) => {

    const packet = JSON.parse(data);

    console.log(packet)
});