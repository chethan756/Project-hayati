let currentSlide = 0;

const slides = document.querySelectorAll(".slide");


// =====================
// SLIDE SYSTEM
// =====================

function nextSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide++;


    if (currentSlide >= slides.length) {

        currentSlide = slides.length - 1;

    }


    slides[currentSlide].classList.add("active");

}




// =====================
// PROPOSAL BUTTONS
// =====================

function yesClicked() {

    slides[currentSlide].classList.remove("active");


    currentSlide = slides.length - 1;


    slides[currentSlide].classList.add("active");


    startLoveCounter();

}




function restart() {

    slides[currentSlide].classList.remove("active");


    currentSlide = 0;


    slides[currentSlide].classList.add("active");

}





// =====================
// FIRST SLIDE TYPING
// =====================

const titleText = "Hey Jasmine ❤️";

const messageText = "I made something special for you... ✨";


let titleIndex = 0;

let messageIndex = 0;



function typeTitle() {


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






// =====================
// LOVE BAR
// =====================

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







// =====================
// GF DAY INTRO SCREEN
// =====================


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







// =====================
// FALLING BLUE HEARTS
// =====================


function createHeart(){


    const container = document.getElementById("heartContainer");


    if(!container) return;



    const heart = document.createElement("div");



    heart.className = "blue-heart";



    heart.innerHTML = "💙";



    heart.style.left = Math.random() * 100 + "%";


    heart.style.fontSize = (10 + Math.random()*25) + "px";


    heart.style.animationDuration = (1.5 + Math.random()*2) + "s";



    container.appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },4000);


}





setInterval(()=>{


    for(let i = 0; i < 50; i++){


        createHeart();


    }


},2000);
function createFloatingHeart() {
    
    
    const celebration = document.getElementById("celebration");
    
    
    if (!celebration) return;
    
    
    const heart = document.createElement("div");
    
    
    heart.className = "floating-heart";
    
    
    heart.innerHTML = "❤️";
    
    
    heart.style.left = Math.random() * 100 + "%";
    
    
    celebration.appendChild(heart);
    
    
    
    setTimeout(() => {
        
        heart.remove();
        
    }, 3000);
    
    
}




setInterval(() => {
    
    
    if (document.getElementById("celebration").classList.contains("active")) {
        
        
        createFloatingHeart();
        
        
    }
    
    
}, 300);

function heartBurst(button) {
    
    const rect = button.getBoundingClientRect();
    
    
    for (let i = 0; i < 15; i++) {
        
        const heart = document.createElement("div");
        
        heart.className = "burst-heart";
        
        heart.innerHTML = "❤️";
        
        
        heart.style.left = rect.left + rect.width / 2 + "px";
        
        heart.style.top = rect.top + rect.height / 2 + "px";
        
        
        heart.style.setProperty("--x",
            (Math.random() * 200 - 100) + "px"
        );
        
        
        heart.style.setProperty("--y",
            (Math.random() * 200 - 100) + "px"
        );
        
        
        document.body.appendChild(heart);
        
        
        setTimeout(() => {
            
            heart.remove();
            
        }, 1000);
        
    }
    
}
document.querySelectorAll(".heart-btn").forEach(button => {
    
    button.addEventListener("click", function() {
        
        createButtonBurst(this);
        
    });
    
});



function createButtonBurst(button) {
    
    const rect = button.getBoundingClientRect();
    
    
    for (let i = 0; i < 12; i++) {
        
        const heart = document.createElement("div");
        
        heart.className = "burst-heart";
        
        heart.innerHTML = "❤️";
        
        
        heart.style.left = rect.left + rect.width / 2 + "px";
        
        heart.style.top = rect.top + rect.height / 2 + "px";
        
        
        heart.style.setProperty("--x",
            (Math.random() * 200 - 100) + "px"
        );
        
        
        heart.style.setProperty("--y",
            (Math.random() * 200 - 100) + "px"
        );
        
        
        document.body.appendChild(heart);
        
        
        setTimeout(() => {
            
            heart.remove();
            
        }, 1000);
        
    }
    
}
function bigHeartBurst() {
    
    
    for (let i = 0; i < 35; i++) {
        
        
        const heart = document.createElement("div");
        
        
        heart.className = "burst-heart";
        
        
        heart.innerHTML = "💖";
        
        
        heart.style.left = "50%";
        
        heart.style.top = "50%";
        
        
        heart.style.fontSize =
            (20 + Math.random() * 30) + "px";
        
        
        heart.style.setProperty("--x",
            
            (Math.random() * 400 - 200) + "px"
            
        );
        
        
        heart.style.setProperty("--y",
            
            (Math.random() * 400 - 200) + "px"
            
        );
        
        
        document.body.appendChild(heart);
        
        
        
        setTimeout(() => {
            
            heart.remove();
            
        }, 1200);
        
        
    }
    
}
