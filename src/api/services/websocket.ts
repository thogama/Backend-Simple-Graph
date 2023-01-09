import WebSocket from 'ws'
import saveWsDataonDB from '../controllers/saveData';
class ConnectWs {
    ws: WebSocket;
    handshake(url: string) {

        const ws = new WebSocket(url)
        this.ws = ws
        return ws


    }



    getMensages(interval: number) {
        this.ws.onmessage = async (event) => {
            setTimeout(() => {
                saveWsDataonDB(event.data)
                console.log("Data received at " + new Date().toLocaleTimeString())
            }, interval * 60 * 1000)


        }


    }

}

export default ConnectWs