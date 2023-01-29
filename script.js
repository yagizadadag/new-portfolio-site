const toggleBtn = document.getElementById('hamburger-menu');
const navbarLinks = document.querySelector('.navbar-links');

toggleBtn.addEventListener('click' , () => {
    navbarLinks.classList.toggle('hidden');
})

let activeTitle = 'yagizadadag';
let inactiveTitle = 'keep browsing my portfolio - yagizadadag';
document.title = activeTitle;
window.addEventListener('blur', e => {
    document.title = inactiveTitle;
});
window.addEventListener('focus', e => {
    document.title = activeTitle;
});

//Sticky Menu

const stickyContainer = document.getElementById("sticky-menu-container");
const stickyMenu = document.getElementById("sticky-menu");

window.onscroll = function (){
    var vh = window.innerHeight;
    if(document.body.scrollTop >= 70*vh/100 || document.documentElement.scrollTop >= 70*vh/100){
        stickyContainer.style.display = "flex";
    } else{
        stickyContainer.style.display = "none";
    }
    
}

function toggleMenu() {
    stickyMenu.classList.toggle("sticky-menu-active");
}