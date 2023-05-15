import nodemailer from 'nodemailer';

// Replace with your SMTP credentials
const smtpOptions = {
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT || ''),
  secure: false,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
  },
};

export const sendEmail = async (data: any) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_SMTP_FROM_EMAIL,
    ...data,
  });
};
