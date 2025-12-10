USE practicas;

-- Stored Procedure para Leer (Read) datos por ID de venta completa
-- tablas 'ventas_enc' y 'ventas_det'
DELIMITER //
CREATE PROCEDURE venta_completa_read_id(IN p_id_venta_enc INT)
BEGIN
	-- Verificar que el encabezado exista
    CALL venta_enc_no_existe(p_id_venta_enc);
	
    SELECT
		ventas_enc.id_venta_enc,
        ventas_enc.fecha,
        ventas_enc.total,
        ventas_det.id_venta_det,
        ventas_det.id_producto,
        ventas_det.cantidad,
        ventas_det.iva,
        ventas_det.precio_venta
        FROM ventas_enc
        INNER JOIN ventas_det
        ON ventas_enc.id_venta_enc = ventas_det.id_venta_enc AND p_id_venta_enc;
END //
DELIMITER ;