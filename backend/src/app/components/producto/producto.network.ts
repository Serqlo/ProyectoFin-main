import express, { Router } from "express";
import responseModule from "../../modules/response.module";
import productoController from "./producto.controller"

const router: Router = express.Router();

router.get('/all', async (req: express.Request, res: express.Response)=>{
    try {
        let productos =  await productoController.getAllProductos();
        responseModule.success(req, res, productos);
    }catch(error){ 
        responseModule.error(req,res);
    }    
})
router.get('/:id', async (req: express.Request, res: express.Response)=>{
    try {
        const id: string = req.params['id'];
        let productos =  await productoController.getProductoById(id);
        responseModule.success(req, res, productos);
    }catch(error){ 
        responseModule.error(req,res);
    }    
})
router.post('/new', async (req: express.Request, res: express.Response)=>{
    try {
        const producto = req.body;
        let newProducto =  await productoController.addProducto(producto);
        responseModule.success(req, res, newProducto, 201);
    }catch(error){ 
        responseModule.error(req,res);
    }    
})
router.patch('/update', async (req: express.Request, res: express.Response)=>{
    try {
        const id: string = req.params['id'];
        const newProducto = req.body;
        let updateProducto =  await productoController.updateProducto(id, newProducto);
        responseModule.success(req, res, updateProducto, 201);
    }catch(error){ 
        responseModule.error(req,res);
    }    
})



export default router;