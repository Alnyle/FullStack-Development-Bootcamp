import { verifyUserToken } from "../utils/token.js";

/** 
*
* @param {import("express").Request} req
* @param {import("express").Response} res
* @param {import("express").NextFunction} next
*
*/
export async function authenticationMiddleware(req, res, next) {

    const authHeader = req.headers['authorization'];

    if (!authHeader) return next();
 
    if (!authHeader.startsWith('Bearer ')) {
        return res
            .status(400)
            .json({ error: 'Invalid authorization header format' });
    }


    const [_, token] = authHeader.split(" "); // ["Bearer", "token"]

    const payload = await verifyUserToken(token);

    req.user = payload;
    next();
}

/** 
*
* @param {import("express").Request} req
* @param {import("express").Response} res
* @param {import("express").NextFunction} next
*
*/
export async function ensureAuthenticated(req, res, next) {

    if (!req.user || !req.user.id) {
        return res
            .status(401)
            .json({ error: "You must be logged in to access this resource" });
    }

    next();
}