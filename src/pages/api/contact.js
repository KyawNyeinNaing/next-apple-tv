import nodemailer from 'nodemailer';

const email = async (req, res) => {
  const { name, email, description } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_SMTP_HOST,
    port: process.env.NEXT_PUBLIC_SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_USER_EMAIL,
      pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
    },
  });

  try {
    const result = await transporter.sendMail({
      from: email,
      to: process.env.NEXT_PUBLIC_SMTP_EMAIL_TO,
      subject: `Contact from ${name}`,
      html: `
        <html>

        <head>
          <meta name="viewport" content="width=device-width" />
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        </head>
        
        <body>
          <table bgcolor="#fafafa"
            style=" width: 100%!important; height: 100%; background-color: #fafafa; padding: 20px; font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, 'Lucida Grande', sans-serif;  font-size: 100%; line-height: 1.6;">
            <tr>
              <td></td>
              <td bgcolor="#FFFFFF"
                style="border: 1px solid #eeeeee; background-color: #ffffff; border-radius:5px; display:block!important; max-width:600px!important; margin:0 auto!important; clear:both!important;">
                <div style="padding:20px; max-width:600px; margin:0 auto; display:block;">
                  <table style="width: 100%;">
                    <tr>
                      <td>
                        <p
                          style="text-align: center; display: block; padding-bottom:20px; margin-bottom:20px; border-bottom:1px solid #dddddd;">
                          <img style="width: auto; height: 90px" src="https://www.firstfintechinvestment.com/logo-email-template.png" />
                        </p>
                        <h1 style="font-weight: 200; font-size: 36px; margin: 20px 0 30px 0; color: #333333;">Contact from ${name}</h1>
                        <p style="margin-bottom: 10px; font-weight: normal; font-size:16px; color: #333333;">${description}</p>
                        <h2 style="font-weight: 200; font-size: 16px; margin: 20px 0; color: #333333;">Name - ${name}</h2>
                        <h2 style="font-weight: 200; font-size: 16px; margin: 20px 0; color: #333333;">Email - ${email}</h2>
                        <p
                          style="text-align: center; display: block; padding-top:20px; font-weight: bold; margin-top:30px; color: #666666; border-top:1px solid #dddddd;">
                          First Fintech Investment Co.,Ltd</p>
                      </td>
                    </tr>
                  </table>
                </div>
              </td>
              <td></td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    const resData = {
      status: 'success',
      messageId: result.messageId,
      ...req.body,
    };

    res.status(200).json(resData);
  } catch (error) {
    console.log(error);
  }
};

export default email;
