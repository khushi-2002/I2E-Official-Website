var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tag");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tag");

}

$(".blog-cards").owlCarousel({
   margin: 10,
   loop: true,
   autoplay: true,
   autoplayTimeout: 2000,
   autoplayHoverPause: true,
   responsive:{
    0:{
        items: 1,
        nav: false

    },
    600:{
        items: 2,
        nav: false
    },

    1000:{
        items: 3,
        nav: false
    }
   }

});

var sidemenu = document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right = 0;
}

function closemenu(){
    sidemenu.style.right= "-200px";
}