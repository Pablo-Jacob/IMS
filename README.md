# Integrated Management System (IMS)

Integrated Management System (IMS) es un proyecto académico desarrollado con MySQL, Node.js y una integración básica de frontend en HTML, enfocado principalmente en el diseño de bases de datos relacionales y la implementación de lógica de negocio directamente en la base de datos mediante procedimientos almacenados, triggers y tablas de bitácora.

El sistema simula el flujo completo de una venta, priorizando la integridad de los datos, la automatización de cálculos (utilidad, IVA y total de venta) y una interacción controlada entre la base de datos y el backend.

Actualmente el proyecto se encuentra en evolución, incorporando una estructura de frontend más organizada, nuevas pantallas y lógica en JavaScript para el consumo progresivo de la API REST.

---

## Descripción General del Proyecto

Este sistema fue desarrollado como parte de mi formación en Ingeniería en Sistemas de Información y Ciencias de la Computación, con el objetivo de fortalecer mis conocimientos en:

- Diseño de bases de datos relacionales
- Lógica de negocio en base de datos
- Integración Backend + Base de Datos
- Arquitectura modular en Node.js
- Documentación y auditoría de operaciones

El enfoque principal del proyecto no es solo el CRUD tradicional, sino la implementación de reglas de negocio directamente en MySQL para garantizar consistencia, validaciones y automatización de procesos.

---

## Arquitectura del Sistema

El proyecto está dividido en tres capas principales:

- Base de Datos (MySQL)
- Backend (Node.js + Express)
- Frontend básico (HTML, con futura integración en JavaScript)

La comunicación entre el backend y la base de datos se realiza mediante procedimientos almacenados, evitando el uso de ORM y permitiendo un mayor control sobre las operaciones.

---

## Estructura de la Base de Datos

El sistema se compone de tres tablas principales relacionadas entre sí:

### productos
Almacena el catálogo de productos disponibles en el sistema.

Campos:
- id_producto (PK)
- descripcion
- precio_unitario

### ventas_enc
Representa el encabezado de cada venta registrada.

Campos:
- id_venta_enc (PK)
- fecha
- total

### ventas_det
Contiene el detalle de los productos vendidos en cada transacción.

Campos:
- id_venta_det (PK)
- id_venta_enc (FK)
- id_producto (FK)
- cantidad
- iva
- precio_venta

---

## Lógica de Negocio en Base de Datos

Toda la lógica principal del sistema se gestiona directamente desde MySQL mediante procedimientos almacenados, lo que permite:

- Validar la existencia de registros
- Controlar operaciones CRUD de forma segura
- Automatizar cálculos
- Mantener la integridad de los datos

### Módulo de Productos
Incluye procedimientos para:
- Crear productos
- Listar productos
- Consultar por ID
- Actualizar registros
- Eliminar productos
- Validar existencia mediante procedimientos específicos

---

### Módulo de Ventas (Encabezado y Detalle)
Permite:
- Inserción controlada de ventas
- Lectura general y por ID
- Actualización de registros
- Eliminación lógica y validada
- Gestión completa de ventas mediante encabezado y detalle

---

## Cálculos Automáticos

Los cálculos se ejecutan directamente en la base de datos mediante procedimientos almacenados:

- calcular_utilidad: aplica un margen de utilidad del 20%
- calcular_iva: calcula el IVA del 12%
- calcular_precio_venta: obtiene el precio final del producto
- calcular_total_venta: actualiza automáticamente el total del encabezado

Este enfoque simula escenarios reales donde la lógica contable y de negocio se centraliza en la base de datos.

---

## Bitácoras y Auditoría

El sistema implementa tablas de bitácora para auditar operaciones críticas sobre:

- Productos
- Encabezados de venta

Cada registro de auditoría almacena:
- ID afectado
- Fecha y hora
- Usuario
- Tipo de operación (INSERT, UPDATE, DELETE)

Las bitácoras se generan automáticamente mediante triggers, permitiendo trazabilidad de los cambios.

---

## Backend (Node.js + Express)

El backend está desarrollado con arquitectura modular y consume directamente los procedimientos almacenados.

Características principales:
- API REST estructurada por módulos
- Uso de Express.js
- Conexión a MySQL mediante mysql2
- Uso de variables de entorno
- Endpoints CRUD para productos y ventas
- Middlewares para organización del flujo de peticiones
- Separación por rutas, controladores y servicios

---

## Frontend (HTML + estructura en evolución)

El proyecto incluye un frontend básico desarrollado en HTML que actualmente permite:

- Navegación inicial del sistema
- Estructura de páginas organizadas por módulos
- Base visual para interacción con la API

Actualmente se está ampliando con:
- Nuevas pantallas (productos y futuras ventas)
- Formularios HTML
- Consumo de la API mediante JavaScript
- Mejora progresiva de la estructura de carpetas (assets, js, pages)

El frontend no forma parte del requerimiento académico principal, pero se está integrando como mejora personal del proyecto.

---

## Estado Actual del Proyecto

- Backend funcional con API REST
- Base de datos con lógica de negocio centralizada
- Bitácoras automatizadas mediante triggers
- Frontend básico en proceso de expansión
- Estructura del proyecto en mejora continua

---

## Objetivos Académicos y Técnicos

- Aplicar bases de datos relacionales en un sistema realista
- Implementar lógica de negocio en MySQL
- Integrar Backend y Base de Datos de forma modular
- Simular auditoría de operaciones con triggers
- Sentar las bases para un frontend más completo con JavaScript

---

## Autor

Pablo Jacob  
Estudiante de Ingeniería en Sistemas de Información y Ciencias de la Computación  
Interesado en desarrollo backend, bases de datos y calidad de software