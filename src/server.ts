import express from "express";
import ConnectBinance from './api/controllers/ConnectBinance'
import { routes } from "./api/routes/getData";


const app = express();


const ConnectionBinance = new ConnectBinance

ConnectionBinance.init()
ConnectionBinance.connection.getMensages()

app.use(routes)

app.listen(process.env.port || 3333);

console.log("http://localhost:3333");

