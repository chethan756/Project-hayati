alert("Hayati JS is working ❤️");
/* =========================
   PROJECT HAYATI JAVASCRIPT
========================= */


let currentSlide = 0;


const slides = document.querySelectorAll(".slide");




// =========================
// SLIDE SYSTEM
// =========================


function nextSlide(){


    slides[currentSlide].classList.remove("active");


    currentSlide++;


    if(currentSlide >= slides.length){

        currentSlide = slides.length - 1;

    }


    slides[currentSlide].classList.add("active");


}




function restart(){


    slides[currentSlide].classList.remove("active");


    currentSlide = 0;


    slides[currentSlide].classList.add("active");


}






// =========================
// INTRO TYPING
// =========================


const gfText = "Happy GF Day cutie pie 🫣💙";


let gfIndex = 0;



function typeGFDay(){


    const text = document.getElementById("gfDayText");



    if(text && gfIndex < gfText.length){


        text.innerHTML += gfText.charAt(gfIndex);


        gfIndex++;


        setTimeout(typeGFDay,120);


    }


}


typeGFDay();







// Fade intro away


setTimeout(()=>{


    const intro = document.getElementById("specialIntro");


    if(intro){


        intro.style.transition = "opacity 2s ease";


        intro.style.opacity = "0";


        setTimeout(()=>{


            intro.style.display = "none";


        },2000);


    }


},5000);








// =========================
// FIRST SLIDE TYPING
// =========================


const titleText = "Hey Jasmine ❤️";


const messageText = "I made something special for you...";



let titleIndex = 0;

let messageIndex = 0;




function typeTitle(){


    const title = document.getElementById("title");


    if(title && titleIndex < titleText.length){


        title.innerHTML += titleText.charAt(titleIndex);


        titleIndex++;


        setTimeout(typeTitle,120);


    }


}




function typeMessage(){


    const message = document.getElementById("message");


    if(message && messageIndex < messageText.length){


        message.innerHTML += messageText.charAt(messageIndex);


        messageIndex++;


        setTimeout(typeMessage,90);


    }


}



typeTitle();


setTimeout(typeMessage,1500);







// =========================
// PROPOSAL ACCEPT
// =========================


function yesClicked(){


    slides[currentSlide].classList.remove("active");


    currentSlide = slides.length - 1;


    slides[currentSlide].classList.add("active");


    startLoveCounter();


}








// =========================
// LOVE COUNTER
// =========================


function startLoveCounter(){


    let percent = 1;


    const counter = document.getElementById("infinity");

    const bar = document.querySelector(".progress");



    let timer = setInterval(()=>{


        if(percent < 100){


            percent++;


            counter.innerHTML = percent + "% ❤️";


            bar.style.width = percent + "%";


        }

        else{


            counter.innerHTML = "∞% ❤️";


            clearInterval(timer);


        }


    },50);


}







// =========================
// FALLING BLUE HEARTS
// =========================


function createHeart(){


    const container = document.getElementById("heartContainer");


    if(!container) return;



    const heart = document.createElement("div");


    heart.className = "blue-heart";


    heart.innerHTML = "💙";


    heart.style.left = Math.random()*100 + "%";


    heart.style.fontSize = (10 + Math.random()*25)+"px";


    heart.style.animationDuration = (1.5 + Math.random()*2)+"s";



    container.appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },4000);


}




setInterval(()=>{


    for(let i=0;i<50;i++){


        createHeart();


    }


},2000);
