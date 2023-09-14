import  express from "express";

import { ControladorContratos } from "../controllers/controladorContrato.js";

let controladorContratos=new ControladorContratos();

export let rutas=express.Router();

//rutas.post('/resgistrarFirma',controladorContratos.registraFirma)
rutas.post('/resgistrarContrato',controladorContratos.registrarContrato)
rutas.get('/todosContratos',controladorContratos.todosContratos)
rutas.get('/buscarContrato/:idContrato',controladorContratos.buscarContrato)
rutas.put('/actualizarContrato/:idContrato',controladorContratos.editarContrato)
rutas.delete('/eliminarContrato/:idContrato',controladorContratos.eliminarContrato)


  