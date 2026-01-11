function getUsers(){
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users){
  localStorage.setItem("users", JSON.stringify(users));
}

/* ===== إنشاء حساب ===== */
function register(){
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if(!email || !password){
    alert("املأ جميع الحقول");
    return;
  }

  const users = getUsers();
  if(users.find(u => u.email === email)){
    alert("البريد مستخدم مسبقًا");
    return;
  }

  users.push({email,password});
  saveUsers(users);

  alert("✅ تم إنشاء الحساب");
  location.href = "login.html";
}

/* ===== تسجيل دخول ===== */
function login(){
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = getUsers();
  const found = users.find(
    u => u.email === email && u.password === password
  );

  if(!found){
    alert("بيانات غير صحيحة");
    return;
  }

  localStorage.setItem("currentUser", email);
  location.href = "index.html";
    }
