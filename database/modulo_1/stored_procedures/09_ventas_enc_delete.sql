USE practicas;

-- Stored Procedure para Eliminar (Delete) datos de la tabla 'ventas_enc'
DELIMITER //
CREATE PROCEDURE ventas_enc_delete(IN p_id_venta_enc INT)
BEGIN
	-- Verificar que el encabezado existe
    CALL venta_enc_no_existe(p_id_venta_enc);
    
	DELETE FROM ventas_enc WHERE id_venta_enc = p_id_venta_enc;
END //
DELIMITER ;