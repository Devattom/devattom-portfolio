


const elements = [
    document.querySelector('.second_feature_txt'),
    document.querySelector('.second_feature_img'),
    document.querySelector('.third_feature_txt'),
    document.querySelector('.third_feature_img'),
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

const source = document.querySelector('.overview source');

console.log(source);