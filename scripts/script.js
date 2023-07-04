const slides = [...document.querySelectorAll(".slide")];

const sliderData = {
    direction: 0,
    slideOutIndex:0,
    slideInIndex: 0
}

const directionButtons = [...document.querySelectorAll(".slide_btn")];

directionButtons.forEach(btn => btn.addEventListener("click", handleClick))

function handleClick(e) {
    getDirection(e.target);
    slideOut();
}

function getDirection(btn){
    sliderData.direction = btn.className.includes("right") ? 1 : -1;

    sliderData.slideOutIndex = slides.findIndex(slide => slide.classList.contains("active"));

    if(sliderData.slideOutIndex + sliderData.direction > slides.length -1){
        sliderData.slideInIndex = 0;
    }
    else if(sliderData.slideOutIndex + sliderData.direction < 0){
        sliderData.slideInIndex = slides.length -1
    }
    else {
        sliderData.slideInIndex = sliderData.slideOutIndex + sliderData.direction;
    }
}

function slideOut(){
    slideAnimation({
        el : slides[sliderData.slideInIndex],
        props: {
            display: "block",
            transform: `translateX(${sliderData.direction < 0 ? "100%" : "-100%"})`,
            opacity: 0
        }
    })

    slideAnimation({
        el: slides[sliderData.slideOutIndex],
        props: {
            transition: "transform 0.4s cubic-bezier(0.74, -0.34, 1, 1.19), opacity 0.4s ease-out",
            transform: `translateX(${sliderData.direction < 0 ? "-100%" : "100%"})`,
            opacity: 0,
        }
    })

    slides[sliderData.slideOutIndex].addEventListener('transitionend', slideIn)
}

function slideIn(e){
    slideAnimation({
        el: slides[sliderData.slideInIndex],
        props:{
            transition: "transform 0.4s ease-out, opacity 0.6s ease-out",
            transform: "translateX(0)",
            opacity: 1,
        }
    })
    slides[sliderData.slideInIndex].classList.add("active");
    slides[sliderData.slideOutIndex].classList.remove("active");
    e.target.removeEventListener("transitionend", slideIn);
    slides[sliderData.slideOutIndex].style.display = "none";
}

function slideAnimation(animationObject){
    for(const prop in animationObject.props){
        animationObject.el.style[prop] = animationObject.props[prop]
    }
}

const header = document.querySelector('header');
const projectBtn = document.querySelector('.project_btn');
const presentationSection = document.querySelector('.presentation');
const sliderSection = document.querySelector('.projects_slider');
const projectId = [...document.querySelectorAll('.project_id')];
const presentationImg = document.querySelector('.presentation_img');
const main = document.querySelector('main');



projectBtn.addEventListener('click', () => {
    if(presentationSection.classList.contains('animGrow')){
        presentationSection.classList.remove('animGrow');
    }
    if(sliderSection.classList.contains('animShrink')){
        sliderSection.classList.remove('animShrink');
    }
    presentationSection.classList.toggle('animShrink');
    header.classList.remove('transitionIn');
    header.classList.add('transitionOut');
    setTimeout(()=> {
        main.style.display = 'none';
        presentationSection.style.display = 'none';
        header.style.display = 'none';
    }, 1400);

    setTimeout(()=> {
        sliderSection.style.display = 'block';
        sliderSection.classList.toggle('animGrow');
    }, 1450);
    
});

const backHomeBtn = document.querySelector('.back_home');

backHomeBtn.addEventListener('click', () => {
    presentationSection.classList.toggle('animShrink');
    sliderSection.classList.toggle('animGrow');
    header.classList.remove('transitionOut');
    sliderSection.classList.toggle('animShrink');
    setTimeout(()=> {
        main.style.display = 'block';
        header.style.display = 'block';
        header.classList.add('headerIn');
        sliderSection.style.display = 'none';
    }, 1400);

    setTimeout(()=> {
        presentationSection.style.display = 'block';
        presentationSection.classList.toggle('animGrow');
    }, 1450);
});

const infoBtn = document.querySelector('.toggle_info');
const logoInfoBtn = document.querySelector('.toggle_info img');

infoBtn.addEventListener('click', () => {
    projectId[sliderData.slideInIndex].classList.toggle('active');

    if(projectId[sliderData.slideInIndex].classList.contains('active')){
        logoInfoBtn.src = 'images/moins.png';
        infoBtn.style.backgroundColor = "#F68E5F";
        directionButtons.forEach(btn => {
            btn.setAttribute('disabled', '');
            btn.style.cursor = 'not-allowed';
        })
    } else {
        logoInfoBtn.src = 'images/plus.png';
        infoBtn.style.backgroundColor = "#BCEBCB";
        directionButtons.forEach(btn => {
            btn.removeAttribute('disabled');
            btn.style.cursor = 'pointer';
        })
    }
})

infoBtn.addEventListener('mouseenter', () => {
    if(logoInfoBtn.src === window.location.origin + '/images/moins.png'){
        infoBtn.style.backgroundColor = 'rgb(255,255,255)';
    }else {
        infoBtn.style.backgroundColor = 'rgba(255,255,255,0.10';
    }
})
infoBtn.addEventListener('mouseleave', () => {
    if(logoInfoBtn.src === window.location.origin + '/images/moins.png'){
        
        console.log('ok');
        infoBtn.style.backgroundColor = "#F68E5F";
    } else {
        infoBtn.style.backgroundColor = '#BCEBCB';
    }
})


const typedArea = document.querySelector('.presentation_txt span');
const messages = ['Works', 'Ideas', 'Projects'];
const typeSpeed = 150;


function type(text, charIndex, arrIndex) {
    if(charIndex < text[arrIndex].length) {
        setTimeout(() => {
            typedArea.innerHTML += text[arrIndex].charAt(charIndex);
            type(text, charIndex + 1 , arrIndex);

        }, 200)
    } else {
        if(arrIndex === text.length - 1) return;
        setTimeout(() => {
            erase(text, text[arrIndex].length, arrIndex);
        },1000);
    }
}

function erase(text, charIndex, arrIndex){
    if(charIndex > 0){
        setTimeout(() => {
            typedArea.textContent = text[arrIndex].substring(0, charIndex - 1);
            erase(text, charIndex - 1, arrIndex);
        }, 150)
    } else {
        setTimeout(() => {
            type(text, 0, arrIndex + 1);
        })

    }
}

setTimeout(() => {
    type(messages, 0, 0);
}, 300);




