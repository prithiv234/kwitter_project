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

    user_name = localStorage.getItem("loginname");
    room_name = localStorage.getItem("room_name");
   
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
     console.log(firebase_message_id);
  console.log(message_data);
  myname = message_data['myname'];
  message = message_data['message'];
  like = message_data['like'];
  name_with_tag = "<h4>"+ myname +"<img class='user_tick' src='tick.png'></h4>";
  message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
  like_button ="<button class='btn btn-warning' id= "+firebase_message_id+"value= "+like+" onclick='updateLike(this.id)'>";
 span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like+"</span></button><hr>";

 row= name_with_tag + message_with_tag +like_button + span_with_tag;
 document.getElementById("output").innerHTML +=row;
//End code
      } });  }); }
getData();

function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          myname:user_name,
          message:msg,
          like:0

      });
      document.getElementById("msg").value="";
}
function updateLike(message_id)
{
 console.log("clicked on like button - " + message_id)
 button_id = message_id;
 likes = document.getElementById(button_id).value;
 updated_like = Number(likes) + 1;
 console.log(updated_like);

 firebase.database().ref(room_name).child(message_id).update({like:updated_like})
}