# Integrated Management System

Proyecto desarrollado en **MySQL**, enfocado en la creación de una base de
datos relacional y un conjunto completo de **Stored Procedures** para gestionar productos,
ventas y detalles de venta.

Incluye procedimientos para operaciones **CRUD**, validaciones mediante *handlers* con
*SIGNAL*, así como una estructura modular orientada a la integridad de datos.

---

### Estructura de la Base de Datos

El sistema está divido en tres tablas principales:

**1. productos**
Contiene el catálogo de productos disponibles.
Campos:
- *id_producto* (PK).
- *descripcion*.
- *precio_unitario*.

**2. ventas_enc**
Tabla que almacena el encabezado de cada venta.
Campos:
- *id_venta_enc* (PK).
- *fecha*.
- *total*.

**3. ventas_det**
Registra los detalles asociados a cada venta: cantidad, precio individual, IVA, etc.
Campos:
- *id_venta_det* (PK).
- *id_venta_enc*.
- *id_producto*.

---

### Funcionalidades del Proyecto

El proyecto implementa un conjunto de Stored Procedures organizados por módulo:

**Productos**
Inlcuye procedimientos para:
- Crear productos.
- Leer proudctos (por ID o todos).
- Actualizar productos.
- Eliminar productos.
- Validar existencia (*producto_no_existe*).

**Objetivo:** Facilitar la administración del catálogo con validaciones internas para evitar
inconcistencias.

**Ventas - Encabezado (*ventas_enc*)**
Procedimientos para:
- Insertar una venta.
- Consultar venta por ID o listar todas.
- Actualizar encabezados.
- Eliminar una venta.
- Validar existencia (*venta_enc_no_existe*).

**Objetivo:** Asegurar el manejo correcto de totales y fechas de las ventas registradas.

**Ventas - Detalle (*ventas_det*)**
Procedimientos para:
- Insertar líneas de detalle.
- Leer datalles (por ID o global).
- Actualizar registros.
- Eliminar registros.
- Validar existencia (*ventas_det_no_existe*)

**Objetivo:** Controlar cantidades, IVA y precios asociados a los productos vendidos.

**Transacción de Venta Completa**
El procedimiento *venta_completa_insert* automatiza la operación más importante:
**1. ** Inserta el encabezado de la venta.
**2. ** Obtiene el ID generado.
**3. ** Inserta el datalle correspondiente.
**4. ** Relaciona todo correctamente en la base de datos.

**Obejtivo:** Este procedimiento integra ambos módulos y simula un flujo real de registro de ventas.

---

### Validaciones y Manejo de Errores

El proyecto utiliza:
- *SIGNAL SQLSTATE '45000'*.
- Mensajes perzonalizados de error.

Esto permite interrumpir procedimientos cuando:
- Un producto no existe.
- Un encabezado de venta no existe.
- Un detalle de venta no existe.

Asegurando así la integridad referencial del sistema.

---

### Objetivo

Este proyecto busca reforzar:
- Diseño de base de datos relacionales.
- Modularización con Sotred Procedures.
- Uso de validaciones y control de errores.
- Flujo completo de operaciones CRUD.
- Implementación de lógica de negocio dentro del motor SQL.

---

### Notas Finales

Este repositorio contiene el código SQL necesario para levantar la estrucutra completa del
sistema, incluyendo:
- Creación de tablas.
- Procedimientos para CRUD.
- Validaciones internas.
- Inserción de ventas completas.