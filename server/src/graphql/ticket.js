import errorHandle from '../lib/errorHandle';
import shortid from 'shortid';

export const addTicket = async (_, { subject, priority, userId }, { Ticket }) => {
    try {
        // create ticket
        let newTicket = await Ticket({
            subject,
            priority,
            code: `H-${shortid.generate()}`,
            user: userId
        }).save();

        // return it
        return newTicket;
    } catch (err) {
        errorHandle(err);
    }
};