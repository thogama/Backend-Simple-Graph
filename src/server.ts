import ConnectBinance from './api/services/ConnectBinance'
import WebSocket from "ws";






const wss = new WebSocket.Server({ port: 3333 })

wss.on("connection", ws => {
    console.log("client connected")
    const ConnectionBinance = new ConnectBinance
    ConnectionBinance.init()

    ConnectionBinance.connection.getMensages(0.5, ws)



    ws.on("close", () => {
        console.log("Closing this ws")
        ConnectionBinance.connection.destroy()
        wss.close()
    })
})