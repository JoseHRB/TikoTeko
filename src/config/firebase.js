import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBjJkPo8wmRNVmqOcPgo_xv4ht2cXl5iOA",
  authDomain: "tikoteko---journey.firebaseapp.com",
  projectId: "tikoteko---journey",
  storageBucket: "tikoteko---journey.appspot.com",
  messagingSenderId: "1049421463631",
  appId: "1:1049421463631:web:5dc81b34b73afd141b2a3a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db