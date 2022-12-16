import WebSocket from 'ws'
import saveWsDataonDB from '../controllers/saveData';
class ConnectWs {
    ws: WebSocket;
    handshake(url: string) {

        const ws = new WebSocket(url)
        this.ws = ws
        return ws


    }



    getMensages(entry: number, interval: number) {
        //entry = how many entry will be saved on database per interval
        //interval = how many minutes interval
        let entryCounter = 0
        let maximumEntrys = 1440 / interval
        let intervalCounter = 0

        this.ws.onmessage = async (event) => {
            if (entryCounter < entry && intervalCounter < maximumEntrys) {
                setTimeout(() => saveWsDataonDB(event.data), interval * 60 * 1000)

                entryCounter++
            }
        }


    }




}

export default ConnectWs