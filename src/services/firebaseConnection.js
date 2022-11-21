import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCllyb4ldt_27PK0lFAl4rfsxAeJ6B9kTI",
  authDomain: "sistema-de-agendamento-92287.firebaseapp.com",
  projectId: "sistema-de-agendamento-92287",
  storageBucket: "sistema-de-agendamento-92287.appspot.com",
  messagingSenderId: "565632128346",
  appId: "1:565632128346:web:b37d8b76f96cf3e0d10f63",
  measurementId: "G-C67WZ837CY",
};

const firebaseApp = initializeApp(firebaseConfig);

const dg = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { dg, auth };
