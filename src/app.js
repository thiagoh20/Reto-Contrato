import express from "express";
import cors from "cors";
import { rutas} from "./routes/employes.routes.js";
import { establecerConexion } from "./database/conexion.js";

export class App{
    constructor(){
        this.app=express() 
        this.conectarDB()
        this.enrutarPeticiones()
       
    }

    iniciarServidor(){
        this.app.listen(3001,()=>console.log('Servidor activo'));
    }

    enrutarPeticiones(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use("/",rutas);
    }
    conectarDB(){
        establecerConexion();
    }
}