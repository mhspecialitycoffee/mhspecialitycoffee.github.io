var  eye = document.getElementsByClassName("eye-ball");
document.onmousemove = function(e){
var width = window.innerWidth;
var x = e.pageX;// event.clientX;
var a = x / width;
a= a *100;
var height = window.innerHeight;
var y = e.pageY;//event.clientY;
var b = y / height;
b= b *100;
eye[0].style = "left: " + a + "%; top: " + b + "%;" + "transform:translate(-"+a+"%,-"+b+"%)";
eye[1].style = "left: " + a + "%; top: " + b + "%;" + "transform:translate(-"+a+"%,-"+b+"%)"; 
}
