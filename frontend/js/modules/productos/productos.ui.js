import apijs from "../../core/productos.api.js";

document.addEventListener("DOMContentLoaded", () => {
    initProductsPage();
});

function initProductsPage() {
    const btnMostrarProductos = document.getElementById("btnMostrarProductos");
    const btnCrearProducto = document.getElementById("btnCrearProducto");
    const btnBuscarProducto = document.getElementById("btnBuscarProducto");
    const btnMostrarBitacora = document.getElementById("btnMostrarBitacora");
    const btnBuscarBitacora = document.getElementById("btnBuscarBitacora");

    btnMostrarProductos.addEventListener("click", renderProductsTable);
    btnCrearProducto.addEventListener("click", renderProductForm);
    btnBuscarProducto.addEventListener("click", renderSearchByID);
    btnMostrarBitacora.addEventListener("click", renderBitacoraTable);
    btnBuscarBitacora.addEventListener("click", renderSearchForm);
}

function clearSections() {
    document.getElementById("form-section").innerHTML = "";
    document.getElementById("table-section").innerHTML = "";
    document.getElementById("bitacora-section").innerHTML = "";
}

async function renderProductsTable() {
    clearSections();

    const tableSection = document.getElementById("table-section");

    try {
        const response = await apijs.getProducts();
        const productos = response.data;

        const table = document.createElement("table");
        table.border = "1";

        table.innerHTML = `
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Descripción</th>
                    <th>Precio Unitario</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody id="productos-tbody"></tbody>
        `;
        tableSection.appendChild(table);

        const tbody = document.getElementById("productos-tbody");

        productos.forEach(product => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${product.id_producto}</td>
                <td>${product.descripcion}</td>
                <td>${product.precio_unitario}</td>
                <td>
                    <button onclick="editProduct(${product.id_producto}, '${product.descripcion}', ${product.precio_unitario})">
                        Editar
                    </button>
                    <button onclick="removeProduct(${product.id_producto})">
                        Eliminar
                    </button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }
    catch(error) {
        tableSection.innerHTML = `<p>Error al cargar productos: ${error.message}</p>`;
    }
}

function renderProductForm() {
    clearSections();

    const formSection = document.getElementById("form-section");

    const form = document.createElement("form");
    form.id = "formProducto";

    form.innerHTML = `
        <h3>Crear Producto</h3>
    
        <label>Descripción:</label>
        <input type="text" id="descripcion" required>

        <label>Precio Unitario:</label>
        <input type="number" id="precio_unitario" min="0" step="0.01" required>

        <button type="submit">Guardar</button>
    `;
    formSection.appendChild(form);

    form.addEventListener("submit", handleCreateProduct);
}

async function handleCreateProduct(event) {
    event.preventDefault();

    const descripcion = document.getElementById("descripcion").value.trim();
    const precio_unitario = parseFloat(document.getElementById("precio_unitario").value);

    if(!descripcion || precio_unitario <= 0) {
        alert("Datos inválidos");
        return;
    }
    try {
        await apijs.createProduct({
            descripcion,
            precio_unitario
        });
        alert("Producto creado correctamente");

        renderProductsTable();

    }
    catch(error) {
        alert("Error: " + error.message);
    }
}

function renderSearchByID() {
    clearSections();

    const formSection = document.getElementById("form-section");

    const form = document.createElement("form");
    form.id = "formBuscarProducto";

    form.innerHTML = `
        <h3>Buscar Producto por ID</h3>

        <label>ID Producto:</label>
        <input type="number" id="search_id" min="1" required>

        <button type="submit">Buscar</button>
    `;
    formSection.appendChild(form);

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const id = parseInt(document.getElementById("search_id").value);

        if(!id || id <= 0) {
            alert("ID inválido");
            return;
        }
        try {
            const response = await apijs.getProductByID(id);

            renderSingleProduct(response.data);
        }
        catch(error) {
            alert("Error: " + error.message);
        }
    });
}

function renderSingleProduct(product) {
    const tableSection = document.getElementById("table-section");

    tableSection.innerHTML = `
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Descripción</th>
                    <th>Precio Unitario</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${product.id_producto}</td>
                    <td>${product.descripcion}</td>
                    <td>${product.precio_unitario}</td>
                </tr>
            </tbody>
        </table>
    `;
}

window.removeProduct = async function(id) {
    const confirmDelete = confirm("¿Seguro que deseas eliminar este producto?");

    if(!confirmDelete) return;

    try {
        await apijs.deleteProduct(id);

        alert("Producto eliminado correctamente");

        renderProductsTable();

    }
    catch(error) {
        alert("Error: " + error.message);
    }
}

async function renderBitacoraTable() {
    clearSections();

    const section = document.getElementById("bitacora-section");

    try {
        const response = await apijs.getProductsBitacora();
        const registros = response.data;

        renderTable(registros);
    }
    catch(error) {
        section.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function renderSearchForm() {
    clearSections();

    const section = document.getElementById("bitacora-section");

    section.innerHTML = `
        <h3>Buscar Bitácora por ID Producto</h3>
        <input type="number" id="search_bitacora_id" min="1" required>
        <button id="btnBuscarNow">Buscar</button>
        <div id="resultBitacora"></div>
    `;

    document.getElementById("btnBuscarNow")
        .addEventListener("click", async () => {

        const id = parseInt(document.getElementById("search_bitacora_id").value);

        if(!id || id <= 0) {
            alert("ID inválido");
            return;
        }

        try {
            const response = await apijs.getProductBitacoraByID(id);
            renderTable(response.data);
        }
        catch(error) {
            document.getElementById("resultBitacora")
                .innerHTML = `<p>Error: ${error.message}</p>`;
        }
    });
}

function renderTable(registros) {
    const section = document.getElementById("bitacora-section");

    if(!registros || registros.length === 0) {
        section.innerHTML = "<p>No hay registros</p>";
        return;
    }

    let html = `
        <table border="1">
            <thead>
                <tr>
                    <th>ID Bitácora</th>
                    <th>ID Producto</th>
                    <th>Fecha</th>
                    <th>Usuario</th>
                    <th>Operación</th>
                </tr>
            </thead>
            <tbody>
    `;

    registros.forEach(reg => {
        html += `
            <tr>
                <td>${reg.id_productos_bitacora}</td>
                <td>${reg.id_producto}</td>
                <td>${reg.fecha}</td>
                <td>${reg.usuario}</td>
                <td>${reg.operacion}</td>
            </tr>
        `;
    });

    html += "</tbody></table>";

    section.innerHTML = html;
}

window.editProduct = function(id, descripcion, precio_unitario) {
    clearSections();

    const formSection = document.getElementById("form-section");

    const form = document.createElement("form");
    form.id = "formEditarProducto";

    form.innerHTML = `
        <h3>Editar Producto</h3>

        <label>Descripción:</label>
        <input type="text" id="edit_descripcion" value="${descripcion}" required>

        <label>Precio Unitario:</label>
        <input type="number" id="edit_precio_unitario" value="${precio_unitario}" min="0" step="0.01" required>

        <button type="submit">Actualizar</button>
    `;
    formSection.appendChild(form);

    form.addEventListener("submit", async(event) => {
        event.preventDefault();

        const nuevaDescripcion = document.getElementById("edit_descripcion").value.trim();
        const nuevoPrecio = parseFloat(document.getElementById("edit_precio_unitario").value);

        if(!nuevaDescripcion || nuevoPrecio <= 0) {
            alert("Datos inválidos");
            return;
        }
        try {
            await apijs.updateProduct(id, {
                descripcion: nuevaDescripcion,
                precio_unitario: nuevoPrecio
            });
            alert("Producto actualizado correctamente");

            renderProductsTable();
        }
        catch(error) {
            alert("Error: " + error.message);
        }
    });
}