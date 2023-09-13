import {ServicioContrato} from "../services/servicioContrato.js"


export class ControladorContratos{
    constructor(){}

    async registrarContrato(peticion, respuesta){
        let datosContrato=peticion.body;
        let servicioContrato=new ServicioContrato()
        try {
            await servicioContrato.registrarContrato(datosContrato)
            respuesta.status(200).json({
                mensaje:"Dato Guardado!!"
            });
        } catch (errorPeticion) {
            respuesta.status(400).json({
                mesaje:"Error"+errorPeticion,
            });
        }
    }

    async todosContratos(peticion, respuesta){
        let servicioContrato=new ServicioContrato()
        try {
           
            respuesta.status(200).json({
                mensaje:"Exitoso Todos los contratos",
                "contrato": await servicioContrato.todosContratos()
            });
        } catch (errorPeticion) {
            respuesta.status(400).json({
                mesaje:"Error "+errorPeticion,
            });
        }
    }
    async buscarContrato(peticion, respuesta){
        let servicioContrato=new ServicioContrato()
        let idContrato=peticion.params.idContrato;
        
        try {
           
            respuesta.status(200).json({
                mensaje:"Exitoso Buscando Contrato "+idContrato,
                contrato: await servicioContrato.buscarContrato(idContrato)
            });
        } catch (errorPeticion) {
            respuesta.status(400).json({
                mesaje:"Error "+errorPeticion,
            });
        }
    }

    async editarContrato(peticion, respuesta){ 
        let servicioContrato=new ServicioContrato()
        let idContrato=peticion.params.idContrato;
        let datosNuevosContrato=peticion.body ;
       
        try {
           await servicioContrato.editarContrato(idContrato,datosNuevosContrato)
            respuesta.status(200).json({
                mensaje:"Exitoso Editado Contrato "+idContrato,
                contrato: await servicioContrato.buscarContrato(idContrato)
            });
        } catch (errorPeticion) {
            respuesta.status(400).json({
                mesaje:"Error "+errorPeticion,
            });
        }
    }
    async eliminarContrato(peticion, respuesta){ 
        let servicioContrato=new ServicioContrato()
        let idContrato=peticion.params.idContrato;
    
       
        try {
           await servicioContrato.eliminarContrato(idContrato)
            respuesta.status(200).json({
                mensaje:"Exitoso Eliminado Contrato "+idContrato,
                contrato: await servicioContrato.buscarContrato(idContrato)
            });
        } catch (errorPeticion) {
            respuesta.status(400).json({
                mesaje:"Error "+errorPeticion,
            });
        }
    }
}