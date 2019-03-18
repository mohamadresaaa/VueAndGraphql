import logger from './logger';

export default err => {
    if (config.server.mode === 'dev')
        return console.error(err.stack);

    logger.error({
        message: err.message,
        stack: err.stack,
        date: new Date().toLocaleString()
    });

    return 'Server has encountered a problem, please wait';
};