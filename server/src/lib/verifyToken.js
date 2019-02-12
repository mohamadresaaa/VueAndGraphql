import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server-express';

export default async token => {
    if (token) {
        try {
            // get user id
            let { id } = await jwt.verify(token, 'secretKey');

            // return id
            return id;
        } catch (error) {
            throw new AuthenticationError('Your session has ended! Please sign in again.');
        }
    }
};