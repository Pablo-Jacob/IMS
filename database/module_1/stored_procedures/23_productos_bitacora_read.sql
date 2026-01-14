USE practicas;

-- Stored Procedure para Leer (Read) datos de la tabla 'productos_bitacora'
DELIMITER //
CREATE PROCEDURE productos_bitacora_read()
BEGIN
	SELECT
		productos_bitacora.id_productos_bitacora,
        productos_bitacora.id_producto,
		DATE_FORMAT(productos_bitacora.fecha_hora, '%d-%m-%Y') AS fecha,
        productos_bitacora.usuario,
        tipo_operacion.operacion
        FROM productos_bitacora
        INNER JOIN tipo_operacion
        ON productos_bitacora.id_operacion = tipo_operacion.id_operacion;
END //
DELIMITER ;