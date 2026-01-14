import { Router } from "express";
import ventasEncBitacoraController from "../controllers/ventas.enc.bitacora.controller.js";

const ventasRouter = Router();

// ALL SALES HEADER LOGS
ventasRouter.get("/", ventasEncBitacoraController.readAllLogsSales);

// SALES LOG BY ID
ventasRouter.get("/:id", ventasEncBitacoraController.readLogSalesByID);

export default ventasRouter;