const Project1Image = document.querySelector(".image-p1");

Project1Image.addEventListener("click", () => {
  Project1Image.src = "assets/img/loginPage.png";
});

Project1Image.addEventListener("mouseover", () => {
  Project1Image.src = "assets/img/signUpPage.png";
});

Project1Image.addEventListener("mouseleave", () => {
  Project1Image.src = "assets/img/projectHome.png";
});
