USE practicas;

CALL productos_insert('Teclado Logitech', 192.00);
SET @id_producto = LAST_INSERT_ID();

CALL venta_completa_insert(0, 67, 1, 0, 0);
SET @id_venta_det = LAST_INSERT_ID();

CALL calcular_precio_venta(@id_producto);