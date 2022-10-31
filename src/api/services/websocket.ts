import WebSocket from 'ws'
import saveWsDataonDB from '../middlewares/saveData';
class ConnectWs {
    ws: WebSocket;
    handshake(url: string) {

        const ws = new WebSocket(url)
        this.ws = ws
        return ws


    }



    getMensages() {
        this.ws.onmessage = async (event) => {

            saveWsDataonDB(event.data)
        }
    }




}

export default ConnectWs