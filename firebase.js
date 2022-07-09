// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import {getFirestore, collection, setDoc, addDoc, deleteDoc, doc, updateDoc, getDocincrement, increment} from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5m6SUM-2uXny1fDzH22Hfkbi3Eiin_x0",
    authDomain: "payitforward-c1834.firebaseapp.com",
    projectId: "payitforward-c1834",
    storageBucket: "payitforward-c1834.appspot.com",
    messagingSenderId: "379208007640",
    appId: "1:379208007640:web:1cd62cbb88508dcebe3cad",
    measurementId: "G-2WPR3EKFPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

const colRef = collection(db, 'users')

export function signup(firstName, lastName, email, contact, password) {
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setDoc(doc(db, "users", user.uid), 
    {
      First_Name: firstName,
      Last_Name: lastName,
      Email: email,
      Contact: contact,
      Total_Donation: 0.0
    }
  )

    // ...
  });
  
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}


export function logout() {
  return signOut(auth);
}


export async function updateDonation(Donation) {
  await updateDoc(doc(db, "users", auth.currentUser.uid), 
    {
      Total_Donation: increment(Donation)
    }
  )
}

export function updateNsFitUrl(nsFitUrl) {
  updateDoc(doc(db, "users", auth.currentUser.uid), 
    {
      NS_Fit_URL: nsFitUrl
    }
  )
}

//increment the number of time the users complete ns fit
export function updateNsFit() {
  updateDoc(doc(db, "users", auth.currentUser.uid), 
    {
      NS_Fit: increment(1)
    }
  )
}

export function getPushUp() {
  return getDoc(doc(db, "users", auth.currentUser.uid)).data().Push_Up
}

export function getSitUp() {
  return getDoc(doc(db, "users", auth.currentUser.uid)).data().Sit_Up
}

export function getRunning() {
  return getDoc(doc(db, "users", auth.currentUser.uid)).data().Running
}

export async function getIpptScore() {
  const docRef = doc(db, "users", auth.currentUser.uid);
  const docSnap = await getDoc(docRef);
  return docSnap.data().Ippt_Score;
}

//get number of time user complete NS fit
export function getNsFit() {
  return getDoc(doc(db, "users", auth.currentUser.uid)).data().NS_Fit
}