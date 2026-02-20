const errorHandler = (err, req, res, next) => {
    if(err.code == "ER_SIGNAL_EXCEPTION") {
        return res.status(404).json({
            message: err.sqlMessage
        });
    }
    console.error(err);

    res.status(err.status || 500).json({
        message: err.message || "Internal Server Error"
    });
};

export default errorHandler;