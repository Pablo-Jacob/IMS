import productosServices from "../services/productos.service.js";

/*
    CRUD PRODUCTS
*/

// CREATE PRODUCT
const createProduct = async(req, res, next) => {
    // SEND A MESSAGE IN HTML FORMAT
    // res.send(`<h4>Creating Product>/h4>`);

    // EXTRACT DATA FOR PRODUCT
    const product = req.body;

    try {
        const result = await productosServices.createProduct(product);

        res.status(200).json({
            message: "Product created successfully",
            data: product
        });
    }
    catch(err) {
        next(err);
    }
};

/*
    READ PRODUCTS
*/

// ALL PRODUCTS
const readAllProucts = async(req, res, next) => {
    // SEND A MESSAGE IN HTML FORMAT
    // res.send(`<h4>Reading All Products>/h4>`);

    try {
        const result = await productosServices.readAllProucts();

        res.status(200).json({
            message: "Products retrieved successfully",
            data: result[0][0]
        });
    }
    catch(err) {
        next(err);
    }
};

// PRODUCT BY ID
const readProductByID = async(req, res, next) => {
    // SEND A MESSAGE IN HTML FORMAT
    // res.send(`<h4>Reading Product by ID>/h4>`);

    // EXTRACT ID FOR PRODUCT
    const { id } = req.params;

    try {
        const result = await productosServices.readProductByID(id);

        res.status(200).json({
            message: "Product created successfully",
            data: result[0][0][0]
        });
    }
    catch(err) {
        next(err);
    }
};

// UPDATE PRODUCT
const updateProduct = async(req, res, next) => {
    // SEND A MESSAGE IN HTML FORMAT
    // res.send(`<h4>Updating Product>/h4>`);

    // EXTRACT DATA FOR PRODUCT
    const { id } = req.params;
    const product = req.body;

    try {
        const result = await productosServices.updateProduct(id, product);

        res.status(200).json({
            message: "Product update successfully",
            data: product
        });
    }
    catch(err) {
        next(err);
    }
};

// DELETE PRODUCT
const deleteProduct = async(req, res, next) => {
    // SEND A MESSAGE IN HTML FORMAT
    // res.send(`<h4>Deleting Product>/h4>`);

    // EXTRACT DATA FOR PRODUCT
    const { id } = req.params;

    try {
        const result = await productosServices.deleteProduct(id);

        res.status(200).json({
            message: "Product deleted successfully",
            data: id
        });
    }
    catch(err) {
        next(err);
    }
};

export default {
    createProduct,
    readAllProucts,
    readProductByID,
    updateProduct,
    deleteProduct
};