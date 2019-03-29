import { verifyToken } from './lib/generator';

export default async ({ req }) => {
    let token = req.headers['authorization'];
    return { 
        ...config.database.mongodb.models,
        currentUserId: await verifyToken(token) 
    };
};