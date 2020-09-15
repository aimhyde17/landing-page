const header = document.getElementById('header');
const features = document.getElementById('features');
const showcase = document.getElementById('showcase');
const pricing = document.getElementById('pricing');
const burgerMenu = document.querySelector('.icon');


window.onscroll = function () {
    solidify();
    animatedScroll();
};

function solidify() {
    //Transition effect
    return header.className = (document.documentElement.scrollTop > 100) ? 'solid' : '';
}

function animatedScroll(){
    if(document.documentElement.scrollTop > 100){
        features.className = 'animated';
        if(document.documentElement.scrollTop > 1000){
            showcase.className = 'animated';
        }
        if(document.documentElement.scrollTop > 1300){
            pricing.className = 'animated';
        }
        
    }else{
        features.className = '';
        showcase.className = '';
        pricing.className = '';
    }
}

burgerMenu.addEventListener('click', slideFunction);

function slideFunction() {
    let x = document.getElementById("nav-bar");
    return x.style.display = (x.style.display === "block") ? 'none' : 'block';
}