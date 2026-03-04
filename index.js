
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
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

