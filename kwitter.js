
const firebaseConfig = {
    apiKey: "AIzaSyBTNuZ6mcrd2HD6UIZW9K4IQ8H5VrtlEbU",
    authDomain: "social-website-81dc3.firebaseapp.com",
    databaseURL: "https://social-website-81dc3-default-rtdb.firebaseio.com",
    projectId: "social-website-81dc3",
    storageBucket: "social-website-81dc3.appspot.com",
    messagingSenderId: "504183778792",
    appId: "1:504183778792:web:23679c116dde720f79c85d"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html"
}