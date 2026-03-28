import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 * 
 */


export const authMiddleware = async (req, res, next) => {

    try {
        const tokenHeader = req.headers['authorization'];

        if (!tokenHeader) {
            return next
        }

        if (!tokenHeader.startsWith('Bearer ')) {
            return res
                .status(400)
                .json({ eror: "Invalid token format" });
        }

        const token = tokenHeader.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        return next();

    } catch (error) {

    }
}


export const ensureAuthenticated = async (req, res, next) => {

    if (!req.user) {
        return res
            .status(401)
            .json({ error: "You must be authenticated to access this resource" })
    }

    return next()
}