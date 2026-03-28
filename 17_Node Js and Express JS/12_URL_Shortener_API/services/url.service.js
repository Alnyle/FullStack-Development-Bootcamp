import { db } from "../db/index.js";
import { urlsTable } from "../models/url.model.js";

export async function insertURL(userId, url, code) {
    
    const [result] = await db.insert(urlsTable).values({
        shortCode: code,
        targetURL: url,
        userId: userId
    }).returning({ 
        id: urlsTable.id,
        shortCode: urlsTable.shortCode,
        targetURL: urlsTable.targetURL, 
    });

    return result;
}