USE practicas;

-- Stored Procedure para Eliminar (Delete) datos de la tabla 'Productos'
DELIMITER //
CREATE PROCEDURE productos_delete(IN p_id_producto INT)
BEGIN
	-- Verificar que el producto existe
    CALL producto_no_existe(p_id_proucto);
    
	DELETE FROM productos WHERE id_producto = p_id_producto;
END //
DELIMITER ;