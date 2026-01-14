import db from "../../../config/db.js";

const readAllLogsProducts = () => {
    return new Promise((resolve, reject) => {
        // NECESARY QUERY
        const query = "CALL productos_bitacora_read();";

        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

const readLogProductByID = (id) => {
    return new Promise((resolve, reject) => {
        // NECESSARY QUERY
        const query = "CALL productos_bitacora_read_id(?);";

        // THE PARAMETER IS ASSOCIATED WITH THE SYMBOL '?' ON NECESSARY QUERY
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

export default {
    readAllLogsProducts,
    readLogProductByID
};