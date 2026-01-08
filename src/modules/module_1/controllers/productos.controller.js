import productosServices from "../services/productos.service.js";

/*
    CRUD PRODUCTS
*/

// CREATE PRODUCT
const createProduct = (req, res) => {
    // SEND A MESSAGE IN HTML FORMAT
    // res.send(`<h4>Creating Product>/h4>`);

    // EXTRACT DATA FOR PRODUCT
    const product = req.body;

    productosServices
        .createProduct(product)
        .then(() => {
            res.status(200).json({
                message: "Product created successfully",
                // SHOW ONLY NECESSARY DATA
                data: product
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

/*
    READ PRODUCTS
*/

// ALL PRODUCTS
const readAllProucts = (req, res) => {
    // SEND A MESSAGE IN HTML FORMAT
    // res.send(`<h4>Reading All Products>/h4>`);

    productosServices
        .readAllProucts()
        .then((result) => {
            res.status(200).json({
                message: "Products retrieved successfully",
                // SHOW ONLY NECESSARY DATA
                data: result[0][0]
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

// PRODUCT BY ID
const readProductByID = (req, res) => {
    // SEND A MESSAGE IN HTML FORMAT
    // res.send(`<h4>Reading Product by ID>/h4>`);

    // EXTRACT ID FOR PRODUCT
    const { id } = req.params;

    productosServices
        .readProductByID(id)
        .then((result) => {
            res.status(200).json({
                message: "Product retrieved successfully",
                // SHOW ONLY NECESSARY DATA
                data: result[0][0]
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

// UPDATE PRODUCT
const updateProduct = (req, res) => {
    // SEND A MESSAGE IN HTML FORMAT
    // res.send(`<h4>Updating Product>/h4>`);

    // EXTRACT DATA FOR PRODUCT
    const { id } = req.params;
    const product = req.body;

    productosServices
        .updateProduct(id, product)
        .then(() => {
            res.status(200).json({
                message: "Product update successfully",
                // SHOW ONLY NECESSARY DATA
                data: product
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

// DELETE PRODUCT
const deleteProduct = (req, res) => {
    // SEND A MESSAGE IN HTML FORMAT
    // res.send(`<h4>Deleting Product>/h4>`);

    // EXTRACT DATA FOR PRODUCT
    const { id } = req.params;

    productosServices
        .deleteProduct(id)
        .then(() => {
            res.status(200).json({
                message: "Product deleted successfully"
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

export default {
    createProduct,
    readAllProucts,
    readProductByID,
    updateProduct,
    deleteProduct
};