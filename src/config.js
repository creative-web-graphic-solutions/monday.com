import Firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdv7Zzf4CWKNHOdeyiPVB7Xem6W1OnPJs",
    authDomain: "seating-plan-4991d.firebaseapp.com",
    databaseURL: "https://seating-plan-4991d.firebaseio.com",
    projectId: "seating-plan-4991d",
    storageBucket: "seating-plan-4991d.appspot.com",
    messagingSenderId: "745451387123",
    appId: "1:745451387123:web:a5b3e26b66ae8c52b99f86",
    measurementId: "G-W43M2VC6W3"
  };
  

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();