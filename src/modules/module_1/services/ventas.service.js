import db from "../../../config/db.js";

// ADD PARAMETER 'header' FOR CREATE HEADER
const createHeader = (header) => {
    return new Promise((resolve, reject) => {
        // NECESSARY QUERY
        const query = "CALL ventas_enc_insert(?);";
        
        // EXTRACT NECESSARY DATA
        const { total } = header;

        // THE PARAMETER IS ASSOCIATED WITH THE SYMBOL '?' ON NECESSARY QUERY
        db.execute(query, [total])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//
const createDetail = (detail) => {
    return new Promise((resolve, reject) => {
        // NECESSARY QUERY
        const query = "CALL ventas_det_insert(?, ?, ?, ?, ?);";

        // EXTRACT NECESSARY DATA
        const { id_venta_enc, id_producto, cantidad, iva, precio_venta } = detail;

        // THE PARAMETERS ARE ASSOCIATED WITH THE SYMBOLS '?' ON NECESSARY QUERY
        db.execute(query, [id_venta_enc, id_producto, cantidad, iva, precio_venta])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

export default {
    createHeader,
    createDetail
};