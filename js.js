const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-elements");
const html = document.querySelector("html");

hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    html.classList.toggle("active");
})

console.log(hamburger , menu);


const menuLinks = document.querySelectorAll(".nav-elements li");

menuLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default full page reload

    // Handle navigation here (optional)
    const targetSection = link.getAttribute("href");
    if (targetSection) {
      const sectionElement = document.querySelector(targetSection);
      if (sectionElement) {
        // Smooth scrolling (optional):
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Close the menu if desired (optional):
    hamburger.classList.remove("active");
    menu.classList.remove("active");
    html.classList.remove("active");
  });
});