USE practicas;

-- Stored Procedure para Leer (Read) datos de la tabla 'Productos'
DELIMITER //
CREATE PROCEDURE productos_read()
BEGIN
	SELECT *FROM productos;
END //
DELIMITER ;