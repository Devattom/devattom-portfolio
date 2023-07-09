


const elements = [
    ...document.querySelectorAll('.features_txt'),
    ...document.querySelectorAll('.features_img'),
    ...document.querySelectorAll('.links a'),
]

if (window.innerWidth > 750 ){
    const intersectionObserver = new IntersectionObserver(handleIntersect, {rootMargin: '-60px'});
    
    elements.forEach(el => intersectionObserver.observe(el));

    function handleIntersect(entries){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('active');
            }
        })
    }
}

const backBtn = document.querySelector('.btn-back');
const arrow = document.querySelector('.arrow_up');

backBtn.addEventListener('mouseenter', ()=> {
    arrow.classList.add('animate')
})

backBtn.addEventListener('mouseleave', ()=> {
    arrow.classList.remove('animate');
})

