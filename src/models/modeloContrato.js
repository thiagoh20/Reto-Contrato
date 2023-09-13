import mongoose from "mongoose";

const Schema=mongoose.Schema;

const Contrato=new Schema({
    nombreAutorizante:{
        type:String,
        
    },
    nombreAgencia:{
        type:String,
        
    },
    numID:{
        type:String,
        
    },
    ciudad:{
        type:String,
        
    },
    firma:{
        type:[String],
        
    },
    fecha:{
        type:Date,
    }

});
 export const modeloContrato=mongoose.model('contrato',Contrato)