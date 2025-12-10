USE practicas;

DELIMITER $$
CREATE TRIGGER productos_delete AFTER DELETE ON productos FOR EACH ROW
BEGIN
	INSERT INTO productos_bitacora(id_producto, fecha_hora, usuario, id_operacion)
		VALUES(OLD.id_producto, NOW(), 'PRUEBA', 3);
END $$
DELIMITER ;