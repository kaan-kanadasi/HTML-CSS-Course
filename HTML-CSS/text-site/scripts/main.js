// by using a function called querySelector() to grab a reference to your heading, and then store it in a variable called myHeading
const headerText = document.querySelector("h1");
const header = document.querySelector(".header");
const img = document.getElementById("html-icon");


let index = 0;
const nameArr = ["HTML - Hyper Text Markup Language", "CSS - Cascading Style Sheets", "JS - Java Script"];
const imageArr = ["images/html-icon.png", "images/css-icon.png", "images/js-icon.png"];

headerText.textContent = nameArr[index];
img.src = imageArr[index];

header.addEventListener("click", () => {
    index = (index + 1) % nameArr.length;

    // hide current text and image
    headerText.classList.add('hidden');
    img.classList.add('hidden');
    
    setTimeout(() => {
        headerText.textContent = nameArr[index];
        img.src = imageArr[index];

        headerText.classList.remove('hidden');
        img.classList.remove('hidden');

        if(nameArr[index] === 'JS - Java Script') {
            img.style.width = "100px";
        } else {
            img.style.width = "50px";
        }
    }, 200)

});