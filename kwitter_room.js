
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function addRoom() 
{
    room_name = document.getElementById("room_name")
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html"
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}