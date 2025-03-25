import {Request, Response, NextFunction} from 'express';
const jwt = require('jsonwebtoken');
require('dotenv').config();

export const jwtAuth = (req: any, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];

    const decode = jwt.verify(token, process.env.SECRETKEY);

    req.user = decode;

    next();
}
