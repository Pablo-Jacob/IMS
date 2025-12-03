USE practicas;

-- Stored Procedure para determinar si un producto existe o no
DELIMITER //
CREATE PROCEDURE producto_no_existe(IN p_id_producto INT)
BEGIN
	-- Declaración de variables locales
    DECLARE v_existe INT;
    -- "Contar" cuantas veces aparece el producto con el ID ingresado
    SELECT COUNT(*) INTO v_existe FROM productos WHERE id_producto = p_id_producto;
    -- Si el "conteo" es igual a cero, significa que no hay productos asociados
    -- a ese ID
    IF v_existe = 0 THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Producto No Existe';
	END IF;
END //
DELIMITER ;