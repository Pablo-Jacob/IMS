USE practicas;

-- Stored Procedure para Leer (Read) datos de la tabla 'ventas_det'
DELIMITER //
CREATE PROCEDURE ventas_det_read()
BEGIN
	SELECT *FROM ventas_det;
END //
DELIMITER ;