import { Router } from "express";
import productosRouter from "./modules/module_1/routes/productos.route.js";

const indexRouter = Router();
// PREFIX FOR THE ROUTES
const prefix = "/api";

// MAIN ROUTE
indexRouter.get(prefix, (req, res) => {
    // SEND MESSAGE IN HTML FORMAT
    res.send(`<h4>API OK</h4>`);
});

// ROUTES FROM 'productos.route.js' file
indexRouter.use(`${prefix}/productos`, productosRouter);

export default indexRouter;