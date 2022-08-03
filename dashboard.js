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
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  console.log("----");
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


// Get the modal
var wthModal = document.getElementById("wthMyModal");

// Get the button that opens the modal
var wthBtn = document.getElementById("wthMyBtn");

// Get the <span> element that closes the modal
var wthSpan = document.getElementsByClassName("wthClose")[0];

// When the user clicks on the button, open the modal
wthBtn.onclick = function () {
  wthModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
wthSpan.onclick = function () {
  wthModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == wthModal) {
    wthModal.style.display = "none";
  }
};

