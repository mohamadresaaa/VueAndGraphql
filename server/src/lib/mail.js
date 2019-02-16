import { createTransport } from 'nodemailer';

export default async (template) => (
    createTransport({
        host: config.service.mail.host,
        port: config.service.mail.port,
        auth: {
            user: config.service.mail.auth.user,
            pass: config.service.mail.auth.password
        }
    }).sendMail(template)
);
    