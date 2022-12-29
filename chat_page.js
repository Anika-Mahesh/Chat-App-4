var firebaseConfig = {
    apiKey: "AIzaSyCW4y9Vw9c5TAcEtIbsnpLxTd_MIpOkgr4",
    authDomain: "chat-web-app-bf19d.firebaseapp.com",
    databaseURL: "https://chat-web-app-bf19d-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-bf19d",
    storageBucket: "chat-web-app-bf19d.appspot.com",
    messagingSenderId: "800057059772",
    appId: "1:800057059772:web:283ae8b4bc7ec26fd4a3b9"
  };

  firebase.initializeApp(firebaseConfig);
    
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });

    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
    } });  }); }