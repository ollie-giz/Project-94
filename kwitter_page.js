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
    room_name = localStorage.getItem("room_name");

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = ""; 
    }

    function logout() {
      localStorage.removeItem("user_name"); 
      localStorage.removeItem("room_name"); 
      window.location = "index.html";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
