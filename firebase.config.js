import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDojVwtdaS9A7qGDQtbapyRh9od_1T33QU",
  authDomain: "fir-temp-7c254.firebaseapp.com",
  databaseURL: "https://fir-temp-7c254-default-rtdb.firebaseio.com",
  projectId: "fir-temp-7c254",
  storageBucket: "fir-temp-7c254.appspot.com",
  messagingSenderId: "440501574893",
  appId: "1:440501574893:web:7c462cb85da9a7c80e80e4",
  measurementId: "G-S3MZRGQGVW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getDatabase;
