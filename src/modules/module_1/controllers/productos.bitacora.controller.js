import productosBitacoraService from "../services/productos.bitacora.service.js";

// ALL PRODUCTS LOGS
const readAllLogsProducts = (req, res) => {
    productosBitacoraService
        .readAllLogsProducts()
        .then((result) => {
            res.status(200).json({
                message: "Products logs retrieved succesfully",
                // SHOW ONLY NECESSARY DATA
                data: result[0][0]
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

// PRODUCT LOG BY ID
const readLogProductByID = (req, res) => {
    // EXTRACT ID FOR PRODUCT
    const { id } = req.params;

    productosBitacoraService
        .readLogProductByID(id)
        .then((result) => {
            res.status(200).json({
                message: "Product log retrieved succesfully",
                // SHOW ONLY NECESSARY DATA
                data: result[0][0]
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

export default {
    readAllLogsProducts,
    readLogProductByID
};