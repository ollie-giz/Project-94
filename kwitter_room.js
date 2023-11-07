var firebaseConfig = {
  apiKey: "AIzaSyCwSF7M49oIDoMX9KNowCMM5IQMOBKjFzU",
  authDomain: "we-chat-b976e.firebaseapp.com",
  databaseURL: "https://we-chat-b976e-default-rtdb.firebaseio.com",
  projectId: "we-chat-b976e",
  storageBucket: "we-chat-b976e.appspot.com",
  messagingSenderId: "832898584220",
  appId: "1:832898584220:web:5b6e35504eef6997d5e759"
};
    
// Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name"); 
  localStorage.removeItem("room_name"); 
  window.location = "index.html";
}