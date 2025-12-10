USE practicas;

DELIMITER $$
CREATE TRIGGER ventas_enc_delete AFTER DELETE ON ventas_enc FOR EACH ROW
BEGIN
	INSERT INTO ventas_enc_bitacora(id_venta_enc, fecha_hora, usuario, id_operacion)
		VALUES(OLD.id_venta_enc, NOW(), 'PRUEBA', 3);
END $$
DELIMITER ;