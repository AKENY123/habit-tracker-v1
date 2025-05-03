// TODO: Replace with your own config from Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyBoEXUStlAycfD_nwso68b_uGr5vq1BAyo",
  authDomain: "habittracker-ab3e9.firebaseapp.com",
  projectId: "habittracker-ab3e9",
  storageBucket: "habittracker-ab3e9.appspot.com",
  messagingSenderId: "254739579392",
  appId: "1:254739579392:web:f6f30963acd97d65d20ee5",
  measurementId: "G-3RD5SC0PV6"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const logoutBtn = document.getElementById("logout-btn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const authSection = document.getElementById("auth-section");
const appSection = document.getElementById("app-section");

loginBtn.onclick = () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  auth.signInWithEmailAndPassword(email, password)
    .catch(err => alert(err.message));
};

registerBtn.onclick = () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  auth.createUserWithEmailAndPassword(email, password)
    .catch(err => alert(err.message));
};

logoutBtn.onclick = () => {
  auth.signOut();
};

auth.onAuthStateChanged(user => {
  if (user) {
    authSection.style.display = "none";
    appSection.style.display = "block";
  } else {
    authSection.style.display = "block";
    appSection.style.display = "none";
  }
});
