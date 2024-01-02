// supabase-requests-profile.js (or wherever your utility functions are)
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
// const supabase = createClientComponentClient();

// export const checkPassword = async (email: any, password: any) => {
//   try {
//     const { error } = await supabase.auth.signInWithPassword({
//       email: email,
//       password: password,
//     });

//     if (error) {
//       if (error.message === 'Email not confirmed') {
//         return 'Email not confirmed'
//       }
//       console.log(error)
//       return false; // Password is incorrect
//     }

//     return true; // Password is correct
//   } catch (error) {
//     console.error('Error checking password:', error);
//     return false; // Error occurred while checking password
//   }
// };
