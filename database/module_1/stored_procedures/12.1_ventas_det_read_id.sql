USE practicas;

-- Stored Procedure para Leer (Read) datos por ID de la tabla 'ventas_det'
DELIMITER //
CREATE PROCEDURE ventas_det_read_id(IN p_id_venta_det INT)
BEGIN
	-- Verificar que el detalle existe
    CALL venta_det_no_existe(p_id_venta_det);
    
	SELECT *FROM ventas_det WHERE id_venta_det = p_id_venta_det;
END //
DELIMITER ;