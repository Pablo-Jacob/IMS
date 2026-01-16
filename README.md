# Integrated Management System (IMS)

Proyecto académico desarrollado con **MySQL** y **Node.js**, enfocado en el diseño e implementación de una base de datos relacional robusta, utilizando **procedimientos almacenados**, **validaciones**, **cálculos automáticos**, **triggers** y **tablas de bitácora** para la gestión de productos y ventas.

El sistema simula el flujo completo de una venta, donde la mayor parte de la lógica de negocio se ejecuta directamente en la base de datos, asegurando la integridad de la información y automatizando cálculos como utilidad, IVA y total de la venta.

Este proyecto fue desarrollado con fines académicos para reforzar conceptos de bases de datos, backend y control de transacciones.

---

## Estructura de la Base de Datos

El sistema está compuesto por tres tablas principales relacionadas entre sí:

### productos
Almacena el catálogo de productos disponibles.

Campos:
- id_producto (PK)
- descripcion
- precio_unitario

### ventas_enc
Representa el encabezado de cada venta.

Campos:
- id_venta_enc (PK)
- fecha
- total

### ventas_det
Almacena el detalle de los productos asociados a cada venta.

Campos:
- id_venta_det (PK)
- id_venta_enc (FK)
- id_producto (FK)
- cantidad
- iva
- precio_venta

---

## Funcionalidades Principales

### Módulo de Productos
Incluye procedimientos almacenados para:
- Crear productos
- Listar productos
- Consultar productos por ID
- Actualizar productos
- Eliminar productos
- Validar existencia mediante el procedimiento `producto_no_existe`

El objetivo es evitar operaciones inválidas y mantener consistencia en el catálogo.

---

### Módulo de Ventas – Encabezado
Permite:
- Registrar ventas
- Consultar ventas (general y por ID)
- Actualizar encabezados
- Eliminar ventas
- Validar existencia mediante `venta_enc_no_existe`

---

### Módulo de Ventas – Detalle
Incluye:
- Inserción de detalles de venta
- Lectura general y por ID
- Actualización de registros
- Eliminación de detalles
- Validación con `venta_det_no_existe`

---

## Manejo de Venta Completa

El sistema permite trabajar una venta de forma integral combinando encabezado y detalle mediante procedimientos como:

- venta_completa_read
- venta_completa_read_id
- venta_completa_update
- venta_completa_delete

Esto garantiza operaciones consistentes y controladas sobre la información.

---

## Cálculos Automáticos en Base de Datos

Los cálculos se realizan directamente en MySQL mediante procedimientos almacenados:

- **calcular_utilidad**  
  Aplica un margen del 20% sobre el precio unitario del producto.

- **calcular_iva**  
  Calcula el IVA (12%) sobre el precio con utilidad incluida.

- **calcular_precio_venta**  
  Obtiene el precio final del producto.

- **calcular_total_venta**  
  Actualiza automáticamente el total del encabezado de la venta.

---

## Bitácoras y Auditoría

Se implementaron tablas de bitácora para auditar las operaciones realizadas en el sistema.

### tipo_operacion
Define el tipo de operación:
- INSERT
- UPDATE
- DELETE

### productos_bitacora
### ventas_enc_bitacora

Cada registro almacena:
- ID del registro afectado
- Fecha y hora
- Usuario que realizó la operación
- Tipo de operación

---

## Triggers Implementados

Los triggers registran automáticamente las operaciones realizadas sobre las tablas principales.

### Productos
- INSERT
- UPDATE
- DELETE

### Ventas (Encabezado)
- INSERT
- UPDATE
- DELETE

El objetivo es mantener un historial de cambios sin intervención manual.

---

## Backend (Node.js)

El proyecto incluye una API REST básica desarrollada con **Express**, la cual consume los procedimientos almacenados de MySQL.

Características:
- Arquitectura modular (routes, controllers, services)
- Conexión mediante mysql2
- Uso de variables de entorno
- Endpoints CRUD para productos y ventas

---

## Objetivos del Proyecto

- Aplicar diseño de bases de datos relacionales
- Encapsular lógica de negocio en procedimientos almacenados
- Implementar validaciones con SIGNAL
- Automatizar cálculos contables
- Auditar operaciones mediante triggers
- Integrar MySQL con Node.js

---

## Autor

**Pablo Jacob**  
Estudiante de Ingeniería en Sistemas de Información y Ciencias de la Computación  
Interesado en desarrollo backend y aseguramiento de calidad (QA)
