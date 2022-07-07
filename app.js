let track = document.querySelector('.father');
let buts = document.querySelectorAll('.slidenext');
let con1 = document.querySelectorAll('.con_original');
let con2 = document.querySelectorAll('.con_copy');
let slidesArray1 = [];
let slidesArray2 = [];
let step = 0;
let step2 = 0;
let offset = 0;


let header = document.querySelector('header');
let mother = document.querySelector('.menu');
let mother2 = document.querySelector('.menu_bottom');
let conelud = document.querySelectorAll('.conelud');

for(let i = 0; i < 3; i++){
slidesArray1[i] = con1[i];
slidesArray2[i] = con2[i];
con1[i].remove();
con2[i].remove();
};

function draw(){
    for(let i = 0; i < 3; i++){
        track.appendChild(slidesArray1[i]);
    };
    for(let i = 0; i < 3; i++){
        track.appendChild(slidesArray2[i]);
    };
}

draw();draw();


function left(){
    let btn2= document.querySelectorAll('.con');
    step += 1;
    step2 += 1;
    if(step2 == 2){setTimeout(() => {step2 = -1;},1500)}
    if (step == 3) {
        setTimeout(() => {
            for (let i = 0; i < 3; i++) {
                btn2[i].remove();
            }
            offset = 0;
            track.style.left = 0 + '%';
            track.style.transition = 0 + 's';
            step = 0;
            draw();
        }, 1500);
    }
    offset -= 100;
    track.style.left = offset + '%';
    track.style.transition = 1.5 + 's';
    for (let i = 0; i < buts.length; i++) {
        buts[i].classList.remove('slidenext_active');
        buts[step2].classList.add('slidenext_active');
        buts[i].classList.add('move');
    }
    setTimeout(() => {
        for (let i = 0; i < buts.length; i++) {
            buts[i].classList.remove('move');
        }
    }, 1500);
}

let int = setInterval(left,3000);

document.querySelector('.btn').addEventListener('click',function(e){
    if(e.target.closest('.slidenext')){
     clearInterval(int); int = setInterval(left,3000);
    if(e.target.closest('.slidenext:first-child')){
        track.style.left = 0 + 'px';
        offset = 0; step = 0; step2 = 0;
    };
    if(e.target.closest('.slidenext:nth-child(2)')){
        offset = 0; step = 0; step2 = 0;
        left();
    };
    if(e.target.closest('.slidenext:nth-child(3)')){
        offset = -100; step = 1; step2 = 1;
        left();
    };
    for (let i = 0; i < buts.length; i++) {
        buts[i].classList.remove('slidenext_active');
        e.target.classList.add('slidenext_active');
    }
}
})

function showTime(e){
    const yoyo = e.target.getAttribute('data-goto');
    const ate = document.querySelector(yoyo).getBoundingClientRect().top + scrollY - parseInt(getComputedStyle(header).height);
    window.scrollTo({
        top: ate,
        behavior: "smooth"
    });
}

mother.addEventListener('click', function (e) {
    if(e.target.closest('.conelud')){
        for (let i = 0; i < conelud.length; i++) {
            conelud[i].classList.remove('conelud_active');
            function conel(){
            e.target.classList.add('conelud_active');
            }
            conel();
        }
        setTimeout(() => {
            e.target.classList.remove('conelud_active')
        }, 800);
        showTime(e);
    }
})

mother2.addEventListener('click', function(e){
    showTime(e);
})

