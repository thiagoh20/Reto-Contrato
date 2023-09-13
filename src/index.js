import * as dotenv from 'dotenv'
dotenv.config()
import {App} from "./app.js";

let servidor =new App();

servidor.iniciarServidor();