USE practicas;

DELIMITER //
CREATE PROCEDURE calcular_precio_venta(IN p_id_producto INT, IN p_id_venta_enc INT)
BEGIN
	-- Declaración de variables locales
    DECLARE v_id_venta_det INT;
    DECLARE v_precio_venta DECIMAL(10, 2);
    -- Extraer datos directamente de sus tablas
    SELECT id_venta_det INTO v_id_venta_det FROM ventas_det
		WHERE id_venta_enc = p_id_venta_enc AND id_producto = p_id_producto;
	-- Llamar Procedimiento Almacenado para calcular precio con IVA
    -- y valor de margen de utilidad (20%)
    CALL calcular_iva(p_id_producto, p_id_venta_enc, v_precio_venta);
    -- Actualizar tabla 'ventas_det'
    UPDATE ventas_det SET precio_venta = v_precio_venta
		WHERE id_venta_det = v_id_venta_det AND id_venta_enc = p_id_venta_enc;
END //
DELIMITER ;