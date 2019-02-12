import jwt from 'jsonwebtoken';

export default async (user, secretKey) => {
    return await jwt.sign({
            id: user._id
        },
        secretKey
    );
};