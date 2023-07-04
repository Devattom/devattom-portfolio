


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
