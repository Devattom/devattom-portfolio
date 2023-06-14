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
        infoBtn.style.backgroundColor = "#F68E5F"
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



const presentationContainer = document.querySelector('.presentation_txt');
const text1 = document.querySelector('.presentation_txt1');
const text2 = document.querySelector('.presentation_txt2');
const text3 = document.querySelector('.presentation_txt3');
const text4 = document.querySelector('.presentation_txt4');
const spanContainer = document.querySelector('.span');
const linkContainer = document.querySelector('.presentation_contact_link');

let sentence1 = 'Hi !';
let sentence2 = 'My name is Thomas and I am an enthusiastic web developer.';
let sentence3 = 'Here are some of my ';
let span = 'Projects';
let sentence4 = 'Feel free to ';
let link = 'Contact me !';



function typePresentationText(text, index, container){
    if(index < text.length) {
            let speed = Math.trunc(Math.random() * 200) + 40;
            setTimeout(() => {
                container.innerHTML += text[index];
                typePresentationText(text, index + 1, container)
            }, speed);     
    }
}


function typePresentationSpan(text, index, container){
    if(index < text.length) {
        let speed = Math.trunc(Math.random() * 200) + 40;
        setTimeout(() => {
            container.innerHTML += `<span>${span[index]}</span>`;
            typePresentationSpan(text, index + 1, container)
        }, speed);
    }
}

function typePresentationLink(text, index, container){
    if(index < text.length) {
        let speed = Math.trunc(Math.random() * 200) + 40;
        setTimeout(() => {
            container.innerHTML += `<a href='#'>${text[index]}</a>`;
            typePresentationLink(text, index + 1, container)
        }, speed)
    }
}


setTimeout(() => {
    typePresentationText(sentence1, 0 , text1);
}, 300);




setTimeout(() => {
    typePresentationText(sentence2, 0, text2);
}, 1500);
    

const thirdType = setTimeout(() => {
    typePresentationText(sentence3, 0, text3);
}, 10500);

const spanType = setTimeout(() => {
    typePresentationSpan(span, 0 ,text3)
}, 16250);



const fourthType = setTimeout(() => {
    typePresentationText(sentence4, 0, text4);
}, 18500);

const linkType = setTimeout(() => {
    typePresentationLink(link, 0, text4);
    projectBtn.removeAttribute('disabled');
}, 21000);





