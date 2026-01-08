USE practicas;

-- Stored Procedure para Leer (Read) datos por ID de la tabla 'productos_bitacora'
DELIMITER //
CREATE PROCEDURE productos_bitacora_read_id(IN p_id_producto INT)
BEGIN
	-- Verificar que el producto existe
    CALL producto_no_existe(p_id_producto);
    
	SELECT *FROM productos_bitacora WHERE id_producto = p_id_producto;
END //
DELIMITER ;