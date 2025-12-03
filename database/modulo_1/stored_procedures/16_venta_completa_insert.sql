USE practicas;

-- Stored Procedure para Insertar (Create) datos a las tablas
-- 'ventas_enc' y 'ventas_det'
DELIMITER //
CREATE PROCEDURE venta_completa_insert(
    IN p_total			DECIMAL(10, 2),
    IN p_id_producto	INT,
    IN p_cantidad		INT,
    IN p_iva			DECIMAL(10, 2),
    IN p_precio_venta	DECIMAL(10, 2)
)
BEGIN
	-- Declaración de variables locales
    DECLARE v_id_venta_enc INT;
    
	CALL ventas_enc_insert(p_total);
    SET v_id_venta_enc = LAST_INSERT_ID();
    
    CALL ventas_det_insert(v_id_venta_enc, p_id_producto, p_cantidad,
		p_iva, p_precio_venta);
END //
DELIMITER ;