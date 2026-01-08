USE practicas;

CREATE TABLE tipo_operacion(
	id_operacion	INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    operacion		VARCHAR(10)
);

CREATE TABLE productos_bitacora(
	id_productos_bitacora	INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    id_producto				INT,
	fecha_hora				DATETIME DEFAULT NOW() NOT NULL,
    usuario					VARCHAR(100),
    id_operacion			INT,
    FOREIGN KEY (id_operacion) REFERENCES tipo_operacion(id_operacion)
);

CREATE TABLE ventas_enc_bitacora(
	id_ventas_enc_bitacora	INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    id_venta_enc			INT,
    fecha_hora				DATETIME DEFAULT NOW() NOT NULL,
    usuario					VARCHAR(100),
    id_operacion			INT,
    FOREIGN KEY (id_operacion) REFERENCES tipo_operacion(id_operacion)
);