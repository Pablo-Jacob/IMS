USE practicas;

-- Stored Procedure para Actualizar (Update) datos de venta completa
-- tablas 'ventas_enc' y 'ventas_det'
DELIMITER //
CREATE PROCEDURE venta_completa_update(
	IN p_id_venta_det		INT,
    IN p_id_venta_enc		INT,
    IN p_nuevo_id_producto	INT,
    IN p_nueva_cantidad		INT,
    IN p_nuevo_iva			DECIMAL(10, 2),
    IN p_nuevo_precio_venta	DECIMAL(10, 2),
    IN p_nueva_fecha		DATETIME,
    IN p_nuevo_total		DECIMAL(10, 2)
)
BEGIN
	-- Verificar que el detalle y encabezado existan
    CALL venta_det_no_existe(p_id_venta_det);
    CALL venta_enc_no_existe(p_id_venta_enc);
    
	CALL ventas_det_update(p_id_venta_det, p_id_venta_enc, p_nuevo_id_producto,
		p_nueva_cantidad, p_nuevo_iva, p_nuevo_precio_venta);
	CALL ventas_enc_update(p_id_venta_enc, p_nueva_fecha, p_nuevo_total);
END //
DELIMITER ;