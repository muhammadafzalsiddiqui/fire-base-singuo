
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";

import { getAuth , createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAynJ89FG2n-RpUqfTtKFt9DunfyXiYBKI",
    authDomain: "quote-app-25d69.firebaseapp.com",
    projectId: "quote-app-25d69",
    storageBucket: "quote-app-25d69.firebasestorage.app",
    messagingSenderId: "477498184023",
    appId: "1:477498184023:web:38845aef176d910d2cee12",
    measurementId: "G-4218NBKRNY"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  console.log("auth=>",auth)
 //sign up


var btn = document.querySelector(".login-btn");

btn.addEventListener("click", signup);

function signup() {
  var eemail = document.getElementById("semail").value;
  var epassword = document.getElementById("spassword").value;


createUserWithEmailAndPassword(auth, eemail, epassword)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
 





