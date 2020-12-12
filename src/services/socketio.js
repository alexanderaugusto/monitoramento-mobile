import socketio from "socket.io-client"

const baseURL = "https://monitoramento-de-vaga-api.herokuapp.com"

const socket = socketio(baseURL)

export const onChangeVaga = (callback) => {
  socket.on("ATUALIZAR_VAGA", vaga => callback(JSON.parse(vaga)))
}


