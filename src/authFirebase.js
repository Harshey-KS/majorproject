// //authFirebase.js

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import app from "./firebase.config.js"

// export const signIn = async () => {
//   const auth = getAuth();
//   //   console.log(auth);
//   let provider = new GoogleAuthProvider();

//   const data = await signInWithPopup(auth, provider);
//   //   console.log(data.user);
//   if (data.user) {
//     const user = data.user;
//     console.log(user);
//     return {
//       username: user.displayName,
//       name: user.displayName,
//       email: user.email,
//       password: user.reloadUserInfo.createdAt,
//       pfp: user.photoURL,
//     };
//   } else {
//     const errorCode = data.code;
//     const errorMessage = data.message;
//     // The email of the user's account used.
//     const email = data.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(data);
//     console.log(errorMessage, errorCode);
//   }
// };