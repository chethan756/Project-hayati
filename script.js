/* =====================================
   PROJECT HAYATI - MAIN JS
===================================== */


let currentSlide = 0;

const slides = document.querySelectorAll(".slide");





/* =========================
   INTRO SCREEN
========================= */


window.onload = () => {

    createBlueHearts();

    typeIntro();


    setTimeout(() => {

        document.getElementById("specialIntro").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("specialIntro").style.display = "none";

        },2000);


    },5000);


};





function createBlueHearts(){

    const container =
    document.getElementById("heartContainer");


    setInterval(()=>{


        const heart =
        document.createElement("div");


        heart.className="blue-heart";

        heart.innerHTML="💙";


        heart.style.left =
        Math.random()*100+"%";


        heart.style.animationDuration =
        (2+Math.random()*3)+"s";


        container.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },5000);



    },150);


}





function typeIntro(){


    const text =
    "Happy Girlfriend Day ❤️";


    const element =
    document.getElementById("gfDayText");


    let i=0;


    let timer=setInterval(()=>{


        element.innerHTML += text[i];


        i++;


        if(i>=text.length){

            clearInterval(timer);

        }


    },120);



}







/* =========================
   SLIDE SYSTEM
========================= */


function nextSlide(){


    if(currentSlide < slides.length-1){


        slides[currentSlide]
        .classList.remove("active");


        slides[currentSlide]
        .classList.add("exit");



        currentSlide++;



        slides[currentSlide]
        .classList.add("active");



    }


}







/* =========================
   PROPOSAL YES
========================= */


function yesClicked(){


    bigHeartBurst();



    setTimeout(()=>{


        slides[currentSlide]
        .classList.remove("active");



        currentSlide =
        slides.length-1;



        slides[currentSlide]
        .classList.add("active");



        startLoveProgress();


    },700);



}







/* =========================
   HEART EXPLOSION
========================= */


function bigHeartBurst(){


    for(let i=0;i<40;i++){


        const heart =
        document.createElement("div");


        heart.className="burst-heart";


        heart.innerHTML="❤️";


        heart.style.left="50%";

        heart.style.top="50%";



        heart.style.setProperty(
            "--x",
            (Math.random()*500-250)+"px"
        );


        heart.style.setProperty(
            "--y",
            (Math.random()*500-250)+"px"
        );



        document.body.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },1000);



    }


}








/* =========================
   LOVE BAR
========================= */


function startLoveProgress(){


    let percent=1;


    const bar =
    document.querySelector(".progress");


    const number =
    document.getElementById("infinity");



    let timer=setInterval(()=>{


        percent++;


        if(percent>=100){


            clearInterval(timer);


            number.innerHTML="∞%";


            bar.style.width="100%";


            return;

        }



        bar.style.width=
        percent+"%";


        number.innerHTML=
        percent+"%";



    },40);



}







/* =========================
   RESTART
========================= */


function restart(){


    slides.forEach(slide=>{


        slide.classList.remove("active");

        slide.classList.remove("exit");


    });



    currentSlide=0;


    slides[0]
    .classList.add("active");



    document.querySelector(".progress")
    .style.width="1%";



    document.getElementById("infinity")
    .innerHTML="1%";



}
