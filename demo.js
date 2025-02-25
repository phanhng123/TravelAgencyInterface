const icon = document.querySelector('.icon');

const listItem = document.querySelectorAll(".item");

icon.addEventListener("click", () => {
     listItem.forEach(item => {
         item.classList.toggle("hidden");
     });
});

const login = document.querySelector('.login');
const ul = document.querySelector(".login ul");

login.addEventListener("click", () => {
   ul.classList.toggle("hidden");
});