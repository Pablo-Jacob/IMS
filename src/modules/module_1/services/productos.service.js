import db from "../../../config/db.js";

// ADD PARAMETER 'product' FOR CREATE A PRODUCT
const createProduct = (product) => {
    return new Promise((resolve, reject) => {
        // NECESSARY QUERY
        const query = "CALL productos_insert(?, ?);";

        //EXTRACT NECESSARY DATA
        const { descripcion, precio_unitario } = product;

        // THE PARAMETERS ARE ASSOCIATED WITH THE SYMBOLS '?' ON NECESSARY QUERY
        db.execute(query, [descripcion, precio_unitario])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

const readAllProucts = () => {
    return new Promise((resolve, reject) => {
        // NECESSARY QUERY
        const query = "CALL productos_read();";

        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

// ADD PARAMETER 'id' FOR SEARCH THE NECESSARY PRODUCT
const readProductByID = (id) => {
    return new Promise((resolve, reject) => {
        // NECESSARY QUERY
        const query = "CALL productos_read_id(?);";

        // THE PARAMETER 'id' IS ASSOCIATED WITH THE SYMBOL '?' ON NECESSARY QUERY
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

// ADD PARAMETERS 'id' and 'product' FOR CREATE A PRODUCT
const updateProduct = (id, product) => {
    return new Promise((resolve, reject) => {
        // NECESSARY QUERY
        const query = "CALL productos_update(?, ?, ?);";

        //EXTRACT NECESSARY DATA
        const { descripcion, precio_unitario } = product;

        // THE PARAMETERS ARE ASSOCIATED WITH THE SYMBOLS '?' ON NECESSARY QUERY
        db.execute(query, [id, descripcion, precio_unitario])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

// ADD PARAMETERS 'id' and 'product' FOR CREATE A PRODUCT
const deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
        // NECESSARY QUERY
        const query = "CALL productos_delete(?);";

        // THE PARAMETERS ARE ASSOCIATED WITH THE SYMBOLS '?' ON NECESSARY QUERY
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

export default {
    createProduct,
    readAllProucts,
    readProductByID,
    updateProduct,
    deleteProduct
};