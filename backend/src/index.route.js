import { Router } from "express";
import productosRouter from "./modules/module_1/routes/productos.route.js";
import ventasRouter from "./modules/module_1/routes/ventas.route.js";
import productosBitacoraRouter from "./modules/module_1/routes/productos.bitacora.route.js";
import ventasEncBitacoraRouter from "./modules/module_1/routes/ventas.enc.bitacora.route.js";

const indexRouter = Router();

// PREFIX FOR THE ROUTES
const prefix = "/api";

// MAIN ROUTE
indexRouter.get(prefix, (req, res) => {
    // SEND MESSAGE IN HTML FORMAT
    res.send(`<h4>API OK</h4>`);
});

// ROUTES FROM 'productos.bitacora.route.js' file
indexRouter.use(`${prefix}/productos/bitacora`, productosBitacoraRouter);

// ROUTES FROM 'ventas.enc.bitacora.route.js' file
indexRouter.use(`${prefix}/ventas/header/bitacora`, ventasEncBitacoraRouter);

// ROUTES FROM 'productos.route.js' file
indexRouter.use(`${prefix}/productos`, productosRouter);

// ROUTES FROM 'ventas.route.js' file
indexRouter.use(`${prefix}/ventas`, ventasRouter);

export default indexRouter;