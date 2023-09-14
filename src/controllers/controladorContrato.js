import {ServicioContrato} from "../services/servicioContrato.js"


export class ControladorContratos{
    constructor(){}

    async registraFirma(req, res){
     
        console.log(req.body);

        if (!req.files || Object.keys(req.files).length === 0) {
          return res.status(400).send('No files were uploaded.');
        }
       
    }

    async registrarContrato(peticion, respuesta){

        let datosContrato=peticion.body;

        let fileFirma=peticion.files.imagen;
        let servicioContrato=new ServicioContrato()
        
        try {

            if (!peticion.files || Object.keys(peticion.files).length === 0) {
            return respuesta.status(400).json({
                mensaje:"No se cargo firma"
            });
          }else{

            console.log(datosContrato.numID)
            fileFirma.mv(`./uploads/${datosContrato.numID}-${fileFirma.name}`, () => { });

            datosContrato.image={
            tempFilePath:fileFirma.tempFilePath,
            name:`${datosContrato.numID}-${fileFirma.name}`
            }
            
            await servicioContrato.registrarContrato(datosContrato)
            respuesta.status(200).json({
                mensaje:"Dato Guardado!!"
            });
          }
            
        } catch (errorPeticion) {
            respuesta.status(500).json({
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
            respuesta.status(404).json({
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
            respuesta.status(404).json({
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
            respuesta.status(500).json({
                mesaje:"Error "+errorPeticion,
            });
        }
    }
   
}