USE practicas;

DELIMITER $$
CREATE TRIGGER ventas_ecn_insert AFTER INSERT ON ventas_enc FOR EACH ROW
BEGIN
	INSERT INTO ventas_enc_bitacora(id_venta_enc, fecha_hora, usuario, id_operacion)
		VALUES(NEW.id_venta_enc, NOW(), 'PRUEBA', 1);
END $$
DELIMITER ;