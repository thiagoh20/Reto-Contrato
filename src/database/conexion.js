import mongoose from "mongoose";

import * as dotenv from 'dotenv'
dotenv.config()

export async function establecerConexion(){
    const connection="mongodb+srv://thiago:bHk5MS8BcIRQxO2k@clasedb.8fn5zob.mongodb.net/?retryWrites=true&w=majority"
        await mongoose.connect(connection)
        .then(() => console.log("Database Connected Successfully"))
      .catch( (err) => console.log('Fallo Conexion'+err))
    }