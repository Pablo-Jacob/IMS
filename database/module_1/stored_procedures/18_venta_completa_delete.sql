USE practicas;

-- Stored Procedure para Eliminar (Delete) datos de venta completa
-- tablas 'ventas_enc' y 'ventas_det'
DELIMITER //
CREATE PROCEDURE venta_completa_delete(
	IN p_id_venta_det INT,
	IN p_id_venta_enc INT
)
BEGIN
	-- Verificar que el encabezado y detalle existan
    CALL venta_det_no_existe(p_id_venta_det);
    CALL venta_enc_no_existe(p_id_venta_enc);
    
	CALL ventas_det_delete(p_id_venta_det);
    CALL ventas_enc_delete(p_id_venta_enc);
END //
DELIMITER ;