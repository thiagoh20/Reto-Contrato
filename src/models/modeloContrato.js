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
    image:{
        tempFilePath:String,
        name:String
        
    },
},{
    timestamps:true

});
 export const modeloContrato=mongoose.model('contratos',Contrato)