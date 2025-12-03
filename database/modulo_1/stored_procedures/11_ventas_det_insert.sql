USE practicas;

-- Stored Procedure para Insertar (Create) datos a la tabla 'ventas_det'
DELIMITER //
CREATE PROCEDURE ventas_det_insert(
	IN p_id_venta_enc INT,
    IN p_id_producto INT,
    IN p_cantidad INT,
    IN p_iva DECIMAL(10, 2),
    IN p_precio_venta DECIMAL(10 ,2)
)
BEGIN
	INSERT INTO ventas_det(id_venta_enc, id_producto, cantidad, iva, precio_venta)
		VALUES(p_id_venta_enc, p_id_producto, p_cantidad, p_iva, p_precio_venta);
END //
DELIMITER ;