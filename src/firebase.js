
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyCE2R3r2YSyTgCcfcirprml3FvDT-jpmCk",
  authDomain: "react-authentication-e09c5.firebaseapp.com",
  projectId: "react-authentication-e09c5",
  storageBucket: "react-authentication-e09c5.appspot.com",
  messagingSenderId: "374058331460",
  appId: "1:374058331460:web:c6633727a4d41866ae7b11",
  measurementId: "G-3D15X6SG5Z"
};


const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);
export default app;