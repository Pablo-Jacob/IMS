USE practicas;

-- Stored Procedure para Actualizar (Update) datos de la tabla 'ventas_det'
DELIMITER //
CREATE PROCEDURE ventas_det_update(
	IN p_id_venta_det	INT,
    IN p_id_venta_enc	INT,
    IN p_id_producto	INT,
    IN p_cantidad		INT,
    IN p_iva			DECIMAL(10, 2),
    IN p_precio_venta	DECIMAL(10, 2)
)
BEGIN
	UPDATE ventas_det SET id_venta_enc = p_id_venta_enc,
		id_producto = p_id_producto, cantidad = p_cantidad,
        iva = p_iva, precio_venta = p_precio_venta
        WHERE id_venta_det = p_id_venta_det;
END //
DELIMITER ;