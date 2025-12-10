USE practicas;

CALL productos_insert('Laptop HP 15.6"', 4996.00);
-- SET @id_producto = LAST_INSERT_ID();

CALL ventas_enc_insert(0);
SET @id_venta_enc = LAST_INSERT_ID();

CALL ventas_det_insert(@id_venta_enc, 67, 1, 0, 0);
CALL ventas_det_insert(@id_venta_enc, 68, 1, 0, 0);

CALL calcular_precio_venta(67, @id_venta_enc);
CALL calcular_precio_venta(68, @id_venta_enc);

CALL calcular_total_venta(@id_venta_enc);

INSERT INTO tipo_operacion(operacion) VALUES('INSERT');
INSERT INTO tipo_operacion(operacion) VALUES('UPDATE');
INSERT INTO tipo_operacion(operacion) VALUES('DELETE');