import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
    const statusCode = res.locals.errorStatusCode || 500;
    res.status(statusCode).send({
        error: true,
        message: err.message,
        cause: (err as any).cause || null,
        body: req.body,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
};

export default errorHandler;
