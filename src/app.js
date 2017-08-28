
// listen when dom is ready
document.addEventListener('DOMContentLoaded', function() {

    // find element with id #main
    var main = document.querySelector("#main");
    // find element with id #side-menu
    var sideMenu = document.querySelector("#side-menu");

    // 1. find all 2 elements with class .menu-btn
    // 2. for each element that has .menu-btn add click event
    // 3. call openSideMenu()
    // btns will store the two elements in other word btns = array
    var btns = document.querySelectorAll(".menu-btn"); // 1
    btns.forEach( (btn) => {
        btn.addEventListener("click", ()=> { // 2
            openSideMenu(); // 3
        }); 
     }
    );

    // 1. find the element with .close-btn class
    // 2. add click event
    // 3. call function closeSideMenu() when click
    var sideMenuCloseButton = sideMenu.querySelector(".close-btn"); // 1
    sideMenuCloseButton.addEventListener("click", function() { // 2
        closeSideMenu(); // 3
    });

    // show side menu by adding classes
    function openSideMenu() {
        main.classList.add("offset-menu");
        sideMenu.classList.add("show");    

        // if sticky nav is present, hide it
        stickyNav.classList.remove("show-sticky-nav");
    }

    // hide side menu by removing classes
    function closeSideMenu() {
        main.classList.remove("offset-menu");
        sideMenu.classList.remove("show");       
    }

    // find element with id #sticky-nav
    var stickyNav = document.querySelector("#sticky-nav");

    // find element with id #about
    var about = document.querySelector("#about");
    // listen when window/document is scrolling
    window.addEventListener("scroll", (e)=> {

        // using getBoundingClientRect() of the element will return the position and size
        // we are only going to use the top position
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
        var bodyRect = document.body.getBoundingClientRect(),
        aboutRect = about.getBoundingClientRect(),

        // get the current top position of the about id from the top window/body
        aboutYOffset   = aboutRect.top - bodyRect.top;

    //    console.log("pageYOffset... ",  window.pageYOffset);        
    //    console.log("aboutYOffset.. ", aboutYOffset);

        // check if we scrolled past the #about top position
        if (window.pageYOffset >= aboutYOffset) {
            stickyNav.classList.add("show-sticky-nav");
        }else {
            stickyNav.classList.remove("show-sticky-nav");
        }
        

    });

 }, false);
