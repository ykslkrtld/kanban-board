"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    const statusCode = res.locals.errorStatusCode || 500;
    res.status(statusCode).send({
        error: true,
        message: err.message,
        cause: err.cause || null,
        body: req.body,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
};
exports.default = errorHandler;
