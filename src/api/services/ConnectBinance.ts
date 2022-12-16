import ConnectWs from "./websocket"


class ConnectBinance {
    connection: ConnectWs
    init() {
        const connection = new ConnectWs()
        this.connection = connection
        connection.handshake('wss://stream.binance.com:9443/ws/btcusdt@miniTicker')

    }
}
export default ConnectBinance