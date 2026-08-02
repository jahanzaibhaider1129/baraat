/*==================================================
    ROYAL WEDDING INVITATION
==================================================*/
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.classList.add("hide");

    setTimeout(() => {

        loader.remove();

    }, 800);

});
document.addEventListener("DOMContentLoaded", () => {
  
  const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

document.body.classList.add("lock");
document.addEventListener("touchmove", function(e){
    if(document.body.classList.contains("lock")){
        e.preventDefault();
    }
}, { passive:false });

const tapText = document.getElementById("tapText");

const gate = document.getElementById("gate");
const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");
const particles = document.getElementById("particles");

let opened = false;


/*==================================================
    GOLD PARTICLES
==================================================*/

function createParticle(){

    if(!particles) return;

    const p = document.createElement("div");

    p.className = "particle";

    p.style.left = Math.random()*100 + "vw";
    p.style.top = "100vh";

    p.style.animationDuration =
        (5 + Math.random()*4) + "s";

    particles.appendChild(p);

    setTimeout(()=>{
        p.remove();
    },9000);

}

setInterval(createParticle,180);

/*==================================================
    GATE OPEN
==================================================*/

if(gate){

    gate.addEventListener("click",openGate);

}

function openGate(){

    if(opened) return;

    opened = true;
    // Gate cinematic zoom before opening
    gate.style.transition = "transform 1s ease";
    gate.style.transform = "scale(1.40)";

    setTimeout(()=>{

        gate.classList.add("open");

    },1000);
    
    bgMusic.play().catch(()=>{});
musicBtn.innerHTML="◖♫◗";
musicPlaying = true;
    
    if (tapText) {
    tapText.style.transition = "opacity .4s ease";
    tapText.style.opacity = "0";

    setTimeout(() => {
        tapText.style.display = "none";
    }, 400);
}

    gate.style.pointerEvents = "none";

    /* Change background */

    setTimeout(()=>{

        bg1.style.opacity="0";
        bg2.style.opacity="1";

    },2000);

    /* Slow camera zoom */

    setTimeout(()=>{

        bg2.style.transform="scale(1.20)";

    },3800);

    /* Remove intro */

    setTimeout(()=>{

        gate.style.display = "none";

        mainContent.style.display = "block";
mainContent.style.visibility = "visible";
mainContent.style.opacity = "1";
mainContent.style.pointerEvents = "auto";
setTimeout(() => {

    resizeFoil();

}, 300);

        document.body.classList.remove("lock");
        document.body.style.overflowY="auto";
        document.documentElement.style.overflowY="auto";
const scrollHint = document.getElementById("scrollHint");

if(scrollHint){

    scrollHint.classList.add("show");

}
        

    },6000);

}

/*==================================================
    LUXURY SCRATCH CARD
==================================================*/

let scratchCompleted = false;
const foilCanvas = document.getElementById("foilCanvas");

const foilText = document.querySelector(".foilText");
const couple = document.getElementById("coupleBehind");
const fxCanvas = document.getElementById("fxCanvas");

if (foilCanvas) {

const ctx = foilCanvas.getContext("2d");

let drawing = false;
let revealed = false;
let shimmer = -250;

function resizeFoil(){

    foilCanvas.width = foilCanvas.offsetWidth;
    foilCanvas.height = foilCanvas.offsetHeight;

    createFoil();

}

window.addEventListener("resize", resizeFoil);
function createFoil(){

    const w = foilCanvas.width;
    const h = foilCanvas.height;
  

    ctx.globalCompositeOperation="source-over";

    ctx.clearRect(0,0,w,h);
    

shimmer += 3;

if(shimmer > w + 250){

    shimmer = -250;

}

    const g = ctx.createLinearGradient(0,0,w,h);

    g.addColorStop(0,"#7d540d");
    g.addColorStop(.20,"#c5942d");
    g.addColorStop(.35,"#fff3ba");
    g.addColorStop(.50,"#d8a52d");
    g.addColorStop(.70,"#fff9e4");
    g.addColorStop(1,"#7d540d");

    ctx.fillStyle=g;
    ctx.fillRect(0,0,w,h);
    
        /* Moving Gold Shine */

const shine = ctx.createLinearGradient(
    shimmer,
    0,
    shimmer + 180,
    h
);

shine.addColorStop(0,"rgba(255,255,255,0)");
shine.addColorStop(.5,"rgba(255,255,255,.40)");
shine.addColorStop(1,"rgba(255,255,255,0)");

ctx.fillStyle = shine;
ctx.fillRect(0,0,w,h);

    for(let i=0;i<180;i++){

        ctx.strokeStyle=`rgba(255,255,255,${Math.random()*0.04})`;

        ctx.beginPath();

        const y=Math.random()*h;

        ctx.moveTo(0,y);

        ctx.lineTo(w,y);

        ctx.stroke();

    }

    /*=========================
ROYAL DOUBLE BORDER
=========================*/

ctx.save();

ctx.shadowBlur = 18;
ctx.shadowColor = "#ffd86b";

ctx.lineWidth = 8;
ctx.strokeStyle = "#fff4c7";
ctx.strokeRect(8,8,w-16,h-16);

ctx.shadowBlur = 0;

ctx.lineWidth = 3;
ctx.strokeStyle = "#a06b12";
ctx.strokeRect(18,18,w-36,h-36);

ctx.lineWidth = 1;
ctx.strokeStyle = "rgba(255,255,255,.45)";
ctx.strokeRect(28,28,w-56,h-56);

ctx.restore();

/*=========================
GOLD DUST
=========================*/

for(let i=0;i<180;i++){

    ctx.fillStyle =
    `rgba(255,245,180,${Math.random()*0.22})`;

    ctx.beginPath();

    ctx.arc(
        Math.random()*w,
        Math.random()*h,
        Math.random()*1.6,
        0,
        Math.PI*2
    );

    ctx.fill();

}
drawCorner(34,34);
drawCorner(w-34,34);
drawCorner(34,h-34);
drawCorner(w-34,h-34);

}

function drawCorner(x,y){

    ctx.save();

    ctx.translate(x,y);

    ctx.strokeStyle="#ffe8a2";
    ctx.lineWidth=2;

    ctx.beginPath();

    ctx.arc(0,0,10,0,Math.PI*2);

    ctx.stroke();

    for(let i=0;i<8;i++){

        ctx.rotate(Math.PI/4);

        ctx.beginPath();

        ctx.moveTo(0,-16);
        ctx.lineTo(0,-26);

        ctx.stroke();

    }

    ctx.beginPath();

    ctx.fillStyle="#fff8db";

    ctx.arc(0,0,4,0,Math.PI*2);

    ctx.fill();

    ctx.restore();

}

/*==================================================
    REAL SCRATCH EFFECT
==================================================*/

function getPos(e){

    const rect = foilCanvas.getBoundingClientRect();

    if(e.touches){

        return{
            x:e.touches[0].clientX-rect.left,
            y:e.touches[0].clientY-rect.top
        };

    }

    return{
        x:e.clientX-rect.left,
        y:e.clientY-rect.top
    };

}

function scratch(x,y){

    ctx.globalCompositeOperation = "destination-out";

    for(let i=0;i<4;i++){

        const r = 18 + Math.random()*18;

        const ox = (Math.random()-0.5)*18;
        const oy = (Math.random()-0.5)*18;

        const g = ctx.createRadialGradient(
            x+ox,y+oy,0,
            x+ox,y+oy,r
        );

        g.addColorStop(0,"rgba(0,0,0,1)");
        g.addColorStop(.7,"rgba(0,0,0,.9)");
        g.addColorStop(1,"rgba(0,0,0,0)");

        ctx.fillStyle = g;

        ctx.beginPath();
        ctx.arc(x+ox,y+oy,r,0,Math.PI*2);
        ctx.fill();

    }

    createScratchSpark(x,y);

}

function createScratchSpark(x,y){

    const s=document.createElement("div");

    s.style.position="absolute";
    s.style.left=x+"px";
    s.style.top=y+"px";

    s.style.width="5px";
    s.style.height="5px";

    s.style.borderRadius="50%";

    s.style.background="gold";

    s.style.boxShadow="0 0 10px gold";

    s.style.pointerEvents="none";

    s.style.zIndex="999";

    document.getElementById("foilLayer").appendChild(s);

    const dx=(Math.random()-.5)*40;
    const dy=(Math.random()-.5)*40;

    s.animate([
        {
            transform:"translate(0,0) scale(1)",
            opacity:1
        },
        {
            transform:`translate(${dx}px,${dy}px) scale(0)`,
            opacity:0
        }
    ],{
        duration:500,
        easing:"ease-out"
    });

    setTimeout(()=>s.remove(),500);

}

function start(e){

    drawing=true;

    const p=getPos(e);

    scratch(p.x,p.y);

    e.preventDefault();

}

function move(e){

    if(!drawing) return;

    const p=getPos(e);

    scratch(p.x,p.y);

    checkReveal();

    e.preventDefault();

}

function end(){

    drawing=false;

}

/* Mouse */

foilCanvas.addEventListener("mousedown",start);
window.addEventListener("mousemove",move);
window.addEventListener("mouseup",end);

/* Touch */

foilCanvas.addEventListener("touchstart",start,{passive:false});
foilCanvas.addEventListener("touchmove",move,{passive:false});
window.addEventListener("touchend",end);

/*==================================================
    CHECK SCRATCH %
==================================================*/

function checkReveal(){

    if(revealed) return;

    

const img = ctx.getImageData(
    0,
    0,
    foilCanvas.width,
    foilCanvas.height
);

    const pixels=img.data;

    let cleared=0;

    for(let i=3;i<pixels.length;i+=4){

        if(pixels[i]<20){

            cleared++;

        }

    }

    const percent=
    cleared/
    (foilCanvas.width*foilCanvas.height);

    if(percent>0.50){

        revealCard();

    }

}

/*==================================================
    REVEAL
==================================================*/

function revealCard(){

    revealed=true;
    scratchCompleted = true;

    foilCanvas.style.transition="opacity .8s";

    foilCanvas.style.opacity="0";

    if(foilText){

        foilText.style.opacity="0";

        setTimeout(()=>{

            foilText.style.display="none";

        },800);

    }

    if(couple){

        couple.style.transition="opacity 1.5s";

        couple.style.opacity=".38";

    }

    launchFireworks();

}

/*==================================================
    FIREWORKS
==================================================*/

if(fxCanvas){

const fx=fxCanvas.getContext("2d");

function resizeFX(){

    fxCanvas.width=fxCanvas.offsetWidth;
    fxCanvas.height=fxCanvas.offsetHeight;

}

resizeFX();

window.addEventListener("resize",resizeFX);

function launchFireworks(){

    const sparks=[];

    for(let i=0;i<180;i++){

        sparks.push({

            x:fxCanvas.width/2,

            y:fxCanvas.height/2,

            dx:(Math.random()-.5)*14,

            dy:(Math.random()-.5)*14,

            r:2+Math.random()*3,

            a:1

        });

    }

    function animate(){

        fx.clearRect(
            0,
            0,
            fxCanvas.width,
            fxCanvas.height
        );

        sparks.forEach(s=>{

            s.x+=s.dx;

            s.y+=s.dy;

            s.dy+=0.05;

            s.a-=0.009;

            fx.beginPath();

            fx.arc(
                s.x,
                s.y,
                s.r,
                0,
                Math.PI*2
            );

            fx.fillStyle=
            `rgba(255,215,0,${s.a})`;

            fx.shadowBlur=15;
            fx.shadowColor="gold";

            fx.fill();

        });

        if(sparks[0].a>0){

            requestAnimationFrame(animate);

        }else{

            fx.clearRect(
                0,
                0,
                fxCanvas.width,
                fxCanvas.height
            );

        }

    }

    animate();

}

}

} 
/*==================================================
    FADE UP ANIMATION
==================================================*/

const fadeItems = document.querySelectorAll(".fadeUp");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{
  


if(entry.isIntersecting){


entry.target.classList.add("show");

}

});

},{
threshold:0.2
});


fadeItems.forEach(item=>observer.observe(item));

/*==================================================
    LOCK SCROLL UNTIL SCRATCH COMPLETE
==================================================*/

window.addEventListener("scroll", function(){

    if(scratchCompleted) return;

    const countdown = document.getElementById("countdownSection");

const top = countdown.getBoundingClientRect().top;

if (top < window.innerHeight * 0.6) {

    window.scrollTo({
        top: document.getElementById("saveDate").offsetTop,
        behavior: "auto"
    });

}

});
// END SCRATCH MODULE

/*==================================================
    LIVE COUNTDOWN
==================================================*/

const weddingDate = new Date(
"September 20, 2026 08:00:00"
).getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

if(
daysEl &&
hoursEl &&
minutesEl &&
secondsEl
){

function updateCountdown(){

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

    document.getElementById("countdown").innerHTML = `
        <h2 style="
            grid-column:1/-1;
            color:#FFD86B;
            font-size:40px;
            text-align:center;
            font-family:'Great Vibes',cursive;
        ">
            Special Day Has Arrived ❤️
        </h2>
    `;

    return;
}

    const days = Math.floor(
        distance / (1000*60*60*24)
    );

    const hours = Math.floor(
        (distance % (1000*60*60*24))
        /(1000*60*60)
    );

    const minutes = Math.floor(
        (distance % (1000*60*60))
        /(1000*60)
    );

    const seconds = Math.floor(
        (distance % (1000*60))
        /1000
    );

    daysEl.textContent =
        String(days).padStart(2,"0");

    hoursEl.textContent =
        String(hours).padStart(2,"0");

    minutesEl.textContent =
        String(minutes).padStart(2,"0");

    secondsEl.textContent =
        String(seconds).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);

}

/*==================================================
    COUNTDOWN PREMIUM EFFECTS
==================================================*/

const boxes = document.querySelectorAll(".timeBox");

if(boxes.length){

/*=========================
FADE IN ON SCROLL
=========================*/

const countdownobserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate(

[
{
opacity:0,
transform:"translateY(120px) scale(.85)"
},
{
opacity:1,
transform:"translateY(0) scale(1)"
}
],
{
duration:2200,
easing:"cubic-bezier(.22,.61,.36,1)",
fill:"forwards"
}

);

countdownobserver.unobserve(entry.target);

}

});

},{
threshold:.2
});

boxes.forEach(box=>{

box.style.opacity="0";

countdownobserver.observe(box);

});

/*=========================
NUMBER POP EVERY SECOND
=========================*/

const nums=document.querySelectorAll(".timeBox span");

let old=[];

nums.forEach((n,i)=>{

old[i]=n.textContent;

});

setInterval(()=>{

nums.forEach((n,i)=>{

if(old[i]!==n.textContent){

old[i]=n.textContent;

n.animate(
[
{
transform:"scale(.75)",
opacity:.5
},
{
transform:"scale(1.18)",
opacity:1
},
{
transform:"scale(1)"
}
],
{
duration:450,
easing:"ease-out"
}
);

}

});

},200);

/*=========================
FLOATING GOLD SPARKLES
=========================*/

const section=document.getElementById("countdownSection");

function sparkle(){

if(!section) return;

const s=document.createElement("div");

s.style.position="absolute";

s.style.left=Math.random()*100+"%";

s.style.top=60+Math.random()*35+"%";

s.style.width="4px";

s.style.height="4px";

s.style.borderRadius="50%";

s.style.background="#FFD700";

s.style.boxShadow=
"0 0 12px gold";

s.style.pointerEvents="none";

s.style.zIndex="2";

section.appendChild(s);

const dx=(Math.random()-.5)*80;
const dy=-60-Math.random()*60;

s.animate(

[
{
transform:"translate(0,0) scale(.5)",
opacity:0
},
{
opacity:1
},
{
transform:`translate(${dx}px,${dy}px) scale(1.5)`,
opacity:0
}
],
{
duration:3000,
easing:"linear"
}

);

setTimeout(()=>{

s.remove();

},3000);

}

setInterval(sparkle,250);

} 

/*==================================================
    RSVP TO WHATSAPP
==================================================*/

const sendBtn = document.getElementById("sendRSVP");

if(sendBtn){

sendBtn.addEventListener("click",()=>{

const name =
document.getElementById("guestName").value.trim();

const phone =
document.getElementById("guestPhone").value.trim();

const guests =
document.getElementById("guestCount").value;

const attendance =
document.getElementById("attendance").value;

const message =
document.getElementById("guestMessage").value.trim();

if(name==="" || phone===""){

alert("Please enter your Name and Phone Number.");

return;

}

const text =

`🌸 *Wedding RSVP* 🌸

👤 Name:
${name}

📱 Phone:
${phone}

👨‍👩‍👧 Guests:
${guests}

💍 Response:
${attendance}

💌 Message:
${message || "No message"}

Thank you ❤️`;

const whatsapp =
`https://wa.me/923310442798?text=${encodeURIComponent(text)}`;

const popup =
document.getElementById("rsvpPopup");

if(popup){
 popup.classList.add("show");
}

setTimeout(()=>{

popup.classList.remove("show");

window.open(
whatsapp,
"_blank"
);

},2000);

});

}

/*=====================================
BACKGROUND MUSIC
=====================================*/

// Start music after gate opens
function startBackgroundMusic() {

    if (musicPlaying) return;

    bgMusic.volume = 0.45;

    bgMusic.play().then(() => {

        musicPlaying = true;
        musicBtn.innerHTML="◖♫◗";

    }).catch(() => {});

}


// Toggle music
if (musicBtn) {

    musicBtn.addEventListener("click", () => {

        if(bgMusic.paused){

            bgMusic.play();

            musicPlaying = true;

            musicBtn.innerHTML="◖♫◗";

        }else{

            bgMusic.pause();

            musicPlaying = false;

            musicBtn.innerHTML="◖×◗";

        }

    });

}

/*==========================
 DEVICE DETECTION
==========================*/

function deviceMode(){

let width = window.innerWidth;

if(width <= 480){

document.body.classList.add("mobile");

}

else if(width <= 768){

document.body.classList.add("tablet");

}

else{

document.body.classList.add("laptop");

}

}


deviceMode();


window.addEventListener("resize",()=>{

document.body.classList.remove(
"mobile",
"tablet",
"laptop"
);

deviceMode();

});

}); // DOMContentLoaded