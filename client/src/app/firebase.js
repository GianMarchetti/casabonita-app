// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQU1wcDaXLgjjoz1m-oYhhNv5wdK-oaTQ",
  authDomain: "coderhouse-adf37.firebaseapp.com",
  projectId: "coderhouse-adf37",
  storageBucket: "coderhouse-adf37.appspot.com",
  messagingSenderId: "1004794295008",
  appId: "1:1004794295008:web:402e5dda9e9802e350d685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const database = getDatabase(app);
// export const db = getDatabase(); // Realtime Database
export const firestore = getFirestore()  // Firestore
export const auth = getAuth();// Authentication
export const storage = getStorage();// Storage
export const db = getFirestore(app);
// console.log(db)
const colRef = collection(db, "Items")

// Get a list of cities from your database
async function getProducts(db) {
  const itemsCol = collection(db, 'Items');
  const itemsSnapshot = await getDocs(itemsCol);
  const itemsList = itemsSnapshot.docs.map(doc => doc.data());
  return itemsList;
}
