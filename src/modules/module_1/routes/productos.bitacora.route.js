import { Router } from "express";
import productosBitacoraController from "../controllers/productos.bitacora.controller.js";

const productosRouter = Router();

// ALL PRODUCTS LOGS
productosRouter.get("/", productosBitacoraController.readAllLogsProducts);

// PRODUCT LOG BY ID
productosRouter.get("/:id", productosBitacoraController.readLogProductByID);

export default productosRouter;