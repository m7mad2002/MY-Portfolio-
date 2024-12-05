//add cllss active to heder on scro ll
let heder = document.querySelector("header")

window.onscroll = function(){
    if (this.scrollY >= 50){
        heder.classList.add("active")
    }else{
        heder.classList.remove("active")
    }
        }
let links = document.getElementById("links");
function Open_colse_manu(){
    links.classList.toggle("active")
}
var icon = document.getElementById("icon");
  icon.onclick = function(){
   document.body.classList.toggle("drak-theme");
   if(document.body.classList.contains("drak-theme")){
    icon.src = "icon/sun-regular.svg";
   }else{
    icon.src ="icon/moon-solid.svg"
   }
}
function main(){
    alert(" مافيش شي :) "); 
}