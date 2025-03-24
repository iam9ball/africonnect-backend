
import { Resend } from "resend";
import { resendKey } from "../config";

const resend = new Resend(resendKey);
export const mail = async (
  email: string,
  subject: string,
  html: string
) => {
  // Configure your transporter using environment variables for production-grade security
 
   
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: subject,
    html: html,
  });


  
};
