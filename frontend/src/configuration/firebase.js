// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {getFirestore, setDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXScjyvTxN_WgD4ytRtal6pP2BmWrB0uQ",
  authDomain: "chatapp-e1e0a.firebaseapp.com",
  projectId: "chatapp-e1e0a",
  storageBucket: "chatapp-e1e0a.firebasestorage.app",
  messagingSenderId: "996721770240",
  appId: "1:996721770240:web:a3c5456ebe030f6067fde5",
  measurementId: "G-0MZLZD267T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const db=getFirestore(app);
const signup=async(username,email,password)=>{
  try{
      const res=await createUserWithEmailAndPassword(auth,email,password);
      const user=res.user;
      await setDoc(doc(db,"users",user.uid),{
        id:user.uid,
        username:username.toLowerCase(),
        email:email,
        name:"",
        avatar:"",
        bio:"Hey,I am using chat app",
        lastSeen:Date.now()
      })
      await setDoc(doc(db,"chats",user.uid),{
        chatData:[]
      })
  }
  catch{
    console.log(error);
  }
}