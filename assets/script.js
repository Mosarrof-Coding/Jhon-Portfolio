let famoon = document.querySelector('.fa-moon');
let body = document.querySelector('body');

famoon.addEventListener('click', function(){
    body.classList.toggle('dark-theme');
});