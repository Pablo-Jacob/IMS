USE practicas;

DELIMITER //
CREATE PROCEDURE calcular_total_venta(IN p_id_venta_enc INT)
BEGIN
	-- Declaracion de variables locales
    DECLARE v_precio_venta	DECIMAL(10, 2);
    DECLARE v_total			DECIMAL(10, 2);
    
    SELECT SUM(precio_venta) INTO v_total FROM ventas_det
		WHERE id_venta_enc = p_id_venta_enc;
	
    CALL ventas_enc_update(p_id_venta_enc, NOW(), v_total);
END //
DELIMITER ;