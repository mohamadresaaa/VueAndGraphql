import shortid from 'shortid';
import errorHandle from './errorHandle';

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