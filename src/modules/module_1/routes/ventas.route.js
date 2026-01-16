import { Router } from "express";
import ventasController from "../controllers/ventas.controller.js";

const ventasRouter = Router();

// CREATE HEADER
ventasRouter.post("/header", ventasController.createHeader);

// CREATE DETAIL
ventasRouter.post("/detail", ventasController.createDetail);

export default ventasRouter;