USE practicas;

DELIMITER //
CREATE PROCEDURE calcular_utilidad(
	IN p_id_producto	INT,
    IN p_id_venta_enc	INT,
    OUT p_utilidad		DECIMAL(10, 2)
)
BEGIN
	-- Declaración de variables locales
    DECLARE v_id_venta_det		INT;
    DECLARE v_precio_unitario	DECIMAL(10, 2);
    DECLARE v_cantidad			INT;
    -- Extraer datos directamente de sus tablas
    SELECT id_venta_det INTO v_id_venta_det FROM ventas_det
		WHERE id_venta_enc = p_id_venta_enc AND id_producto = p_id_producto;
	SELECT cantidad INTO v_cantidad FROM ventas_det
		WHERE id_venta_enc = p_id_venta_enc AND id_venta_det = v_id_venta_det
        AND id_producto = p_id_producto;
    SELECT precio_unitario INTO v_precio_unitario FROM productos
		WHERE id_producto = p_id_producto;
	
    SET p_utilidad = (v_precio_unitario * v_cantidad) * 0.20;
END //
DELIMITER ;