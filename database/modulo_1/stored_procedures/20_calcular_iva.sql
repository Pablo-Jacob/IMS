USE practicas;

DELIMITER //
CREATE PROCEDURE calcular_iva(
	IN p_id_producto		INT,
    IN p_id_venta_enc		INT,
    OUT p_precio_con_iva	DECIMAL(10, 2)
)
BEGIN
	-- Declaración de variables locales
    DECLARE v_id_venta_det		INT;
    DECLARE v_utilidad			DECIMAL(10, 2);
    DECLARE v_precio_unitario	DECIMAL(10, 2);
    DECLARE v_precio_sin_iva	DECIMAL(10, 2);
    DECLARE v_iva				DECIMAL(10, 2);
    -- Extraer datos directamente de sus tablas
    SELECT id_venta_det INTO v_id_venta_det FROM ventas_det
		WHERE id_venta_enc = p_id_venta_enc AND id_producto = p_id_producto;
	SELECT precio_unitario INTO v_precio_unitario FROM productos
		WHERE id_producto = p_id_producto;
    -- Llamar Procedimiento Almacenado para calcular
    -- valor de margen de utilidad (20%)
    CALL calcular_utilidad(p_id_producto, p_id_venta_enc, v_utilidad);
	-- Calcular Precio sin IVA
    SET v_precio_sin_iva = v_precio_unitario + v_utilidad;
    -- Calcular IVA
    SET v_iva = v_precio_sin_iva * 0.12;
    SET p_precio_con_iva = v_precio_sin_iva + v_iva;
    -- Actualizar tabla 'ventas_det'
    UPDATE ventas_det SET iva = v_iva WHERE id_venta_det = v_id_venta_det
		AND id_venta_enc = p_id_venta_enc;
END //
DELIMITER ;