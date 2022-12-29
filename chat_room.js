var firebaseConfig = {
    apiKey: "AIzaSyCW4y9Vw9c5TAcEtIbsnpLxTd_MIpOkgr4",
    authDomain: "chat-web-app-bf19d.firebaseapp.com",
    databaseURL: "https://chat-web-app-bf19d-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-bf19d",
    storageBucket: "chat-web-app-bf19d.appspot.com",
    messagingSenderId: "800057059772",
    appId: "1:800057059772:web:283ae8b4bc7ec26fd4a3b9"
  };
  
  // Initialize Firebase

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "chat_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});});

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  