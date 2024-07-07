// setting up firebase configm
import { getApp , getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEDvVA06Lzv5T68illE4Jsw5xxe6B357Y",
  authDomain: "harjeet-gpt-clone.firebaseapp.com",
  projectId: "harjeet-gpt-clone",
  storageBucket: "harjeet-gpt-clone.appspot.com",
  messagingSenderId: "972279846032",
  appId: "1:972279846032:web:11d1f6bb0897ca7c767415"
};

// Initialize Firebase as we can have multipe instances of the app  
// we only a single instance  
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// get the database object
const db = getFirestore(app);
// export database object
export{db};