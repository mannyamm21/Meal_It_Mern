import FormData from "form-data";
import Mailgun from "mailgun.js";

export function getClient() {
    const mailgun = new Mailgun(FormData);
    const client = mailgun.client({
        username: 'api',
        key: process.env.EMAIL_API_KEY,
    });

    return client;
}