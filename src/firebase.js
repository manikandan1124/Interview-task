// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Add a new document with a generated id.
const handle= async()=>{
    // Add a new document with a generated id.
const docRef = await addDoc(collection(db, "firedb"), {
  
  
});
console.log("Document written with ID: ", docRef.id)
}

const firebaseConfig ={
    apiKey: "AIzaSyBwiJ4k4pb0Y_akB31ovhImdOXxaD62Xp0",
  authDomain: "formtask-7da6c.firebaseapp.com",
  projectId: "formtask-7da6c",
  storageBucket: "formtask-7da6c.appspot.com",
  messagingSenderId: "665832282196",
  appId: "1:665832282196:web:6310e617c7fb88c5c175c1"
  
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const db = getFirestore();
export default db