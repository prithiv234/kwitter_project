var firebaseConfig = {
      apiKey: "AIzaSyBFsbTn4euWffhKXXbhHHv5yMd-5N0vJ1U",
      authDomain: "kwitter-pro-1ec61.firebaseapp.com",
      databaseURL: "https://kwitter-pro-1ec61-default-rtdb.firebaseio.com",
      projectId: "kwitter-pro-1ec61",
      storageBucket: "kwitter-pro-1ec61.appspot.com",
      messagingSenderId: "743738623269",
      appId: "1:743738623269:web:45108ce0121c13f80146cc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("loginname");
document.getElementById("user_name").innerHTML="welcome "+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
 function add_room(){
roomname=document.getElementById("room_name").value
firebase.database().ref("/").child(roomname).update({purpose:"adding user"})
localStorage.setItem("room_name", roomname);
 window.location = "kwitter_page.html";
 }
 function redirectToRoomName(name) { console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
       }
   function log_out(){
         localStorage.removeItem("loginname");
         window.location="index.html"
   }


