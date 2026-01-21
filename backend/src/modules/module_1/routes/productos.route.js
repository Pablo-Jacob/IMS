import { Router } from "express";
import productosController from "../controllers/productos.controller.js";

const productosRouter = Router();

/*
    CRUD PRODUCTS
*/

// CREATE PRODUCT
productosRouter.post("/", productosController.createProduct);

/*
    READ PRODUCTS
*/

// ALL PRODUCTS
productosRouter.get("/", productosController.readAllProucts);

// PRODUCT BY ID
productosRouter.get("/:id", productosController.readProductByID);

// UPDATE PRODUCT
productosRouter.put("/:id", productosController.updateProduct);

// DELETE PRODUCT
productosRouter.delete("/:id", productosController.deleteProduct);

export default productosRouter;