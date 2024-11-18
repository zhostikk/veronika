document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("btn");
    const heart = document.getElementById("heart");
    button.addEventListener("click", (event)=>{
        heart.classList.toggle("active");
    });
    heart.addEventListener("click", (event)=>{
        heart.classList.toggle("active");
    });
});
