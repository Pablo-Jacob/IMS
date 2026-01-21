import ventasService from "../services/ventas.service.js";

const createHeader = (req, res) => {
    // EXTRACT DATA FOR HEADER
    const header = req.body;

    ventasService
        .createHeader(header)
        .then((result) => {
            const id_venta_enc = result[0][0][0].id_venta_enc;

            res.status(200).json({
                message: "Sale header created successfully",
                data: {
                    id_venta_enc,
                    header
                }
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

const createDetail = (req, res) => {
    // EXTRACT DATA FOR DETAIL
    const detail = req.body;

    ventasService
        .createDetail(detail)
        .then((result) => {
            const id_venta_det = result[0][0][0].id_venta_det;

            res.status(200).json({
                message: "Sale detail created successfully",
                data: {
                    id_venta_det,
                    detail
                }
            });
        })
};

export default {
    createHeader,
    createDetail
};