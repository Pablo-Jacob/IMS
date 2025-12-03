USE practicas;

-- Stored Procedure para Insertar (Create) datos a la tabla 'ventas_enc'
DELIMITER //
CREATE PROCEDURE ventas_enc_insert(IN p_total DECIMAL(10, 2))
BEGIN
	INSERT INTO ventas_enc(total) VALUES(p_total);
END //
DELIMITER ;