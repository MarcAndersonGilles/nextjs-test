// import { NextApiRequest, NextApiResponse } from "next";
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
// const supabase = createClientComponentClient();

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method !== 'POST') {
//         return res.status(405).end(); // Method Not Allowed
//     }

//     const { oldPassword } = req.body;
//     const sessionEmail = req.body.userEmail

//     try {

//         const { error } = await supabase.auth.signInWithPassword({
//             email: sessionEmail,
//             password: oldPassword,
//         })

//         if (error) {
//             return res.status(400).json({ message: 'Incorrect old password' });
//         }

//         return res.status(200).json({ message: 'Password verification successful' });

//     } catch (error) {
//         return res.status(500).json({ message: 'Internal server error' });
//     }
   
// }