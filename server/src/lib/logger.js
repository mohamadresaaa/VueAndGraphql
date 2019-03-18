import { createLogger , transports , format } from 'winston';

export default createLogger({
    format : format.combine(format.json()),
    transports : [
        new transports.File({
            filename : `${__dirname}/../../../public/logs.json`,
        })
    ]
});