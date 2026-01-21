# Integrated Management System (IMS)

Proyecto académico desarrollado con **MySQL**, **Node.js** y una **integración básica de frontend en HTML**, enfocado principalmente en el diseño de bases de datos relacionales y la implementación de lógica de negocio directamente en la base de datos mediante **procedimientos almacenados**, **triggers** y **tablas de bitácora**.

El sistema simula el flujo completo de una venta, garantizando la integridad de los datos y automatizando cálculos como utilidad, IVA y total de venta desde la base de datos.

Actualmente, el frontend funciona como una capa inicial de navegación y visualización, con la idea de seguir ampliándolo con más pantallas, formularios y lógica en **JavaScript**.

---

## Estructura de la Base de Datos

El sistema se compone de tres tablas principales relacionadas entre sí:

### productos
Almacena el catálogo de productos.

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
Detalle de los productos vendidos en cada venta.

Campos:
- id_venta_det (PK)
- id_venta_enc (FK)
- id_producto (FK)
- cantidad
- iva
- precio_venta

---

## Lógica de Negocio y Procedimientos Almacenados

Toda la lógica principal del sistema se maneja directamente en la base de datos mediante procedimientos almacenados.

### Módulo de Productos
Incluye procedimientos para:
- Crear productos
- Listar productos
- Consultar productos por ID
- Actualizar productos
- Eliminar productos
- Validar existencia mediante `producto_no_existe`

El objetivo es evitar operaciones inválidas y mantener la consistencia de los datos.

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

## Cálculos Automáticos

Los cálculos se realizan directamente en la base de datos:

- **calcular_utilidad**  
  Aplica un 20% de margen de utilidad sobre el precio unitario.

- **calcular_iva**  
  Calcula el IVA del 12% sobre el precio con utilidad incluida.

- **calcular_precio_venta**  
  Obtiene el precio final del producto.

- **calcular_total_venta**  
  Actualiza automáticamente el total del encabezado de la venta.

---

## Venta Completa

El sistema permite gestionar una venta completa combinando encabezado y detalle mediante procedimientos almacenados que permiten consultar, actualizar o eliminar una venta de forma controlada.

---

## Bitácoras y Auditoría

Se implementaron tablas de bitácora para auditar las operaciones realizadas sobre:

- Productos
- Encabezados de venta

Cada registro almacena:
- ID afectado
- Fecha y hora
- Usuario
- Tipo de operación (INSERT, UPDATE, DELETE)

Los registros se generan automáticamente mediante triggers.

---

## Backend (Node.js)

El proyecto incluye una API REST desarrollada con **Express**, que consume directamente los procedimientos almacenados:

- Arquitectura modular (routes, controllers, services)
- Conexión a MySQL mediante `mysql2`
- Uso de variables de entorno
- Endpoints CRUD para productos y ventas
- Sin uso de ORM, interacción directa con la base de datos

---

## Frontend (HTML)

El proyecto cuenta con un frontend básico desarrollado en **HTML**, que permite:

- Navegación inicial del sistema
- Acceso a pantallas de productos
- Estructura base para futuras funcionalidades

La idea es seguir ampliando el frontend con:
- Formularios para productos y ventas
- Consumo de la API mediante JavaScript
- Más pantallas y mejoras visuales

---

## Objetivos del Proyecto

- Aplicar diseño de bases de datos relacionales
- Implementar lógica de negocio con procedimientos almacenados
- Automatizar cálculos contables
- Auditar operaciones mediante triggers
- Integrar MySQL con Node.js
- Sentar las bases para un frontend más completo

---

## Autor

**Pablo Jacob**  
Estudiante de Ingeniería en Sistemas de Información y Ciencias de la Computación  
Interesado en desarrollo backend y bases de datos
