USE practicas;

-- Stored Procedure para Leer (Read) datos de la tabla 'productos_bitacora'
DELIMITER //
CREATE PROCEDURE productos_bitacora_read()
BEGIN
	SELECT *FROM productos_bitacora;
END //
DELIMITER ;