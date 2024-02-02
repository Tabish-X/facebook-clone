import nodemailer from "nodemailer";

export const mailSettings = {
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_EMAIL,
    pass: process.env.MAIL_PASSWORD,
  },
};

type EmailPageLayout = {
  subject: string;
  body: string;
};

export default async function sendEmail(
  email: string,
  emailPageLayout: EmailPageLayout
): Promise<boolean> {
  const transport = nodemailer.createTransport(mailSettings);

  try {
    const mailOptions = {
      from: mailSettings.auth.user,
      to: email,
      html: emailPageLayout.body,
      subject: emailPageLayout.subject,
    };

    await transport.sendMail(mailOptions);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
