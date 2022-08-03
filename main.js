// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyCAeZq7ysxRRpOhlq1GmsGjMPhfD2_D7tk",
  authDomain: "sign-up-challenge.firebaseapp.com",
  databaseURL: "https://sign-up-challenge-default-rtdb.firebaseio.com",
  projectId: "sign-up-challenge",
  storageBucket: "sign-up-challenge.appspot.com",
  messagingSenderId: "745978777747",
  appId: "1:745978777747:web:f459cae472f14db1a13d66",
  measurementId: "G-LJZ7YX8J0E",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
// Reference messages collection

// const formMessage = document.getElementById("contactForm")
const formSignup = document.getElementById("form-container-signup");

formSignup.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(
    "signUp In: ",
    formSignup.email.value,
    "signUp In: ",
    formSignup.password.value
  );
  // Initialize Firebase
  app
    .auth()
    .createUserWithEmailAndPassword(
      formSignup.email.value,
      formSignup.password.value
    )
    .then((userCredential) => {
      // Signed in
      location.href = `dashboard.html`;
      console.log(userCredential);
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.log(error);
      // ..
    });
});
