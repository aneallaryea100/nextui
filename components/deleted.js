// .then((response) => {
//     if(response.ok) {
//         return response.json();
//     } else {
//         throw new Error("Failed to fetch partners")
//     }
// }).then((partner) => {
//     setPartner(partner);
// })
// .catch((error) => {
//     setError(error.message);
// })


// ----------------------------


// import { useSession } from "next-auth/react"
// import { useState } from "react";

// function Partners() {
//     const { data: session } = useSession();
//     const [partner, setPartner] = useState();
//     // const [error, setError] = useState(null);
//     console.log('session', session);

//     const fetchPartner = async () => {
//         const response = await fetch("https://spes.pscgh.com:442/pp_test/api/Partner?query=jjjjjj&page=2&size=23&status=3&orderBy=ndndndndn&from=02-02-2022&to=02-02-2024", {
//             method: "GET",
//             headers: {
//                 authorization: `bearer ${session.accessToken}`,
//             }
//         })
//         const partnerResponse = await response.json();
//         setPartner(partnerResponse);
//     }

//     if(session?.user) {
//         return (
//         <div>
//             <h1>Partners table</h1>
//             <button onClick={fetchPartner}>Get partner</button>
//             <div>
//                 {partner && JSON.stringify(partner)}
//             </div>
//         </div>
//         )
//     }else {
//        return <h1>try and sign in</h1>
//     }
// }

// export default Partners


// login cred---

// const loginData = {
//     userName: userName,
//     password: password
// };

// try {
//     const response = await fetch("https://spes.pscgh.com:442/pp_test/api/Authentication/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(loginData)
//     });

//     if(response.ok) {
//         //login successful, handle the response
//         const data = await response.json();

//         // Store the access token in a cookie
//          Cookies.set("accessToken", data.accessToken, {
//              expires: 7, 
//              secure: true, 
//              sameSite: "strict", 
//              httpOnly: true 
//             });

//         console.log(data);
//         // console.log(Cookies.set("accessToken", data.accessToken, {
//         //     expires: 7, 
//         //     secure: true, 
//         //     sameSite: "strict", 
//         //     httpOnly: true 
//         //    }));
//         // console.log('token',data.data.token.accessToken);
//         console.log(Cookies.get("accessToken"));
//         // Redirect to the partner page
//         // router.push("/");
//     } else {
//         //login failed
//         const errorData = await response.json();
//         setError(errorData.message);
//     }
// } catch (error) {
//     // handle network or other errors
//     setError("An Error occured. Please try again later.");
// }