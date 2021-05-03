const hov = document.querySelector('#circle');

hov.addEventListener('mouseenter', () => {
    if(!hov.classList.contains('hover')){
        hov.classList.add('hover');
    }
});

hov.addEventListener('mouseleave', () => {
    if(hov.classList.contains('hover')){
        hov.classList.remove('hover');
    }
});
