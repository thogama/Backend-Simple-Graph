import express from "express";
import ConnectBinance from './api/services/ConnectBinance'
import { routes } from "./api/routes/getData";


const app = express();


const ConnectionBinance = new ConnectBinance

ConnectionBinance.init()
ConnectionBinance.connection.getMensages(1,1)

app.use(routes)

app.listen(process.env.PORT || 3333);


