# Integrated Management System (IMS)

Proyecto académico desarrollado como parte de mi formación en **Ingeniería en Sistemas de Información y Ciencias de la Computación**, enfocado en el diseño e implementación de una **base de datos relacional robusta**, integrando lógica de negocio directamente en **MySQL** mediante procedimientos almacenados, validaciones, cálculos automáticos y triggers.

El sistema simula el flujo completo de una venta, desde el registro del producto hasta el cálculo automático de utilidad, IVA y total de la venta, garantizando integridad, trazabilidad y control de los datos.

---

## Tecnologías Utilizadas

- **MySQL**  
  - Procedimientos almacenados  
  - Triggers  
  - Validaciones con `SIGNAL`  
  - Manejo de transacciones y relaciones
- **Node.js**
- **Express**
- **mysql2**
- **JavaScript (ES Modules)**
- **Git / GitHub**

---

## Estructura de la Base de Datos

La base de datos se compone de tres tablas principales relacionadas entre sí:

### productos
Almacena el catálogo de productos disponibles.

Campos:
- id_producto (PK)
- descripcion
- precio_unitario

---

### ventas_enc
Representa el encabezado de cada venta.

Campos:
- id_venta_enc (PK)
- fecha
- total

---

### ventas_det
Contiene el detalle de los productos asociados a cada venta.

Campos:
- id_venta_det (PK)
- id_venta_enc (FK)
- id_producto (FK)
- cantidad
- iva
- precio_venta

---

## Lógica de Negocio Implementada en la Base de Datos

Uno de los principales objetivos del proyecto fue trasladar la lógica crítica al motor de base de datos para asegurar consistencia y control.

### Validaciones
- Verificación de existencia de productos
- Verificación de encabezados y detalles de venta
- Uso de `SIGNAL SQLSTATE` para manejar errores controlados

Ejemplo:
- “Producto No Existe”
- “Encabezado No Existe”
- “Detalle No Existe”

---

## Cálculos Automáticos

Los cálculos se realizan mediante procedimientos almacenados:

- **Utilidad:**  
  Se calcula un margen del **20%** sobre el precio unitario del producto.

- **IVA:**  
  Se calcula el **12%** sobre el precio con utilidad incluida.

- **Precio de Venta:**  
  Precio final = precio unitario + utilidad + IVA.

- **Total de Venta:**  
  Se calcula automáticamente a partir del detalle de la venta.

Estos cálculos se ejecutan sin intervención manual y se reflejan directamente en la base de datos.

---

## Gestión de Ventas

El sistema permite manejar una venta completa de forma controlada:

- Lectura general y por ID
- Actualización de encabezado y detalle
- Eliminación de ventas completas

Esto garantiza coherencia entre el encabezado y el detalle de cada venta.

---

## Bitácoras y Auditoría

Se implementaron tablas de bitácora para auditar las operaciones realizadas en el sistema.

### Operaciones Registradas
- INSERT
- UPDATE
- DELETE

Cada registro almacena:
- Identificador del registro afectado
- Fecha y hora
- Usuario
- Tipo de operación

Las bitácoras se generan automáticamente mediante triggers, sin intervención del backend.

---

## Triggers Implementados

Se crearon triggers para las siguientes tablas:

### Productos
- AFTER INSERT
- AFTER UPDATE
- AFTER DELETE

### Ventas (Encabezado)
- AFTER INSERT
- AFTER UPDATE
- AFTER DELETE

**Objetivo:** mantener un historial confiable de todas las operaciones realizadas.

---

## Backend (API REST)

El proyecto incluye una API REST básica desarrollada con **Node.js y Express**, que consume los procedimientos almacenados de la base de datos.

Características:
- Arquitectura modular (routes, controllers, services)
- Uso de pool de conexiones
- Separación de responsabilidades
- Endpoints CRUD para productos
- Endpoints de consulta para bitácoras

---

## Objetivos del Proyecto

- Aplicar diseño de bases de datos relacionales
- Implementar lógica de negocio con procedimientos almacenados
- Automatizar cálculos contables
- Manejar errores y validaciones desde la base de datos
- Auditar operaciones mediante triggers
- Integrar MySQL con Node.js a través de una API REST

---

## Autor

**Pablo Jacob**  
Estudiante de Ingeniería en Sistemas de Información y Ciencias de la Computación  
Interesado en desarrollo backend, bases de datos y automatización
