import jwt from "jsonwebtoken";
import { userTokenSchema } from '../validation/token.validation.js'
const JWT_SECRET = process.env.JWT_SECRET;

export async function createUserToken(payload) {

    const validateResult = await userTokenSchema.safeParseAsync(payload);

    if (validateResult.error) {
        throw new Error(validateResult.error.message);
    }

    const payloadValidatedData = validateResult.data;

    const token = jwt.sign(payloadValidatedData, JWT_SECRET);
    return token;
}

export async function verifyUserToken(token) {

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded;
        // const validateResult = await userTokenSchema.safeParseAsync(decoded);
    } catch (error) {
        return null;
    }
}