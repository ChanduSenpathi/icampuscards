const mover1  = document.getElementById('mover1')
const mover2  = document.getElementById('mover2')
const mover3  = document.getElementById('mover3')
const nav = document.getElementById('navId')

const menuBtn = document.getElementById('hamburgerbtn');
let toggleMenu = document.getElementById('menucopy');

let isToggled = true;

window.addEventListener("scroll", () => {
    let reveals = document.querySelectorAll(".reveal");

    var windowHeight = window.innerHeight;
    var revealPoint = 150;
    
    reveals.forEach((reveal) => {
        var revealTop = reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add("active");
        } else {
            reveal.classList.remove("active");
        }
    });
    let val = window.scrollY;
    mover1.style.transform = `translateX(${val}px)`;
    mover2.style.transform = `translateX(${val}px)`;
    mover3.style.transform = `translateX(${val}px)`;
});

const toggleButton = () => {
    if(isToggled){
        toggleMenu.classList.add('hide');
        toggleMenu.classList.remove('show');
        isToggled = false;
    }else {
        toggleMenu.classList.add('show');
        toggleMenu.classList.remove('hide');
        isToggled = true;
    }
}


menuBtn.addEventListener('click', toggleButton)

toggleButton();