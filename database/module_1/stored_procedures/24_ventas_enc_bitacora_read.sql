USE practicas;

-- Stored Procedure para Leer (Read) datos de la tabla 'ventas_enc_bitacora'
DELIMITER //
CREATE PROCEDURE ventas_enc_bitacora_read()
BEGIN
	SELECT
		ventas_enc_bitacora.id_ventas_enc_bitacora,
        ventas_enc_bitacora.id_venta_enc,
		DATE_FORMAT(ventas_enc_bitacora.fecha_hora, '%d-%m-%Y') AS fecha,
        ventas_enc_bitacora.usuario,
        tipo_operacion.operacion
        FROM ventas_enc_bitacora
        INNER JOIN tipo_operacion
        ON ventas_enc_bitacora.id_operacion = tipo_operacion.id_operacion;
END //
DELIMITER ;