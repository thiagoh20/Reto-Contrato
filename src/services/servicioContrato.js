import { modeloContrato } from "../models/modeloContrato.js";

 export class ServicioContrato{

    constructor(){}
    
    async registrarContrato(datosContrato){
        let contratoNuevo=new modeloContrato(datosContrato)
        return await contratoNuevo.save()
    }

    async todosContratos(){
        let contratos=await modeloContrato.find()
        return contratos
    }
    async buscarContrato(idContrato){
        let contratoConsulta=await modeloContrato.findById(idContrato)
        return contratoConsulta
    }
    async editarContrato(idContrato,datosContrato){
        return  await modeloContrato.findByIdAndUpdate(idContrato,datosContrato)
    }

 }