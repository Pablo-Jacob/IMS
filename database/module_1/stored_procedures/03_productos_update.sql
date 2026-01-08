USE practicas;

-- Stored Procedure para Actualizar (Update) datos de la tabla 'Productos'
DELIMITER //
CREATE PROCEDURE productos_update(
	IN p_id_producto			INT,
    IN p_nueva_descripcion		VARCHAR(100),
    IN p_nuevo_precio_unitario	DECIMAL (10, 2)
)
BEGIN
	-- Verificar que el producto existe
    CALL producto_no_existe(p_id_producto);
    
	UPDATE productos SET descripcion = p_nueva_descripcion,
		precio_unitario = p_nuevo_precio_unitario
        WHERE id_producto = p_id_producto;
END //
DELIMITER ;