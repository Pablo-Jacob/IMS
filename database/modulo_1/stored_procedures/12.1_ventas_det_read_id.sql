USE practicas;

-- Stored Procedure para Leer (Read) datos por ID de la tabla 'ventas_det'
DELIMITER //
CREATE PROCEDURE ventas_det_read_id(IN p_id_venta_det INT)
BEGIN
	SELECT *FROM ventas_det WHERE id_venta_det = p_id_venta_det;
END //
DELIMITER ;