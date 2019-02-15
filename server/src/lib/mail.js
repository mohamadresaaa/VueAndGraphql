import { createTransport } from 'nodemailer';

export default async (config, template) => (
    createTransport({
        host: config.host,
        port: config.port,
        auth: {
            user: config.auth.user,
            pass: config.auth.password
        }
    }).sendMail(template)
);
    