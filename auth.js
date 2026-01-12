// Firebase SDKs
var script1 = document.createElement("script");
script1.src = "https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js";
document.head.appendChild(script1);

var script2 = document.createElement("script");
script2.src = "https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js";
document.head.appendChild(script2);

script2.onload = function () {

  var firebaseConfig = {
    apiKey: "AIzaSyAkVr83u7Oxy-lWvqWlCqyVjIS34J-FRd4",
    authDomain: "digital-store-268a9.firebaseapp.com",
    projectId: "digital-store-268a9",
    storageBucket: "digital-store-268a9.appspot.com",
    messagingSenderId: "302075016274",
    appId: "1:302075016274:web:4c2a5e40a6de69d87c9b8b"
  };

  firebase.initializeApp(firebaseConfig);
  window.auth = firebase.auth();
};

// ===== تسجيل =====
function register() {
  auth.createUserWithEmailAndPassword(email.value, password.value)
    .then(() => {
      alert("✅ تم إنشاء الحساب");
      location.href = "login.html";
    })
    .catch(e => alert(e.message));
}

// ===== دخول =====
function login() {
  auth.signInWithEmailAndPassword(email.value, password.value)
    .then(() => location.href = "index.html")
    .catch(() => alert("❌ بيانات خاطئة"));
}

// ===== حماية =====
function protect() {
  auth.onAuthStateChanged(user => {
    if (!user) location.href = "login.html";
  });
}

// ===== خروج =====
function logout() {
  auth.signOut().then(() => location.href = "login.html");
}
