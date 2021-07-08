//script.js 

function responsiveMenu(query) {
    if (query.matches) { // If media query matches
      document.getElementById('desktopmenu').style.display = "none";
      document.getElementById('mobilemenu').style.display = "block";
    } else {
        document.getElementById('desktopmenu').style.display = "block";
        document.getElementById('mobilemenu').style.display = "none";
    }
  }
  
  let x = window.matchMedia("(max-width: 700px)");
  responsiveMenu(x); // Call listener function at run time
  x.addListener(responsiveMenu); // Attach listener function on state changes

const button = document.getElementById("mobilemenu");
let dropdownmenu = document.getElementById("dropdownmenu");

function toggleMenu(){

    if(dropdownmenu.style.height === "70px"){
        dropdownmenu.style.height = "0px";
        
    } else {
        dropdownmenu.style.height = "70px";
    }
}

button.addEventListener('click', toggleMenu)
