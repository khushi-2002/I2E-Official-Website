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
var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
