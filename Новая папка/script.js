// let parNumber = document.getElementsByClassName("par");
let parNumber = document.getElementsByTagName("p");
// let parNumber = 5;

console.log(parNumber.length);

let id;

for (let i = 0; i < parNumber.length; i++) {
  id = "paragraph" + (i + 1);
  if (i % 2) {
  document.getElementById(id).style.color = "red";
  } else {
    document.getElementById(id).style.color = "green";
  }
}




let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", showHamburger);

function showHamburger () {
 
  let mobileMenu = document.getElementById("mobile-menu").style.width = "1230px";
  mobileMenu.classList.toggle("mobile-menu-animation");
  x.style.display ="block";

}

let x = document.getElementById("x")
x.addEventListener("click",close)
function close(){
  x.style.display = "none"
  mobileMenu.style.display = "none"
}
