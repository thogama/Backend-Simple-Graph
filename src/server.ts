// import express from "express";
// import ConnectBinance from './api/services/ConnectBinance'


// const app = express();


// const ConnectionBinance = new ConnectBinance

// ConnectionBinance.init()
// ConnectionBinance.connection.getMensages(0.5)


// app.listen(process.env.PORT || 3333);


import WebSocket from "ws";

const wss = new WebSocket.Server({ port: 3333 })

wss.on("connection", ws => {
    console.log("client connected")

    ws.send(JSON.stringify([10,200,30,400,50]))
    
    

    ws.on("close", () => {
        console.log("client disconnected")
    })
})