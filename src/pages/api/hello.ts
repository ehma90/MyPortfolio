// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from'@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const msg = {
    to: 'test@example.com',
    from: 'ehmaessien@gmail.com', 
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error)
  
      if (error) {
        console.error(error)
      }
    }
  })();
  
}
