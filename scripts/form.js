const lastnameInput = document.querySelector('#lastname');
const firstnameInput = document.querySelector('#firstname');
const emailInput = document.querySelector('#email');
const contentInput = document.querySelector('#message');
const form = document.querySelector('form');
const failed = document.querySelector('.failed');


let validationItems = {
    lastname: false,
    firstname: false,
    email: false,
    content: false
}

const regexName = /^[a-zA-Z]+$/;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

lastnameInput.addEventListener('input',(e) => {
    if(regexName.test(e.target.value)){
        lastnameInput.style.borderBottom = '2px solid #60A97C';
        lastnameInput.style.boxShadow = '0 2px 2px rgba(96, 169, 124, 0.50)';
        validationItems.lastname = true;
    } else {
        lastnameInput.style.borderBottom = '2px solid #BB1128';
        lastnameInput.style.boxShadow = '0 2px 2px rgba(187, 17, 40, 0.50)';
        validationItems.lastname = false;
    }
});

lastnameInput.addEventListener('blur',(e) => {
    if(regexName.test(e.target.value)){
        lastnameInput.style.borderBottom = '2px solid #60A97C';
        lastnameInput.style.boxShadow = '0 2px 2px rgba(96, 169, 124, 0.50)';
        validationItems.lastname = true;
    } else {
        lastnameInput.style.borderBottom = '2px solid #BB1128';
        lastnameInput.style.boxShadow = '0 1px 2px rgba(187, 17, 40, 0.50)';
        validationItems.lastname = false;
    }
});


firstnameInput.addEventListener('input',(e) => {
    if(regexName.test(e.target.value)){
        firstnameInput.style.borderBottom = '2px solid #60A97C';
        firstnameInput.style.boxShadow = '0 2px 2px rgba(96, 169, 124, 0.50)';
        validationItems.firstname = true;
    } else {
        firstnameInput.style.borderBottom = '2px solid #BB1128';
        firstnameInput.style.boxShadow = '0 1px 2px rgba(187, 17, 40, 0.50)';
        validationItems.firstname = false;
    }
});
firstnameInput.addEventListener('blur',(e) => {
    if(regexName.test(e.target.value)){
        firstnameInput.style.borderBottom = '2px solid #60A97C';
        firstnameInput.style.boxShadow = '0 2px 2px rgba(96, 169, 124, 0.50)';
        validationItems.firstname = true;
    } else {
        firstnameInput.style.borderBottom = '2px solid #BB1128';
        firstnameInput.style.boxShadow = '0 1px 2px rgba(187, 17, 40, 0.50)';
        validationItems.firstname = false;
    }
});


emailInput.addEventListener('input',(e) => {
    if(regexEmail.test(e.target.value)){
        emailInput.style.borderBottom = '2px solid #60A97C';
        emailInput.style.boxShadow = '0 2px 2px rgba(96, 169, 124, 0.50)';
        validationItems.email = true;
    } else {
        emailInput.style.borderBottom = '2px solid #BB1128';
        emailInput.style.boxShadow = '0 1px 2px rgba(187, 17, 40, 0.50)';
        validationItems.email = false;
    }
});
emailInput.addEventListener('blur',(e) => {
    if(regexEmail.test(e.target.value)){
        emailInput.style.borderBottom = '2px solid #60A97C';
        emailInput.style.boxShadow = '0 2px 2px rgba(96, 169, 124, 0.50)';
        validationItems.email = true;
    } else {
        emailInput.style.borderBottom = '2px solid #BB1128';
        emailInput.style.boxShadow = '0 1px 2px rgba(187, 17, 40, 0.50)';
        validationItems.email = false;
    }
});




contentInput.addEventListener('input', () => {
    if(contentInput.value.length === 0){
        contentInput.style.border = '2px solid #BB1128';
        contentInput.style.boxShadow = '0 0 5px rgba(187, 17, 40, 0.50)';
        validationItems.content = false;
    } else {
        contentInput.style.border = '2px solid #60A97C';
        contentInput.style.boxShadow = '0 0 5px rgba(96, 169, 124, 0.50)';
        validationItems.content = true;
    }
})

contentInput.addEventListener('blur', () => {
    if(contentInput.value.length === 0){
        contentInput.style.border = '2px solid #BB1128';
        contentInput.style.boxShadow = '0 0 5px rgba(187, 17, 40, 0.50)';
        validationItems.content = false;
    } else {
        contentInput.style.border = '2px solid #60A97C';
        contentInput.style.boxShadow = '0 0 5px rgba(96, 169, 124, 0.50)';
        validationItems.content = true;
    }
})



form.addEventListener('submit', (e) => {
    

    const keys = Object.keys(validationItems);
    const failedInput = keys.filter(key => {
        if(!validationItems[key]) {
            return key;
        }
        });
    if(failedInput.length > 0) {
        e.preventDefault();
        failed.style.display = 'block';
        failed.textContent = 'Au moins une des informations rentrées est éronnée. Veuillez vérifier est réessayer.'
    }

    });