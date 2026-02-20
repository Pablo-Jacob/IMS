import productosBitacoraService from "../services/productos.bitacora.service.js";

// ALL PRODUCTS LOGS
const readAllLogsProducts = async(req, res, next) => {
    try {
        const result = await productosBitacoraService.readAllLogsProducts();

        res.status(200).json({
            message: "Product retrieved successfully",
            data: result[0][0]
        });
    }
    catch(err) {
        next(err);
    }
};

// PRODUCT LOG BY ID
const readLogProductByID = async(req, res, next) => {
    // EXTRACT ID FOR PRODUCT
    const { id } = req.params;

    try {
        const result = await productosBitacoraService.readLogProductByID(id);

        res.status(200).json({
            message: "Product log retrieved succesfully",
            data: result[0][0]
        });
    }
    catch(err) {
        next(err);
    }
};

export default {
    readAllLogsProducts,
    readLogProductByID
};