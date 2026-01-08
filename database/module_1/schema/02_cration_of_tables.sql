USE practicas;

CREATE TABLE productos(
	id_producto		INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    descripcion		VARCHAR(100) NOT NULL,
    precio_unitario	DECIMAL(10, 2) NOT NULL
);
CREATE TABLE ventas_enc(
	id_venta_enc	INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    fecha			DATETIME DEFAULT NOW() NOT NULL,
    total			DECIMAL(10, 2) NOT NULL
);
CREATE TABLE ventas_det(
	id_venta_det	INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    id_venta_enc	INT NOT NULL,
    id_producto		INT NOT NULL,
    cantidad		INT NOT NULL,
    iva				DECIMAL(10, 2) NOT NULL,
    precio_venta	DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY(id_venta_enc) REFERENCES ventas_enc(id_venta_enc),
    FOREIGN KEY(id_producto) REFERENCES productos(id_producto)
);