import getUserId from './lib/verifyToken';

export default async ({ req }) => {
    let token = req.headers['authorization'];
    return { 
        ...config.database.mongodb.models,
        currentUserId: await getUserId(token) 
    };
};