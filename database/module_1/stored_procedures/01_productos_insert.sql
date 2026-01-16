USE practicas;

-- Stored Procedure para Insertar (Create) datos a la tabla 'Productos'
DELIMITER //
CREATE PROCEDURE productos_insert(
	IN p_descripcion		VARCHAR(100),
    IN p_precio_unitario	DECIMAL(10, 2)
)
BEGIN
	-- Query necesaria
    INSERT INTO productos(descripcion, precio_unitario)
		VALUES(p_descripcion, p_precio_unitario);
        
	SELECT LAST_INSERT_ID() AS id_producto;
END //
DELIMITER ;