// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNtkzcHAAgPMJgwpoZFsswKq9Mg5fYn1o",
  authDomain: "reportly-659d7.firebaseapp.com",
  projectId: "reportly-659d7",
  storageBucket: "reportly-659d7.appspot.com",
  messagingSenderId: "132289717660",
  appId: "1:132289717660:web:82a8f73be582419bb05459"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Get a list of cities from your database
// export const getCities = async function () {
//   const db = getFirestore(app);

//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

export const makeID = (length)=> {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}


export default db;
