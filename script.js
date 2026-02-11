

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i){
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
}

function next(){
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prev(){
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

/* Auto Slide */
setInterval(next, 2000);
setInterval(prev, 2000)





        const userBtn = document.getElementById("userBtn");
        const popup = document.getElementById("popup");
        const closeBtn = document.getElementById("closeBtn");

        userBtn.onclick = () => {
            popup.classList.add("show");
        }

        closeBtn.onclick = () => {
            popup.classList.remove("show");
        }

        window.onclick = (e) => {
            if (e.target == popup) {
                popup.classList.remove("show");
            }
        }


        let slide = document.querySelectorAll(".slide");
        let inde = 0;

        function showSlides() {
            slide.forEach(s => s.classList.remove("active"));
            inde = (inde + 1) % slide.length;
            slide[inde].classList.add("active");
        }

        setInterval(showSlides, 2000);




//slide collection section



const zenithRail = document.querySelector(".zenith-belt");
const zenithPieces = document.querySelectorAll(".zenith-unit");
const zenithBack = document.querySelector(".zenith-left");
const zenithForward = document.querySelector(".zenith-right");

let zenithPoint = 2;
const zenithTotal = zenithPieces.length;

function zenithRender(){
  zenithPieces.forEach((el,i)=>{
    el.classList.remove("zenith-focus","zenith-dim");

    let diff = i - zenithPoint;

    if(diff === 0){
      el.classList.add("zenith-focus");
    }
    else if(Math.abs(diff) === 1){
      el.classList.add("zenith-dim");
    }
  });

  const travel = zenithPoint * 374;
  zenithRail.style.transform =
    `translateX(calc(50% - ${travel}px))`;
}

/* Circular logic */
function zenithNext(){
  zenithPoint = (zenithPoint + 1) % zenithTotal;
  zenithRender();
}

function zenithPrev(){
  zenithPoint =
    (zenithPoint - 1 + zenithTotal) % zenithTotal;
  zenithRender();
}

zenithForward.onclick = zenithNext;
zenithBack.onclick = zenithPrev;

/* Auto motion */
let zenithAuto = setInterval(zenithNext,4000);

/* Pause hover */
zenithRail.addEventListener("mouseenter",
  ()=>clearInterval(zenithAuto));

zenithRail.addEventListener("mouseleave",()=>{
  zenithAuto=setInterval(zenithNext,4000);
});

/* Drag */
let zenithDrag=0;

zenithRail.addEventListener("pointerdown",
  e=>zenithDrag=e.clientX);

zenithRail.addEventListener("pointerup",e=>{
  if(e.clientX-zenithDrag>70) zenithPrev();
  if(zenithDrag-e.clientX>70) zenithNext();
});

/* Start */
zenithRender();



// Appointment start

const coutureOpen = document.getElementById("coutureTrigger");
const coutureLayer = document.getElementById("coutureWindow");
const coutureClose = document.getElementById("coutureExit");

coutureOpen.onclick = () =>
  coutureLayer.classList.add("active");

coutureClose.onclick = () =>
  coutureLayer.classList.remove("active");

window.onclick = (e)=>{
  if(e.target === coutureLayer){
    coutureLayer.classList.remove("active");
  }
};



const heritageImages = document.querySelectorAll(".heritage-frame");
let heritageStep = 0;

setInterval(()=>{
  heritageImages[heritageStep].classList.remove("active");

  heritageStep = (heritageStep + 1) % heritageImages.length;

  heritageImages[heritageStep].classList.add("active");
},2500);



