USE practicas;

DELIMITER $$
CREATE TRIGGER productos_insert AFTER INSERT ON productos FOR EACH ROW
BEGIN
	INSERT INTO productos_bitacora(id_producto, fecha_hora, usuario, id_operacion)
		VALUES(NEW.id_producto, NOW(), 'PRUEBA', 1);
END $$
DELIMITER ;