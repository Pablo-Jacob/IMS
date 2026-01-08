USE practicas;

-- Stored Procedure para Leer (Read) datos de la tabla 'ventas_enc_bitacora'
DELIMITER //
CREATE PROCEDURE ventas_enc_bitacora_read()
BEGIN
	SELECT *FROM ventas_enc_bitacora;
END //
DELIMITER ;