

function toggleMenu() {
    var menu = document.getElementById('navMenu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}


let rightBtn  = document.querySelector('#right-btn')
let leftBtn = document.querySelector('#left-btn')
let pictures = document.querySelectorAll('.slider-images img')

let imgNum = 0

rightBtn.addEventListener('click', () => {
    displayNone(pictures);
    imgNum++;

    if(imgNum == pictures.length){
        imgNum = 0;

       
    };


    pictures[imgNum].style.display = 'block'; 
    
});


leftBtn.addEventListener('click', () => {
    displayNone(pictures);
    imgNum--;

    if(imgNum == -1){
        imgNum = pictures.length -1;

    }     

    pictures[imgNum].style.display = 'block'; 

});


const displayNone = () => {
    pictures.forEach((img)=>{
        img.style.display = 'none'



    } )

}




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navigation = document.getElementById("navbar");
    if (window.innerWidth > 480) { 
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        navigation.style.position = "fixed";
        navigation.style.top = "0";
        navigation.style.left = "0";
        navigation.style.width = "100%";
        navigation.style.backgroundColor = "rgb(165, 42, 42)";
        navigation.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
        navigation.style.zIndex = "1000";
    

    }else{
        navigation.style.position = "relative";
        navigation.style.backgroundColor = "transparent";
        navigation.style.borderBottom = "none";
        navigation.style.boxShadow = "none";
        navigation.style.zIndex = "auto";
    }

    } 


   
}






document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', () => {
        let sectionAnimation = document.querySelector('.section .images');
        let sectionPosition = sectionAnimation.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;

       

        let leftImage = document.querySelector('.slidefromLeft');
        let rightImage = document.querySelector('.slidefromRight');

        if (sectionPosition > screenPosition) {
            


            leftImage.classList.add('animated');
            rightImage.classList.add('animated');
        }
    });
});





function scrollAnimation() {
    const items = document.querySelectorAll('.scroll-animation');
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            item.classList.add('show');
        }
    });
}

document.addEventListener('scroll', scrollAnimation);
document.addEventListener('DOMContentLoaded', scrollAnimation);



function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
}

window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('galleryScrollBtn');
    if (window.scrollY > 300) { // Prikazuje dugme nakon što skrolujete 300px
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

