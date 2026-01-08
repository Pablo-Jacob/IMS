USE practicas;

-- Stored Procedure para Leer (Read) datos de la tabla 'ventas_enc'
DELIMITER //
CREATE PROCEDURE ventas_enc_read()
BEGIN
	SELECT *FROM ventas_enc;
END //
DELIMITER ;