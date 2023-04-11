const signinBtn = document.querySelector('.signinBtn');
const signinBtnLink = document.querySelector('.signinBtn-link');
const signupBtnLink = document.querySelector('.signupBtn-link');
const wrapper = document.querySelector('.wrapper');


signupBtnLink.addEventListener('click', ()=>{
    wrapper.classList.toggle('active');
});

signinBtnLink.addEventListener('click', ()=>{
    wrapper.classList.toggle('active');
});

signinBtn.addEventListener('click', ()=>{
    wrapper.classList.toggle('active');
});
