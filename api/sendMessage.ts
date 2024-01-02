// import { NextApiRequest, NextApiResponse } from 'next';
// import twilio from 'twilio';
// import { blockPhonesNumbers } from '../../supabase/supabase-requests-profile';

// export default async function sendMessage(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }
 
//   const accountSid = <string>process.env.TWILIO_ACCOUNT_SID;
//   const token = <string>process.env.TWILIO_AUTH_TOKEN;
//   const client = twilio(accountSid, token);

//   if (!accountSid || !token) {
//     return res.status(500).json({ error: 'Twilio credentials not set' });
//   }
  
//   const { phone } = req.body;
  
//   const userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  
//   const timestamp = Date.now();
  
//   const expirationTime = new Date(Date.now() + 5 * 60 * 1000).toISOString();
  
//   let digits = '0123456789';
//   let otp;
//   otp = '';
//   for (let i = 0; i < 5; i++) {
//     otp += digits[Math.floor(Math.random() * 10)];
//   }

//   if (!client) {
//     return res.status(500).json({ error: 'Twilio client not initialized' });
//   }

//   try {
//     const data = await blockPhonesNumbers(phone);
//   if (data) {
//     return res.status(403).json({ error: 'SMS Blocked for this Number' });
//   }
  
//   else{
//     await client.messages.create({
//       body: `Your OTP is ${otp}`,
//       from: '+15146003659',
//       to: phone, // phone
//     });

//     res.status(200).json({ msg: 'Message Sent', otp: otp,timestamp: timestamp, otpExpirationTime: expirationTime, userIP:userIP,   });
//   }
// } catch (error) {
//     console.error('Error sending OTP:', error);
//     res.status(500).json({ success: false });
//   }
// }
