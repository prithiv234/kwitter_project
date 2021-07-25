function adduser(){
    p1=document.getElementById("username").value;
    localStorage.setItem("loginname",p1);
    window.location="kwitter_room.html";
}