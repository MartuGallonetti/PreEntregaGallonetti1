import { initializeApp } from "firebase/app";
import { getFirestore as firestore } from "firebase/firestore";


export const firebaseConfig = {
  apiKey: "AIzaSyDTCk8DW392t0SW_hrQUQTclx9WJeyRXfY",
  authDomain: "vivero-jazmin.firebaseapp.com",
  projectId: "vivero-jazmin",
  storageBucket: "vivero-jazmin.appspot.com",
  messagingSenderId: "952174927203",
  appId: "1:952174927203:web:8ba72b947287aa1570c756",
  measurementId: "G-81V7YDCLPS"
};



const app =  initializeApp(firebaseConfig)
export const getFirebase=()=>{
    return app
}

export const getFirestore = () => {
    return firestore(app);
  };