USE practicas;

-- Stored Procedure para Leer (Read) datos por ID de la tabla 'ventas_enc_bitacora'
DELIMITER //
CREATE PROCEDURE ventas_enc_bitacora_read_id(IN p_id_venta_enc INT)
BEGIN
	-- Obtener Bitácora por ID de encabezado de venta
	SELECT
		ventas_enc_bitacora.id_ventas_enc_bitacora,
        ventas_enc_bitacora.id_venta_enc,
        DATE_FORMAT(ventas_enc_bitacora.fecha_hora, '%d-%m-%Y') AS fecha,
        ventas_enc_bitacora.usuario,
        tipo_operacion.operacion
        FROM ventas_enc_bitacora
        INNER JOIN tipo_operacion
        ON ventas_enc_bitacora.id_operacion = tipo_operacion.id_operacion
        AND ventas_enc_bitacora.id_venta_enc = p_id_venta_enc;
END //
DELIMITER ;