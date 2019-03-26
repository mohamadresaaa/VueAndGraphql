import errorHandle from '../lib/errorHandle';
import shortid from 'shortid';

export const getUserTickets = async (_, {
    userId
}, {
    Ticket
}) => {
    try {
        // find tickets with userId
        return await Ticket.find({
            user: userId
        });
    } catch (err) {
        errorHandle(err);
    }
};

export const getAllTickets = async (_, arg, {
    Ticket
}) => {
    try {
        // find all tickets
        return await Ticket.find();
    } catch (err) {
        errorHandle(err);
    }
};

export const addTicket = async (_, {
    subject,
    priority,
    userId
}, {
    Ticket
}) => {
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