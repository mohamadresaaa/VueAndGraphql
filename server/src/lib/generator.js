import md5 from 'md5';
import shortid from 'shortid';
import jwt from 'jsonwebtoken';
import errorHandle from './errorHandle';
import { AuthenticationError } from 'apollo-server-express';

export const generateTwoFactorCode = async (user) => {
    try {
        // find code with userId
        let twoFactorCode = await config.database.mongodb.models.TwoFactorCode.findOne({ user });

        // if not, handle it
        if(!twoFactorCode){
            // create two factor code
            let newCode = await config.database.mongodb.models.TwoFactorCode({
                user, 
                code: shortid.generate()
            }).save();
        
            // return it
            return newCode.code;
        }

        // update code
        twoFactorCode.$set({ code: shortid.generate() });
        await twoFactorCode.save();

        // return it
        return twoFactorCode.code;
    } catch (err) {
        errorHandle(err);
    }
};

export const generateAvatar = async () => (`http://gravatar.com/avatar/${md5(username)}?d=identicon`);

export const generateToken = async (userId, secretKey) => {
    return await jwt.sign({
            id: userId
        },
        secretKey
    );
};

export const verifyToken = async token => {
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