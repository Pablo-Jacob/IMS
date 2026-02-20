const API_BASE_URL = "http://localhost:3000/api";

async function apiRequest(endpoint, method = "GET", body = null) {
    try {
        const options = {
            method: method,
            headers: {
                "Content-Type": "application/json"
            }
        };
        if(body) {
            options.body = JSON.stringify(body);
        }
        const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

        const data = await response.json();

        if(!response.ok) {
            throw new Error(data.message || "Error en la petición");
        }
        return data;
    }
    catch(error) {
        console.error("API ERROR:", error.message);
        throw error;
    }
}

async function getProducts() {
    return await apiRequest("/productos");
}

async function getProductByID(id) {
    return await apiRequest(`/productos/${id}`);
}

async function createProduct(product) {
    return await apiRequest("/productos", "POST", product);
}

async function updateProduct(id, product) {
    return await apiRequest(`/productos/${id}`, "PUT" ,product);
}

async function deleteProduct(id) {
    return await apiRequest(`/productos/${id}`, "DELETE");
}

async function getProductsBitacora() {
    return await apiRequest("/productos/bitacora");
}

async function getProductBitacoraByID(id) {
    return await apiRequest(`/productos/bitacora/${id}`);
}

export default {
    getProducts,
    getProductByID,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductsBitacora,
    getProductBitacoraByID
};