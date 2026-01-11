// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCE0YBzwzgyleVzv0lu6rUMe0WX6geUk2M",
  authDomain: "digital-store-f1ff7.firebaseapp.com",
  projectId: "digital-store-f1ff7",
  storageBucket: "digital-store-f1ff7.appspot.com",
  messagingSenderId: "538006229610",
  appId: "1:538006229610:web:0c32ebe8d787ea71d6f013"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ===== تسجيل الدخول =====
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch(err => alert(err.message));
}

// ===== إنشاء حساب =====
function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("تم إنشاء الحساب بنجاح");
      window.location.href = "login.html";
    })
    .catch(err => alert(err.message));
}

// ===== حماية الصفحات =====
function protect() {
  auth.onAuthStateChanged(user => {
    if (!user) {
      window.location.href = "login.html";
    }
  });
}

// ===== تسجيل خروج =====
function logout() {
  auth.signOut().then(() => {
    window.location.href = "login.html";
  });
}
