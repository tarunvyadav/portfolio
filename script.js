var tablinks= document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){ 
        tablinks.classList.remove("active-link");
          tt(tabname)

    }
     for(tabcontent of tabcontents){ 
        tabcontents.classList.remove("active-tab");
        
    }

        event.currentTarget.clssList.add('active-link');
        document.getElementById(tabname).classList.add('active-tab')
 
}


var sidemenu = document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}