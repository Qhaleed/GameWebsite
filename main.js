var navbar = document.getElementById('navbar');
const grid = document.getElementById('article-container');



window.onscroll = function() {scrollFunction()};
function scrollFunction () {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
        navbar.style.backgroundColor = "rgba(0,0,0,0.8)";
        navbar.style.transition = "500ms"
    }
    else {
        navbar.style.backgroundColor = " rgba(245, 245, 220, 0)";
    }
}

