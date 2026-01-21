import db from "../../../config/db.js";

const readAllLogsSales = () => {
    return new Promise((resolve, reject) => {
        // NECESSARY QUERY
        const query = "CALL ventas_enc_bitacora_read();";

        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

const readLogSalesByID = (id) => {
    return new Promise((resolve, reject) => {
        // NECESSARY QUERY
        const query = "CALL ventas_enc_bitacora_read_id(?);";
        
        // THE PARAMETTER IS ASSOCIATED WIHT THE SYMBOL '?' ON NECESSARY QUERY
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

export default {
    readAllLogsSales,
    readLogSalesByID
};