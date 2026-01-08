# Integrated Management System (IMS)

Proyecto académico desarrollado con **MySQL** y **Node.js**, enfocado en el diseño y administración de una base de datos relacional que implementa **procedimientos almacenados**, **validaciones**, **cálculos automáticos**, **triggers** y **tablas de bitácora** para la gestión de productos y ventas.

El sistema simula el flujo completo de una venta, asegurando la integridad de los datos y automatizando cálculos como utilidad, IVA y total de la venta directamente desde la base de datos.

---

## Estructura de la Base de Datos

El sistema se compone de tres tablas principales relacionadas entre sí:

### 1. productos
Almacena el catálogo de productos.

Campos:
- id_producto (PK)
- descripcion
- precio_unitario

### 2. ventas_enc
Representa el encabezado de cada venta.

Campos:
- id_venta_enc (PK)
- fecha
- total

### 3. ventas_det
Detalle de los productos vendidos en cada venta.

Campos:
- id_venta_det (PK)
- id_venta_enc (FK)
- id_producto (FK)
- cantidad
- iva
- precio_venta

---

## Funcionalidades del Sistema

### Módulo de Productos
Incluye procedimientos almacenados para:
- Crear productos
- Listar productos
- Consultar productos por ID
- Actualizar productos
- Eliminar productos
- Validar existencia mediante `producto_no_existe`

**Objetivo:** evitar operaciones inválidas y mantener consistencia en el catálogo.

---

### Módulo de Ventas – Encabezado (ventas_enc)
Permite:
- Insertar ventas
- Leer ventas (general y por ID)
- Actualizar encabezados
- Eliminar ventas
- Validar existencia con `venta_enc_no_existe`

---

### Módulo de Ventas – Detalle (ventas_det)
Incluye:
- Inserción de detalles de venta
- Lectura general y por ID
- Actualización de registros
- Eliminación de detalles
- Validación mediante `venta_det_no_existe`

---

## Venta Completa

El sistema permite manejar una venta completa combinando encabezado y detalle:

- `venta_completa_read`
- `venta_completa_read_id`
- `venta_completa_update`
- `venta_completa_delete`

Esto permite consultar, actualizar o eliminar una venta de forma controlada y coherente.

---

## Cálculos Automáticos

El sistema realiza cálculos directamente en la base de datos mediante procedimientos almacenados:

- **calcular_utilidad**  
  Aplica un margen del 20% sobre el precio unitario.

- **calcular_iva**  
  Calcula el IVA del 12% sobre el precio con utilidad incluida.

- **calcular_precio_venta**  
  Obtiene el precio final del producto.

- **calcular_total_venta**  
  Actualiza automáticamente el total del encabezado de la venta.

---

## Bitácoras y Auditoría

Se implementaron tablas de bitácora para auditar operaciones:

### tipo_operacion
Define el tipo de acción:
- 1 = INSERT
- 2 = UPDATE
- 3 = DELETE

### productos_bitacora
### ventas_enc_bitacora

Cada registro almacena:
- ID afectado
- Fecha y hora
- Usuario
- Tipo de operación

---

## Triggers Implementados

Los triggers registran automáticamente las operaciones realizadas:

### Productos
- INSERT
- UPDATE
- DELETE

### Ventas Encabezado
- INSERT
- UPDATE
- DELETE

**Objetivo:** mantener un historial de cambios sin intervención manual.

---

## Backend (Node.js)

El proyecto incluye una API REST básica desarrollada con **Express** que consume los procedimientos almacenados:

- Arquitectura modular (routes, controllers, services)
- Conexión mediante `mysql2`
- Uso de variables de entorno
- Endpoints CRUD para productos

---

## Objetivos del Proyecto

- Aplicar diseño de bases de datos relacionales
- Usar procedimientos almacenados para encapsular lógica
- Implementar validaciones con `SIGNAL`
- Automatizar cálculos contables
- Auditar operaciones mediante triggers
- Integrar MySQL con Node.js

---

## Autor

**Pablo Jacob**  
Estudiante de Ingeniería en Sistemas de Información y Ciencias de la Computación  
Interesado en desarrollo backend y automatización.