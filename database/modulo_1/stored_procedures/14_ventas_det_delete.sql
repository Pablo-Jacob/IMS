USE practicas;

-- Stored Procedure para Eliminar (Delete) datos de la tabla 'ventas_det'
DELIMITER //
CREATE PROCEDURE ventas_det_delete(IN p_id_venta_det INT)
BEGIN
	DELETE FROM ventas_det WHERE id_venta_det = p_id_venta_det;
END //
DELIMITER ;