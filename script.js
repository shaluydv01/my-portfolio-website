/*------------------Typing Text----------------------*/

function changeAboutMeText() {
  const aboutMeTexts = [
    "Tech Enthusiast",
    "Data Scientist",
    "Full Stack Web Developer",
  ];
  const typingSpeed = 100; //milliseconds per character
  const eraseSpeed = 50; //milliseconds per character during erasing
  const pauseTime = 1500; //milliseconds to pause between each text change
  const aboutMeElement = document.querySelector(".about-me");

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = aboutMeTexts[textIndex];
    /*Typing*/
    if (!isDeleting && charIndex < currentText.length) {
      aboutMeElement.textContent += currentText[charIndex];
      charIndex++;
      setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
    /*Erasing*/
      aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, eraseSpeed);
    } else {
    /*Switching the deleting or typing process*/
      isDeleting = !isDeleting;
      if (!isDeleting) {
        textIndex = (textIndex + 1) % aboutMeTexts.length;
      }
      setTimeout(type, pauseTime);
    }
  }
  type();
}

//Call function to add stunning modification
changeAboutMeText();

/*-----------------------------Light/Dark Mode----------------*/

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;
  const navbar = document.querySelector("nav")

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const currentMode = body.classList.contains("dark-mode") ? "Dark" : "Light";
    darkModeToggle.querySelector("i").classList.toggle("fa-sun"); //Change icon
    darkModeToggle.querySelector("i").classList.toggle("fa-moon"); //Change icon
    darkModeToggle.querySelector("i").classList.toggle("light-mode"); //Change icon color
  });
});

/*---------------------Progress Bar-----------------*/
const progressDiv = document.querySelector("#progress-div");

const progressBars = document.querySelectorAll(".progress-bar");

function showProgress(){
  progressBars.forEach(progressBar => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  })
}

function hideProgress(){
  progressBars.forEach(p => {
    p.style.opacity = 0;
    p.style.width = 0;
  })
}

window.addEventListener('scroll', () => {
  const sectionPos = progressDiv.getBoundingClientRect().top;
  const screenPos = window.innerHeight;

  if(sectionPos < screenPos){
    showProgress();
  }else{
    hideProgress();
  }
})

/*---------------------------Navbar color mode change--------------*/

const nav = document.querySelector("nav");
const body = document.querySelector("body");

body.addEventListener("click", ()=>{
  nav.style.backgroundColor = "";
})

window.onscroll = function(){
  nav.style.backgroundColor = "#b3b3ff";
}

window.onscrollend = function(){
  nav.style.backgroundColor = "#f2f2f2"
}


/*-----------------------Hamburger open close-----------------*/

const hamburger = document.querySelector("#hamburger");
const navContent = document.querySelector("#nav-content");
const close = document.querySelector("#close");

hamburger.addEventListener("click", ()=>{
  navContent.style.display = "flex";
  close.style.display = "flex";
  hamburger.style.display = "none"
})

close.addEventListener("click", ()=>{
  navContent.style.display = "none";
  hamburger.style.display = "flex";
})
