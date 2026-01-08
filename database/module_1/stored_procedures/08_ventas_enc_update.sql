USE practicas;

-- Stored Procedure para Actualizar (Update) datos de la tabla 'ventas_enc'
DELIMITER //
CREATE PROCEDURE ventas_enc_update(
	IN p_id_venta_enc	INT,
    IN p_nueva_fecha	DATETIME,
    IN p_nuevo_total	DECIMAL(10, 2)
)
BEGIN
	-- Verificar que el encabezado existe
    CALL venta_enc_no_existe(p_id_venta_enc);
    
	UPDATE ventas_enc SET fecha = p_nueva_fecha,
		total = p_nuevo_total
        WHERE id_venta_enc = p_id_venta_enc;
END //
DELIMITER ;