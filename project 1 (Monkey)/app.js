//SELECTORS
const eyeclosed= document.querySelector('.eyeclosed');
const earclosed = document.querySelector(".earclosed");
const mouthclosed = document.querySelector(".mouthclosed");

//EVENT LISTENERS
eyeclosed.addEventListener('click', () => {
   /* if(!earclosed.classList.contains('earclosed'))*/ {
        eyeclosed.classList.remove('active');
        earclosed.classList.add('active');
    }
});

earclosed.addEventListener('click',() => {
    earclosed.classList.remove('active');
    mouthclosed.classList.add('active');
});

mouthclosed.addEventListener('click',() => {
    mouthclosed.classList.remove('active');
    eyeclosed.classList.add('active');
});
