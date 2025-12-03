USE practicas;

-- Stored Procedure para determinar si un encabezado de venta (ventas_enc)
-- existe o no
DELIMITER //
CREATE PROCEDURE venta_enc_no_existe(IN p_id_venta_enc INT)
BEGIN
	-- Declaración de variables locales
    DECLARE v_existe INT;
    -- "Contar" cuantas veces aparece el encabezado de venta con el ID ingresado
    SELECT COUNT(*) INTO v_existe FROM ventas_enc
		WHERE id_venta_enc = p_id_venta_enc;
	-- Si el "conteo" es igual a cero, significa que no hay encabezados de venta
    -- asociados a ese ID
    IF v_existe = 0 THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Encabezado No Existe';
    END IF;
END //
DELIMITER ;