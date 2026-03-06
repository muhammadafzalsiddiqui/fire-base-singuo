import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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
const auth = getAuth(app);

// Toggle Function (Isse window object pe rakha taaki HTML onclick kaam kare)
window.toggleForm = () => {
    const sForm = document.getElementById('signup-form');
    const lForm = document.getElementById('login-form');
    const tText = document.getElementById('toggle-text');

    if (sForm.style.display === "none") {
        sForm.style.display = "block";
        lForm.style.display = "none";
        tText.innerText = "Apne account mein SignUp karein";
    } else {
        sForm.style.display = "none";
        lForm.style.display = "block";
        tText.innerText = "Apne account mein Login karein";
    }
};

// --- SIGNUP LOGIC ---
const signupBtn = document.getElementById('signup-btn');
if (signupBtn) {
    signupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // HTML mein signup email ki ID 'semail' hai
        const email = document.getElementById('semail').value;
        const pass = document.getElementById('spassword').value;

        if (email === "" || pass === "") {
            alert("Please fill all fields for Signup");
            return;
        }

        createUserWithEmailAndPassword(auth, email, pass)
            .then(() => {
                alert("Signup Successful! Ab login karein.");
                window.toggleForm(); // Signup ke baad login form dikhao
            })
            .catch((error) => alert("Signup Error: " + error.message));
    });
}

// --- LOGIN LOGIC ---
const loginBtn = document.getElementById('login-btn');
if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // HTML mein login email ki ID 'lemail' hai
        const email = document.getElementById('lemail').value;
        const pass = document.getElementById('lpassword').value;

        if (email === "" || pass === "") {
            alert("Please fill all fields for Login");
            return;
        }

        signInWithEmailAndPassword(auth, email, pass)
            .then(() => {
                alert("Login Successful!");
                window.location.href = "quotes.html"; 
            })
            .catch((error) => alert("Login Error: " + error.message));
    });
}