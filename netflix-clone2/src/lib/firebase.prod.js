import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBMIgPTQRbJn7Q5M7d9Rfau8mcErJ3uA6c",
  authDomain: "netflix-clone2-55fd8.firebaseapp.com",
  projectId: "netflix-clone2-55fd8",
  storageBucket: "netflix-clone2-55fd8.appspot.com",
  messagingSenderId: "367417397413",
  appId: "1:367417397413:web:331cd05834a15780f23d4c",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
