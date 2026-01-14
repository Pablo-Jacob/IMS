import ventasEncBitacoraService from "../services/ventas.enc.bitacora.service.js";

// ALL SALES HEADER LOGS
const readAllLogsSales = (req, res) => {
    ventasEncBitacoraService
        .readAllLogsSales()
        .then((result) => {
            res.status(200).json({
                message: "Sales headers retrieved succesfully",
                // SHOW ONLY NECESSARY DATA
                data: result[0][0]
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

// SALES HEADER LOG BY ID
const readLogSalesByID = (req, res) => {
    // EXTRACT ID FOR SALE
    const { id } = req.params;

    ventasEncBitacoraService
        .readLogSalesByID(id)
        .then((result) => {
            res.status(200).json({
                message: "Sale header retrieved succesfully",
                // SHOW ONLY NECESSARY DATA
                data: result[0][0]
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

export default {
    readAllLogsSales,
    readLogSalesByID
};