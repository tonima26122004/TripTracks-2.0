import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCNS0SsxAUSMf083p51B6w8mWMrpwHqt8Q",
  authDomain: "diversion-aa8f4.firebaseapp.com",
  projectId: "diversion-aa8f4",
  storageBucket: "diversion-aa8f4.appspot.com",
  messagingSenderId: "316663304067",
  appId: "1:316663304067:web:0ca6340f72678ff622f0b6",
  measurementId: "G-CEVPWKXYFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth =getAuth(app);
export{auth};
