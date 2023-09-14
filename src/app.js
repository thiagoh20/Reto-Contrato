import express from "express";
import cors from "cors";
import { rutas} from "./routes/employes.routes.js";
import { establecerConexion } from "./database/conexion.js";
import fileUpload from "express-fileupload";

export class App{
    constructor(){
        this.app=express() 
        this.conectarDB()
        this.enrutarPeticiones()
       
    }

    iniciarServidor(){
        this.app.listen(3002,()=>console.log('Servidor activo'));
    }

    enrutarPeticiones(){
        this.app.use(cors());
         

        this.app.use(express.json());
       this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : './uploads'
        }));
        this.app.use("/",rutas);
        
        
    }
    conectarDB(){
        establecerConexion();
    }
}