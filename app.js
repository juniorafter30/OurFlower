const upperButton = document.querySelector('.upper');
const burger = document.querySelector(".burger");
const nav = document.querySelector('nav');
const span = document.querySelectorAll('span')
const navLinks = nav.querySelectorAll('a')



burger.addEventListener('click', function(){
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');

})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');
    })
})

