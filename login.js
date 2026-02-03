// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm2SVf4h4I9oTd7LZUSD7kkA6W7Cyha-Q",
  authDomain: "login-20d18.firebaseapp.com",
  projectId: "login-20d18",
  storageBucket: "login-20d18.firebasestorage.app",
  messagingSenderId: "132204891034",
  appId: "1:132204891034:web:772d4da8c0bcb094bd8823",
  measurementId: "G-28E18R4JP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const auth = getAuth();
const submit=document.getElementById("submit")
submit.addEventListener("click",function(event){
  event.preventDefault();
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Loging Successfully")
      window.location.href="/homepage.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Not register Here ")
      window.location.href="/register.html"
      // ..
    });

}); 

