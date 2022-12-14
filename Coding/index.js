var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tab-content of tabcontents){
            tabcontents.classList.remove("active-tag");
    }

}