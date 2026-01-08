USE practicas;

-- Stored Procedure para Leer (Read) datos por ID de la tabla 'ventas_enc_bitacora'
DELIMITER //
CREATE PROCEDURE ventas_enc_bitacora_read_id(IN p_id_venta_enc INT)
BEGIN
	-- Verificar que el producto existe
    CALL venta_enc_no_existe(p_id_venta_enc);
    
	SELECT *FROM ventas_enc_bitacora WHERE id_venta_enc = p_id_venta_enc;
END //
DELIMITER ;