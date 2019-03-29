import shortid from 'shortid';
import errorHandle from './errorHandle';

export const generateTwoFactorCode = async (user) => {
    try {
        // create two factor code
        let newCode = await config.database.mongodb.models.TwoFactorCode({
            user, 
            code: shortid.generate()
        }).save();
        
        // return it
        return newCode.code;
    } catch (err) {
        errorHandle(err);
    }
};