USE practicas;

CALL productos_update(67, 'Teclado Logitech Actualizado', 192.00);

CALL ventas_enc_update(93, NOW(), 0);

CALL ventas_det_update(64, 65, 67, 1, 27.65, 258.05);

CALL venta_completa_update(64, 65, 67, 1, 0, 0, NOW(), 0);