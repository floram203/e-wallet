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
const formSignIn = document.getElementById("form-container-signin");
formSignIn.addEventListener("submit", (e) => {
  e.preventDefault();
  // Initialize Firebase
  app
    .auth()
    .signInWithEmailAndPassword(
      formSignIn.email.value,
      formSignIn.password.value
    )
    .then((userCredential) => {
      var user = userCredential.user;
      console.log("Loggedd In:", user.email);
      userCredential;
      location.href = `dashboard.html`;

      // Signed in
      var user = userCredential.user;
      console.log("Logged In: ", user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});
