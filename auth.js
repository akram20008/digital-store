const firebaseConfig = {
  apiKey: "AIzaSyAkVr83u7Oxy-lWvqWlCqyVjIS34J-FRd4",
  authDomain: "digital-store-268a9.firebaseapp.com",
  projectId: "digital-store-268a9",
  storageBucket: "digital-store-268a9.firebasestorage.app",
  messagingSenderId: "302075016274",
  appId: "1:302075016274:web:4c2a5e40a6de69d87c9b8b"
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
