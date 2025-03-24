import { mail } from "../lib/mail"


// Helper function to send verification email
export const sendVerificationMail = async (email: string, token: string, source: string) => {
    const subject = "Verify your email";
    const url = `${process.env.APP_URL}/verify-email?token=${token}&source${source}`;
    const html = `<p>Please verify your email by clicking the link:</p>
                  <p><a href="${url}">${url}</a></p>`;
    await mail(email, subject, html);

}