// import { useEffect, useState } from 'react'
// import { useUser } from '@clerk/clerk-react'
// import { supabase } from '../lib/supabase'


// export function useAccessCheck() {
//   const { user, isLoaded } = useUser()
//   const [status, setStatus] = useState('loading')

//   useEffect(() => {
//     if (!isLoaded) return

//     if (!user) {
//       setStatus('denied')
//       return
//     }

//     const email = user.primaryEmailAddress?.emailAddress

//     if (!email) {
//       setStatus('denied')
//       return
//     }

//     const checkAccess = async () => {
//       const { data, error } = await supabase
//         .from('allowed_users')
//         .select('id')
//         .eq('email', email)
//         .single()

//       if (error || !data) {
//         setStatus('denied')
//       } else {
//         setStatus('allowed')
//       }
//     }

//     checkAccess()
//   }, [user, isLoaded])

//   return status
// }


import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

export function useAccessCheck() {
  const { user, isLoaded } = useUser();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!isLoaded) return;

    if (!user) {
      setStatus("denied");
      return;
    }

    const email = user.primaryEmailAddress?.emailAddress;

    async function checkAccess() {
      try {
        const response = await fetch(
          "https://hook.eu1.make.com/pzie9im7abf56dpiqxw1d6zzof1l2vco",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );


        const result = await response.json();

        console.log("result =", result);
        console.log("allowed =", result.allowed);
        console.log("authorized =", result.authorized);

        if (result.allowed === true) {
          setStatus("allowed");
        } else {
          setStatus("denied");
        }
      } catch (err) {
        setStatus("denied");
      }
    }

    checkAccess();
  }, [user, isLoaded]);

  return status;
}