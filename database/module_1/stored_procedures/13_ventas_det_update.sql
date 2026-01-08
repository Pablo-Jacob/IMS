USE practicas;

-- Stored Procedure para Actualizar (Update) datos de la tabla 'ventas_det'
DELIMITER //
CREATE PROCEDURE ventas_det_update(
	IN p_id_venta_det		INT,
    IN p_nuevo_id_venta_enc	INT,
    IN p_nuevo_id_producto	INT,
    IN p_nueva_cantidad		INT,
    IN p_nuevo_iva			DECIMAL(10, 2),
    IN p_nuevo_precio_venta	DECIMAL(10, 2)
)
BEGIN
	-- Verificar que el detalle existe
    CALL ventas_det_no_existe(p_id_venta_det);
    
	UPDATE ventas_det SET id_venta_enc = p_nuevo_id_venta_enc,
		id_producto = p_nuevo_id_producto, cantidad = pnueva__cantidad,
        iva = p_nuevo_iva, precio_venta = p_nuevo_precio_venta
        WHERE id_venta_det = p_id_venta_det;
END //
DELIMITER ;