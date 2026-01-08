USE practicas;

-- Stored Procedure para determinar si un detalle de venta (ventas_det)
-- existe o no
DELIMITER //
CREATE PROCEDURE venta_det_no_existe(IN p_id_venta_det INT)
BEGIN
	-- Declaración de variables locales
    DECLARE v_existe INT;
    -- "Contar" cuantas veces aparece el detalle de venta con el ID ingresado
    SELECT COUNT(*) INTO v_existe FROM ventas_det
		WHERE id_venta_det = p_id_venta_det;
	-- Si el "conteo" es igual a cero, significa que no hay detalle de venta
    -- asociados a ese ID
    IF v_existe = 0 THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Detalle No Existe';
    END IF;
END //
DELIMITER ;