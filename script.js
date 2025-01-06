// Не получилось чтоb надпись была на анимации/
gsap.to(".parOne", {
  text:"Hello , my name is Reyhana. <br>I am a  web developer.", 
  duration:4.5,
  repeat:-1,
  repeatDelay:.7,
  ease:"power1.in"
})
gsap.from(".about-img",{
  delay:2,
  duration:4,
  ease:"pover1.in",
  x:400,
  opacity:0

})
gsap.from(".parTwo",{
  delay:2,
  duration:4,
  ease:"pover1.in",
  x:-400,
  opacity:0

})
AOS.init({
  duration: 2000})

// REYHANA

gsap.from(".img",{y:-800,ease:"bounce",duration:4.5,opacity:0,delay:1,stagger:0.6,repeat:3})

// CURSOR

const cursorContainer = document.getElementById("cursor-container");


const circleCount = 20;
const circles = [];


for (let i = 0; i < circleCount; i++) {
  const circle = document.createElement("div");
  circle.classList.add("cursor");
  cursorContainer.appendChild(circle);
  circles.push(circle);
}


let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY; 
});

function animateCircles() {
  let x = mouseX;
  let y = mouseY;

  circles.forEach((circle, index) => {
    setTimeout(() => {
      circle.style.top = `${y}px`; //
      circle.style.left = `${x}px`;
      circle.style.transform = `scale(${1 - index * 0.05})`; 
      circle.style.opacity = `${1 - index * 0.1}`; 
    }, index * 20); 
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

// Эффект "expand" при клике
document.addEventListener("click", () => {
  circles[0].classList.add("expand");
  setTimeout(() => {
    circles[0].classList.remove("expand");
  }, 500);
});



















































































































































































































