# Integrated Management System (IMS)

Proyecto desarrollado en **MySQL**, orientado al diseño de una base de datos relacional con un conjunto completo de **Stored Procedures**, **validaciones internas**, **cáculos automáticos**, **triggers** y **tablas de bitácora** para gestionar productos, venta y detalles de venta.

El objetivo del sistema es asegurar la integridad de los datos mediante una arquitectura modular, validaciones consistentes y automatización de procesos clave relacionados a una venta completa.

---

### Estructura de la Base de Datos

El sistema se compone de tres tablas principales:

**1. productos**
Catálogo de productos.
**Campos principales**:
- *id_producto* (PK)
- *descripcion*
- *precio_unitario*

**2. ventas_enc**
Encabezado general de cada venta.
**Campos principales**:
- *id_venta_enc* (PK)
- *fecha*
- *total*

**3. ventas_det**
Detalle asociado a cada venta.
**Campos pricipales**:
- *id_venta_det* (PK)
- *id_venta_enc* (FK)
- *id_producto* (FK)
- *cantidad*, *iva*, *precio_venta*

---

### Funcionalidades del Proyecto

El proyecto implementa un conjunto de módulos organizados por tabla y tipo de operación:

**Módulo de Productos**
Inlcuye procedimientos para:
- Crear productos.
- Leer proudctos (por ID y global).
- Actualizar productos.
- Eliminar productos.
- Validar su existencia mediante *producto_no_existe*.

**Objetivo:** Mantener un catálogo limpio, consistente y con validaciones para evitar operaciones inválidas.

**Módulo de Ventas - Encabezado (*ventas_enc*)**
Procedimientos para:
- Insertar nuevas ventas.
- Leer encabezados (por ID y global).
- Actualizar una venta.
- Eliminar ventas.
- Validar encabezados con *venta_enc_no_existe*.

**Objetivo:** Garantizar que cada venta regitre correctamente fechas y totales.

**Módulo de Ventas - Detalle (*ventas_det*)**
Procedimientos para:
- Insertar líneas de detalle.
- Leer datalles (por ID o global).
- Actualizar registros.
- Eliminar registros.
- Validar existencia mediante *ventas_det_no_existe*.

**Objetivo:** Controlar información como cantidades, IVA y precio de cada producto vendido.

**Transacción de Venta Completa**
El sistema integra lógica avanzada para gestionar una venta completa mediante diferentes procedimientos:
**Lectura de venta completa**
- *venta_completa_read()*
- *venta_completa_read_id(id)*
Permiten obtener encabezado y detalle en una sola consulta.

**Actualización de venta completa**
- *venta_completa_update(...)*
Actualiza tanto el detalle como encabezado en una misma operación.

**Eliminación de venta completa**
- *venta_completa_delete(id_det, id_enc)*
Elimina registros relacionados, asegurando previamente que ambos existan.

---

### Procedimientos de Cálculo Automático

El sistema incluye lógica adicional para calcular valores derivados de una venta:

**calcular_utilidad**
Calcula el margen del 20% según cantidad y precio unitario.

**calcular_iva**
Determina el IVA (12%) considereando el precio base + utilidad.

**calcular_precio_venta**
Combina utilidad + IVA para obtener el precio final de venta del producto.

**calcular_total_venta**
Suma todos los precios de detalle para actualizar el total en *ventas_enc*.

---

### Tablas de Bitácora y Seguimiento

Para registrar operaciones críticas, se crearon tablas especializadas:

**tipo_operacion**
Define los tipos:
1 = INSERT
2 = UPDATE
3 = DELETE

**productos_bitacora y ventas_enc_bitacora**
Registran automáticamente:
- ID afectado.
- Fecha y hora.
- Usuario.
- Tipo de operación.

---

### Triggers Automáticos

El sistema utiliza *triggers* para llenar las bitácoras:

**Productos**
- *productos_insert*
- *productos_update*
- *productos_delete*

**Ventas Encabezado**
- *ventas_enc_insert*
- *ventas_enc_update*
- *ventas_enc_delete*

**Objetivo:** Auditar cambios de forma transparente y automática.

---

### Objetivos del Proyecto

Este proyecto busca fortalecer:
- Diseño y administración de bases de datos relacionales.
- Uso de procedimientos almacenados para modularizar la lógica.
- Manejo de validaciones con *SIGNAL* y mensajes personalizados.
- Automatización del flujo correcto de ventas.
- Implementación de cálculos contables dentro del motor SQL.
- Auditoría mediante triggers y tablas de bitácora.

---

### Contenido del Repositorio

Incluye:
- Scripts de creación de tablas.
- Procedimientos CRUD.
- Triggers y tablas de bitácora.
- Cálculos autómaticos (utilidad, IVA, precio final, total).
- Archivos de prueba (*insert*, *select*, *update*, *delete*).

---

### Autor

**Pablo Jacob** estudiante de Ingeniería en Sistemas de Información y Ciencias de la Computación. Interesado en desarrollo backend y automatización.