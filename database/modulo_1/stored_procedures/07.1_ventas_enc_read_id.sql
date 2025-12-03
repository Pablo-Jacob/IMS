USE practicas;

-- Stored Procedure para Leer (Read) datos por ID de la tabla 'ventas_enc'
DELIMITER //
CREATE PROCEDURE ventas_enc_read_id(IN p_id_venta_enc INT)
BEGIN
	-- Verificar que el encabezado existe
    CALL venta_enc_no_existe(p_id_venta_enc);
    
	SELECT *FROM ventas_enc WHERE id_venta_enc = p_id_venta_enc;
END //
DELIMITER ;