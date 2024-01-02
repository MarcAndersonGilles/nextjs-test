import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require('nodemailer');

export default function handler(req:NextApiRequest, res:NextApiResponse) {
    let digits = '0123456789';
    let otp: string;
    otp = '';
    for (let i = 0; i < 5; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    const userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  
  const timestamp = Date.now();
  
  const expirationDate = new Date(Date.now() + 5 * 60 * 1000);
  


    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVICE_HOST,
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_SERVICE_USER,
          pass: process.env.EMAIL_SERVICE_PASS,
        },
        debug: true,
    });

    transporter.verify((error: any, success: any) => {
      if (error) {
          console.error('Authentication error:', error);
      } else {
          console.log('Authentication success:', success);
      }
  });

    const clientEmail = {
      from: process.env.EMAIL_SERVICE_USER  ,
        to: req.body.email ,
        subject: `${otp} is your Elevently verification code`,
        html: `
        <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

        <head>
            <title></title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
        </head>
        
        <body style="background-color: #e8e8e8; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
            <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; margin-top:100px;">
                <tbody>
                    <tr>
                        <td>
                            <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #e8e8e8;">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table class="row-content stack" align="center" border="0" cellpadding="0"
                                                cellspacing="0" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-position: center top; color: #000000; background-repeat: no-repeat; width: 600px;"
                                                width="600">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1" width="100%"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <table class="image_block block-1" width="100%" border="0"
                                                                cellpadding="40" cellspacing="0" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="" style="padding-left: 0px; ">
                                                                            <div class="alignment" align="left"
                                                                                style="line-height:10px">
                                                                                <img class="big"
                                                                                    src="https://ecviuricykzyibbqszwi.supabase.co/storage/v1/object/public/elevently-img/logo/Elevently-name-logo-black_2.svg"
                                                                                    style="display: block; height: 25px; border: 0; width: auto; max-width: 100%;"
                                                                                    width="120">
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <table class="image_block block-2" width="100%" border="0"
                                                                cellpadding="0" cellspacing="0" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;padding-right:0px;padding-left: 0px;background: #fff;height: 30àpx;border-radius: 10px 10px 0px 0px;">
                                                                            <div class="alignment" align="center"
                                                                                style="height:10px!important background:#fff; line-height:10px display: block; height: auto; border: 0; width: 600px; max-width: 100%;"
                                                                                width="600">
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; ">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table class="row-content stack" align="center" border="0" cellpadding="0"
                                                cellspacing="0" role="presentation"
                                                style="mso-table-lspace: 0pt;mso-table-rspace: 0pt; background-color: #ffffff; background-position: center top;color: #000000;border-radius: 10px 10px 0px 0px;width: 600px;/* height: 20px !important; */"
                                                width="600">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1" width="100%"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 10px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <table class="image_block block-1" width="100%" border="0"
                                                                cellpadding="0" cellspacing="0" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="padding-bottom:5px;padding-left:20px;padding-right:20px;padding-top:20px;width:100%; ">
                                                                            <div class="alignment" align="center"
                                                                                style="line-height:10px">
        
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;  background-size: auto;">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table class="row-content stack" align="center" border="0" cellpadding="0"
                                                cellspacing="0" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;  background-size: auto; color: #000000; width: 600px;"
                                                width="600">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1" width="100%"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <table class="heading_block block-1" width="100%" border="0"
                                                                cellpadding="0" cellspacing="0" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="padding-bottom:5px;padding-top:20px; padding-left:20px; text-align:left;width:100%;">
                                                                            <h1
                                                                                style="margin: 0; color: #555555; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 36px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0;">
                                                                                <strong style="color:#27272A">Titre</strong>
                                                                            </h1>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <table class="text_block block-2" width="100%" border="0"
                                                                cellpadding="0" cellspacing="0" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="padding-bottom:20px;padding-left:25px;padding-right:25px;padding-top:10px;">
                                                                            <div style="font-family: sans-serif">
                                                                                <div class="border-bottom: 2px solid #000"
                                                                                    style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 25.2px; color: #27272A; line-height: 1.8;">
                                                                                    <p style="font-size:0.9rem;">
                                                                                        <strong>Bonjour,</strong>
                                                                                    </p>
                                                                                    <p
                                                                                        style="margin: 0; font-size: 14px; mso-line-height-alt: 32.4px;">
                                                                                        <span style="font-size:14px;">Nous avons
                                                                                            reçu une nouvelle demande de contact
                                                                                            de la part de Jean Soulier. </span>
                                                                                    </p>
        
                                                                                    <div style="font-family: sans-serif; border-bottom:2px solid #E8E8E8;">
                                                                                        <div class="border-top:1px solid #E8E8E8; border-bottom:1px solid #E8E8E8; height:400px; width:600px; height:400px; padding:20px; margin:20px 20px 20px 20px;"
                                                                                            style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 25.2px; color: #27272A; line-height: 1.8;">
                                                                                            <p style="font-size:0.9rem;">
                                                                                                Praesent morbi scelerisque vitae
                                                                                                morbi volutpat viverra eu arcu
                                                                                                nisi, ultricies at semper
                                                                                                ultrices si in magna pharetra
                                                                                                non.
                                                                                            </p>
                                                                               
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
        
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #e8e8e8;">
                                <tbody>
                                    <tr>
                                        <td>
        
        
                                        </td>
                                    </tr>
        
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>
                                            <table class="row-content stack" align="center" border="0" cellpadding="0"
                                                cellspacing="0" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-position: center top; color: #000000; width: 600px;"
                                                width="600">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1" width="100%"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <table class="image_block block-1" width="100%" border="0"
                                                                cellpadding="0" cellspacing="0" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;padding-right:0px;padding-left: 0px;background: #fff;height: 40px; border-radius: 0px 0px 10px 10px;">
                                                                            <div class="alignment" align="center"
                                                                                style="padding:20px 0px 20px 0px; height:20px!important background:#fff; line-height:15px display: block; height: auto; border: 0; width: 600px; max-width: 100%;"
                                                                                width="600">
                                                                                <p
                                                                                style="margin: 20; text-align: center; mso-line-height-alt: 14.399999999999999px; font-size:80%; color:#bfbfbf; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; letter-spacing: normal; line-height: 120%; text-align: center;">
                                                                                Ce message vous est envoyé d'une boite
                                                                                courriel non gérée. <br />Veuillez ne pas
                                                                                répondre à ce message.</p>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
        
                                                                </tbody>
                                                            </table>
        
                                                            <table class="text_block block-3" width="100%" border="0"
                                                                cellpadding="0" cellspacing="0" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="padding-bottom:35px;padding-left:10px;padding-right:10px;padding-top:5px;">
                                                                            <div style="font-family: sans-serif">
                                                                                <div class=""
                                                                                    style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #262b30; line-height: 1.2;">
        
                                                                                    <p
                                                                                        style="margin: 10; text-align: center; mso-line-height-alt: 14.399999999999999px;">
                                                                                        Si vous souhaitez ne plus recevoir
                                                                                        d’emails de la part d’Elevently.com,
                                                                                        veuillez vous <a href='#'
                                                                                            style="color:#33DEBD">désabonner</a>.
                                                                                    </p>
                                                                                    <p style="margin: 10; text-align: center;">
                                                                                        <span
                                                                                            style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #262b30; line-height: 1.2;">©2023
                                                                                            Elevently.Inc</span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
        
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table><!-- End -->
        
        
        </body>
        
        </html>
        `
    };

    

    if (req.method === 'POST') {
        transporter.sendMail(clientEmail, (err: { address: any; },info: { accepted: any; }) => {
    
          if (err) {
            console.error('Email sending error:', err);
           return  res.status(404).json({
                error: `Connection refused at ${err.address}`
            });
          } else {
            console.log('Email sent:', info);
            const response = {
                success: `Message delivered to ${info.accepted}`,
                timestamp: timestamp,
                otp: otp,  // Include the generated OTP in the response
                
               userIP: userIP,
                expirationDate: expirationDate,
               


            };
           return res.status(250).json(response);
          }
        });
    
       
      }
}




