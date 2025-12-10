USE practicas;

DELIMITER $$
CREATE TRIGGER productos_update AFTER UPDATE ON productos FOR EACH ROW
BEGIN
	INSERT INTO productos_bitacora(id_producto, fecha_hora, usuario, id_operacion)
		VALUES(NEW.id_producto, NOW(), 'PRUEBA', 2);
END $$
DELIMITER ;