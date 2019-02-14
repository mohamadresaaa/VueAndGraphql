export default {
    mail: {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_AUTH_USERNAME,
            password: process.env.MAIL_AUTH_PASSWORD
        }
    }
};