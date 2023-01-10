import WebSocket from 'ws'
class ConnectWs {
    ws: WebSocket;
    handshake(url: string) {

        const ws = new WebSocket(url)
        this.ws = ws
        return ws


    }



    getMensages(interval: number, anotherWs: WebSocket) {
        this.ws.onmessage = (event) => {
            setTimeout(() => {
                console.log("Data received at " + new Date().toLocaleTimeString())
                anotherWs.send(event.data.toString())
            }, interval * 60 * 1000)


        }
    }

    destroy() {
        this.ws.close()
    }

}

export default ConnectWs